import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          5種の「てりやき」が一挙登場!新商品「赤辛てりやき」「黒胡椒てりやき」に加え「親子てりやき」も復活!さらに「シャカシャカポテト®︎てりやきマックバーガー味」、朝マックに「てりやきマフィン」も!
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
