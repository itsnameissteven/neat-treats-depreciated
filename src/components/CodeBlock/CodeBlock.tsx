import React, { useEffect } from "react";
import Prism from "prismjs";
import "./CodeBlock.scss";
import { Icon } from "..";

interface ICodeBlock {
  /** Place your code inside template literals*/
  code: string;
  /** language of your code */
  language: string;
  /** Optional class name for the parent element */
  className?: string;
}

const CodeBlock = ({ className = "", code, language }: ICodeBlock) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`Code code-block ${className}`}>
      <Icon className="code-block__copy" name="copy" size={34} />
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
