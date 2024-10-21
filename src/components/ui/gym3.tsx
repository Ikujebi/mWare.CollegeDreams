import idemity from "../ayanfe/img/Identityfom Logo 1 1.png";

const gym1 = () => {
  return (
    <div className="bg-[#0068FF] text-white flex flex-col  w-[50%]">
      <section className="flex justify-center pt-4 ">
        <p className="text-[.7rem] text-center mr-2">Powered by</p>
        <img src={idemity} alt="" className="w-4 h-4 mt-2" />
        <div className="ml-1">
          <p className="text-[1.1rem]"> Identityform</p>
          <p className="text-[.5rem] flex justify-end">By Prembly</p>
        </div>
      </section>
      <section className="flex justify-center">
        <img src={idemity} alt="" className=" mt-[2rem] w-[2.5rem] " />
      </section>

      <section className="flex flex-col justify-center items-center mt-[1rem]">
        <p className="mb-2 text-[1.2rem] font-semibold">Welcome to FitUp Gym</p>
        <div className="flex gap-2">
          <button className="bg-black flex items-center rounded-md justify-center w-[6rem] h-[2rem] text-[.7rem] font-semibold">
            Check in
          </button>
          <button className="bg-white text-blue-600 flex items-center rounded-md justify-center w-[6rem] h-[2rem] text-[.7rem] font-semibold">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default gym1;
