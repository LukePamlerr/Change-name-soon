// checkAuth.ts
import { Context, Next } from "https://deno.land/x/oak/mod.ts";

// Middleware to check authentication
export const checkAuth = async (ctx: Context, next: Next) => {
  const token = ctx.request.headers.get("Authorization");
  if (!token) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Unauthorized" };
    return;
  }
  await next();
};
