import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Billboard from "./components/Billboard";
import Ticket from "./components/TicketPurchase";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/billboard' element={<Billboard />} />
          <Route path='/ticket'  element={<Ticket />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
