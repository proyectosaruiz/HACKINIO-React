import React from "react";
import "./Who.css";
import amilcar from "../../images/amilcar.jpg";
import miguel from "../../images/miguel.jpg";
function Who() {
  return (
    <div className="Who">
      <header className="Who">Nos presentamos</header>
      <p className="Who-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
        voluptate totam blanditiis recusandae consequatur quia itaque autem iure
        ad magnam soluta cumque eveniet quidem dolore eius veritatis, deleniti
        quod?
      </p>
      <div>
        <img src={amilcar} alt=""></img>
        <img src={miguel} alt=""></img>
      </div>
    </div>
  );
}

export default Who;
