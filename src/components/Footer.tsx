import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-sky-900 text-white border-t-4 hover:bg-sky-800 transition duration-1000 flex flex-row justify-center">
        <div className="pt-5 pb-5">
          Kaique Miranda - 2023 |
          <a href="https://github.com/KaiqueBM">
            <span className="bg-gray-800 p-2 pl-5 pr-5 rounded-xl border-4 border-gray-900 text-white ml-2 mr-2 hover:bg-gray-900 hover:border-gray-900 transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              <BsGithub className="inline-block text-xl -mt-1" /> GITHUB
            </span>
          </a>
          <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
            <span className="bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 hover:bg-sky-900 hover:border-sky-900 transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              <BsLinkedin className="inline-block text-xl -mt-1 mr-2" />
              LINKEDIN
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
