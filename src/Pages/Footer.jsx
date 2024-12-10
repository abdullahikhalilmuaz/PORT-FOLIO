import "../Styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="title">
          H <span>Mu'az</span>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
              <a href="#aboutme">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a>f</a>
            </li>
            <li>
              <a>i</a>
            </li>
            <li>
              <a>t</a>
            </li>
            <li>
              <a>in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
