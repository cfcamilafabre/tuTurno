import appointmentsRouter  from "./appointmentRouter";
import usersRouter from "./usersRouter";
import { Router } from "express"

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointments", appointmentsRouter);

export default router;