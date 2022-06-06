import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Trabalhos } from "./pages/Trabalhos";
import { Skills } from "./pages/Skills";
import { Contato } from "./pages/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
