import type { ROLE } from "../../application/enums/role-enum";
import bcrypt from 'bcrypt';

export class UserAccountModel{
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get role(): ROLE {
    return this._role;
  }
  
      public get email(): string {
        return this._email;
      }
      public get name(): string {
        return this._name;
      }
      public get id(): string | undefined {
        return this._id;
      }
      constructor(
        private _name: string,
        private _email: string,
        _password: string,
        private _role: ROLE,
        private _id?: string
      ){
        this.password =_password
      }
      private _password!: string;
}