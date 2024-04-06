import { Link } from "react-router-dom";
import glowingstar from "../../assets/images/glowingstar.png";
import { useLocation } from "react-router-dom";


const ReviewAlert = () => {
  const { state } = useLocation();
  console.log("🐉 ~ ReviewAlert ~ state:", state)

  return (
    <div className="bg-[#282828] fixed top-0 left-0 w-screen h-screen ">
      <div className="py-[100px] ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">
            Reseña de peliculas
          </h3>
          <h1 className="text-3xl font-bold mb-4 text-white">
            ¡Muchas gracias {state.data.name}!
          </h1>
        </div>

        <div className="flex justify-center py-5">
          <img src={glowingstar} alt="" className="w-52" />
        </div>

        <div className="flex flex-col justify-center items-center py-2">
          <span className="font-normal not-italic text-lg text-white">
            Tu reseña sobre la pelicula 
          </span>
          <span className="font-normal not-italic text-lg text-white ">
            ha sido enviada.
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

export default ReviewAlert;
