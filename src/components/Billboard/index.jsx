import React, { useEffect, useState } from "react";
import Header from "../Header";
import { getFilms } from "../../services/getFilms";
import image from "../../assets/images/image.png";
import pop from "../../assets/images/pop.png";

const Billboard = () => {
  const [filmsData, setfilmsData] = useState([]);

  useEffect(() => {
    getFilms()
      .then((res) => {
        const response = res.data;
        setfilmsData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div className="py-10 px-10">
          <h1 className="text-2xl font-bold mb-4 text-white">En cartelera</h1>
        </div>

        <div style={{ backgroundImage: `url(${pop})`, backgroundRepeat: "no-repeat", backgroundPosition: "right" }} >
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 px-[80px]">
            {filmsData.map((data) => (
              <div key={data.id}  className="w-full cursor-pointer">
                <div className="py-3">
                  <span className="text-white  font-light text-lg items-center justify-center ">
                    {data.Title}
                  </span>
                </div>

                <div className="w-full">
                  <img
                    className="w-screen object-cover rounded-t-md "
                    style={{ aspectRatio: "16/9" }}
                    //  src={data.Poster}
                    src={data.Images[0] || image}
                    alt=""
                  />

                  <div className="bg-primary rounded-b-lg px-5 py-1">
                    <span className="font-normal not-italic text-md text-white ">
                      Comprar ticket
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

           </div>
      </div>
    </>
  );
};

export default Billboard;
