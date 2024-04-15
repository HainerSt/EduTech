import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Hero() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Discover the Path of Knowledge:</h1>
        <h2>Explore, Learn, Evolve!</h2>

        <p>
          With a wide range of
          <span className="highlight"> courses and educational programs</span>, we are committed to bringing the best
          resources and experts to you.
        </p>

        <Link to="programs" smooth={true} offset={-313} duration={700} className="btn hero_btn">
          Begin Your Journey <img src={dark_arrow} />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
