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
            <img src={logo} alt="my logo" className=' w-[3rem] h-[2.5rem]' />
            <h1 className='mt-1 text-[1.5rem] text-customBlue  font-semibold'>CollegeDreams</h1>
        </div>
        <div className='text-white flex gap-[.7rem] font-semibold'>
          <button className='bg-customBlue hover:bg-blue-600 px-[1.5rem] py-[.5rem] rounded-md'>Login</button>
          <button className='bg-customBlue hover:bg-blue-600 px-[1.5rem] py-[.5rem] rounded-md'>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Header