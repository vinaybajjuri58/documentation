import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Alert.css";
export const Alert = () => {
  useEffect(() => {
    document.title = "Alert Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="component-heading">All about Alerts</h2>
      <p className="alert-description">A simple alert</p>
      <div className="alert" role="alert">
        <p>A simple alert</p>
      </div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<div class="alert" role="alert">
  <p>A simple alert</p>
</div>`}
      </SyntaxHighlighter>
      <p className="alert-description">Alert with primary color</p>
      <div className="alert alert-primary" role="alert">
        <p>A primary alert</p>
      </div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<div class="alert alert-primary" role="alert">
<p>A primary alert</p>
</div>`}
      </SyntaxHighlighter>
      <p className="alert-description">Alert with Success color</p>
      <div className="alert alert-success" role="alert">
        <p>A success alert</p>
      </div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<div class="alert alert-success" role="alert">
<p>A success alert</p>
</div>`}
      </SyntaxHighlighter>
      <p className="alert-description">Alert with Warning color</p>
      <div className="alert alert-warning" role="alert">
        <p>A simple alert</p>
      </div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<div class="alert alert-warning" role="alert">
<p>A simple alert</p>
</div>`}
      </SyntaxHighlighter>
    </div>
  );
};
