// oauthRoutes.ts
import { Router } from "https://deno.land/x/oak/mod.ts";
import { oauthLogin } from "../controllers/oauthController.ts";

const router = new Router();

router.get("/oauth/callback", oauthLogin);

export default router;
