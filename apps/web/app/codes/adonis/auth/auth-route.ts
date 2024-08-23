export const adonisAuthRoute = `import AuthController from "#controllers/auth/auth_controller";
import router from "@adonisjs/core/services/router";

router
  .group(() => {
    router.get("/", () => ({ message: "Unodrim is alive!" }));
    router.post("/auth/login", [AuthController, "login"]);
    router.post("/auth/logout", [AuthController, "logout"]);
  })
  .prefix("/api");`;
