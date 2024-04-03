import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} />
                <div>
                  <h3>Larisa Popescu</h3>
                  <span>Oradea, RO</span>
                </div>
              </div>
              <p>
                The services provided were remarkable! Passionate teachers and well-structured courses contributed to a
                captivating and useful learning experience. I highly recommend it! &#128513; &#128513; &#128513;
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} />
                <div>
                  <h3>Ezra Sony</h3>
                  <span>Crete, EL</span>
                </div>
              </div>
              <p>
                I was impressed by the professionalism and dedication of the staff. The courses are interactive and
                relevant, and the resources provided were extremely useful in my development.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} />
                <div>
                  <h3>Sophia S.</h3>
                  <span>Manchester, UK</span>
                </div>
              </div>
              <p>
                I warmly recommend to all those who wish to improve their knowledge and achieve new levels of success
                both in their careers and personally.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} />
                <div>
                  <h3>Muller Schauer</h3>
                  <span>Munchen, DE</span>
                </div>
              </div>
              <p>
                he well-structured courses and interactive learning materials have made the learning process engaging
                and accessible. The teachers are extremely competent and dedicated, providing us with the necessary
                support at every stage of our educational journey.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
