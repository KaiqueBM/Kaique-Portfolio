import React, { useState } from 'react'

import Background from './assets/fundo1.png';
import Perfil from './assets/perfil.jpg';
import Portfolio from './assets/home.png'
import CV from './assets/Kaique_Miranda_CV.pdf'



import Post from './components/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contato from './components/Contato';

import { Fade } from "react-awesome-reveal";
import Experiencias from './components/Experiencias';

import { Fragment } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";

  import Typist from 'react-typist';

interface Skills{
    name: string,
    nivel: number
}[]

const skills = [
    {
        "name": "GIT",
        "nivel": 3
    },{
    "name": "HTML",
    "nivel": 3
},{
    "name": "CSS",
    "nivel": 3
},{
    "name": "Javascript",
    "nivel": 3
},{
    "name": "Typescript",
    "nivel": 2
},{
    "name": "React",
    "nivel": 2
},{
    "name": "Vue.js",
    "nivel": 2
},{
    "name": "Angular",
    "nivel": 1
},{
    "name": "Bootstrap",
    "nivel": 3
},{
    "name": "Tailwind",
    "nivel": 2
},{
    "name": "Styled-components",
    "nivel": 2
},{
    "name": "Scss",
    "nivel": 1
},{
    "name": "jQuery",
    "nivel": 2
},{
    "name": "PHP",
    "nivel": 2
},{
    "name": "Node.js",
    "nivel": 3
},{
    "name": "C#",
    "nivel": 2
},{
    "name": "Python",
    "nivel": 2
},{
    "name": "MongoDB",
    "nivel": 1
},{
    "name": "Firebase",
    "nivel": 2
},{
    "name": "MySQL",
    "nivel": 2
}
]

//const teste = skills.reverse()

const posts = [{
    "id": 0,
    "title": "Teste titulo",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
    "image": "https://raw.githubusercontent.com/KaiqueBM/catalogo-de-filmes/master/assets/app_1.png",
    "video": "",
    "github": "",
    "project": "",
    "tags": [{
        "name": "HTML"
    },{
        "name": "HTML"
    },{
        "name": "HTML"
    }]
}]

interface Posts{
    id: number,
    title: string,
    description: string,
    image: string,
    video: string,
    github: string,
    project: string,
    tags: any
}[]

console.log(posts)



function Home(){

    

    return(
        <div id="home">
                <Navbar />

                <div id="fundo" className=''>

                    <div className='flex lg:flex-row flex-col justify-center items-center h-full'>
                        <div className='lg:mr-5'><img className='transition hover:-translate-y-3.5 duration-500 imagem lg:w-full w-3/4 mx-auto mt-20' src={Portfolio} /></div>
                        
                        <div className='text-3xl flex flex-col justify-center items-center h-full text-900 hover:-translate-y-3.5 transition duration-500 w-2/4'>
                        <Typist avgTypingDelay={50} className="text-center pb-5 hover:text-gray-800 transition" ><div className='font-bold'>PORTFOLIO</div>
                            <div className='lg:text-8xl text-6xl font-extrabold text'>Kaique Miranda</div>
                            <div className='pb-2 pt-2'>Desenvolvedor front end</div></Typist>
                            <div className='flex lg:flex-row flex-col flex-wrap lg:text-2xl text-center text-base'>
                            <a href={CV} download><div className='border-4 pl-8 pr-8 pt-2 pb-2 lg:mb-0 mb-5 rounded-full border-black hover:bg-black hover:text-white transition-all duration-500 mr-1'>DOWNLOAD CV</div></a>
                            <a href="Mailto:Kaiquemirandacp@gmail.com"><div className='border-4 pl-8 pr-8 pt-2 pb-2 rounded-full border-black hover:bg-black hover:text-white transition-all duration-500 ml-1'>ENTRAR EM CONTATO</div></a>
                            </div>
                            
                    </div>

                    </div>

                    

                    

                </div>

                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4' id="sobre">
                <Fade direction="right"><div className='text-center p-5 text-3xl'>SOBRE</div></Fade>
                    <Fade direction="right">
                    <div className='flex flex-row justify-center w-6/12 mx-auto items-center'>
                        <div><img className='rounded-full mx-auto' width="180px" src={Perfil} /></div>
                        <div className='w-10/12 ml-5 mr-5 text-lg text-justify'>
                        Desenvolvedor Front end com experiência em React.js, JavaScript, TypeScript, Styled Components, Tailwind CSS, Bootstrap e consumo de APIs REST. 
                        Também possuo experiência com PHP e Wordpress e na parte do Back end utilizando Node.js e C#. Busco desafios visando desenvolvimento profissional, apaixonado em criar
                        novas soluções com o uso da tecnologia. Formado em Ciência da Computação.
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
                        <a href="https://github.com/KaiqueBM"><div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Github:</span> <br/>@KaiqueBM</div></a>
                        <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/"><div className='border-l-4 pl-3 mb-5'><span className='uppercase text-xl'>Linkedin:</span> <br/>@KaiqueMiranda</div></a>
                        </div>
                    </div>
                    </Fade>

                    <Fade direction="right">
                    <div className='text-center p-5 text-3xl' id="skills">SKILLS 
                        <Fragment>
                            <Popover placement="bottom">
                                <PopoverHandler>
                                    <Button variant="gradient" className="transition hover:bg-slate-600 p-1 rounded-lg text-base bg-sky-900 ml-3 pl-3 pr-3">LEGENDA</Button>
                                </PopoverHandler>
                                <PopoverContent className="rounded-xl z-50 w-80 text-white uppercase">
                                    <div className='bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-900 ml-3 mr-3 mb-2 text-center'>Básico</div>
                                    <div className='bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-700 ml-3 mr-3 mb-2 text-center'>Intermediário</div>
                                    <div className='bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-500 ml-3 mr-3 mb-2 text-center'>Avançado</div>
                                </PopoverContent>
                                </Popover>
                            </Fragment>
                    </div>

                    <div className='flex flex-row flex-wrap container mx-auto justify-center text-xl text-white mb-5'>
                        {skills.map((skill:Skills, index: number) => (
                            <div key={index}>
                            {skill.nivel === 3 && (<div className='bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-500 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2'>{skill.name}</div>)} 
                            {skill.nivel === 2 && (<div className='bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-700 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2'>{skill.name}</div>)}
                            {skill.nivel === 1 && (<div className='bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-900 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2'>{skill.name}</div>)}
                            </div>
                            
                            ))}
                    </div>



                    <div></div>
                    </Fade>
                </div>
                
                <Experiencias />
                

                
                <div className='flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4' id="portfolio">
                    <Fade direction="right">
                    <div className='text-center p-5 text-3xl'>PORTFÓLIO</div>
                    

                    <div className='flex flex-row flex-wrap ml-5 mr-5 justify-center pb-10'>

                    {posts.map((post:Posts) => (
                                <Post key={post.id} props={post} />
                            
                            ))}
                    </div>
                    </Fade>
                </div>

                <Contato />

                <Footer />
                
        </div>
    )
}

export default Home