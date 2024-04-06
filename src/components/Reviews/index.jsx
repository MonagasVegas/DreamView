import { Link } from "react-router-dom";
import ContainerPop from "../ContainerPop";
import Input from "../Input";
import Header from "../Header";

const Reviews = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <ContainerPop
          title="Reseña de peliculas"
          subtitle="Deja tu opinión"
          body={
            <>
              <div className="flex justify-center w-full py-5">
                <form
                  // onSubmit={handleSubmit}
                  className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3"
                >
                  <div>
                    <Input name="movie" label="Seleccione pelicula" />
                  </div>
                  <div>
                    <Input label="Nombre completo" name="name" />
                  </div>
                  <div>
                    <Input label="E-mail" name="mail" />
                  </div>

                  <div>
                    <Input label="Reseña" name="description" />
                  </div>

                  <div className=" ml-5 flex items-center justify-center gap-2 w-96 xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row">
                    <button
                      className="py-2 w-1/2 sm:w-80 lg:w-80 font-semibold rounded-md border-2 border-primary text-white"
                      type="submit"
                    >
                      Finalizar
                    </button>

                    <Link
                      to="/"
                      className="flex items-center py-3 justify-center w-full text-gray-400 font-normal text-md  hover:text-gray-600"
                    >
                      Reiniciar
                    </Link>
                  </div>
                </form>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default Reviews;
