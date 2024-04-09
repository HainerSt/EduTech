import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h2>Our Commitment to Education and Excellence</h2>
        <p>
          Our mission is to inspire and encourage every individual to explore their full potential and achieve their
          educational goals. We are dedicated to providing an environment where learning is accessible, relevant, and
          stimulating for all, regardless of age, background, or resources.
        </p>
        <p>
          We strive to create innovative and interactive educational programs that develop the skills necessary to
          succeed in an ever-changing world.
        </p>
        <p>
          Through <span id="highlight_dark"> collaboration, passion, and dedication </span>, we commit to being
          catalysts for educational transformation and to contributing to the formation of a better and better-prepared
          society for the future.
        </p>
        <hr />
        <h5>"Education is not preparation for life, education is life itself." - John Dewey</h5>
      </div>
    </div>
  );
}

export default About;
