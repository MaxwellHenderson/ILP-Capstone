let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let TicketSchema = mongoose.Schema({
    _id:Number,
    userId:Number,
    ticketDesc:String
})

let TicketModel = mongoose.model("",TicketSchema,"Ticket");

module.exports = TicketModel