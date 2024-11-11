import { FC } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";


import { Link } from 'react-router-dom';









const Contact: FC = () => {

   
    

  return (
    <div className='flex justify-center w-full pb-[5rem]'>
    <div className='   mt-[15rem] w-[60rem] 2xl:w-[80rem]'>
    <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Get In Touch !</h1>
        <p className='text-gray-400 mt-7'>Have Questions about  <span className='text-customBlue font-semibold'>CollegeDreams</span>? Get in Touch Anytime!</p>
        </header>

        <main className='mt-[3rem] flex'>
        <section className='w-[50%]'>
          <h1 className='text-[1.25rem] font-semibold'>Contact Details
          </h1>

          <p className='text-[.88rem]'>
          Have questions or need assistance? Reach out to us for personalized support, inquiries, or to learn more about how our platform can transform your school's operations. We're just a call or email away.


          </p>
          <div className='flex gap-2 mt-[2rem]'>
            <div className=' flex justify-center items-center '>
            <AiOutlineMail className='text-[2rem] font-thin	'/>
            </div>
          
          <div>
            <p>Email</p>
            <Link to={"mailto:info@mware.ng"} className='text-customBlue'>info@mware.ng</Link >
          </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <div className=' flex justify-center items-center '>
            <FiPhone className='text-[2rem] font-thin	'/>
            </div>
          
          <div>
            <p>Phone</p>
            <Link  to={"tel:+234-8057271994"} className='text-customBlue'>+234-8057271994</Link >
          </div>
          </div>
        </section>
        <section className='w-[50%] flex justify-center'>
          <div className='flex flex-col gap-5 p-[2rem] rounded-md border border-gray-100'>
<div className='flex gap-5  '>
<div>
  <label htmlFor="">Your Name <span className=' text-red-600'>*</span>
  </label>
  <div className="relative flex items-center">
  <GoPerson  className="absolute left-3 text-gray-500 text-lg"/>

  <input type="text"
   placeholder='First Name :'
   className="pl-10 pr-4 py-2 border-[1px] border-gray-300 focus:border-CustomBlue rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-700"
   />
  </div>
</div>
<div>
  <label htmlFor="">Your Email <span className=' text-red-600'>*</span>
  </label>
  <div className="relative flex items-center">
  <GoPerson  className="absolute left-3 text-gray-500 text-lg"/>

  <input type="text"
   placeholder='First Name :'
   className="pl-10 pr-4 py-2 border-[1px] border-gray-300 focus:border-CustomBlue rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-700"
   />
  </div>
</div>
</div>
<div>
  <p>Comments</p>
  <div className="relative flex items-center">
  <TbMessageCircle  className="absolute left-3 text-gray-500 text-lg"/>

  <input type="text"
   placeholder='First Name :'
   className="pl-10 pr-4 py-2 border-[1px] border-gray-300 focus:border-CustomBlue rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-700"
   />
  </div>
  
</div>
<div>
<button className='flex justify-center rounded-md items-center h-[2.6rem] w-full text-white bg-[#1D4ED8] hover:bg-blue-800'>Send Message </button>
</div>
</div>
        </section>
        </main>
        <footer></footer>
    </div>
    </div>
  )
}

export default Contact



