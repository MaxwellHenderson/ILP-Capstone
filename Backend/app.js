let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
app.use(express.static(process.cwd()));

let url="mongodb://localhost:27017/meanstack";

app.get('/', (req,res) => {
    res.sendFile(__dirname+"/index.html")
   });

const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}

app.use(bodyParser.urlencoded({extended:true}));   
app.use(bodyParser.json());                         
app.use(cors()); 

mongoose.connect(url,mongooseDbOption);
mongoose.connection;
var Admin=require("./router/admin.router.js");
var User=require("./router/user.router.js");
var Order=require("./router/order.router.js");
var Employee=require("./router/employee.router.js");