import React, { useEffect, useState } from "react";
import { getFilms } from "../../../services/getFilms";
import image from "../../../assets/images/image.png";

const CurrentBillboard = () => {
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
      <div className="py-10">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-[40px]">
          {filmsData.map((data) => (
            <div key={data.id} className="w-full">
              <div className="w-full">
                <img
                  className="w-screen object-cover rounded-t-md "
                  style={{ aspectRatio: "16/9" }}
                  src={data.Images[0] || image}
                  alt=""
                />
                <div className="bg-primary rounded-b-lg ">
                  <div className="flex flex-col py-2 px-5">
                    <div className="flex gap-3">
                      <span className="text-black font-bold text-lg ">Título:</span>
                      <span className="text-black font-normal text-lg items-center justify-center">
                        {data.Title}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-black font-bold text-lg ">Idioma:</span>
                      <span className="text-black font-normal text-lg items-center justify-center">
                      {data.Language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurrentBillboard;
