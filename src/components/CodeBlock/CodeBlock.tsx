import React, { useEffect } from "react";
import Prism from "prismjs";
import "./CodeBlock.scss";
import { Icon } from "..";
import { useCopyText } from "../../hooks";

interface ICodeBlock {
  /** Place your code inside template literals*/
  code: string;
  /** language of your code */
  language: string;
  /** Optional class name for the parent element */
  className?: string;
}

const CodeBlock = ({ className = "", code, language }: ICodeBlock) => {
  const { copyText, showMessage } = useCopyText({});
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`code code-block ${className}`}>
      <div className="code-block__copy">
        {showMessage()}
        <Icon
          className="code-block__copy__icon"
          name="copy"
          size={34}
          onClick={() => copyText(code)}
        />
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
