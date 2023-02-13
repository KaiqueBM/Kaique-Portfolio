import React from 'react'

import Background from './assets/fundo1.png';
import Perfil from './assets/perfil.jpg';
import Portfolio from './assets/home.png'

import App1 from './assets/app_1.png'

import { BsGithub, BsLinkedin } from "react-icons/bs";

function Home(){

    return(
        <div className=''>
                <nav className='bg-sky-900 text-white border-b-4 sticky top-0 hover:bg-sky-800 transition duration-1000'>
                    <ul className='flex flex-row justify-center'>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>INICIO</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>SOBRE</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>SKILLS</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>EXPERIÊNCIAS</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>PORTFÓLIO</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>CONTATO</span></li>
                        <li className='mr-3 ml-3 p-2'><span className='text-2xl hover:text-sky-200 transition duration-300'><BsGithub /></span></li>
                        <li className='mr-3 ml-3 p-2'><span className='text-2xl hover:text-sky-200 transition duration-300'><BsLinkedin /></span></li>
                    </ul>
                </nav>

                <div id="fundo" className=''>

                    <div className='flex flex-row justify-center items-center  h-full'>
                        <div className='mr-5'><img className='transition hover:-translate-y-3.5 duration-500 imagem' src={Portfolio} /></div>

                        <div className='text-3xl flex flex-col justify-center items-center h-full text-900 hover:-translate-y-3.5 transition duration-500 w-2/4'>
                        <div className='font-bold'>PORTFOLIO</div>
                            <div className='text-8xl font-extrabold text'>Kaique Miranda</div>
                            <div className='pb-2 pt-2'>Desenvolvedor front end</div>
                        <div className='border-4 pl-8 pr-8 pt-2 pb-2 rounded-full border-black hover:border-white hover:text-white transition-all duration-500'>DOWNLOAD CV</div>
                    </div>

                    </div>

                    

                    

                </div>

                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4'>
                    <div className='text-center p-5 text-3xl'>SOBRE</div>
                    <div className='flex flex-row justify-center w-6/12 mx-auto items-center'>
                        <div><img className='rounded-full mx-auto' width="150px" src={Perfil} /></div>
                        <div className='w-10/12 ml-5 mr-5 text-lg'>Busco desafios visando desenvolvimento pessoal e profissional, atuando na concepção e desenvolvimento
                        de projetos na área de TI, e com isso, transformar e melhorar a vida de todos com o uso da tecnologia,
                        buscando soluções e resultados cada vez melhores.
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly mt-10'>
                        <div className='flex flex-col'>
                        <div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Nome:</span> <br/>Kaique Miranda</div>
                        <div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Nascimento:</span> <br/>01/03/2000 - 22 anos</div>
                        <div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Local: </span> <br/>São Paulo, SP</div>
                        </div>

                        <div className='flex flex-col'>
                        <div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Github:</span> <br/>Kaique Miranda</div>
                        <div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Linkedin:</span> <br/>Kaique Miranda</div>
                        </div>
                    </div>

                    <div className='text-center p-5 text-3xl'>SKILLS </div>

                    <div className='flex flex-row justify-center text-xl text-white mb-5'>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                        <div className='bg-sky-700 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-800 ml-3 mr-3'>HTML</div>
                    </div>
                </div>

                <div className='text-black'>
                    <div className='text-center p-5 text-3xl'>EXPERIÊNCIAS </div>
                        
                    <div className='flex flex-col justify-center items-center'>
                    <div className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>Formação acadêmica</div>
                        <div className='bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md'>
                            <div>Graduação em <strong>Ciências da Computação</strong></div>
                            <div>Inicio: fev/2019 - Conclusão: dez/2022</div>
                            <div>Universidade Cidade de São Paulo | UNICID</div>
                        </div>
                    

                    <div className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>Experiência profissional</div>
                        <div className='bg-slate-100 border-l-4 border- border-sky-900 p-3 mt-5 w-6/12 rounded-r-lg shadow-md'>
                            <div><strong>OLX BRASIL</strong> - Empresa de classificados</div>
                            <div>Estágio Analista em desenvolvimento de sistemas | Nov/2021 - Dez/2022</div>
                            <div>+ Atuação no Time de operações da Anapro - Desenvolvimento de instâncias para incorporadoras;</div>
                            <div>+ Administração de projetos e gerenciamentos de atividades;</div>
                            <div>+ Desenvolvimentos de templates para os contratos (utilizando HTML, CSS, Javascript e linguagem própria do sistema);</div>
                            <div>+ Relacionamento com clientes.</div>
                        </div>

                        <div className='bg-slate-100 border-l-4 border- border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md'>
                            <div><strong>ONLAB STUDIO</strong> - Agência de freelancer de desenvolvimento de softwares</div>
                            <div>Estágio em desenvolvimento Web | Ago/2021 - Nov/2021</div>
                            <div>+ Criação e desenvolvimento de sites responsivos; Atuação no front-end (HTML, CSS, Javascript, Bootstrap, React);</div>
                            <div>+ Desenvolvimento de temas para sites em Wordpress (PHP, Javascript, Ajax, jQuery);</div>
                            <div>+ Principal projeto Yappi: <a className='transition hover:text-sky-900 hover:font-bold text-gray-600' href="https://www.yappi.com.br/">https://www.yappi.com.br/</a></div>
                        </div>



                    <div className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>Certificados</div>

                    <div className='bg-slate-100 border-l-4 border- border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md'>
                            <div><strong>Curso desenvolvimento Web Full Stack </strong> - ProgramadorBR</div>
                            <div>Emissão em setembro/2022;</div>
                            <div>+ Front end: HTML, CSS, Javascript, jQuery, Bootstrap e React;</div>
                            <div>+ Back end: Firebase, Node Js e Mongo DB;</div>
                        </div>

                        <div className='bg-slate-100 border-l-4 border- border-sky-900 p-3 mb-5 w-6/12 rounded-r-lg shadow-md'>
                            <div><strong>Certificado Data visualization</strong> - Kaggle</div>
                            <div>Emissão em agosto/2022;</div>
                            <div>+ Python e bibliotecas como Matplotlib e seaborn. </div>
                        </div>

                        <div className='bg-slate-100 border-l-4 border- border-sky-900 p-3  mb-5 w-6/12 rounded-r-lg shadow-md'>
                            <div><strong>Certificado Intro Machine Learning</strong> - Kaggle</div>
                            <div>Emissão em setembro/2022;</div>
                            <div>+ Python e bibliotecas como Pandas e scikit-learn.</div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4'>
                    <div className='text-center p-5 text-3xl'>PORTFÓLIO</div>

                    <div className='flex flex-row flex-wrap ml-5 mr-5'>

                        <div className='w-2/6 p-3 rounded-t-xl'>
                            <div className='relative'>
                                <div className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700'>MAIS DETALHES</div>
                                <img className='w-full rounded-t-xl border-b-4' src={App1} />
                            </div>
                            <div className='bg-sky-900 text-center pt-2 pr-2 pl-2 text-2xl'>TITULO LOREM IPSUM</div>
                            <div className='bg-sky-900 p-2 rounded-b-xl text-right'>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                            </div>
                        </div>

                        <div className='w-2/6 p-3 rounded-t-xl'>
                            <div className='relative'>
                                <div className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700'>MAIS DETALHES</div>
                                <img className='w-full rounded-t-xl border-b-4' src={App1} />
                            </div>
                            <div className='bg-sky-900 text-center pt-2 pr-2 pl-2 text-2xl'>TITULO LOREM IPSUM</div>
                            <div className='bg-sky-900 p-2 rounded-b-xl text-right'>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                            </div>
                        </div>
                        <div className='w-2/6 p-3 rounded-t-xl'>
                            <div className='relative'>
                                <div className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700'>MAIS DETALHES</div>
                                <img className='w-full rounded-t-xl border-b-4' src={App1} />
                            </div>
                            <div className='bg-sky-900 text-center pt-2 pr-2 pl-2 text-2xl'>TITULO LOREM IPSUM</div>
                            <div className='bg-sky-900 p-2 rounded-b-xl text-right'>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                            </div>
                        </div>
                        <div className='w-2/6 p-3 rounded-t-xl'>
                            <div className='relative'>
                                <div className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700'>MAIS DETALHES</div>
                                <img className='w-full rounded-t-xl border-b-4' src={App1} />
                            </div>
                            <div className='bg-sky-900 text-center pt-2 pr-2 pl-2 text-2xl'>TITULO LOREM IPSUM</div>
                            <div className='bg-sky-900 p-2 rounded-b-xl text-right'>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                                <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2'>HTML</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                
        </div>
    )
}

export default Home