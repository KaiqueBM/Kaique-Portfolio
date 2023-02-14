import React, { useState } from 'react'
import App1 from '../assets/app_1.png'
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Post = () => {


  return (
    <div className='w-2/6 p-3 rounded-t-xl hover:transform hover:scale-105 transition duration-500' >


        
    <div className='relative'>
    <Link to={`/portfolio/teste`}>
        <div className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer flex flex-row'>MAIS DETALHES <span className='pt-1 ml-2'><BsPlusCircleFill /></span></div>
        </Link>
        <div className='absolute right-0 bottom-0 mb-3 mr-1 text-right'>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
        </div>
        <img className='w-full rounded-t-xl border-b-4' src={App1} />
    </div>
    <div className='bg-sky-900 text-center p-2 text-2xl rounded-b-xl'>TITULO LOREM IPSUM</div>
    
    </div>

    
  )
}

export default Post