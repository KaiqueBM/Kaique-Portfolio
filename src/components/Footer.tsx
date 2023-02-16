import { BsGithub, BsLinkedin, BsFolderFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-sky-900 text-white border-t-4 hover:bg-sky-800 transition duration-1000 flex flex-row justify-center">
        <div className="pt-5 pb-5">
          <span className="font-roboto font-semibold">Kaique Miranda - 2023 |</span>
          <a href="https://github.com/KaiqueBM">
            <span className="font-poppins w-44 bg-white p-2 pl-5 pr-5 rounded-xl border-2 border-black text-black ml-1 mr-1 hover:bg-black hover:text-white transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              <BsGithub className="inline-block text-xl -mt-1" /> GITHUB
            </span>
          </a>
          <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
            <span className="font-poppins w-44 bg-white p-2 pl-5 pr-5 rounded-xl border-2 border-black text-black ml-1 mr-1 hover:bg-black hover:text-white transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              <BsLinkedin className="inline-block text-xl -mt-1 mr-2" />
              LINKEDIN
            </span>
          </a>
          <a href="https://github.com/KaiqueBM/kaka-portfolio">
            <span className="font-poppins w-44 bg-white p-2 pl-5 pr-5 rounded-xl border-2 border-black text-black ml-1 mr-1 hover:bg-black hover:text-white transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              <BsFolderFill className="inline-block text-xl -mt-1 mr-2" />
              REPOSITÓRIO
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
