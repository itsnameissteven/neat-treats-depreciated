import React, { useState, useEffect } from "react";
import classnames from "classnames";

interface IArgs {
  transitionDuration?: number;
  styles?: {};
}

const useCopyText = ({ transitionDuration = 1000, styles }: IArgs) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const hideMessage = setTimeout(
        () => setIsCopied(false),
        transitionDuration
      );
      return () => clearTimeout(hideMessage);
    }
    return;
  });

  // Pass the text you would like to copy.
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    // setIsCopied(false);
    setIsCopied(true);
  };

  const textClass = classnames("use-copy-text-msg", {
    "use-copy-text-msg--unhide": isCopied,
  });

  const showMessage = () => {
    const copyStyle = { transitionDuration: `${transitionDuration}ms` };
    return (
      <p className={textClass} style={{ ...copyStyle, ...styles }}>
        Copied!
      </p>
    );
  };

  return {
    copyText,
    isCopied,
    showMessage,
  };
};

export default useCopyText;
