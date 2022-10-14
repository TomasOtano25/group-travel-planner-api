import { Router } from "express";
import passport from "passport";
import {
  authLoginController,
  authStatusController,
} from "../controllers/auth.controller";

const router = Router();

router.post("/login", passport.authenticate("local"), authLoginController);
router.get("/status", authStatusController);

export default router;
