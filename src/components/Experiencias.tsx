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
            <span className="font-semibold">MANAGEMENT SOLUTIONS</span> -
            Empresa de consultoria
          </div>
          <div>Consultor A1 de Data Science | Nov/2023 - Atualmente</div>
          <div>+ Tratamento estatístico de dados e data mining;</div>
          <div>
            + Desenvolvimento de soluções eficientes utilizando Python e SQL;
          </div>
          <div>
            + Modelagem preditiva utilizando técnicas avançadas de machine
            learning e data science;
          </div>
          <div>
            + Revisão e validação de modelos de rating, scoring, RAROC e
            parâmetros de risco.
          </div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">NOT A STARTUP</span> - Startup de
            marketing digital
          </div>
          <div>Desenvolvedor de software | Mar/2023 - Nov/2023</div>
          <div>+ Implementação e manutenção do banco de dados com MongoDB;</div>
          <div>
            + Automatizando e integrando soluções com Python, Javascript e N8N,
            além de gerenciamento de fila de execução com RabbitMQ;
          </div>
          <div>
            + Desenvolvimento de aplicações em Wordpress, utilizando PHP e
            Javascript, inclusive uma área de painéis para consulta de
            relatórios e dashboards criados com o Looker Studio;
          </div>
        </div>

        <div className="font-overpass font-light bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 lg:w-6/12 w-11/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500">
          <div>
            <span className="font-semibold">OLX BRASIL</span> - Empresa de
            classificados
          </div>
          <div>
            Estágio assistente de operações da Anapro | Nov/2021 - Dez/2022
          </div>
          <div>
            + Desenvolvimento de instâncias para incorporadoras, implantação de
            unidades e configuração de fluxo de vendas;
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
          <div>
            Estágio em desenvolvimento web frontend | Ago/2021 - Nov/2021
          </div>
          <div>
            + Criação e desenvolvimento de sites responsivos (HTML, CSS,
            Javascript, Bootstrap, React);
          </div>
          <div>
            + Desenvolvimento de temas para sites em Wordpress (PHP, Javascript,
            Ajax, jQuery);
          </div>
          <div>+ Manutenção e otimizações em páginas de WP.</div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
