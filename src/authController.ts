// oauthController.ts
import { Context } from "https://deno.land/x/oak/mod.ts";
import { oauthService } from "../services/oauthService.ts";

// OAuth Login Handler
export const oauthLogin = async (ctx: Context) => {
  const code = ctx.request.url.searchParams.get("code");
  const provider = ctx.request.url.searchParams.get("provider");

  const token = await oauthService.getOAuthToken(provider, code);
  ctx.response.redirect(`/dashboard?token=${token}`);
};
