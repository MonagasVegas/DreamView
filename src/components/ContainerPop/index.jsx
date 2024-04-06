
// eslint-disable-next-line react/prop-types
const ContainerPop = ({ title, subtitle, body }) => {
  return (
    <div className="bg-semi-dark fixed top-0 left-0 w-screen h-screen ">
      <div className="ml-7 flex flex-col py-10 px-7 w-full xs:ml-0 ">
        <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
        <span className="font-normal not-italic text-lg text-white -mt-2">
          {subtitle}
        </span>
      </div>

      <div className="flex justify-center w-full py-5">{body}</div>
    </div>
  );
};

export default ContainerPop;
