import { s3ModuleCode } from "./codes/s3-module.code";
import { s3ServiceCode } from "./codes/s3-service.code";
import CodeBlock from "./components/CodeBlock";

export default function Home() {
  return (
    <div className="bg-[#10002b] flex flex-col items-center gap-y-[1rem]">
      <h1 className="text-4xl font-bold text-white">S3 Boilerplate</h1>
      <p className="text-lg text-white">
        This is a boilerplate for using AWS S3 with NestJS.
      </p>
      <CodeBlock
        code={s3ModuleCode}
        filename="/src/shared/s3/s3.module.ts"
        language="typescript"
      />
      <CodeBlock
        code={s3ServiceCode}
        filename="/src/shared/s3/s3.service.ts"
        language="typescript"
      />
    </div>
  );
}
