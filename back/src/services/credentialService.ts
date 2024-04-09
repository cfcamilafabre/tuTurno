import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import credentialDto from "../dtos/credentialDto";


// Funcion creadora de credencial
// Debe retornar el ID del par de credenciales creado.

const credentialService = {

  createCredential: async (credential: credentialDto)=> {
    const newCredential = await AppDataSource.getRepository(Credential).create(credential)
    await AppDataSource.getRepository(Credential).save(newCredential);

    const user = await AppDataSource.getRepository(User).findOneBy({
      id: credential.userId
    })
    
    if (user) {
      user.credential = newCredential
      await AppDataSource.getRepository(User).save(user)
    } else {
      throw Error("Usuario inexistente")
    }
    return newCredential;
  },
  
  //funcion validadora

  validateCredentials: async (username: string, password: string): Promise<number> => {
    const foundCredential = await AppDataSource.getRepository(Credential).findOne({
      where: {
      username,
      password
      }
    })
    if (foundCredential && foundCredential.username === username && foundCredential.password === password) {
      return foundCredential.id;
    } else {
      throw Error("Credenciales incorrectas")
    }
  },
};

export default credentialService;

