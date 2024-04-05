import React from 'react'
import { useNavigate } from "react-router-dom";


const BuyFunction = () => {
    const navigate = useNavigate();

    const handleReset = () => {
      navigate("/");
    };

  return (
    <div className="bg-semi-dark fixed w-screen h-screen">
    <div 
    // style={{ backgroundImage: `url(${pop})` }}
    >
      <div className="ml-7 flex flex-col py-5 w-full  xs:ml-0">
        <h1 className="text-2xl font-bold mb-4 text-white">Comprar ticket</h1>
        <span className="font-normal not-italic text-xs text-white -mt-2 ">
          Selecciona una función
        </span>
      </div>

      <div className="flex justify-center w-full py-5">
        <form
          className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3" >
          <div>
            aqui input 4
          </div>

          <div>
            aqui input 2
          </div>

          <div>
            aqui input
          </div>

          <div className="flex gap-5 items-center justify-center w-full xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row">
            <button
              className="py-2 w-1/2 sm:w-full font-semibold rounded-md text-white border border-primary"
              type="submit"
            >
              Continuar
            </button>

            <button
              onClick={handleReset}
              className="w-full text-gray-400 font-normal text-md -mt-1  hover:text-gray-600"
            >
              Reiniciar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BuyFunction;
