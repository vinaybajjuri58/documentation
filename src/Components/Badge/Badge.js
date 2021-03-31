import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Badge.css";
export const Badge = () => {
  useEffect(() => {
    document.title = "Badge Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="component-heading">All about Badges</h2>
      <p className="description">A simple badge</p>
      <span className="badge">badge</span>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
 <span class="badge">badge</span>`}
      </SyntaxHighlighter>
      <p className="description">Badge with primary color</p>
      <span className="badge badge-primary">primary</span>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<span class="badge badge-primary">primary</span>`}
      </SyntaxHighlighter>
      {/* <p className="description">Badge with Success color</p>
      <span className="badge badge-success">success</span>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
 <span class="badge badge-success">success</span>`}
      </SyntaxHighlighter> */}
      <p className="description">Badge with Warning color</p>
      <span className="badge badge-warning">warning</span>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<span class="badge badge-warning">warning</span>`}
      </SyntaxHighlighter>
    </div>
  );
};
