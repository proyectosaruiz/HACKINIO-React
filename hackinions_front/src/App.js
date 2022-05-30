import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Hackinions from "./views/Hackinions/Hackinions";
import Login from "./views/Login/Login";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App-container">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hackinions />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
