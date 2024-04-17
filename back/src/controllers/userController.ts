import { Request, Response, request, response } from "express";
import userService from "../services/userService";
import { User } from "../entities/User";


export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await userService.createUser({ name, email, birthdate, nDni, username, password });
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
 const { id } = req.params
 const user: User | null = await userService.getUserByIdService (Number(id))
 res.status(200).json(user)
};

export const loginUser = async (req: Request, res: Response) => {
  try{
    const { username, password } = req.body;
    const user: User | null = await userService.loginUser(username, password)
    if (!user) { 
      res.status(200).json({ success: false, user: null, message:"Credenciales incorrectas" });
    }
    else {
      res.status(200).json({ success: true, user: user, message:"Usuario logeado correctamente" });
    }
    
  } catch (error) {
    res.status(500).json({message: 'Error en el controller login'})
  }
}

export const deleteUser = async (req: Request, res: Response) => {
 
}