import bcrypt from 'bcrypt';
import { UserAccountModel } from "../../enterprise/models/user-account"
import type { CreateAccountDTO } from "../dto/create-account-dto"
import type { UserRepository } from "../repository/user-repository"
import type { Encrypt } from '../../../../core/encripty/encrypt';

export class CreateAccountUseCase{
  constructor(
    private readonly UserRepository:UserRepository,
    private readonly encrypt:Encrypt,
  ){}
  public execute = async ({name,email,password,role}:CreateAccountDTO):Promise<{
    res:UserAccountModel
  }> => {
    const isAccountExists = await this.UserRepository.findUnique({email})
    if(isAccountExists){
      throw new Error('User already exists')
    }
    const hashedPassword = await this.encrypt.hash(password)

    const userAccount = new UserAccountModel(name,email,hashedPassword,role)
    const create = await this.UserRepository.create(userAccount)
    return {res:create}
  }
}




