import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Input.css";

export const InputComponent = () => {
  useEffect(() => {
    document.title = "Input Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="heading">All about Input</h2>
      <p className="text text-small">Style for a input box.</p>
      <input type="text" className="input-styled" placeholder="Enter text" />
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<input type="text" class="input-styled" placeholder="Enter text" />`}
      </SyntaxHighlighter>
      <p className="text text-small">Style for a text-area box.</p>
      <textarea
        type="text"
        className="teaxtarea-styled"
        placeholder="Enter text"
      />
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<textarea type="text" class="teaxtarea-styled" placeholder="Enter text" />`}
      </SyntaxHighlighter>
    </div>
  );
};
