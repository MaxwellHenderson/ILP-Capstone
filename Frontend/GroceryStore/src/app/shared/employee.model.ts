export class Employee {
    constructor(
      public _id:Number,
      public userName:String,
      public userLastName:String,
      public userEmail:String,
      public userPassword:String,
      public loginCount:Number
    ) {}
  }