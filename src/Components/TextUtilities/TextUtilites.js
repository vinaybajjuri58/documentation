import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./TextUtilities.css";

export const TextUtilities = () => {
  useEffect(() => {
    document.title = "TextUtilities Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="heading">All about positioning of Texts</h2>
      <div style={{ width: "80%" }}>
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
      <div>
        <h2 className="heading">All about different sizes of Texts</h2>
        <p className="text text-xlarge">Text with the extra large size.</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text text-xlarge">Text with the extra large size.</p>`}
        </SyntaxHighlighter>
        <p className="text text-large">Text with the large size.</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text text-large">Text with the  large size.</p>`}
        </SyntaxHighlighter>
        <p className="text text-medium">Text with the medium size.</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text text-medium">Text with the medium size.</p>`}
        </SyntaxHighlighter>
        <p className="text text-small">Text with the small size.</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<p class="text text-small">Text with the small size.</p>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
