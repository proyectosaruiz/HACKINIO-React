import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Hackinions from "./views/Hackinions/Hackinions";
import Login from "./views/Login/Login";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { HackinionsPage } from "./pages/HackinionsPage";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Hackinions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Hackinions/:id" element={<HackinionsPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
