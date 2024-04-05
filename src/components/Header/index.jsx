import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate =  useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className="w-full flex justify-between py-2 bg-dark">
      <div  onClick={handleHome}   className="flex flex-col ml-7 w-20 justify-center items-center cursor-pointer">
        <h1 className="text-md text-white bg-turquoise rounded-sm px-2 items-center font-sedgwick ">
          DREAM
        </h1>
        <h1 className="text-md text-white items-center font-serif">VIEW</h1>
      </div>

      <div className="flex gap-5 py-2 mr-7">
        <Link
          to=""
          className="text-gray-500 hover:text-white font-normal text-md items-center justify-center mt-2"
        >
          {" "}
          Destacadas{" "}
        </Link>

        <Link
          to="/billboard"
          className="text-gray-500 hover:text-white font-normal text-md items-center justify-center mt-2 "
        >
          Cartelera
        </Link>
        <Link
          className="bg-primary px-4 py-2 rounded-md text-white font-bold text-md"
          to="/ticket"
        >
          Comprar ticket
        </Link>
      </div>
    </div>
  );
};

export default Header;
