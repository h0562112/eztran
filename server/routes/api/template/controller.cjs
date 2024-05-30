import { query } from "../../../db/dbclient.cjs"
import { getQuery, readBody, createError } from "h3"

import _ from "lodash"; //常用工具库
import { v4 as uuidv4 } from "uuid"; //生成uuid
import moment from 'moment'; //時間處理

export const test = async (event) => {
    return 'hello world haha!';
}
//
export const createGame = async (event) => {
    const body = await readBody(event);
    if (!_.has(body, 'name') || !body.name) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    //定義參數
    let name = body.name;
    //
    let tablename = 'GameList';
    //檢核資料是否重複
    {
        let checkExist = async () => {
            let gres = await query(`SELECT * FROM ${tablename} WHERE name = '${name}' AND isAlive = '1' LIMIT 1`);
            if (!gres.Success) return createError({ statusCode: 422, message: gres.Msg });
            if (!_.isArray(gres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
            let check = !!gres.Data.length;
            return { Success: true, Data: check, Msg: null }
        }
        let cres = await checkExist();
        if (`${cres.Data}` == 'true') return createError({ statusCode: 422, message: '已有相同名稱資料' });
    }
    //新增資料
    let dataId = uuidv4();
    let createTime = moment().utcOffset(0).format('YYYYMMDDHHmmss.sss');
    {
        let data = {
            id: dataId, //資料id
            createTime: createTime, //建立時間
            updateTime: createTime, //更新時間
            //
            name: body.name, //遊戲名稱
            //        
            isAlive: '1' //資料鎖定、凍結、假刪除
        }
        let sql = `INSERT INTO ${tablename} (id, createTime, updateTime, name, isAlive) VALUES ('${data.id}', '${data.createTime}', '${data.updateTime}', '${data.name}', '${data.isAlive}')`;
        let res = await query(sql);
        if (!res.Success) return createError({ statusCode: 422, message: res.Msg });
    }
    return 'createGame'
}
export const getGameDeatail = async (event) => {
    const params = getQuery(event);
    if (!params) { return createError({ statusCode: 422, message: '缺少必要欄位' }); };
    if (!_.has(params, 'id') || !params.id) { return createError({ statusCode: 422, message: '缺少必要欄位' }); };
    //定義參數
    let id = params.id;
    //
    let tablename = 'GameList';
    let data = null;
    //取得資料
    {
        let sql = `SELECT * FROM ${tablename} WHERE id = '${id}' AND isAlive = '1' LIMIT 1`;
        let res = await query(sql);
        if (!res.Success) return createError({ statusCode: 422, message: res.Msg });
        if (!_.isArray(res.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
        if (!res.Data.length) return createError({ statusCode: 422, message: '查無資料' });
        data = res.Data[0];
    }
    //
    return { data: data };
}