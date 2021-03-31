import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./List.css";

export const Lists = () => {
  useEffect(() => {
    document.title = "List Component";
  }, []);
  return (
    <div className="component-description">
      <div style={{ width: "100%" }}>
        <h2 className="component-heading">All about Lists</h2>
        <div>
          <p className="description">Unstyled Lists</p>
          <ul className="list list-unstyled">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<ul class="list list-unstyled">
  <li class="list-item">Home</li>
  <li class="list-item">About</li>
  <li class="list-item">Contact</li>
</ul>`}
          </SyntaxHighlighter>
        </div>
        <div>
          <p className="description">Numbered Lists</p>
          <ul className="list list-numbered">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<ul class="list list-numbered">
  <li class="list-item">Home</li>
  <li class="list-item">About</li>
  <li class="list-item">Contact</li>
</ul>`}
          </SyntaxHighlighter>
        </div>
        <div>
          <p className="description">Dotted Lists</p>
          <ul className="list list-dotted">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<ul class="list list-dotted">
  <li class="list-item">Home</li>
  <li class="list-item">About</li>
  <li class="list-item">Contact</li>
</ul>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
