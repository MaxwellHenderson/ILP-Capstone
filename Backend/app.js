let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
app.use(express.static(process.cwd()));



app.get('/', (req,res) => {
    res.sendFile(__dirname+"/index.html")
   });

let url="mongodb://localhost:27017/GroceryApplication";


app.use(bodyParser.urlencoded({extended:true}));     
app.use(bodyParser.json());                         
app.use(cors());
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}



mongoose.connect(url,mongooseDbOption);
mongoose.connection;
var Admin=require("./router/admin.router.js");
var User=require("./router/user.router.js");
var Order=require("./router/order.router.js");
var Employee=require("./router/employee.router.js");
app.use("/user",User)

app.listen(9090,()=>console.log("Server running on port number 9090"));
