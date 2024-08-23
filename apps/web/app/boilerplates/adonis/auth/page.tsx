import { adonisAuthController } from "../../../codes/adonis/auth/auth-controller";
import { adonisAuthLogin } from "../../../codes/adonis/auth/auth-login";
import { adonisAuthLogout } from "../../../codes/adonis/auth/auth-logout";
import { adonisAuthRoute } from "../../../codes/adonis/auth/auth-route";
import { adonisAuthSeeder } from "../../../codes/adonis/auth/auth-seeder";
import CodeBlock from "../../../components/CodeBlock";
import { TextComponent } from "../../../components/TextComponent";

export default function AdonisAuthBoilerplate() {
  return (
    <div className="flex flex-col items-center text-left gap-y-[1.5rem]">
      <h1 className="text-4xl font-bold text-white">Adonis (V6) Auth Boilerplate</h1>
      <p className="text-lg text-white">
        This is a boilerplate to setup Adonis Auth with @adonisjs/auth with access tokens guard.
      </p>
      <TextComponent text="1) Setup the auth" className="text-3xl font-bold" />
      <CodeBlock
        code={`node ace add @adonisjs/auth --guard=access_tokens`}
        filename="Shell"
        language="text"
        description="First, install the auth package"
      />
      <CodeBlock
        code={`node ace migration:run`}
        filename="Shell"
        language="text"
        description="Then, run the migrations"
      />

      <TextComponent text="2) Setup login and logout" className="text-3xl font-bold" />
      <CodeBlock
        code={`node ace make:controller auth/auth_controller`}
        filename="Shell"
        language="text"
        description="Create an Auth Controller"
      />
      <CodeBlock
        code={adonisAuthLogin}
        filename="/app/controllers/auth/login.ts"
        language="typescript"
        description="Create the login and logout functions"
      />
      <CodeBlock
        code={adonisAuthLogout}
        filename="/app/controllers/auth/logout.ts"
        language="typescript"
      />
      <CodeBlock
        code={adonisAuthController}
        filename="/app/controllers/auth/auth_controller.ts"
        language="typescript"
        description="Add the functions to the controller"
      />
      <CodeBlock
        code={adonisAuthRoute}
        filename="/app/controllers/auth/route.ts"
        language="typescript"
        description="Add the route config"
      />

      <TextComponent text="3) Add user in the seeder" className="text-3xl font-bold" />
      <CodeBlock
        code={adonisAuthSeeder}
        filename="/database/seeders/00_user_seeders.ts"
        language="typescript"
      />
    </div>
  );
}
