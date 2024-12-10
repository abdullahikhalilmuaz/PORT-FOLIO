import "../../Styles/home.css";
("../../");
export default function Home() {
  return (
    <div className="home" id="home">
      <div className="hero-section">
        <div className="side">
          <p className="name">
            Hey I'm Abdullahi H <span>Mu'az</span>
          </p>
          <h2>
            
            Front-End <br />
            <span>Developer</span>
          </h2>
          <div className="desc">
            {" "}
            <span className="desc">Lorem ipsum dolor sit amet.</span>
            <span className="desc">Lorem ipsum dolor sit amet.</span>
          </div>{" "}
          <button>Get In Touch</button>
        </div>
        <div className="img">
          <div className="image-container">
            <img
              src="\src\images\abdullahi.jpg"
              alt="hero image"
              width={"300px"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
