import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Input";
import InputSelect from "../../InputSelect";
import { getFilms } from "../../../services/getFilms";
import ContainerPop from "../../ContainerPop";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max + 1);
};

// This function generates the rows and seats randomly.
const generateSeats = () => {
  const result = [];
  const rows = new Set();
  while (rows.size < 5) {
    rows.add(randomNumber(10));
  }

  for (const row of rows) {
    const columns = new Set();
    while (columns.size < 5) {
      columns.add(randomNumber(20));
    }

    for (const column of columns) {
      result.push(`Fila ${row} - Asiento ${column}`);
    }
  }
  return result;
};

const seats = generateSeats();

const BuyFunction = () => {
  const navigate = useNavigate();

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { film, seat, date } = Object.fromEntries(formData);

    navigate("/buyTicket", { state: { film, seat, date } });
  };

  return (
    <>
      <ContainerPop
        title="Comprar ticket"
        subtitle="Selecciona una función"
        body={
          <>
            <div className="flex justify-center w-full py-5">
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3"
              >
                <div>
                  <InputSelect
                    name="film"
                    values={filmsData.map((data) => data.Title)}
                    label="Seleccione pelicula"
                  />
                </div>

                <div>
                  <Input
                    name="date"
                    label="Seleccione funcion"
                    type="datetime-local"
                  />
                </div>

                <div>
                  <InputSelect
                    name="seat"
                    values={seats}
                    label="Seleccione asiento"
                  />
                </div>

                <div className="  flex gap-2 items-center justify-center w-full xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row">
                  <div className="w-56">
                    <button
                      className="py-2 w-full font-semibold rounded-md text-white  border-2 border-primary"
                      type="submit"
                    >
                      Continuar
                    </button>
                  </div>

                  <div className=" w-56">
                    <Link
                      to="/"
                      className="flex items-center py-3 justify-center w-full text-gray-400 font-normal text-md  hover:text-gray-600"
                    >
                      Reiniciar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </>
        }
      />
    </>
  );
};

export default BuyFunction;
