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
    if (!_.has(body, 'name') || !body.name) {
        return createError({ statusCode: 422, message: '缺少必要欄位' });
    }
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
        if (!cres.Success) return createError({ statusCode: 422, message: cres.Msg });
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
        //DERICT SQL
        {
            // let sql = `INSERT INTO ${tablename} (id, createTime, updateTime, name, isAlive) VALUES ('${data.id}', '${data.createTime}', '${data.updateTime}', '${data.name}', '${data.isAlive}')`;
            // let res = await query(sql);
            // if (!res.Success) return createError({ statusCode: 422, message: res.Msg });
        }
        //GENERAL FUNCTION
        {
            let res = await insert_or_update(data, tablename);
            if (!res.Success) return createError({ statusCode: 422, message: res.Msg });
        }
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
    //LOG
    {

    }
    return { data: data };
}
export const updateGame = async (event) => {
    //
    const body = await readBody(event);
    if (!body) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!_.has(body, 'id') || !body.id) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    //定義參數
    let id = body.id;
    //
    let tablename = 'GameList';
    let data = null;
    //確認資料存在
    {
        let sql = `SELECT * FROM ${tablename} WHERE id = '${id}' LIMIT 1`;
        //
        let sres = await query(sql);
        if (!sres.Success) return createError({ statusCode: 422, message: sres.Msg });
        if (!_.isArray(sres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
        if (!sres.Data.length) return createError({ statusCode: 422, message: '查無資料' });
        //
        data = sres.Data[0];
    }
    //更新資料
    let updatadata = { ...body };
    {
        updatadata.id = data.id;
        updatadata.updateTime = moment().utcOffset(0).format('YYYYMMDDHHmmss.sss');
        if (_.has(updatadata, 'createTime') && !!updatadata.createTime) {
            delete updatadata['createTime']
        }
        let addRes = await insert_or_update(updatadata, tablename);
        if (!addRes.Success) { return createError({ statusCode: 422, message: addRes.Msg }); }
    }
    return updatadata;
}
export const deleteGame = async (event) => {
    //
    const body = await readBody(event);
    if (!body) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!_.has(body, 'id') || !body.id) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    //定義參數
    let id = body.id;
    //
    let tablename = 'GameList';
    //執行刪除
    let updatadata = {};
    {
        updatadata.id = id;
        updatadata.updateTime = moment().utcOffset(0).format('YYYYMMDDHHmmss.sss');
        updatadata.isAlive = '-1';
        //
        let addRes = await insert_or_update(updatadata, tablename);
        if (!addRes.Success) { return createError({ statusCode: 422, message: addRes.Msg }); };
    }
    return updatadata;
}

//
const insert_or_update = async (item, tableName) => {
    if (!tableName) return { Success: false, Data: null, Msg: '缺少tableName' };
    if (!_.has(item, 'id')) return { Success: false, Data: null, Msg: '缺少KEY' };
    let itemKeys = _.keys(item);
    //NOT EXIST CREATE
    let notExistCreate = async () => {
        let getType = (key) => {
            if (key.toUpperCase().includes('TIME') || key.toUpperCase().includes('DATE')) return 'DATETIME(3)';
            return 'VARCHAR(255)';
        }
        let value = [];
        _.map(itemKeys, key => {
            value.push(`${key} ${getType(key)} `);
        });
        let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${value.join(', ')}); `
        let qres = await query(sql);
        if (!qres.Success) return qres;
        return qres;
    }
    let qres = await notExistCreate();
    if (!qres.Success) return qres;
    //CHECK EXIST
    let chechDataExist = async () => {
        let sql = `SELECT count(*) FROM ${tableName} WHERE id = '${item.id}'`;
        let qres = await query(sql);
        if (!qres.Success) return qres;
        if (!_.isArray(qres.Data)) return { Success: false, Data: null, Msg: '無法辨識的資料庫回傳值' }
        if (!qres.Data.length) return { Success: false, Data: null, Msg: '無法辨識的資料庫回傳值' }
        let data = qres.Data[0];
        if (!_.has(data, 'count(*)')) return { Success: false, Data: null, Msg: '無法辨識的資料庫回傳值' }
        let count = parseInt(data['count(*)']);
        if (_.isNaN(count)) return { Success: false, Data: null, Msg: '無法辨識的資料庫回傳值' }
        return { Success: true, Data: count > 0, Msg: null };
    }
    let c_res = await chechDataExist();
    if (!c_res.Success) return c_res;
    //INSERT
    if (!c_res.Data) {
        let values = [];
        let params = [];
        _.map(itemKeys, key => {
            values.push('?');
            params.push(item[key]);
        });
        let sql = `insert into ${tableName} (${itemKeys.join(', ')}) values(${values.join(', ')})`;
        let insertRes = await query(sql, params);
        if (!insertRes.Success) return insertRes;
    }
    //UPDATE
    let values = [];
    let params = [];
    _.map(itemKeys, key => {
        if (key == 'id') return;
        values.push(`${key} = ?`);
        params.push(item[key]);
    });
    let sql = `UPDATE ${tableName} SET ${values.join(', ')} WHERE id = '${item.id}'`;
    let update = await query(sql, params);
    if (!update.Success) return update;
    return { Success: true, Data: null, Msg: null }
}