import { Request, Response, request, response } from "express";
import userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = await userService.createUser(name, email, birthdate, nDni, username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  res.send("Usuario Loggeado")
}

export const deleteUser = async (req: Request, res: Response) => {
  res.send("Eliminar usuario")
}