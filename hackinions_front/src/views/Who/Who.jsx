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
      <div className="Who-img">
        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img className="Who-imgAmi" src={amilcar} alt=""></img>
            </a>

            <h1>John Doe</h1>

            <h2>Better Visuals</h2>
          </header>

          <div class="profile-bio">
            <p>
              It takes monumental improvement for us to change how we live our
              lives. Design is the way we access that improvement.
            </p>
          </div>

          {/* <ul class="profile-social-links">
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul> */}
        </aside>

        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img className="Who-imgMig" src={miguel} alt=""></img>
            </a>

            <h1>John Doe</h1>

            <h2>Better Visuals</h2>
          </header>

          <div class="profile-bio">
            <p>
              It takes monumental improvement for us to change how we live our
              lives. Design is the way we access that improvement.
            </p>
          </div>

          {/* <ul class="profile-social-links">
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul> */}
        </aside>
      </div>
    </div>
  );
}

export default Who;
