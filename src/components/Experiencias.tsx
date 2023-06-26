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
            <span className="font-semibold">PROJETOS COMO FREELANCER</span>
          </div>
          <div>+ Atualmente atuando como freelancer para o desenvolvimento de alguns projetos/aplicações;</div>
          <br></br>
          <div>
          <span className="font-semibold">Not a startup</span> | Mar/2023 -
            Atualmente
          </div>
          <div>
            + Atuando na área de desenvolvedor, com funções na parte do backend e frontend;
          </div>
          <div>+ Otimizando e melhorando páginas de WP;</div>
          <div>
            + Automatizando e integrando soluções com Node.js, Javascript, N8N e a lib Baileys;
          </div>
          <div>+ Criação, inserção e manutenção do banco de dados com MongoDB.</div>
              <br></br>
          <div>
          <span className="font-semibold">Federação Paulista de voileibol</span> | Fev/2023 -
            Fev
          </div>
          <div>
            + Desenvolvido um site com as melhores práticas para a FPVD;
          </div>
          <div>
            + Criado sistemas de notícias, clubes e arbítros com PHP.
          </div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">OLX BRASIL</span> - Empresa de
            classificados
          </div>
          <div>
            Estágio assistente de operações da Anapro | Nov/2021 -
            Dez/2022
          </div>
          <div>
            + Desenvolvimento de instâncias para incorporadoras, implantação de unidades e configuração de fluxo de vendas;
          </div>
          <div>
            + Desenvolvimentos de templates para os contratos (utilizando HTML,
            CSS, Javascript e linguagem própria do sistema);
          </div>
          <div>+ Administração de projetos e gerenciamentos de atividades;</div>
          <div>+ Relacionamento com clientes.</div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-10 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">ONLAB STUDIO</span> - Agência de
            marketing e desenvolvimento de aplicações
          </div>
          <div>Estágio em desenvolvimento web frontend | Ago/2021 - Nov/2021</div>
          <div>
            + Criação e desenvolvimento de sites responsivos (HTML, CSS, Javascript, Bootstrap, React);
          </div>
          <div>
            + Desenvolvimento de temas para sites em Wordpress (PHP, Javascript,
            Ajax, jQuery);
          </div>
          <div>
            +  Manutenção e otimizações em páginas de WP.
          </div>
        </div>
        

      </div>
      

      
    </div>
  );
};

export default Experiencias;
