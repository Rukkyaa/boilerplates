import { nextAuthLayout } from "../../../codes/next/nextauth/nextauth-layout";
import { nextAuthMiddleware } from "../../../codes/next/nextauth/nextauth-middleware";
import { nextAuthPrerequisites } from "../../../codes/next/nextauth/nextauth-prerequisites";
import { nextAuthProviders } from "../../../codes/next/nextauth/nextauth-providers";
import { nextAuthRoute } from "../../../codes/next/nextauth/nextauth-route";
import CodeBlock from "../../../components/CodeBlock";

export default function NextAuthBoilerplate() {
  return (
    <div className="flex flex-col items-center gap-y-[1.5rem]">
      <h1 className="text-4xl font-bold text-white">Next Auth Boilerplate</h1>
      <p className="text-lg text-white">
        This is a boilerplate to setup NextAuth with NextJS (App Router).
      </p>
      <CodeBlock
        code={nextAuthPrerequisites}
        filename="Prerequisites"
        language="markdown"
      />
      <CodeBlock
        code={nextAuthRoute}
        filename="/src/pages/api/auth/[...nextauth]/route.ts"
        language="typescript"
      />
      <CodeBlock
        code={nextAuthLayout}
        filename="/src/app/layout.tsx"
        language="typescript"
      />
      <CodeBlock
        code={nextAuthProviders}
        filename="/src/app/providers.tsx"
        language="typescript"
      />
      <CodeBlock
        code={nextAuthMiddleware}
        filename="/src/middleware.ts"
        language="typescript"
      />
    </div>
  );
}
