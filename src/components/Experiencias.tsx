import { Fade } from "react-awesome-reveal";

const Experiencias = () => {
  return (
    <div className="text-black" id="experiencias">
      <div className="text-center p-5 text-5xl font-poppins  font-bold">
        EXPERIÊNCIAS{" "}
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-left text-2xl text-black bg-slate-300 lg:w-6/12 w-11/12 pl-3 pr-3 pt-2 pb-2 rounded-r-lg border-l-4 border-sky-900 font-poppins font-semibold uppercase">
          Formação acadêmica
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            Graduação em{" "}
            <span className="font-bold">Ciências da Computação</span>
          </div>
          <div>Inicio: fev/2019 - Conclusão: dez/2022</div>
          <div>Universidade Cidade de São Paulo | UNICID</div>
        </div>

        <div className="text-left text-2xl text-black bg-slate-300 lg:w-6/12 w-11/12 pl-3 pr-3  pt-2 pb-2 rounded-r-lg  border-l-4 border-sky-900 font-poppins font-semibold uppercase">
          Experiência profissional
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">OLX BRASIL</span> - Empresa de
            classificados
          </div>
          <div>
            Estágio Analista em desenvolvimento de sistemas | Nov/2021 -
            Dez/2022
          </div>
          <div>
            + Atuação no Time de operações da Anapro - Desenvolvimento de
            instâncias para incorporadoras;
          </div>
          <div>+ Administração de projetos e gerenciamentos de atividades;</div>
          <div>
            + Desenvolvimentos de templates para os contratos (utilizando HTML,
            CSS, Javascript e linguagem própria do sistema);
          </div>
          <div>+ Relacionamento com clientes.</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">ONLAB STUDIO</span> - Agência de
            freelancer de desenvolvimento de softwares
          </div>
          <div>Estágio em desenvolvimento Web | Ago/2021 - Nov/2021</div>
          <div>
            + Criação e desenvolvimento de sites responsivos; Atuação no
            front-end (HTML, CSS, Javascript, Bootstrap, React);
          </div>
          <div>
            + Desenvolvimento de temas para sites em Wordpress (PHP, Javascript,
            Ajax, jQuery);
          </div>
          <div>
            + Principal projeto Yappi:{" "}
            <a className="font-semibold" href="https://www.yappi.com.br/">
              https://www.yappi.com.br/
            </a>
          </div>
        </div>

        <div className="text-left text-2xl text-black bg-slate-300 lg:w-6/12 w-11/12 pl-3 pr-3  pt-2 pb-2 rounded-r-lg  border-l-4 border-sky-900 font-poppins font-semibold uppercase">
          Certificados
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Curso desenvolvimento Web Full Stack{" "}
            </span>{" "}
            - ProgramadorBR
          </div>
          <div>Emissão em setembro/2022;</div>
          <div>
            + Front end: HTML, CSS, Javascript, jQuery, Bootstrap e React;
          </div>
          <div>+ Back end: Firebase, Node Js e Mongo DB;</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Certificado Data visualization
            </span>{" "}
            - Kaggle
          </div>
          <div>Emissão em agosto/2022;</div>
          <div>+ Python e bibliotecas como Matplotlib e seaborn. </div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Certificado Intro Machine Learning
            </span>{" "}
            - Kaggle
          </div>
          <div>Emissão em setembro/2022;</div>
          <div>+ Python e bibliotecas como Pandas e scikit-learn.</div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
