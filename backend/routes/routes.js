// import express
import express from "express";
 
// import function from controller
import { addBride } from "../controllers/addBride.js";
import { addEvent } from "../controllers/addEvent.js";
import { addEnvelope } from "../controllers/addEnvelope.js";
import { addInvite } from "../controllers/addInvite.js";
 
// init express router
const router = express.Router();
 
// Create New Product
router.post('/addBride', addBride);
router.post('/addEvent', addEvent);
router.post('/addEnvelope', addEnvelope);
router.post('/addInvite', addInvite);
 
// export default router
export default router;