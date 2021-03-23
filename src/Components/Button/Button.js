import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Button.css";
export const Button = () => {
  useEffect(() => {
    document.title = "Button Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="component-heading">All about Buttons</h2>
      <p className="description">A simple Button</p>
      <button className="button">Button</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
 <button class="button">Button</button>`}
        </SyntaxHighlighter>
      </div>
      <p className="description">Button with primary color</p>
      <button className="button button-primary">Primary</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<button class="button button-primary">Primary</button>`}
        </SyntaxHighlighter>
      </div>
      <p className="description">Button with Warning color</p>
      <button className="button button-warning">Warning</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<button class="button button-warning">Warning</button>`}
        </SyntaxHighlighter>
      </div>
      <h3 className="heading">Border effect Buttons</h3>
      <p className="description">A simple Button with border effect</p>
      <button className="button button-border">Button</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<button className="button button-border">Button</button>`}
        </SyntaxHighlighter>
      </div>
      <p className="description">Button with border and primary color</p>
      <button className="button button-border border-primary">Primary</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<button className="button button-border border-primary">Primary</button>`}
        </SyntaxHighlighter>
      </div>
      <p className="description">Button with border and Warning color</p>
      <button className="button button-border border-warning">Warning</button>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<button className="button button-border border-warning">Warning</button>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
