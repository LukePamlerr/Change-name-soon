// index.ts
import { Application } from "https://deno.land/x/oak/mod.ts";
import authRoutes from "./routes/authRoutes.ts";
import oauthRoutes from "./routes/oauthRoutes.ts";
import { checkAuth } from "./middlewares/checkAuth.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

const app = new Application();

app.use(errorHandler);
app.use(checkAuth);

app.use(authRoutes.routes());
app.use(oauthRoutes.routes());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
