import {Router} from "express";
import { createUser, getUsers, deleteUser } from "../controllers/userController";
import { create } from "domain";

const router: Router = Router();

router.get("/users")

router.post("/users", createUser)

router.delete("/users")

export default router;