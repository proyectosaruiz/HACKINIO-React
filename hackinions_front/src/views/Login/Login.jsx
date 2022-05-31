import "./Login.css";
import Button from "../../components/Button/Button";
import Fieldform from "../../components/Fieldform/Fieldform";
import { useState } from "react";
//este es el codigo que tu hiciste, colocado donde yo creo que debe ir
function Login() {
  const [email, setEmail] = useState("");
  return (
    <main className="App-main">
      {" "}
      <form>
        <Fieldform
          text="Email"
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          value={email}
          change={(e) => setEmail(e.target.value)}
        ></Fieldform>
        <Fieldform
          text="Contraseña"
          name="email"
          id="email"
          value={email}
          change={() => console.log(email)}
        ></Fieldform>

        <Button
          // click={() => navigate(-1) || navigate("/")}
          // withstyles={false}
          text="Enviar"
          // icon="arrow left"
        ></Button>
      </form>
    </main>
  );
}

export default Login;
