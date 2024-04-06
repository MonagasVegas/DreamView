import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const BuyTicket = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { film, seat, date } = state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("DATA", data);

    navigate("/alert", { state: { data, film, seat, date } });
  });

  return (
    <div className="bg-semi-dark fixed top-0 left-0 w-screen h-screen">
      <div className="ml-7 flex flex-col py-10 px-7 w-full xs:ml-0 ">
        <h1 className="text-3xl font-bold mb-4 text-white">Comprar ticket</h1>
        <span className="font-normal not-italic text-lg text-white -mt-2">
          Completa tu información personal
        </span>
      </div>

      <div className="flex justify-center w-full py-5">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3"
        >
          <div className="input-field">
            <label>Nombre completo</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un nombre.",
                },
                minLength: {
                  value: 2,
                  message: "Debe ingresar mínimo 4 caracteres.",
                },
                maxLength: {
                  value: 30,
                  message: "Debe ingresar máaximo 20 caracteres.",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="input-field">
            <label>E-mail</label>
            <input
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un correo.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="input-field">
            <label>Teléfono</label>
            <input
              type="text"
              {...register("phone", {
                required: {
                  value: true,
                  message:
                    "Campo requerido, debe ingresar un número teléfonico.",
                },
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: "Número teléfonico no válido.",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-700 font-semibold text-xs py-2 px-3">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="  flex items-center justify-center gap-2 w-full xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row">
            <div className="w-56">
              <button
                className="py-2 w-full font-semibold rounded-md bg-secondary  border-2 border-primary"
                type="submit"
              >
                Finalizar
              </button>
            </div>

            <div className="w-56">
              <Link
                to="/ticket"
                className="flex items-center py-3 justify-center w-full text-gray-400 font-normal text-md  hover:text-gray-600"
              >
                Volver
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;
