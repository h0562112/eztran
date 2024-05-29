import { createRouter, defineEventHandler, useBase } from 'h3'
import * as controller from "./controller.cjs"
const router = createRouter();
router.get('/test', defineEventHandler(controller.test));


export default useBase('/api/template/', router.handler)