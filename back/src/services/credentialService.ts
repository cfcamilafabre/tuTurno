import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";


// Funcion creadora de credencial
// Debe retornar el ID del par de credenciales creado.

const credentialService = {

  createCredential: async (username: string, password: string)=> {
    const credential = await AppDataSource.getRepository(Credential).create({username, password})
    const result = await AppDataSource.getRepository(Credential).save(credential)
    return credential.id;
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

