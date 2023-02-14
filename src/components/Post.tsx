import { Fragment, useState } from 'react'
import App1 from '../assets/app_1.png'
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsYoutube, BsLaptopFill, BsXOctagon } from "react-icons/bs";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Post = () => {

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <div className='w-2/6 p-3 rounded-t-xl hover:transform hover:scale-105 transition duration-500' >
        <Fragment>


        
    <div className='relative'>
        <div onClick={handleOpen} className='absolute right-0 bg-sky-600 p-2 rounded-xl mt-2 mr-2 border-4 border-sky-700 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer flex flex-row'>MAIS DETALHES <span className='pt-1 ml-2'><BsPlusCircleFill /></span></div>

        <div className='absolute right-0 bottom-0 mb-3 mr-1 text-right'>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 mr-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
        </div>
        <img className='w-full rounded-t-xl border-b-4' src={App1} />
    </div>
    <div className='bg-sky-900 text-center p-2 text-2xl rounded-b-xl'>TITULO LOREM IPSUM</div>
    
    

<Dialog className='my-auto mx-auto h-screen flex flex-col items-center justify-center bg-transparent backdrop-blur-3xl w-full'
  open={open}
  handler={handleOpen}
  animate={{
    mount: { scale: 1, y: 0 },
    unmount: { scale: 0.9, y: -100 },
  }}
>
  <DialogHeader className='bg-white w-full rounded-t-xl container'>
    <div className='flex flex-row justify-between w-full border-b-4 border-gray-200 pb-4'>
      <div>TITULO DO PROJETO</div>
      <div onClick={handleOpen}><BsXOctagon className='text-3xl' /></div>
    </div>
    
  </DialogHeader>
  <DialogBody className='bg-white rounded-b-xl container' divider>
    <div className='grid grid-cols-2 gap-4'>
      <div>
        <video className='w-full rounded-lg' controls><source src="https://www.youtube.com/watch?v=nwJK-jo91vA&ab_channel=PradipDebnath" type="video/mp4" /></video>
      </div>
      <div>

      <div className='text-right  text-white'>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2  hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2  hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
            <span className='bg-sky-600 border-4 border-sky-700 pl-3 pr-3 rounded-xl ml-2 hover:bg-sky-900 hover:border-sky-800 transition cursor-pointer'>HTML</span>
        </div>
        <div className='font-bold text-xl pb-2 pt-2'>Sobre o projeto:</div>
        <div className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam gravida, ac tincidunt odio convallis. Donec venenatis felis et odio tristique facilisis. Praesent varius faucibus nisi ac posuere. Aenean tempor nibh eu enim euismod, quis egestas elit accumsan. Nunc ac gravida nulla, ut tempus urna. Nunc consectetur non ante non tincidunt. Praesent vehicula lectus risus, eu convallis felis dignissim ut. Etiam odio erat, ultricies et leo ut, sagittis fringilla massa. Nullam blandit, turpis ac aliquam hendrerit.</div>
        <div></div>

        <hr className='border-2 mt-4 mb-6'></hr>

        <div className=' pb-10 text-right'>
                <span className='bg-red-500 p-2 pl-5 pr-5 rounded-xl border-4 border-red-600 text-white ml-2  hover:bg-red-800 hover:border-red-900 transition cursor-pointer'><BsYoutube className='inline-block text-xl -mt-1 mr-2' />VIDEO</span>
                <span className='bg-gray-800 p-2 pl-5 pr-5 rounded-xl border-4 border-gray-900 text-white ml-2 hover:bg-gray-600 hover:border-gray-500 transition cursor-pointer'><BsGithub className='inline-block text-xl -mt-1' /> REPOSITÓRIO</span>
                <span className='bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 hover:bg-sky-800 hover:border-sky-900 transition cursor-pointer'><BsLaptopFill className='inline-block text-xl -mt-1 mr-2' />PROJETO</span>
            </div>
      </div>
    </div>
  </DialogBody>
  
</Dialog>
</Fragment>

</div>

    
  )
}

export default Post