import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [];
let credentialId: number = 1;

// Funcion creadora de credencial
// Debe retornar el ID del par de credenciales creado.

const credentialService = {

  createCredential: async (username: string, password: string): Promise<number> => {
    const newCredential: ICredential = {
      id: credentialId++,
      username: username,
      password: password,
    };
    credentials.push(newCredential);
    return newCredential.id;
  },

  //funcion validadora

  validateCredentials: async (username: string, password: string): Promise<number> => {
    const foundCredential = credentials.find(cred => cred.username === username);
    if (foundCredential && foundCredential.password === password) {
      return foundCredential.id;
    } else {
      throw Error("Credenciales incorrectas")
    }
  },
};

export default credentialService;

