// authController.ts
import { Context } from "https://deno.land/x/oak/mod.ts";
import { authService } from "../services/authService.ts";

// Login Handler
export const login = async (ctx: Context) => {
  const { username, password } = await ctx.request.body().value;
  const token = await authService.login(username, password);
  ctx.response.body = { token };
};

// Register Handler
export const register = async (ctx: Context) => {
  const { username, password } = await ctx.request.body().value;
  const user = await authService.register(username, password);
  ctx.response.body = user;
};
