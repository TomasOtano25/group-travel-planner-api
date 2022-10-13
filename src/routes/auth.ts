import { Router } from "express";
import {
  signupController,
  loginController,
} from "../controllers/auth.controller";

const router = Router();

router.get("/signup", signupController);
router.get("/login", loginController);

export default router;
