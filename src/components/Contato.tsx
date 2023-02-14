

import { BsFillPersonFill } from "react-icons/bs";

import { Fade } from "react-awesome-reveal";

const Contato = () => {
  return (
    <>
        <div className='text-black pb-10' id="contato">
          <Fade direction="left">
                    <div className='text-center p-5 text-3xl'>CONTATOS </div>
                    
                    <div className="container grid grid-cols-3 gap-4 mx-auto">
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>E-mail:</span>
                        <span className='block text-lg'>Kaiquemirandacp@gmail.com</span>
                    </div>
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>Github:</span>
                        <span className='block text-lg'>@KaiqueBM_</span>
                    </div>
                    <div className='bg-gray-100 rounded-r-xl border-l-4 border-sky-900 p-4 shadow-md hover:bg-sky-900 hover:text-white hover:border-slate-100 transition duration-500 cursor-pointer'>
                        <BsFillPersonFill className='inline-block text-2xl -mt-1' /> <span className='text-xl font-bold'>Linkedin:</span>
                        <span className='block text-lg'>@KaiqueMiranda</span>
                    </div>
                    </div>
                    </Fade>
        </div>
    </>
  )
}

export default Contato