import logo from '../../assets/images/logo.png'
import { FC } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: FC<HeaderProps>  = ({ isScrolled }) => {
  return (
    <div className={`w-screen flex justify-center transition-all duration-300  bg-transparent ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      <div className='w-[60rem] flex justify-between my-[1rem] '>
        <div className=' flex'>
            <img src={logo} alt="my logo" className='w-[2rem] md:w-[3rem] lg:w-[3rem] xl:w-[3rem] 2xl:w-[3rem] md:h-[2.5rem] lg:h-[2.5rem] xl:h-[2.5rem] 2xl:h-[2.5rem] h-[1.9rem]' />
            <h1 className='mt-1 md:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.5rem] text-customBlue  font-semibold'>CollegeDreams</h1>
        </div>
        <div className='text-white flex gap-[.7rem] font-semibold'>
          <button className='bg-customBlue hover:bg-blue-600 md:px-[1.5rem] lg:px-[1.5rem] xl:px-[1.5rem] 2xl:px-[1.5rem] px-[.5rem] py-[.5rem] rounded-md'>Login</button>
          <button className='bg-customBlue hover:bg-blue-600  md:px-[1.5rem] lg:px-[1.5rem]  xl:px-[1.5rem] 2xl:px-[1.5rem] px-[.5rem] py-[.5rem] rounded-md'>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Header