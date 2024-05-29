import { createPool } from 'mysql2/promise';
//
let envFileName = (process.env.NODE_ENV === "development") ? ".env.dev" : `.env`;
import dotenv from "dotenv"
const envs = dotenv.config({ path: envFileName }).parsed;

const pool = createPool({
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    database: envs.DB_NAME,
    user: envs.DB_USER,
    password: envs.DB_PASSWORD,
    connectionLimit: 3,
    timezone: '+00:00'
});

export const query = async (query, params = []) => {
    try {
        const [rows] = await pool.query(query, params);
        return { Success: true, Data: rows, Msg: null };
    } catch (e) {
        return { Success: false, Data: null, Msg: e };
    }
};