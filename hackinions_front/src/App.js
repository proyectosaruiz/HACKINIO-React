import "normalize.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./views/Hackinions/Home";
import Login from "./views/Login/Login";
import { Footer } from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Who from "./views/Who/Who";
import UserInfo from "./views/User/UserInfo";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/who" element={<Who />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
