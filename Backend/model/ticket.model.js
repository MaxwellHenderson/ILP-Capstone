let mongoose = require("mongoose");
mongoose.Promise = global.Promise; // creating reference.

let TicketSchema = mongoose.Schema({
  _id: Number,
  empId: Number,
  userId: Number,
  ticketDesc: String,
});

let TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;
