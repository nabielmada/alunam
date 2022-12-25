// import express
import express from "express";
 
// import function from controller
import { addBride } from "../controllers/addBride.js";
import { addEvent } from "../controllers/addEvent.js";
import { addEnvelope } from "../controllers/addEnvelope.js";
import { addInviteTo } from "../controllers/addInviteTo.js";
import { addInvite } from "../controllers/addInvite.js";
import { createInvoice } from "../controllers/createInvoice.js";
import { getInvoice } from "../controllers/getInvoice.js";
import { getUndangan } from "../controllers/getUndangan.js";
 
// init express router
const router = express.Router();
 
// Create New Product
router.post('/addBride', addBride);
router.post('/addEvent', addEvent);
router.post('/addEnvelope', addEnvelope);
router.post('/addInviteTo', addInviteTo);
router.post('/addInvite', addInvite);
router.post('/createInvoice', createInvoice);
router.get('/getInvoice/:no_invoice', getInvoice);
router.get('/getUndangan/:url_params', getUndangan);
 
// export default router
export default router;