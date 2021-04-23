let express = require("express");
let router = express.Router();
let TicketController=require("../controller/ticket.controller.js");

router.get("",TicketController.viewTickets);
router.post("",TicketController.addTicket);

module.exports=router;