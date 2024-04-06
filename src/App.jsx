import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Billboard from "./components/Billboard";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/billboard' element={<Billboard />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
