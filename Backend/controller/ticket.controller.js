let TicketModel = require("../model/ticket.model.js");

let addTicket = (req, res) => {
  let ticket = new TicketModel({
    _id: req.body.eid,
    empId: req.body.empId,
    userId: req.body.userId,
    ticketDesc: req.body.ticketDesc,
  });
  ticket.save((err, result) => {
    if (!err) {
      res.send("Record stored successfully ");
    } else {
      res.send("Record didn't store ");
    }
  });
};

let viewTickets = (req, res) => {
  TicketModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

let submitLockedAccountTicket = (req, res) => {
  TicketModel.countDocuments({}, (err, count) => {
    if (!err) {
      console.log("Document count");
      console.log(count);

      let ticket = new TicketModel({
        _id: count + 1,
        userId: req.body.userId,
        ticketDesc: req.body.ticketDesc,
      });
      ticket.save((err, result) => {
        if (!err) {
          res.send("Ticket submitted succesfully");
        } else {
          res.send("Ticket did not submit properly " + err);
        }
      });
    } else {
      res.send("Error in count");
    }
  });
};

module.exports = { addTicket, viewTickets, submitLockedAccountTicket };
