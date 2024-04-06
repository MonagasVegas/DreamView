import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
