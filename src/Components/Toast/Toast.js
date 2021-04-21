import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Toast = () => {
  const [displayToast, setDisplayToast] = useState("none");
  useEffect(() => {
    document.title = "Toast Component";
  }, []);
  return (
    <div className="component-description">
      <div style={{ width: "100%" }}>
        <h2 className="component-heading">All about Toast</h2>
        <button className="button" onClick={() => setDisplayToast("block")}>
          Toast
        </button>
        <div
          className="toast"
          style={{
            display: displayToast,
          }}
        >
          <div className="toast-container">
            <p>Toast Message</p>
            <button
              onClick={() => setDisplayToast("none")}
              className="button button-warning toast-toggle"
            >
              X
            </button>
          </div>
        </div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<div class="toast">
  <div class="toast-container" >
    <p>Toast Message</p>
    <button className="button button-warning toast-toggle" > X </button>
  </div>
</div>`}
        </SyntaxHighlighter>
        <SnackBar />
      </div>
    </div>
  );
};

const SnackBar = () => {
  const [displaySnackbar, setDisplaySnackBar] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplaySnackBar(false);
    }, 2500);
  }, [displaySnackbar]);
  return (
    <div>
      <h2 className="component-heading">All about Snackbar</h2>
      <button className="button" onClick={() => setDisplaySnackBar(true)}>
        SnackBar
      </button>
      {displaySnackbar && (
        <div className="snackbar">
          <p>A dummy SnackBar</p>
        </div>
      )}
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet
<div className="snackbar">
  <p>A dummy SnackBar</p>
</div>`}
      </SyntaxHighlighter>
    </div>
  );
};
