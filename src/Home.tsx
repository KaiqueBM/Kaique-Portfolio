import React from 'react'

import Background from './assets/fundo1.png';
import Perfil from './assets/perfil.jpg';

function Home(){

    return(
        <div>
                <nav className='bg-sky-900 text-white border-b-4'>
                    <ul className='flex flex-row justify-center'>
                        <li className='mr-3 ml-3 p-2'>INICIO</li>
                        <li className='mr-3 ml-3 p-2'>SOBRE</li>
                        <li className='mr-3 ml-3 p-2'>SKILLS</li>
                        <li className='mr-3 ml-3 p-2'>EXPERIÊNCIA</li>
                        <li className='mr-3 ml-3 p-2'>PORTIFÓLIO</li>
                        <li className='mr-3 ml-3 p-2'>CONTATO</li>
                        <li className='mr-3 ml-3 p-2'>ICON GH</li>
                        <li className='mr-3 ml-3 p-2'>ICON LK</li>
                    </ul>
                </nav>

                <div id="fundo">

                    <div className='text-2xl flex flex-col justify-center items-center h-full text-900'>
                        <div className='font-bold'>PORTFOLIO</div>
                        <div className='text-7xl font-extrabold text'>Kaique Miranda</div>
                        <div className='pb-2 pt-2'>Desenvolvedor front-end</div>
                        <div className='border-4 pl-8 pr-8 pt-2 pb-2 rounded-full border-black'>DOWNLOAD CV</div>
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
                    <div className='text-center p-5 text-3xl h-screen'>EXPERIÊNCIA </div>
                </div>

                
        </div>
    )
}

export default Home