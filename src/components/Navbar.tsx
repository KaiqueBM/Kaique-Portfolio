import { useState } from "react";
import { BsGithub, BsLinkedin, BsList } from "react-icons/bs";

const Navbar = () => {
  const [navbar, setNavbar] = useState("hidden");

  function navbarResponsive(e: any) {
    e.preventDefault();
    if (navbar == "hidden") {
      setNavbar("flex");
    }
    if (navbar == "flex") {
      setNavbar("hidden");
    }
  }

  function navbarFechar(e: any) {
    if (navbar == "flex"){
      setNavbar("hidden");
    }
  }

  return (
    <nav className="bg-sky-900 text-white border-b-4 sticky top-0 hover:bg-sky-800 transition duration-1000 z-30 shadow-lg">
      <div className="lg:hidden flex flex-row justify-between items-center">
        <div className="uppercase ml-2 text-xl font-roboto">
          <a href="#home">
            <strong>Portfolio</strong> - Kaique Miranda
          </a>
        </div>
        <BsList
          className="text-5xl m-2 hover:bg-sky-900 cursor-pointer rounded-lg hover:text-sky-100 transition"
          onClick={navbarResponsive}
        />
      </div>
      <ul
        className={`lg:flex lg:flex-row flex-col justify-center items-center ${navbar} transition font-roboto font-semibold`}
      >
        <a href="#home">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              INICIO
            </span>
          </li>
        </a>
        <a href="#sobre">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              SOBRE
            </span>
          </li>
        </a>
        <a href="#skills">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              SKILLS
            </span>
          </li>
        </a>
        <a href="#experiencias">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              EXPERIÊNCIAS
            </span>
          </li>
        </a>
        <a href="#portfolio">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              PORTFÓLIO
            </span>
          </li>
        </a>
        <a href="#cursos">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              CURSOS
            </span>
          </li>
        </a>
        <a href="#contato">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300">
              CONTATO
            </span>
          </li>
        </a>
        <a href="https://github.com/KaiqueBM">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="text-2xl hover:text-sky-200 transition duration-300">
              <BsGithub />
            </span>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
          <li className="mr-3 ml-3 p-2" onClick={navbarFechar}>
            <span className="text-2xl hover:text-sky-200 transition duration-300">
              <BsLinkedin />
            </span>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
