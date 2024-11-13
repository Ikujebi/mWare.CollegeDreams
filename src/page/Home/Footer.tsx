import logo from '../../assets/images/logo.png'
import { FC } from 'react';
import { AiOutlineMail } from "react-icons/ai";



const Footer: FC  = () => {
  return (
    <div className='w-screen flex justify-center transition-all duration-300  bg-[#2E3440] h-[22rem] items-center'>
      <div className='w-[60rem] flex justify-between my-[1rem] '>
        <section className='w-[30%]'>
        <article className=' flex gap-2'>
            <img src={logo} alt="my logo" className=' w-[2.6rem] h-[2.9rem] rounded-[50%]' />
            <h1 className='mt-1 text-[1.3rem] text-customBlue  font-semibold'>CollegeDreams</h1>
        </article>
        <article>
            <p className='text-gray-400 text-[.9rem]'>CollegeDreams takes the burden of your daily school admin activities.</p>
        </article>
        </section>
        <div className=' text-gray-400 gap-[.7rem] font-semibold'>
          <h1 className='text-white'>
          Newsletter

          </h1>
          <p>Sign up and receive the latest tips via email.</p>
          <p>Write your email <span className='text-red-500'>*</span></p>
          <div className="relative flex items-center mb-[2rem]">
  <AiOutlineMail  className="absolute left-3 text-gray-500 text-lg"/>

  <input type="text"
   placeholder='Your Email :'
   className="pl-10 pr-4 py-2 border-none outline-none bg-[#333846] shadow-2xl rounded-md w-full focus:outline-none focus:ring-0 "
   />
  </div>
  <button className='bg-[#333846] flex justify-center items-center shadow-2xl h-[2.5rem] rounded-md w-full text-customBlue hover:text-white hover:bg-customBlue'>Suscribe</button>
        </div>
        </div>
    </div>
  )
}

export default Footer