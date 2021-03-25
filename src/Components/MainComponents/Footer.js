export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <p>Made wih ❤ by Vinay Bajjuri</p>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
        }}
      >
        <li className="footer-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bajjuri-vinay-kumar-5b84a0193/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="footer-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/VinayBajjuri5"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        <li className="footer-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vinaybajjuri58"
          >
            <i class="fab fa-github-square"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
