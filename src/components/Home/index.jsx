import Carrusel from "../Carrusel";
import Header from "../Header";

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <Header />
      </div>

      <div>
        <Carrusel />
      </div>
    </div>
  );
};

export default Home;
