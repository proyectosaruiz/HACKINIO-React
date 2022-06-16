// import logo from "./original.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const sampleLocation = useLocation();
  console.log(sampleLocation.pathname);
  let className = "App-footer-absolute";
  if (
    sampleLocation.pathname === "/" ||
    sampleLocation.pathname === "/register"
  ) {
    className = "App-footer-relative";
  }
  return (
    <div className={className}>
      {/* <img src={logo} /> */}

      <Link to={"/who"} className="footer-link">
        ¿Quienes somos?
      </Link>
      <p>© 2022 HACK A BOSS</p>
    </div>
  );
};
