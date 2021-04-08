export class User {
    constructor(
      public _id?: string,
      public username?: string,
      public password?: string,
      public email?: string,
      public type?: string,
      public displayName?: string,
      public role?: string,
    ) {
      return {_id,username,password,email,type,displayName,role}
    }
  }
  