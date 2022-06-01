import { Link } from "react-router-dom";
import "./Header.css";
import Access from "../Access/Access";

export const Header = () => {
  return (
    <header className="App-header">
      <h1>HACKINIONS</h1>
      <Access></Access>
      {/* <nav>
        <Auth />
      </nav> */}
    </header>
  );
};
//  cambiar el nav
