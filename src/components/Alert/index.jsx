import eticket from "../../assets/images/eticket.png";

const Alert = () => {
  return (
    <div className="bg-[#282828] fixed top-0 left-0 w-screen h-screen ">
      <div className="py-[100px] ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">
            Comprar ticket
          </h3>
          <h1 className="text-3xl font-bold mb-4 text-white">
            ¡Felicitaciones Juan!
          </h1>
        </div>

        <div className="flex justify-center py-5">
          <img src={eticket} alt="" className="w-56" />
        </div>

        <div className="flex flex-col justify-center items-center py-2">
          <span className="font-normal not-italic text-lg text-white">
            Tu entrada para la función{" "}
          </span>
          <span className="font-normal not-italic text-lg text-white ">
            a las ha sido canjeada.{" "}
          </span>
        </div>

        <div className="items-center flex justify-center py-4">
          <span className="font-normal not-italic text-lg text-white  ">
            !Te esperamos!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
