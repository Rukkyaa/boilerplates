"use client";

import Image from "next/image";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ICodeBlockProps {
  code: string;
  filename: string;
  language: "typescript" | "tsx" | "markdown";
}

const CodeBlock = ({ code, filename, language }: ICodeBlockProps) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className="w-1/2 rounded-md overflow-hidden">
      <div className="flex flex-row justify-between px-[1rem] bg-[#5a189a] py-[.5rem] text-white text-xs items-center">
        <code className="text-[.875rem]">{filename}</code>
        <button
          className="py-[.25rem] inline-flex items-center gap-[.25rem]"
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopy(true);
            setTimeout(() => setCopy(false), 2000);
          }}
        >
          <Image
            src={copy ? "/check.svg" : "/clipboard.svg"}
            alt="Copy code"
            width={16}
            height={16}
          />
          {copy ? "Copied" : "Copy code"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "25px",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
