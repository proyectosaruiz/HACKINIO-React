import "./Hackinions.css";
import Button from "../../components/Button/index";
import { useNavigate } from "react-router";

//este es el codigo que tu hiciste, colocado donde yo creo que debe ir
function Hackinions() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <Button click={() => navigate("/login")} text="Iniciar sesión"></Button>
        <p>Miguel</p>
      </header>
      <main className="App-main">
        {" "}
        <p>Amilcar</p>{" "}
      </main>
      <footer className="App-footer">
        {" "}
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Hackinions;
