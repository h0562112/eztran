import { query } from "../../../db/dbclient.cjs"
import { getQuery, readBody, createError } from "h3"

export const test = async (event) => {
    return 'hello world!';
}