export const adonisAuthController = `import type { HttpContext } from "@adonisjs/core/http";
import { unodrimLogin } from "./login.js";
import { unodrimLogout } from "./logout.js";

export default class AuthController {
  async login(ctx: HttpContext) {
    return unodrimLogin(ctx);
  }

  async logout(ctx: HttpContext) {
    return unodrimLogout(ctx);
  }
}`;
