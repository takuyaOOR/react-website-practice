import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div>
      <div id="products">
        <h1>CHOOSE & ENJOY</h1>
        <p>
          定番メニューから変わり種のメニューまで様様なハンバーガーがございます。
        </p>
        <div className="a-container">
          <Productbox image={pimage1} title="Original Burger" />
          <Productbox image={pimage2} title="Original Cheese Burger" />
          <Productbox image={pimage1} title="Original Burger" />
        </div>
      </div>
    </div>
  );
}

export default Products;
