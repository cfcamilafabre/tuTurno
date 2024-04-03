import {Router} from "express";
import { createUser, getUsers, deleteUser, getUserById, loginUser } from "../controllers/userController";
import { create } from "domain";

const router: Router = Router();

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users/register", createUser)

router.post("users/login", loginUser)

router.delete("/users", deleteUser)

export default router;