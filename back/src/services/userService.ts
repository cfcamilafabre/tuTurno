import { AppDataSource } from "../config/data-source";
import IUserDto from "../dtos/userDto";
import { User } from "../entities/User";
import { Request } from "express";


const userService = {

  getAllUsers: async (): Promise<User[]> => {
    const users = await AppDataSource.getRepository(User).find();
    return users;
  },

  getUserByIdService: async (id: number): Promise<User | null> => {
    const user = await AppDataSource.getRepository(User).findOneBy({
      id
    })
    return user;
  },

  createUser: async (userData: IUserDto) => {
    const user = await AppDataSource.getRepository(User).create(userData)
    const result = await AppDataSource.getRepository(User).save(user);
    return user;
  },

  deleteUser: async (id: number)=> {
   
  },

}
export default userService;

// app.delete("/users/:id", async function (req: Request, res: Response) {
//   const results = await myDataSource.getRepository(User).delete(req.params.id)
//   return res.send(results)
// })
