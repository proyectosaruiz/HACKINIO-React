import React from "react";
import "./Who.css";
import amilcar from "../../images/amilcar.jpg";
import miguel from "../../images/miguel.jpg";
function Who() {
  return (
    <div className="Who">
      <header className="Who">Nos presentamos</header>
      <p className="Who-p">
        Este es el primer proyecto web creado por nosotros, Amilcar Ruiz y
        Miguel Alonso. Los dos somos dos "jóvenes" reciclados al flamante y
        apasionante mundo de la programación. Esta página estará en constante
        mejora y perfeccionamiento con el fin de perfeccionar nuestras
        habilidades.
      </p>
      <div className="Who-img">
        <aside class="profile-card">
          <header>
            <p>
              <img className="Who-imgAmi" src={amilcar} alt=""></img>
            </p>

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
            <p>
              <img className="Who-imgMig" src={miguel} alt=""></img>
            </p>

            <h1 className="who-h1">Miguel Alonso</h1>

            <h2 className="who-h2">Desarrollador</h2>
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
