import {Router} from "express";
import { createUser, getUsers, deleteUser, getUserById, loginUser } from "../controllers/userController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers)

usersRouter.get("/:id", getUserById)

usersRouter.post("/register", createUser)

usersRouter.post("/login", loginUser)

usersRouter.delete("/delete", deleteUser)

export default usersRouter;