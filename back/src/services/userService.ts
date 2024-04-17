import { AppDataSource } from "../config/data-source";
import IUserDto from "../dtos/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Request } from "express";
import credentialService from "./credentialService";
import credentialDto from "../dtos/credentialDto";


const userService = {

  getAllUsers: async (): Promise<User[]> => {
    const users: User[] = await AppDataSource.getRepository(User).find({
      relations: {
        credential: true
      }
    });
    return users;
  },

  getUserByIdService: async (id: number): Promise<User | null> => {
    const user = await AppDataSource.getRepository(User).findOneBy({
      id
    });
    if (!user) throw Error("Usuario no encontrado");
    return user;
  },

  createUser: async (userData: IUserDto) => {
    const user = await AppDataSource.getRepository(User).create(userData)
    const result = await AppDataSource.getRepository(User).save(user);

    const credentialData: credentialDto = {
      username: userData.username,
      password: userData.password,
      userId: user.id,
    };

    const credentialId = await credentialService.createCredential(credentialData);
    user.credential = credentialId;
    await AppDataSource.getRepository(User).save(user);

    if (result) {
      console.log("Usuario guardado correctamente");
    }

    return user;
  },

  loginUser: async (username: string, password: string) => {
    const user = await AppDataSource.getRepository(User).findOne({
      where: {
        credential: {
          username: username
        }
      },
      relations: ['credential']
    });
    if (user && user.credential.password === password) {
      return user;
    } else {
      return null;
    }
  }
}
export default userService;