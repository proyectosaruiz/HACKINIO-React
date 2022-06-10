// import 'normalize.css';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./views/Login/Login";
import { Footer } from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./views/Hackinions/Home";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
