import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />
          <Route path="/ma-page" element={<Home />} />
          <Route  path="/formulaire" element={<Form />} />
          <Route path="*" element={<h1>Page 404 !</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
