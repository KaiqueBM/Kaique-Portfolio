import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <nav className='bg-sky-900 text-white border-b-4 sticky top-0 hover:bg-sky-800 transition duration-1000 z-30 shadow-lg'>
                    <ul className='flex flex-row justify-center'>
                        <a href="#home"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>INICIO</span></li></a>
                        <a href="#sobre"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>SOBRE</span></li></a>
                        <a href="#skills"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>SKILLS</span></li></a>
                        <a href="#experiencias"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>EXPERIÊNCIAS</span></li></a>
                        <a href="#portfolio"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>PORTFÓLIO</span></li></a>
                        <a href="#contato"><li className='mr-3 ml-3 p-2'><span className='hover:border-b-2 hover:text-sky-200 hover:border-sky-200 transition duration-300'>CONTATO</span></li></a>
                        <a href="https://github.com/KaiqueBM"><li className='mr-3 ml-3 p-2'><span className='text-2xl hover:text-sky-200 transition duration-300'><BsGithub /></span></li></a>
                        <a href="https://www.linkedin.com/in/kaique-miranda-3b5247204/"><li className='mr-3 ml-3 p-2'><span className='text-2xl hover:text-sky-200 transition duration-300'><BsLinkedin /></span></li></a>
                    </ul>
                </nav>
  )
}

export default Navbar