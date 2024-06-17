import { brevoModuleCode } from "../../codes/brevo/brevo-module.code";
import { brevoServiceCode } from "../../codes/brevo/brevo-service.code";
import CodeBlock from "../../components/CodeBlock";

export default function BrevoBoilerplate() {
  return (
    <div className="flex flex-col items-center gap-y-[1.5rem]">
      <h1 className="text-4xl font-bold text-white">Brevo Boilerplate</h1>
      <p className="text-lg text-white">
        This is a boilerplate for using Brevo with NestJS.
      </p>
      <CodeBlock
        code={brevoModuleCode}
        filename="/src/shared/brevo/brevo.module.ts"
        language="typescript"
      />
      <CodeBlock
        code={brevoServiceCode}
        filename="/src/shared/brevo/brevo.service.ts"
        language="typescript"
      />
    </div>
  );
}
