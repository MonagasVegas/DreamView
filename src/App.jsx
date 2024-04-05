import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Billboard from "./components/Billboard";
import Ticket from "./components/TicketPurchase";
import BuyTicket from "./components/TicketPurchase/BuyTicket";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/billboard' element={<Billboard />} />
          <Route path='/ticket'  element={<Ticket />} />
          <Route path='/buyTicket' element={<BuyTicket />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
