let express = require("express");
let router = express.Router();
let TicketController = require("../controller/ticket.controller.js");

router.get("/getTicket", TicketController.viewTickets);
router.post("/addTicket", TicketController.addTicket);
router.post(
  "/submitLockedAccountTicket",
  TicketController.submitLockedAccountTicket
);

module.exports = router;
