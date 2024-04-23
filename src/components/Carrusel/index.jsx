import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  Autoplay,
} from "swiper/modules";

import jho from "../../assets/images/jho.jpg";
import legend from "../../assets/images/legend.jpg";
import avengers from "../../assets/images/avengers.jpg";
import play from "../../assets/images/play.png";
import start from "../../assets/images/start.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carrusel = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/buyFunction");
  };

  return (
    <>
      <div className=" w-full py-5 ">
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Scrollbar,
            Autoplay,
          ]}
          className="mySwipe"
           loop={true}
          spaceBetween={50}
         navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="slider-item ">
            <div className="flex w-full h-full sm:px-20 md:px-20 lg:px-20">
              <div className=" w-full  lg:relative">
                <div>
                  <img
                    src={jho}
                    alt=""
                    className=" w-full md:w-56 md:absolute lg:w-56 lg:absolute"
                  />
                </div>

                <div className="flex-col ml-[210px]  px-5 py-5 rounded-md bg-[#8b9b94]  bg-opacity-25 border-4 border-primary hidden md:block sm:block lg:block ">
                  <h1 className="text-5xl font-bold mb-4 text-black border-b-2 border-black ">
                    John Wick 4
                  </h1>
                  <div className=" py-5   ">
                    <p className="text-black ">
                      John Wick 4 comienza con el personaje del título (Keanu
                      Reeves) huyendo de nuevo mientras tiene a cientos de
                      asesinos pisándole los talones. El villano principal de la
                      serie es el Marqués de Gramont (Bill Skarsgård), un líder
                      de la Alta Mesa que sigue aumentando la recompensa por la
                      cabeza de Wick mientras también arregla algunos asuntos
                      dentro de la organización, incluyendo la posible
                      eliminación de Winston Scott (Ian McShane) y algunas de
                      las decisiones que tomó en el pasado.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-2 xs:block sm:hidden md:hidden lg:hidden ">
                  <h1 className="text-3xl font-normal  text-white ">
                    John Wick 4
                  </h1>
                </div>
                <div className="flex justify-center gap-10 lg:ml-52 py-10">
                  <div className=" justify-center">
                    <a href="https://www.youtube.com/watch?v=qEVUtrk8_B4"  target="_blank">
                    <img src={play} className="w-14" alt="" />
                    </a>
                  </div>
                  <div
                    onClick={handlePurchase}
                    className="flex-col justify-center items-center cursor-pointer"
                  >
                    <img
                      src={start}
                      className="w-20 ml-3 mt-1 items-center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="flex w-full h-full sm:px-20 md:px-20 lg:px-20">
              <div className=" w-full lg:relative">
                <div>
                  <img
                    src={legend}
                    alt=""
                    className="w-full md:w-56 md:absolute lg:w-56 lg:absolute"
                  />
                </div>

                <div className="flex-col ml-[210px]  px-5 py-5 rounded-md bg-[#8b9b94]  bg-opacity-25 border-4 border-primary hidden md:block sm:block lg:block ">
                  <h1 className="text-5xl font-bold mb-4 text-black border-b-2 border-black ">
                    I Am Legend
                  </h1>
                  <div className=" py-5   ">
                    <p className="text-black ">
                      Año 2012. Robert Neville es un brillante científico, que,
                      sin embargo, no ha podido impedir la expansión de un
                      incurable virus creado por el hombre. Neville,
                      inexplicablemente inmune al contagio, es el último
                      superviviente humano de la ciudad de Nueva York y, quizá,
                      del mundo. Pero Neville no está completamente solo.
                      Víctimas mutantes de la plaga merodean en las sombras,
                      vigilando cada uno de los movimientos del científico y
                      esperando que cometa un error fatal para beber su sangre.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-2 xs:block sm:hidden md:hidden lg:hidden ">
                  <h1 className="text-3xl font-normal  text-white ">
                    I Am Legend
                  </h1>
                </div>
                <div className="flex justify-center gap-10 lg:ml-52 py-10">
                  <div className=" justify-center">
                  <a href="https://www.youtube.com/watch?v=sFNPNT_4Qww"  target="_blank">
                    <img src={play} className="w-14" alt="" />
                  </a>
                  </div>
                  <div
                    onClick={handlePurchase}
                    className="flex-col justify-center items-center cursor-pointer"
                  >
                    <img
                      src={start}
                      className="w-20 ml-3 mt-1  items-center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="flex w-full h-full sm:px-20 md:px-20 lg:px-20">
              <div className="w-full lg:relative">
                <div>
                  <img
                    src={avengers}
                    alt=""
                    className="w-full md:w-56 md:absolute lg:w-56 lg:absolute"
                  />
                </div>

                <div className="flex-col ml-[210px]  px-5 py-5 rounded-md bg-[#8b9b94]  bg-opacity-25 border-4 border-primary hidden md:block sm:block lg:block ">
                  <h1 className="text-5xl font-bold mb-4 text-black border-b-2 border-black ">
                    The Avengers
                  </h1>
                  <div className=" py-5   ">
                    <p className="text-black ">
                      Cuando un enemigo inesperado surge como una gran amenaza
                      para la seguridad mundial, Nick Fury, director de la
                      Agencia SHIELD, decide reclutar a un equipo para salvar al
                      mundo de un desastre casi seguro. Adaptación del cómic de
                      Marvel "Los Vengadores", el legendario grupo de
                      superhéroes formado por Ironman, Hulk, Thor y el Capitán
                      América entre otros.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-2 xs:block sm:hidden md:hidden lg:hidden ">
                  <h1 className="text-3xl font-normal  text-white ">
                    The Avengers
                  </h1>
                </div>
                <div className="flex justify-center gap-10 lg:ml-52 py-10">
                  <div className=" justify-center">
                  <a href="https://www.youtube.com/watch?v=yNXfOOL8824"  target="_blank">
                    <img src={play} className="w-14" alt="" />
                  </a>
                  </div>
                  <div
                    onClick={handlePurchase}
                    className="flex-col justify-center items-center cursor-pointer"
                  >
                    <img
                      src={start}
                      className="w-20 ml-3 mt-1 items-center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
