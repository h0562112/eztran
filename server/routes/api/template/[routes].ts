import { createRouter, defineEventHandler, useBase } from 'h3'
import * as controller from "./controller.cjs"

const router = createRouter();
router.get('/test', defineEventHandler(controller.test));

//Game
router.post('/createGame', defineEventHandler(controller.createGame));
router.get('/getGameDeatail', defineEventHandler(controller.getGameDeatail));
router.patch('/updateGame', defineEventHandler(controller.updateGame));
router.delete('/deleteGame', defineEventHandler(controller.deleteGame));
router.get('/getGameList', defineEventHandler(controller.getGameList));
//backadmin
router.post('/loginSystem', defineEventHandler(controller.loginSystem));
router.post('/checkLoginToken', defineEventHandler(controller.checkLoginToken));
router.post('/addbackadmin', defineEventHandler(controller.addbackadmin));
//backadmin
// create game => 
export default useBase('/api/template/', router.handler);

