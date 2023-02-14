import React from 'react'

import { BsFillPersonFill, BsChatRightTextFill } from "react-icons/bs";

const Contato = () => {
  return (
    <>
        <div className='text-black pb-10' id="contato">
                    <div className='text-center p-5 text-3xl'>CONTATOS </div>
                    
                    <div className="container grid grid-cols-3 gap-4 mx-auto">
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>E-mail:</span>
                        <span className='block text-lg'>Kaiquemirandacp@gmail.com</span>
                    </div>
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>Github:</span>
                        <span className='block text-lg'>@KaiqueBM_</span>
                    </div>
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>Linkedin:</span>
                        <span className='block text-lg'>@KaiqueMiranda</span>
                    </div>
                    </div>
        </div>
    </>
  )
}

export default Contato