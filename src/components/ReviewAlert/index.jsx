import glowingstar from "../../assets/images/glowingstar.png";

const ReviewAlert = () => {
  return (
    <div className="bg-[#282828] fixed top-0 left-0 w-screen h-screen ">
      <div className="py-[100px] ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">
            Reseña de peliculas
          </h3>
          <h1 className="text-3xl font-bold mb-4 text-white">
            ¡Muchas gracias Juan!
          </h1>
        </div>

        <div className="flex justify-center py-5">
          <img src={glowingstar} alt="" className="w-52" />
        </div>

        <div className="flex flex-col justify-center items-center py-2">
          <span className="font-normal not-italic text-lg text-white">
            Tu reseña sobre la pelicula Jonh Wick 4
          </span>
          <span className="font-normal not-italic text-lg text-white ">
            ha sido enviada.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewAlert;
