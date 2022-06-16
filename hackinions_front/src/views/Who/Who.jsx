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
        mejora y optimización con el fin de perfeccionar nuestras habilidades.
      </p>
      <div className="Who-img">
        <aside class="profile-card">
          <header>
            <p>
              <img className="Who-imgAmi" src={amilcar} alt=""></img>
            </p>

            <h1>Amilcar Ruiz</h1>

            <h2>Programador full stack</h2>
          </header>

          <div class="profile-bio">
            <p>
              Desarrollador con experiencia en aplicaciones web. Tras muchos
              años en empresas de ocio, deseo dar un giro a mi vida generarando
              proyectos funcionales que superen las expectativas de los clientes
              de la empresa.
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
              Con don de gentes y gran capacidad de gestión de trabajo y tiempo.
              Educación, proactividad y compromiso con el cliente y la empresa
              como valores fundamentales en mi carrera.
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
