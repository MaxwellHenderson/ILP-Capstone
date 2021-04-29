export class User {
    constructor(
      public _id: number,
      public userName: string,
      public userLastName: string,
      public userDob: Date,
      public userAddress: string,
      public userEmail: string,
      public userPassword: string
    ) {}
  }