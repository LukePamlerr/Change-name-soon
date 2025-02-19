// authRoutes.ts
import { Router } from "https://deno.land/x/oak/mod.ts";
import { login, register } from "../controllers/authController.ts";

const router = new Router();

router.post("/auth/login", login);
router.post("/auth/register", register);

export default router;
