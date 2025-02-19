// errorHandler.ts
import { Context, Next } from "https://deno.land/x/oak/mod.ts";

// Global Error Handler Middleware
export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.status || 500;
    ctx.response.body = { message: err.message || "Internal Server Error" };
  }
};
