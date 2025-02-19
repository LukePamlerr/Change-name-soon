// oauthService.ts
import { OAuth2Client } from "https://deno.land/x/oauth2_client/mod.ts";
import { OAuthConfig } from "../config/oauthConfig.ts";

class OAuthService {
  async getOAuthToken(provider: string, code: string) {
    const oauthClient = new OAuth2Client(OAuthConfig[provider]);
    const token = await oauthClient.getToken(code);
    return token.access_token;
  }
}

export const oauthService = new OAuthService();
