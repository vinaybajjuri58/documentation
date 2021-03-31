import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Image.css";
export const ImageComponent = () => {
  useEffect(() => {
    document.title = "Image Component";
  }, []);
  return (
    <div className="component-description">
      <div style={{ width: "100%" }}>
        <h2 className="component-heading">All about Images</h2>
        <div className="images">
          <div className="image-component">
            <p className="description">Image with default size</p>
            <img
              className="image"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
          <div className="image-component">
            <p className="description">Image with small size</p>
            <img
              className="image image-sm"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image image-sm" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
          <div className="image-component">
            <p className="description">Image with medium size</p>
            <img
              className="image image-md"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image image-md" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
          <div className="image-component">
            <p className="description">
              Image with default size and circular shape
            </p>
            <img
              className="image image-circular"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image image-circular" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
          <div className="image-component">
            <p className="description">
              Image with small size and circular shape
            </p>
            <img
              className="image image-sm image-circular"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image image-sm image-circular" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
          <div className="image-component">
            <p className="description">
              Image with medium size and circular shape
            </p>
            <img
              className="image image-md image-circular"
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt=""
              srcset=""
            />
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {`Code Snippet
<img class="image image-md image-circular" src="Image Url" alt="" srcset="" />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};
