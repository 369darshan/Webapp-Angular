export interface User {
  //     id?: string;
  //     name: String;
  //     email: String;
  //     password: String;
    id?: string;
    name: string;
    email: string;
    password: string;
    admin: {
      type: Boolean;
      default: false
    }
  }
  // const userSchema = new Schema({
  //   name: String,
  //   email: String,
  //   password: String,
  //   admin: {
  //     type: Boolean,
  //     default: false
  //   }
  // })
