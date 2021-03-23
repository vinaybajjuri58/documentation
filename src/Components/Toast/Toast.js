import { useEffect, useState } from "react";
export const Toast = () => {
  const [displayToast, setDisplayToast] = useState("none");
  useEffect(() => {
    document.title = "Toast Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="">All about Toast</h2>
      <button className="button" onClick={() => setDisplayToast("block")}>
        Toast
      </button>
      <div
        className="toast"
        style={{
          display: displayToast,
        }}
      >
        <span>
          <p>Toast Message</p>
          <button
            onClick={() => setDisplayToast("none")}
            className="button button-warning"
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
};
