export const adonisAuthSeeder = `import User from "#models/user";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class extends BaseSeeder {
  async run() {
    await User.createMany([{ email: "axel@unodrim.fr", password: "admin" }]);
  }
}`;
