import { Router } from "express";
import registerRoutes from "./register";
import authRoutes from "./auth";

const router = Router();

router.use("/register", registerRoutes);
router.use("/auth", authRoutes);

export default router;
