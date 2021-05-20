import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Alert = () => {
  useEffect(() => {
    document.title = "Alert Component";
  }, []);
  return (
    <div className="component-description">
      <div style={{ width: "100%" }}>
        <h2 className="component-heading">All about Alerts</h2>
        <p className="alert-description">Alert with primary color</p>
        <div className="alert alert-primary" role="alert">
          <p>A primary alert</p>
        </div>
        <div>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<div class="alert alert-primary" role="alert">
  <p>A primary alert</p>
</div>`}
          </SyntaxHighlighter>
        </div>
        <p className="alert-description">Alert with Success color</p>
        <div className="alert alert-success" role="alert">
          <p>A success alert</p>
        </div>
        <div>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<div class="alert alert-success" role="alert">
  <p>A success alert</p>
</div>`}
          </SyntaxHighlighter>
        </div>
        <p className="alert-description">Alert with Warning color</p>
        <div className="alert alert-warning" role="alert">
          <p>A warning alert</p>
        </div>
        <div>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<div class="alert alert-warning" role="alert">
  <p>A Warning alert</p>
</div>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
