import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Billboard from "./components/Billboard";
import Ticket from "./components/TicketPurchase";
import BuyTicket from "./components/TicketPurchase/BuyTicket";
import Alert from "./components/Alert";
import BuyFunction from "./components/TicketPurchase/BuyFunction";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/billboard' element={<Billboard />} />
          <Route path='/ticket'  element={<Ticket />} />
          <Route path='/buyTicket' element={<BuyTicket />} />
          <Route path='/alert' element={<Alert />} />
          <Route path='/buyFunction' element={<BuyFunction />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
