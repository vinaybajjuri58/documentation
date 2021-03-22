import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./TextUtilities.css";

export const TextUtilities = () => {
  useEffect(() => {
    document.title = "TextUtilities Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="heading">All about Texts</h2>
      <div style={{ width: "1000px" }}>
        <p style={{ textAlign: "left" }} className="text-left">
          Left aligned text on all viewport sizes.
        </p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text-left">Left aligned text on all viewport sizes.</p>`}
        </SyntaxHighlighter>
        <p style={{ textAlign: "center" }} className="text-center">
          Center aligned text on all viewport sizes.
        </p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text-left">Left aligned text on all viewport sizes.</p>`}
        </SyntaxHighlighter>
        <p className="text-right">Right aligned text on all viewport sizes.</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text-left">Left aligned text on all viewport sizes.</p>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
