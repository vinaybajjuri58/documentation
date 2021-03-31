import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Navigation = () => {
  useEffect(() => {
    document.title = "Navigation Component";
  }, []);
  return (
    <div className="component-description">
      <h2>Navigation Bar using below html and css</h2>
      <header class="nav-header">
        <h2 class="nav-logo">Logo</h2>
        <input id="nav-toggle" type="checkbox" class="nav-toggle" />
        <label class="nav-toggle-label" for="nav-toggle">
          <span>
            <i class="fas fa-bars"></i>
          </span>
        </label>
        <nav class="navbar">
          <ul class="nav-items">
            <li>
              <a href="/navigation">Home</a>
            </li>
            <li>
              <a href="/navigation">About</a>
            </li>
            <li>
              <a href="/navigation">Blog</a>
            </li>
            <li>
              <a href="/navigation">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Code Snippet HTML:
<header class="nav-header" >
<h2 class="nav-logo">Logo</h2>
<input id="nav-toggle" type="checkbox" class="nav-toggle" />
<label class="nav-toggle-label" for="nav-toggle"
  ><span><i class="fas fa-bars"></i></span
></label>
<nav class="navbar" >
  <ul class="nav-items">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
</header>`}
      </SyntaxHighlighter>
    </div>
  );
};
