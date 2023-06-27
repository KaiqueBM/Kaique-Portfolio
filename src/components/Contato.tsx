import { BsFillPersonFill } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contato = () => {
  return (
    <>
      <div className="text-black pb-10" id="contato" >
        <div className="text-center p-5 text-5xl font-poppins font-bold">
          CONTATOS{" "}
        </div>

        <div></div>

        <div className="font-overpass container grid lg:grid-cols-3 gap-4 mx-auto">
          <a href="mailto:Kaiquemirandacp@gmail.com">
            <div className="ml-5 lg:mr-0 mr-5  bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer">
              <BsFillPersonFill className="inline-block text-2xl -mt-1" />{" "}
              <span className="text-xl font-semibold">E-mail:</span>
              <span className="block text-lg">Kaiquemirandacp@gmail.com</span>
            </div>
          </a>
          <a href="https://github.com/KaiqueBM">
            <div className="lg:ml-0 lg:mr-0 mr-5 ml-5 bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer">
              <BsGithub className="inline-block text-2xl -mt-1" />{" "}
              <span className="text-xl font-semibold">Github:</span>
              <span className="block text-lg">@KaiqueBM</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
            <div className="mr-5 lg:ml-0 ml-5 bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer">
              <BsLinkedin className="inline-block text-2xl -mt-1" />{" "}
              <span className="text-xl font-semibold">Linkedin:</span>
              <span className="block text-lg">@KaiqueMiranda</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contato;
