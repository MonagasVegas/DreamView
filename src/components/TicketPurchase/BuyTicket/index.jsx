import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Input";

const BuyTicket = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log("🐉 ~ BuyTicket ~ value:", values);
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  })
  console.log("🐉 ~ BuyTicket ~ errors:", errors)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    

    if (values.name.trim() === "" || values.email.trim() === "" || values.phone.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: true,
        email: true,
        phone: true,
      }));
      return;
    }

    // Restablece los valores después de enviar los datos
    setValues({
      name: "",
      email: "",
      phone: "",
    });

    navigate("/alert");
  };

  return (
    <div className="bg-semi-dark fixed top-0 left-0 w-screen h-screen">
      <div className="ml-7 flex flex-col py-5 w-full xs:ml-0 ">
        <h1 className="text-2xl font-bold mb-4 text-white">Comprar ticket</h1>
        <span className="font-normal not-italic text-xs text-white -mt-2">
          Completa tu informacioón personal
        </span>
      </div>

      <div className="flex justify-center w-full py-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3"
        >
          <div>
            <Input
              name="name"
              value={values.name}
              label="Nombre completo"
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                Campo requerido, debe ingresar un nombre.
              </p>
            )}
          </div>

          <div>
            <Input
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                Campo requerido, debe ingresar un email.
              </p>
            )}
          </div>
          <div>
            <Input
              label="Teléfono"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                Campo requerido, debe ingresar un teléfono.
              </p>
            )}
          </div>

          <div className=" ml-5 flex items-center justify-center gap-2 w-96 xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row">
            <button
              className="py-2 w-1/2 sm:w-80 lg:w-80 font-semibold rounded-md bg-secondary  border-2 border-primary"
              type="submit"
            >
              Finalizar
            </button>

            <Link
              to="/ticket"
              className="flex items-center py-3 justify-center w-full text-gray-400 font-normal text-md  hover:text-gray-600"
            >
              Volver
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;
