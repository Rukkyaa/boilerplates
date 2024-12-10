import { brevoPrerequisites } from "../../../codes/next/brevo/brevo-prerequisites";
import { brevoConstantCode } from "../../../codes/next/brevo/brevo.constant";
import { brevoSendMailCode } from "../../../codes/next/brevo/send-mail";
import CodeBlock from "../../../components/CodeBlock";

export default function NextBrevoBoilerplate() {
  return (
    <div className="flex flex-col items-center gap-y-[1.5rem]">
      <h1 className="text-4xl font-bold text-white">Next Brevo Boilerplate</h1>
      <p className="text-lg text-white">
        This is a boilerplate for using Brevo with Next.js.
      </p>
      <CodeBlock code={brevoPrerequisites} filename="Prerequisites" language="markdown" />
      <CodeBlock
        code={brevoConstantCode}
        filename="constants/brevo.constants.ts"
        language="typescript"
      />
      <CodeBlock
        code={brevoSendMailCode}
        filename="services/server/send-mail.ts"
        language="typescript"
      />
    </div>
  );
}
