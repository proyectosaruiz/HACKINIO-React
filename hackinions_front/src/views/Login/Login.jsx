import "./Login.css";
import Button from "../../components/Button/index";

//este es el codigo que tu hiciste, colocado donde yo creo que debe ir
function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Miguel</p>
      </header>
      <main className="App-main">
        {" "}
        <Button
          // click={() => navigate(-1) || navigate("/")}
          // withstyles={false}
          text="Registrate"
          // icon="arrow left"
        ></Button>
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <Button
            // click={() => navigate(-1) || navigate("/")}
            // withstyles={false}
            text="Enviar"
            // icon="arrow left"
          ></Button>
        </form>
      </main>
      <footer className="App-footer">
        {" "}
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Login;
