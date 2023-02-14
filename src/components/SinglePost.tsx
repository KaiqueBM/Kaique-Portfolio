import React from 'react'
import Navbar from './Navbar'
import Portfolio from '../assets/app_1.png'

import { BsGithub, BsLinkedin, BsYoutube, BsLaptopFill } from "react-icons/bs";

const SinglePost = () => {
  return (
    <>
        <Navbar />

        <div className=' bg-gray-100'>
        <div className='ml-5 mr-5 text-right pt-10  text-white'>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
        </div>
            <div className='text-center pt-5 text-6xl font-bold'>TITLE LOREM IPSUM</div>
            <div className='ml-5 mr-5 text-justify pt-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam gravida, ac tincidunt odio convallis. Donec venenatis felis et odio tristique facilisis. Praesent varius faucibus nisi ac posuere. Aenean tempor nibh eu enim euismod, quis egestas elit accumsan. Nunc ac gravida nulla, ut tempus urna. Nunc consectetur non ante non tincidunt. Praesent vehicula lectus risus, eu convallis felis dignissim ut. Etiam odio erat, ultricies et leo ut, sagittis fringilla massa. Nullam blandit, turpis ac aliquam hendrerit, justo nisl dapibus arcu, et vulputate dui purus in quam. Donec vehicula est in justo tincidunt varius.</div>
            
            <div className='ml-5 mr-5 pb-10 text-right'>
                <span className='bg-red-500 p-2 pl-5 pr-5 rounded-xl border-4 border-red-600 text-white ml-2 mr-2 hover:bg-red-800 hover:border-red-900 transition cursor-pointer'><BsYoutube className='inline-block text-xl -mt-1 mr-2' />YOUTUBE</span>
                <span className='bg-gray-800 p-2 pl-5 pr-5 rounded-xl border-4 border-gray-900 text-white ml-2 mr-2 hover:bg-gray-600 hover:border-gray-500 transition cursor-pointer'><BsGithub className='inline-block text-xl -mt-1' /> GITHUB</span>
                <span className='bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 hover:bg-sky-800 hover:border-sky-900 transition cursor-pointer'><BsLaptopFill className='inline-block text-xl -mt-1 mr-2' />SITE</span>
            </div>
        
        </div>
        <div className='flex flex-col justify-center pt-5 bg-white border-t-4'>
            <div className='text-center text-3xl p-5'>MAIS IMAGENS</div>

            <div className='flex flex-row justify-center flex-wrap'>
                <div className='w-3/6 p-3 flex-col'>
                    <img className='rounded-xl shadow-lg' src={Portfolio} />
                    <div className='text-center'>Descrição da imagem</div>
                </div>

                <div className='w-3/6 p-3 flex-col'>
                    <img className='rounded-xl shadow-md' src={Portfolio} />
                    <div className='text-center'>Descrição da imagem</div>
                </div>

                <div className='w-3/6 p-3 flex-col'>
                    <img className='rounded-xl shadow-md' src={Portfolio} />
                    <div className='text-center'>Descrição da imagem</div>
                </div>

                <div className='w-3/6 p-3 flex-col'>
                    <img className='rounded-xl shadow-md' src={Portfolio} />
                    <div className='text-center'>Descrição da imagem</div>
                </div>
            </div>
        </div>

        <div className='bg-gray-100 border-bg-white border-t-4 h-40'>
            <div className='flex flex-row flex-wrap justify-center pt-10'>
                <div className='bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 mr-2 cursor-pointer hover:bg-sky-900 hover:border-sky-800 transition hover:-translate-y-2'>VOLTAR PARA A HOME</div>
                <div className='bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 cursor-pointer hover:bg-sky-900 hover:border-sky-800 transition hover:-translate-y-2'>OUTROS PROJETOS</div>
            </div>

        </div>
    </>
  )
}

export default SinglePost