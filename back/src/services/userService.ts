import IUser from "../interfaces/IUser";
import credentialService from "./credentialService";

const users: IUser[] = [
   {
      id: 1,
      name: "Camila",
      email: "camila@mail.com",
      birthdate: new Date (1998, 11, 12),
      nDni: "483733",
      credentialsId: 1
   },
 ];

 const userService = {
   
   getAllUsers: (): IUser[] => {
     return users;
   },
   
  getUserById: (id: number): IUser | undefined => {
   return users.find(user => user.id === id);
 },

 createUser: (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): IUser => {
   // Crear las credenciales
   const credentialsId = credentialService.createCredential(username, password);

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
 