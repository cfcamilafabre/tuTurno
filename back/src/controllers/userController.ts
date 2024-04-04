import { Request, Response, request, response } from "express";
import userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = userService.createUser(name, email, birthdate, nDni, username, password);
    res.status(201).json(newUser);
  };

  export const getUsers = async (req: Request, res: Response) => {
    const users = userService.getAllUsers();
    res.json(users);
  };

  export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = userService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };

export const loginUser = async (req: Request, res: Response) => {
    res.send("Usuario Loggeado")
}

export const deleteUser = async (req: Request, res: Response) => {
    res.send("Eliminar usuario")
}