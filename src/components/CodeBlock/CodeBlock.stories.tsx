import React from "react";
import CodeBlock from "./CodeBlock";

export default {
  component: CodeBlock,
  title: "Components/CodeBlock",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

const code = `import React, { useEffect } from "react";
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
    <div className={\`Code code-block \${className}\`}>
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
        <code className={\`language-\${language}\`}>{code}</code>
      </pre>
    </div>
  );
};
`;

const Template = () => {
  return (
    <>
      <h1 className="story__h1">CodeBlock</h1>
      <p className="story__p">
        This component utilized prism.js, with some added functionality. You can
        find information on prism.js{" "}
        <a href="https://prismjs.com/" target="_blank">
          here.
        </a>{" "}
        Below is the code used to build the component. Very meta. Clicking on
        the copy button is handy for copying the entire code block. Light and
        dark modes have been built into this component. To add the dark mode
        styles add 'dark-mode' to any parent class.
      </p>
      <CodeBlock code={code} language="javascript" />
    </>
  );
};

export const Primary = Template.bind({});
Primary.parameters = {
  controls: { hideNoControlsWarning: true },
};
