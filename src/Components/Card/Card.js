import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Card.css";
export const Card = () => {
  useEffect(() => {
    document.title = "Card Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="heading">All about Cards</h2>
      <div>
        <div className="card">
          <img
            src="https://media.tarkett-image.com/large/TH_25121916_25131916_25126916_25136916_001.jpg"
            alt=""
            className="card-img"
          />
          <h4 className="card-title">Card Title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et
            architecto dicta. Placeat, aspernatur, commodi impedit dicta id,
            explicabo porro cumque ullam dolore saepe fuga? Ullam porro
            voluptatum suscipit dolor!
          </p>
        </div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<div class="card">
<img
  src="image-url"
  alt=""
  class="card-img"
/>
<h4 class="card-title">Card Title</h4>
<p class="card-text">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et
  architecto dicta. Placeat, aspernatur, commodi impedit dicta id,
  explicabo porro cumque ullam dolore saepe fuga? Ullam porro voluptatum
  suscipit dolor!
</p>
</div>`}
        </SyntaxHighlighter>
      </div>
      <div>
        <p className="description">A Card for e-commerce</p>
        <div className="card card-shopping">
          <img
            src="https://media.tarkett-image.com/large/TH_25121916_25131916_25126916_25136916_001.jpg"
            alt=""
            className="card-img"
          />
          <h4 className="card-brand">Brand Name</h4>
          <p className="card-desc">A Black T-Shirt</p>
          <button className="remove-button button button-border">X</button>
        </div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<div class="card card-shopping">
<img
  src="https://media.tarkett-image.com/large/TH_25121916_25131916_25126916_25136916_001.jpg"
  alt=""
  class="card-img"
/>
<h4 class="card-brand">Brand Name</h4>
<p class="card-desc">A Black T-Shirt</p>
<button class="remove-button button button-border">X</button>
</div> `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
