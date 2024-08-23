export const adonisAuthLogout = `import User from "#models/user";
import type { HttpContext } from "@adonisjs/core/http";

export const unodrimLogout = async ({ auth }: HttpContext) => {
  const user = auth.user;
  if (!user) return {};

  const currentToken = auth.user.currentAccessToken;
  await User.accessTokens.delete(user, currentToken.identifier);

  return { message: "Successfully logged out" };
};`;
