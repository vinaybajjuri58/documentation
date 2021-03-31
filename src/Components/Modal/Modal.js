import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Modal = () => {
  const [displayState, setDisplayState] = useState("none");
  useEffect(() => {
    document.title = "Input Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="component-heading">All about Modals</h2>
      <button
        onClick={() => setDisplayState("block")}
        className="button"
        id="open-modal"
      >
        Open Modal
      </button>

      <div
        id="modal"
        style={{
          display: displayState,
        }}
        className="modal"
      >
        <div className="modal-content">
          <p>Some text in the Modal..</p>
          <span className="close-modal">
            <button
              id="close-modal"
              onClick={() => setDisplayState("none")}
              className="button button-warning modal-toggle"
            >
              X
            </button>
          </span>
        </div>
      </div>
      <div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet  HTML:
<button class="button" id="open-modal">Open Modal</button>

<div id="modal" class="modal">
  <div class="modal-content">
    <p>Some text in the Modal..</p>
    <span class="close-modal">
      <button id="close-modal" class="button button-warning modal-toggle">X</button>
    </span>
  </div>
</div> `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
