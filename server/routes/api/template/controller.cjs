import { query } from "../../../db/dbclient.cjs"
import { getQuery, readBody, createError } from "h3"
import MD5 from "crypto-js/md5.js"; //231213 要加.js 不然load出問題

import _ from "lodash"; //常用工具库
import { v4 as uuidv4 } from "uuid"; //生成uuid
import moment from 'moment'; //時間處理

export const test = async (event) => {
    let testObj = null;

    return 'hello world haha!';
}
//
export const getGameList = async (event) => {
    //
    const params = getQuery(event);
    if (!params) { return createError({ statusCode: 422, message: '缺少必要欄位' }); };
    //INPUT
    let tablename = 'estateList';
    let searchText = null;
    let sortor = {
        key: 'createTime',
        desc: true
    }
    let paginationData = {
        page: 1,
        pageCount: 20
    }
    //OUTPUT
    let totalPage = 1;
    let totalCount = 0;
    let filtedList = [];

    //
    let choosedcity = null;
    if (_.has(params, 'choosedcity') && !!params.choosedcity) {
        let parseData = () => {
            if (_.isArray(params.choosedcity)) {
                return choosedcity = params.choosedcity;
            }
            //
            try {
                let temp = JSON.parse(params.choosedcity);
                if (_.isArray(temp)) {
                    return choosedcity = temp;
                }
            } catch { }
        }
        parseData();
    }
    //解析Query需求
    {
        let parseQuery = () => {
            if (params.searchText) {
                searchText = params.searchText;
                searchText = searchText.replace(/'/g, "''");
                searchText = searchText.replace(/"/g, '""');
            }
            if (params.sortor) {
                let q_sortor = null;
                try {
                    q_sortor = JSON.parse(params.sortor);
                } catch { }
                if (_.has(q_sortor, 'key')) {
                    sortor.key = q_sortor.key;
                }
                if (_.has(q_sortor, 'desc')) {
                    sortor.desc = `${q_sortor.desc}` == 'true';
                }
            }
            if (params.paginationData) {
                let q_paginationData = null;
                try {
                    q_paginationData = JSON.parse(params.paginationData);
                } catch { }
                if (_.has(q_paginationData, 'page')) {
                    let page = parseInt(q_paginationData.page);
                    if (!_.isNaN(page)) {
                        paginationData.page = page;
                    }
                }
                if (_.has(q_paginationData, 'pageCount')) {
                    let pageCount = parseInt(q_paginationData.pageCount);
                    if (!_.isNaN(pageCount)) {
                        paginationData.pageCount = pageCount;
                    }
                }
            }
        }
        parseQuery();
    }
    //取得資料
    {
        //取得用戶參與案件
        let caseList = [];
        {
            let sql = `SELECT * FROM caseAdmins WHERE adminId = '${account_auth?.userId}'`;
            let sres = await query(sql);
            if (!sres.Success) return createError({ statusCode: 422, message: sres.Msg });
            if (!_.isArray(sres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
            caseList = sres.Data;

        }
        let sqlScript = (func = null) => {
            //COL 欄位
            let listValue = `*`;
            //
            let baseQuery = `
                SELECT ${func == 'count(*)' ? 'count(*)' : listValue}
                FROM ${tablename}`;
            //搜尋條件
            let searchQuery = `
                WHERE 
                (
                    casename like '%${searchText}%'
                )
                AND isAlive = '1'
                `;//
            if (!searchText) {
                searchQuery = `WHERE isAlive = '1'`;//
            }
            //
            if (_.isArray(choosedcity) && !!choosedcity.length) {
                let tagList = [];
                _.map(choosedcity, item => {
                    tagList.push(`address like '%${item}%'`)
                });
                searchQuery = `${searchQuery}${!!searchQuery ? ' AND ' : 'WHERE '} (${tagList.join('OR ')})`;
            }
            //排序條件
            let getOrder = () => {
                if (!_.has(sortor, 'key')) return '';
                if (sortor.key == 'createTime') {
                    return `ORDER BY createTime ${sortor.desc ? 'DESC' : ''}`
                }
                return '';
            }
            let orderQuery = getOrder();
            //分頁
            let getPageOuery = () => {
                if (!_.has(paginationData, 'pageCount')) return '';
                if (!_.has(paginationData, 'page')) return '';
                //
                let pageCount = parseInt(paginationData.pageCount);
                let page = parseInt(paginationData.page);
                if (_.isNaN(pageCount) || _.isNaN(page)) return '';
                //
                let offset = (page - 1) * pageCount;
                if (offset < 0) offset = 0;
                //
                return `LIMIT ${pageCount} OFFSET ${offset}`
            }
            let pageQuery = getPageOuery();

            //取得資料總量
            if (func == 'count(*)') return [baseQuery, searchQuery].join(" ");
            //取得資料詳細
            return [baseQuery, searchQuery, orderQuery, pageQuery].join(" ");
        }
        //GET TOTAL PAGE
        {
            let getTotalCount = async () => {
                let sres = await query(sqlScript('count(*)'));
                if (!sres.Success) return 0;
                if (!_.isArray(sres.Data) || !sres.Data.length) return 0;
                if (!_.has(sres.Data[0], 'count(*)')) return 0;
                let data = sres.Data[0];
                let count = parseInt(data['count(*)']);
                if (_.isNaN(count)) return 0;
                return count;
            }
            totalCount = await getTotalCount();
            //
            let getTotalPage = (totalCount) => {
                if (paginationData.pageCount < 1) return 1;
                //
                let totalPage = 0;
                let total = totalCount;
                while (total > 0) {
                    totalPage++;
                    total -= paginationData.pageCount;
                    if (totalPage > 10000) {
                        break;
                    }
                }
                return totalPage;
            }
            //
            totalPage = getTotalPage(totalCount);
        }
        //Get DATALIST
        {
            let sres = await query(sqlScript());

            if (!sres.Success) return createError({ statusCode: 422, message: sres.Msg });
            if (!_.isArray(sres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
            filtedList = sres.Data;
        }
    }

    return { datas: filtedList, totalPage: totalPage, totalCount: totalCount }
}
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
    let func = async () => {
        //
        const body = await readBody(event);
        if (!body) { return { Success: false, Data: null, Msg: '缺少必要欄位' } }
        if (!_.has(body, 'id') || !body.id) { return { Success: false, Data: null, Msg: '缺少必要欄位' } }
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
            if (!sres.Success) return sres;
            if (!_.isArray(sres.Data)) return { Success: false, Data: null, Msg: '無法辨識的資料庫回傳值' };
            if (!sres.Data.length) return { Success: false, Data: null, Msg: '查無資料' };
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
            if (!addRes.Success) addRes;
        }
        //CHANGE LOG
        {
            let cres = await changeLog(event, 'updateGame');
            if (!cres.Success) cres;
        }
        return { Success: false, Data: updatadata, Msg: null };
    }
    let res = await func();
    if (!res.Success) {
        //ERROR LOG
        let cres = await errorLog(event, res, 'updateGame');
        if (!cres.Success) { return createError({ statusCode: 422, message: cres.Msg }); };
        return createError({ statusCode: 422, message: res.Msg, stack: null });
    }
    return res.Data;
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
//backadmin
export const loginSystem = async (event) => {
    const body = await readBody(event);
    if (!body) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!body.account) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!body.pw) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    //
    let account = body.account;
    let pw = body.pw;
    //資料檢核
    let data = null;
    {
        let gres = await query(`SELECT * FROM backadminList WHERE isAlive = '1' AND account = '${account}' AND pw = '${pw}' LIMIT 1`);
        if (!gres.Success) return createError({ statusCode: 422, message: gres.Msg });
        if (!_.isArray(gres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
        if (!gres.Data.length) return createError({ statusCode: 422, message: '查無此帳號，請確保帳號密碼無誤' });
        data = gres.Data[0];
    }
    //登入
    let lastloginTime = moment().utcOffset(0).format('YYYYMMDDHHmmss.sss');
    let accessToken = MD5(`${lastloginTime}-${data.account}`).toString().toUpperCase();
    {
        let new_data = {};
        new_data.id = data.id;
        new_data.lastloginTime = lastloginTime;
        new_data.accessToken = accessToken;
        //
        let updateRes = await insert_or_update(new_data, 'backadminList');
        if (!updateRes.Success) { return createError({ statusCode: 422, message: updateRes.Msg }); }
    }
    return { account: account, accessToken: accessToken }
}
export const checkLoginToken = async (event) => {
    const body = await readBody(event);
    if (!body) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!body.login_account) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!body.login_accessToken) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    let data = null;
    //可重複登入
    {
        let sql = `SELECT * FROM backadminList WHERE isAlive = '1' AND account = '${body.login_account}' LIMIT 1`;
        //不可重複登入
        {
            sql = `SELECT * FROM backadminList WHERE isAlive = '1' AND account = '${body.login_account}' AND accessToken = '${body.login_accessToken}' LIMIT 1`
        }
        let gres = await query(sql);
        if (!gres.Success) return createError({ statusCode: 422, message: gres.Msg });
        if (!_.isArray(gres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
        if (!gres.Data.length) return createError({ statusCode: 422, message: '登入資訊有誤' });
        data = gres.Data[0];
    }
    return;
}
export const addbackadmin = async (event) => {
    const body = await readBody(event);
    if (!body) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!_.has(body, 'name') || !body.name) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!_.has(body, 'account') || !body.account) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    if (!_.has(body, 'pw') || !body.pw) { return createError({ statusCode: 422, message: '缺少必要欄位' }); }
    let tablename = 'backadminList';
    let account = body.account;
    //檢核資料
    {
        let checkExist = async () => {
            let gres = await query(`SELECT * FROM ${tablename} WHERE account = '${account}' AND isAlive = '1' LIMIT 1`);
            if (!gres.Success) return createError({ statusCode: 422, message: gres.Msg });
            if (!_.isArray(gres.Data)) return createError({ statusCode: 422, message: '無法辨識的資料庫回傳值' });
            let check = !!gres.Data.length;
            return { Success: true, Data: check, Msg: null }
        }
        let cres = await checkExist();
        if (`${cres.Data}` == 'true') return createError({ statusCode: 422, message: '已有相同名稱資料' });
    }
    //新增資料
    let data = null;
    {
        let dataId = uuidv4();
        let createTime = moment().utcOffset(0).format('YYYYMMDDHHmmss.sss');
        data = {
            id: dataId,
            //
            createTime: createTime,
            updateTime: createTime,
            lastloginTime: null,
            accessToken: null,
            //
            account: body.account,
            pw: body.pw,
            //
            name: body.account,
            describ: body.describ,
            //        
            isAlive: '1' //資料鎖定與否
        }
        let addRes = await insert_or_update(data, tablename);
        if (!addRes.Success) return createError({ statusCode: 422, message: addRes.Msg });
    }
    //changeLog
    {
        let cres = await changeLog(event, 'addbackadmin');
        if (!cres.Success) { return createError({ statusCode: 422, message: cres.Msg }); }
    }
    //
    return;
}
//changeLog
const changeLog = async (event, action = null) => {
    const body = await readBody(event);
    // if (!body) { return { Success: false, Data: null, Msg: '缺少權限紀錄欄位' } }
    // if (!_.has(body, 'account') || !body.account) { return { Success: false, Data: null, Msg: '缺少權限紀錄欄位' } }
    let tablename = 'changeLog';
    let account = body.account;
    //
    if (_.has(body, 'content') && !!body.content && body.content.length > (1000 * 1)) {
        delete body['content'];
    }
    if (_.has(body, 'description') && !!body.description && body.description.length > (1000 * 1)) {
        delete body['description'];
    }
    //
    {
        let ip = event.req.headers['x-forwarded-for'] || event.req.socket.remoteAddress
        let path = !!event?.path ? event.path : null;
        let data = {
            id: uuidv4(),
            createTime: moment().utcOffset(0).format('YYYYMMDDHHmmss.sss'),
            dataid: !!body?.id ? body.id : null,
            //
            ip: ip,
            account: account,
            controller: path,
            req: JSON.stringify(body),
            action: !!action ? action : null
        }
        let addRes = await insert_or_update(data, tablename);
        if (!addRes.Success) { return addRes; }
    }
    return { Success: true, Data: null, Msg: null }
}
//errorLog
const errorLog = async (event, res, action = null) => {
    const body = await readBody(event);
    // if (!body) { return { Success: false, Data: null, Msg: '缺少權限紀錄欄位' } }
    let tablename = 'errorLog';
    //
    if (_.has(body, 'content') && !!body.content && body.content.length > (1000 * 1)) {
        delete body['content'];
    }
    if (_.has(body, 'description') && !!body.description && body.description.length > (1000 * 1)) {
        delete body['description'];
    }
    //
    {
        let ip = event.req.headers['x-forwarded-for'] || event.req.socket.remoteAddress
        let path = !!event?.path ? event.path : null;
        let data = {
            id: uuidv4(),
            createTime: moment().utcOffset(0).format('YYYYMMDDHHmmss.sss'),
            dataid: !!body?.line_uid ? body.line_uid : null,
            //
            ip: ip,
            controller: path,
            req: JSON.stringify(body),
            res: JSON.stringify(res),
            action: !!action ? action : null
        }
        let addRes = await insert_or_update(data, tablename);
        console.log('addRes: ', addRes);
        if (!addRes.Success) { return addRes; }
    }
    return { Success: true, Data: null, Msg: null }
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
        return { Success: true, Data: null, Msg: null };
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