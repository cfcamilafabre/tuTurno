import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import credentialService from "./credentialService";

const users: IUser[] = []

const userService = {

  getAllUsers: async ()=> {
   const users = await AppDataSource.getRepository(User).find();
   return users; 
  },

  getUserById: async (id: number): Promise<IUser> => {
    const foundUser: IUser | undefined = users.find(user => user.id === id);
    if (!foundUser) throw Error('No se encontro ningun usuario con ese ID')
    return foundUser;
  },

  createUser: async (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): Promise<IUser> => {
    // Crear las credenciales
    const credentialsId = await credentialService.createCredential(username, password);

    // Crear el usuario con las credenciales
    const newUser: IUser = {
      id: users.length + 1,
      name: name,
      email: email,
      birthdate: birthdate,
      nDni: nDni,
      credentialsId: credentialsId,
    };

    // Agregar el nuevo usuario al arreglo
    users.push(newUser);

    // Retornar el nuevo usuario creado
    return newUser;
  },
}

export default userService;
