import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className='w-[60rem] flex justify-between  mt-[2rem] bg-transparent'>
        <div className=' flex'>
            <img src={logo} alt="my logo" className=' w-[3rem] h-[3rem]' />
            <h1 className='mt-1 text-[1.5rem] text-customBlue  font-semibold'>CollegeDreams</h1>
        </div>
        <div className='text-white flex gap-[1rem] font-semibold'>
          <button className='bg-customBlue px-[1.5rem] py-[.8rem] rounded-md'>Login</button>
          <button className='bg-customBlue px-[1.5rem] py-[.8rem] rounded-md'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header