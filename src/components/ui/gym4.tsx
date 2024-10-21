import idemity from '../ayanfe/img/Identityfom Logo 1 1.png'
import qrCode from '../ayanfe/img/clarity_qr-code-line.png'

const gym4 = () => {
    return (
      <div className='bg-[#0068FF] text-white flex flex-col  w-[50%]'>
  <section className="flex justify-center pt-4 ">
  <p className="text-[.7rem] text-center mr-2">Powered by</p>
  <img src={idemity} alt="" className='w-4 h-4 mt-2'/>
  <div className='ml-1'>
    <p className='text-[1.1rem]'> Identityform</p>
    <p className='text-[.5rem] flex justify-end'>By Prembly</p>
  </div>
  </section>
  <section className='flex justify-start ml-[1rem]'>
  <img src={idemity} alt="" className=' mt-[2rem] w-[2.5rem] '/>
  </section>
<div className='flex'>
  <section className='flex flex-col justify-center items-center mt-[1rem]'>
    <p className='mb-2 text-[1.2rem] font-semibold'>Welcome to FitUp Gym</p>
    <button className='bg-black flex items-center rounded-md justify-center w-[6rem] h-[2rem]'>Check in</button>
  </section>
  <section>
    <img src={qrCode} alt="" />
  </section>
  </div>
  </div>
    )
  }
  
  export default gym4