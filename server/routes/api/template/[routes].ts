import { createRouter, defineEventHandler, useBase } from 'h3'
import * as controller from "./controller.cjs"
const router = createRouter();
router.get('/test', defineEventHandler(controller.test));

//Game
router.post('/createGame', defineEventHandler(controller.createGame));
router.get('/getGameDeatail', defineEventHandler(controller.getGameDeatail));

//
// create game => 

export default useBase('/api/template/', router.handler);

