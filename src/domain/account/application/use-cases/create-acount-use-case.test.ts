import { UserAccountModel } from "../../enterprise/models/user-account";
import { v4 as uuidv4 } from 'uuid';
import { ROLE } from "../enums/role-enum"
import type { UserRepository } from "../repository/user-repository";
import { CreateAccountUseCase } from "./create-account-use-case"
import { EncryptService } from "../../../../core/encripty/encrypt-service";


const mockUserRepository: UserRepository = {
  findUnique: jest.fn(),
  create:jest.fn()
};
describe('Create account use case (Units)',()=>{
  let createAccountUseCase: CreateAccountUseCase;


  beforeEach(() => {
    createAccountUseCase = new CreateAccountUseCase(mockUserRepository, new EncryptService());
    jest.clearAllMocks();
  });

  
  it('Success case',async ()=>{
    (mockUserRepository.findUnique as jest.Mock).mockResolvedValue(null)
    const mockUser = new UserAccountModel(
      "John Doe",
      "john.doe@example.com",
      "securepassword123",
      ROLE.admin,
      uuidv4()
    );
    (mockUserRepository.create as jest.Mock).mockResolvedValue(mockUser);
    const sut = await createAccountUseCase.execute({email:'john.doe@example.com',name:'John Doe',password:'securepassword123',role:ROLE.admin})
    expect(sut.res).toHaveProperty('id')
  })
  it('Fail case',async ()=>{
    const mockUser = new UserAccountModel(
      "John Doe",
      "john.doe@example.com",
      "securepassword123",
      ROLE.admin,
      uuidv4()
    );
    (mockUserRepository.findUnique as jest.Mock).mockResolvedValue(mockUser);

    await expect(createAccountUseCase.execute({
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: 'securepassword123',
      role: ROLE.admin,
    })).rejects.toThrow('User already exists');
  })
})