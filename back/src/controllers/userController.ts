import { Request, Response } from "express";

export const createUser = async (req:Request ,res:Response) => {
    res.status(201)
}

export const getUsers = async (req: Request, res: Response) => {
    res.status(200)
}

export const getUserById = async (req: Request, res: Response) => {
    res.status(200)
}

export const loginUser = async (req: Request, res: Response) => {
    res.status(200)
}

export const deleteUser = async () => {}