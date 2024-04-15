import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_3 from "../../assets/program-3.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

function Programs() {
  return (
    <div className="programs" id="programs">
      <a className="program">
        <img src={program_1} alt="image" />
        <div className="caption">
          <a href="https://youtu.be/GFW-WfuX2Dk?feature=shared&t=53" target="_blank">
            <img src={program_icon_1} />
            <p>Online Courses</p>
            <h5>-PDF-</h5>
          </a>
        </div>
      </a>

      <div className="program">
        <img src={program_3} alt="image" />
        <div className="caption">
          <a href="https://youtu.be/GFW-WfuX2Dk?feature=shared&t=53" target="_blank">
            <img src={program_icon_3} />
            <p>Webinars</p>
            <h5>-Zoom-</h5>
          </a>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="image" />
        <div className="caption">
          <a href="https://youtu.be/GFW-WfuX2Dk?feature=shared&t=53" target="_blank">
            <img src={program_icon_2} />
            <p>Group Workshops</p>
            <h5>-Live-</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Programs;
