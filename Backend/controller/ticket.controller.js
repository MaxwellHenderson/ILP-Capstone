let TicketModel=require("../model/ticket.model.js");


let addTicket=(req,res)=>{
    let ticket=new TicketModel({
        _id:req.body.eid,
        empId:req.body.empId,
        userId:req.body.userId,
        ticketDesc:req.body.ticketDesc
    });
    ticket.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
        }else {
            res.send("Record didn't store ");
        }
    })
}

let viewTickets=(req,res)=>{
    TicketModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

module.exports={addTicket,viewTickets};