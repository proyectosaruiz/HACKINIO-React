// import logo from "./original.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="App-footer">
      {/* <img src={logo} /> */}

      <Link to={"/who"} className="footer-link">
        ¿Quienes somos?
      </Link>
      <p>© 2022 HACK A BOSS</p>
    </div>
  );
};
