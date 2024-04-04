import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [
    {
        id: 1,
        username: 'Camila',
        password: 'admin'
    }
];

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos.
//  Debe retornar el ID del par de credenciales creado.

const credentialService = {
  
    createCredential: (username: string, password: string): number => {
      const newCredential: ICredential = {
        id: credentials.length + 1,
        username: username,
        password: password,
      };
      credentials.push(newCredential);
      return newCredential.id;
    },

    //funcion validadora
    
    validateCredentials: (username: string, password: string): number | null => {
        const credential = credentials.find(cred => cred.username === username);
        if (credential && credential.password === password) {
          return credential.id;
        } else {
          return null;
        }
      },
    };

    export default credentialService;

    