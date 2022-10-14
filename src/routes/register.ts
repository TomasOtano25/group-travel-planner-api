import { Router } from "express";
import { registerUserController } from "../controllers/register.controller";
import { validateRegisterUser } from "../middlewares/register/validators";

const router = Router();

router.post("/register", validateRegisterUser, registerUserController);

export default router;
