import { Fade } from "react-awesome-reveal";
import Perfil from "../assets/perfil.jpg";

const Sobre = () => {
  return (
    <>
          <div className="text-center p-5 text-5xl font-poppins font-bold">SOBRE</div>
          <div className="flex md:flex-row flex-col justify-center xl:w-7/12 md:w-10/12 w-full mx-auto items-center">
            <div>
              <img
                className="rounded-full mx-auto md:mb-0 mb-5"
                width="180px"
                src={Perfil}
              />
            </div>
            <div className="w-10/12 ml-5 mr-5 text-lg text-justify font-overpass font-light">
              Desenvolvedor Front end com experiência em React.js, JavaScript,
              TypeScript, Styled Components, Tailwind CSS, Bootstrap e consumo
              de APIs REST. Também possuo experiência com PHP e Wordpress e na
              parte do Back end utilizando Node.js e C#. Busco desafios visando
              desenvolvimento profissional, apaixonado em criar novas soluções
              com o uso da tecnologia. Formado em Ciência da Computação.
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center sm:ml-0 ml-10 mt-10">
            <div className="flex flex-col font-overpass">
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl font-semibold">Nome:</span> <br />
                <span className="font-light">Kaique Miranda</span>
              </div>
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl font-semibold">Nascimento:</span> <br />
                <span className="font-light">01/03/2000 - 23 anos</span>
              </div>
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl font-semibold">Local: </span> <br />
                <span className="font-light">São Paulo, SP</span>
              </div>
            </div>

            <div className="flex flex-col font-overpass">
              <a href="https://github.com/KaiqueBM">
                <div className="border-l-4 pl-3 mb-5 ">
                  <span className="uppercase text-xl font-semibold">Github:</span> <br />
                  <span className="font-light">@KaiqueBM</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
                <div className="border-l-4 pl-3 mb-5">
                  <span className="uppercase text-xl font-semibold">Linkedin:</span> <br />
                  <span className="font-light">@KaiqueMiranda</span>
                </div>
              </a>
            </div>
          </div>
    </>
  )
}

export default Sobre