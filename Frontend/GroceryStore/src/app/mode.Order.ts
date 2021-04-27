export class Order {
    constructor(public _id:Number,public totalPrice:Number,public orderStatus:string){}
}
export class OrderReport {
    constructor(public userName:String,public orderDate:Date,public orderStatus:string,public totalPrice:Number){}
}