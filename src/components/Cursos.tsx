import { Fade } from "react-awesome-reveal";

const Cursos = () => {
  return (
    <div className="text-black" id="cursos">
      <div className="text-center p-5 text-5xl font-poppins  font-bold">
        CURSOS
      </div>

      <div className="flex flex-col justify-center items-center">
       

        <div className="text-left text-2xl text-black bg-slate-300 lg:w-6/12 w-11/12 pl-3 pr-3  pt-2 pb-2 rounded-r-lg  border-l-4 border-sky-900 font-poppins font-semibold uppercase">
          Cursos e certificados
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Curso de VUE 3
            </span>
            - Youtube (Matheus Battisti - Hora de codar)
          </div>
          <div>Jan/2023 - jan/2023</div>
          <div>+ Conceitos de Vue.js;</div>
          <div>+ Inputs, data binding e criação de componentes;</div>
          <div>+ Lifecycle hooks, hierarquia de componentes, diretivas, atributos dinâmicos, métodos, CSS scoped e global, eventos, prop, emit e mais;</div>
          <div>+ Criação de API com JSON server e implementação do Vue Router.</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Criação de temas responsivos com Wordpress
            </span>
            - uDemy (Marcelo Xavier Viera)
          </div>
          <div>Ago/2022 - nov/2022</div>
          <div>+ Estrutura de um tema wordpress;</div>
          <div>+ O loop do Wordpress e explorando a classe WP_Query;</div>
          <div>+ Criação de templates de páginas, página de blog, de pesquisa e mais;</div>
          <div>+ Template parts, theme customizer e internacionalização/localização do tema;</div>
          <div>+ Melhores práticas de segurança, migração do servidor e WP com docker.</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Desenvolvimento Web Full Stack
            </span>
            - ProgramadorBR
          </div>
          <div>Jan/2022 - set/2022</div>
          <div>+ Criar sites com as melhores práticas com HTML, CSS e Javascript;</div>
          <div>+ Utilização de bibliotecas para mais agilidade como Bootstrap e JQuery;</div>
          <div>+ Dominando a criação de aplicativos web com o React e Redux;</div>
          <div>+ Criação de sistemas web dinâmicos e complexos que rodam no backend com Node.Js e desenvolvimento de aplicações REST;</div>
          <div>+ Desenvolvimento de banco de dados utilizando Firebase e MongoDB.</div>
        </div>


        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Certificado Data visualization e Intro Machine Learning
            </span>
            - Kaggle
          </div>
          <div>Ago/2022 - set/2022</div>
          <div>+ Práticas de modelagem de dados com Python;</div>
          <div>+ Criação de tabelas e gráficos utilizando bibliotecas como Matplotlib, Seaborn e Pandas;</div>
          <div>+ Conceitos e primeiros passos de inteligencia artificial em Python com Scikit-learn</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Curso de git e github
            </span>
            - uDemy (Willian Justen de Vasconcellos)
          </div>
          <div>Mai/2022 - mai/2022</div>
          <div>+ Conceitos de git, controle de versão e ciclo de vida</div>
          <div>+ Fazendo commits, visualizando logs e diffs, clonando repositórios e fork;</div>
          <div>+ Ramificação (branch), git stash, revert e conceitos avançados.</div>
        </div>
        

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">
              Aprenda do ZERO a fazer software 
            </span>
            - EuCodo (curso ainda está sendo produzido sempre com novos conteúdos)
          </div>
          <div>Fev/2023 - atualmente</div>
          <div>+ Dominando o C# e .NET;</div>
          <div>+ Criação de banco de dados utilizando SQL server;</div>
          <div>+ Criando sites dinâmicos com Asp.net Core;</div>
          <div>+ Construindo relatórios elegantes com PowerBI.</div>
        </div>
      </div>
      

      
    </div>
  );
};

export default Cursos;
