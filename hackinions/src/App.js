import "./App.css";
import { HackinionsPage } from "./pages/HackinionsPage";
// import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Hackinions from "./views/Hackinions/Hackinions";
import Login from "./views/Login/Login";
// import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App-container">
      {/* <BrowserRouter> */}
      {/* <Header><Header/> */}
      <Routes>
        <Route path="/" element={<Hackinions />} />
        <Route path="/Hackinions/:id" element={<HackinionsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer></Footer>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
