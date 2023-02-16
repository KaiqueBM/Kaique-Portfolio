import { Fade } from "react-awesome-reveal";
import Perfil from "../assets/perfil.jpg";

const Sobre = () => {
  return (
    <>
          <div className="text-center p-5 text-3xl">SOBRE</div>
          <div className="flex md:flex-row flex-col justify-center xl:w-7/12 md:w-10/12 w-full mx-auto items-center">
            <div>
              <img
                className="rounded-full mx-auto md:mb-0 mb-5"
                width="180px"
                src={Perfil}
              />
            </div>
            <div className="w-10/12 ml-5 mr-5 text-lg text-justify">
              Desenvolvedor Front end com experiência em React.js, JavaScript,
              TypeScript, Styled Components, Tailwind CSS, Bootstrap e consumo
              de APIs REST. Também possuo experiência com PHP e Wordpress e na
              parte do Back end utilizando Node.js e C#. Busco desafios visando
              desenvolvimento profissional, apaixonado em criar novas soluções
              com o uso da tecnologia. Formado em Ciência da Computação.
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center sm:ml-0 ml-10 mt-10">
            <div className="flex flex-col">
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl">Nome:</span> <br />
                Kaique Miranda
              </div>
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl">Nascimento:</span> <br />
                01/03/2000 - 22 anos
              </div>
              <div className="border-l-4 pl-3 mb-5">
                <span className="uppercase text-xl">Local: </span> <br />
                São Paulo, SP
              </div>
            </div>

            <div className="flex flex-col">
              <a href="https://github.com/KaiqueBM">
                <div className="border-l-4 pl-3 mb-5">
                  <span className="uppercase text-xl">Github:</span> <br />
                  @KaiqueBM
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/">
                <div className="border-l-4 pl-3 mb-5">
                  <span className="uppercase text-xl">Linkedin:</span> <br />
                  @KaiqueMiranda
                </div>
              </a>
            </div>
          </div>
    </>
  )
}

export default Sobre