import React from "react";
import "./Title.css";

function Title({ subTitle, subTitle2, title }) {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <p className="subtitle2">{subTitle2}</p>
      <h2>{title}</h2>
    </div>
  );
}
import "./Title.css";

export default Title;
