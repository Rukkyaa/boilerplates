export const adonisAuthLogin = `import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

import User from "#models/user";

const loginSchema = vine.compile(
  vine.object({
    email: vine.string().trim(),
    password: vine.string().trim(),
  }),
);

export const unodrimLogin = async ({ request }: HttpContext) => {
  const { email, password } = await request.validateUsing(loginSchema);

  const user = await User.verifyCredentials(email, password);
  const token = await User.accessTokens.create(user);

  return token;
};`;
