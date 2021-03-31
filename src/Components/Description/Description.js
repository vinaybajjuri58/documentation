import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Description.css";
export const Description = () => {
  useEffect(() => {
    document.title = "Home | OrangeCSS";
  }, []);
  const [copyCSS, setCopyCss] = useState(false);
  const [copyJS, setCopyJS] = useState(false);

  const [cssCode] = useState(
    '<link rel="stylesheet"  href="https://orangecss.netlify.app/orange.css"/>'
  );
  const [jsCode] = useState(
    '<script src="https://orangecss.netlify.app/orange.js"></script>'
  );
  return (
    <div className="component-description">
      <div style={{ width: "100%" }}>
        <h2 className="component-heading">Description</h2>
        <p>Copy and paste below link in head of index.html for using css</p>
        <div>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {cssCode}
          </SyntaxHighlighter>
          <button
            className="button button-primary copy-button"
            onClick={() => {
              setCopyCss(true);
              navigator.clipboard.writeText(cssCode);
            }}
          >
            {copyCSS ? "copied" : "copy CSS ref"}
          </button>
        </div>
        <div>
          <p>Copy and paste below link for using javascript functionality</p>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {jsCode}
          </SyntaxHighlighter>
          <button
            className="button button-primary copy-button"
            onClick={() => {
              setCopyJS(true);
              navigator.clipboard.writeText(jsCode);
            }}
          >
            {copyJS ? "copied" : "copy JS ref"}
          </button>
        </div>
      </div>
    </div>
  );
};
