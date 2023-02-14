import React, { useState } from 'react'

import Background from './assets/fundo1.png';
import Perfil from './assets/perfil.jpg';
import Portfolio from './assets/home.png'



import Post from './components/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contato from './components/Contato';

import { Fade } from "react-awesome-reveal";



function Home(){

    

    return(
        <div id="home">
                <Navbar />

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

                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4' id="sobre">
                <Fade direction="right"><div className='text-center p-5 text-3xl'>SOBRE</div></Fade>
                    <Fade direction="right">
                    <div className='flex flex-row justify-center w-6/12 mx-auto items-center'>
                        <div><img className='rounded-full mx-auto' width="150px" src={Perfil} /></div>
                        <div className='w-10/12 ml-5 mr-5 text-lg'>Busco desafios visando desenvolvimento pessoal e profissional, atuando na concepção e desenvolvimento
                        de projetos na área de TI, e com isso, transformar e melhorar a vida de todos com o uso da tecnologia,
                        buscando soluções e resultados cada vez melhores.
                        </div>
                    </div>
                    </Fade>
                    <Fade direction="right">
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
                    </Fade>

                    <Fade direction="right">
                    <div className='text-center p-5 text-3xl' id="skills">SKILLS </div>

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
                    </Fade>
                </div>
                
                <div className='text-black' id="experiencias">
                <Fade direction="left">
                    <div className='text-center p-5 text-3xl'>EXPERIÊNCIAS </div>
                    </Fade>
                        
                    <div className='flex flex-col justify-center items-center'>
                    <Fade direction="left" className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>
                    <div>Formação acadêmica</div>
                    </Fade>
                        <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                        <div>
                            <div>Graduação em <strong>Ciências da Computação</strong></div>
                            <div>Inicio: fev/2019 - Conclusão: dez/2022</div>
                            <div>Universidade Cidade de São Paulo | UNICID</div>
                        </div>
                        </Fade>
                    
                    <Fade direction="left" className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>
                    <div >Experiência profissional</div>
                    </Fade>
                    
                    <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                        <div>
                            <div><strong>OLX BRASIL</strong> - Empresa de classificados</div>
                            <div>Estágio Analista em desenvolvimento de sistemas | Nov/2021 - Dez/2022</div>
                            <div>+ Atuação no Time de operações da Anapro - Desenvolvimento de instâncias para incorporadoras;</div>
                            <div>+ Administração de projetos e gerenciamentos de atividades;</div>
                            <div>+ Desenvolvimentos de templates para os contratos (utilizando HTML, CSS, Javascript e linguagem própria do sistema);</div>
                            <div>+ Relacionamento com clientes.</div>
                        </div>
                        </Fade>

                        <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                        <div>
                            <div><strong>ONLAB STUDIO</strong> - Agência de freelancer de desenvolvimento de softwares</div>
                            <div>Estágio em desenvolvimento Web | Ago/2021 - Nov/2021</div>
                            <div>+ Criação e desenvolvimento de sites responsivos; Atuação no front-end (HTML, CSS, Javascript, Bootstrap, React);</div>
                            <div>+ Desenvolvimento de temas para sites em Wordpress (PHP, Javascript, Ajax, jQuery);</div>
                            <div>+ Principal projeto Yappi: <a className='font-semibold' href="https://www.yappi.com.br/">https://www.yappi.com.br/</a></div>
                        </div>
                        </Fade>


                    <Fade direction="left" className='text-center text-2xl bg-sky-600 w-6/12 pl-20 pr-20 pt-2 pb-2 rounded-lg text-white border-4 border-sky-700'>
                    <div>Certificados</div>
                    </Fade>

                    <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mt-5 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                    <div>
                            <div><strong>Curso desenvolvimento Web Full Stack </strong> - ProgramadorBR</div>
                            <div>Emissão em setembro/2022;</div>
                            <div>+ Front end: HTML, CSS, Javascript, jQuery, Bootstrap e React;</div>
                            <div>+ Back end: Firebase, Node Js e Mongo DB;</div>
                        </div>
                        </Fade>

                        <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                        <div>
                            <div><strong>Certificado Data visualization</strong> - Kaggle</div>
                            <div>Emissão em agosto/2022;</div>
                            <div>+ Python e bibliotecas como Matplotlib e seaborn. </div>
                        </div>
                        </Fade>

                        <Fade direction="left" className='bg-slate-100 border-l-4 border-sky-900 p-3 mb-5 w-6/12 rounded-r-lg shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500'>
                        <div>
                            <div><strong>Certificado Intro Machine Learning</strong> - Kaggle</div>
                            <div>Emissão em setembro/2022;</div>
                            <div>+ Python e bibliotecas como Pandas e scikit-learn.</div>
                        </div>
                        </Fade>
                    </div>
                </div>
                

                
                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4' id="portfolio">
                    <Fade direction="right">
                    <div className='text-center p-5 text-3xl'>PORTFÓLIO</div>
                    

                    <div className='flex flex-row flex-wrap ml-5 mr-5 justify-center pb-10'>
                       
                    <Post /><Post /><Post />
                    <Post /><Post /><Post />
                    </div>
                    </Fade>
                </div>

                <Contato />

                <Footer />
                
        </div>
    )
}

export default Home