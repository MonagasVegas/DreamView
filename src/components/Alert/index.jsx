import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import eticket from "../../assets/images/eticket.png";

const Alert = () => {
  const { state } = useLocation();

  const formattedDate = new Date(state.date).toISOString().split("T")[0];
  const date = new Date(state.date);
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    <div className="bg-[#282828] fixed top-0 left-0 w-screen h-screen ">
      <div className="py-[100px] ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">
            Comprar ticket
          </h3>
          <h1 className="text-3xl font-bold mb-4 text-white">
            ¡Felicitaciones {state.name}!
          </h1>
        </div>

        <div className="flex justify-center py-5">
          <img src={eticket} alt="" className="w-56" />
        </div>

        <div className="flex flex-col justify-center items-center py-2">
          <span className="font-normal not-italic text-lg text-white">
            Tu entrada para la función {formattedDate}
          </span>
          <span className="font-normal not-italic text-lg text-white ">
            a las {`${hour} : ${minute}`} ha sido canjeada.
          </span>
        </div>

        <div className="items-center flex justify-center py-4">
          <span className="font-normal not-italic text-lg text-white  ">
            !Te esperamos!
          </span>
        </div>
        <div className="w-full flex justify-center py-10">
          <Link
            to="/"
            className="py-2 flex justify-center w-40 font-semibold rounded-md border-2 border-primary text-white"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alert;
