import type { UserAccountModel } from "../../enterprise/models/user-account";

export interface UserRepository {
  findUnique(where:Partial<UserAccountModel>):Promise<UserAccountModel|null> 
  create(data:UserAccountModel):Promise<UserAccountModel> 
}