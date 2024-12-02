
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import laptop from '../../assets/images/dashboard.png'
import rect from '../../assets/images/Rectangle 1.svg'

const Clients = () => {
    const images = [
        {
            image: <HiOutlineComputerDesktop />,
            title: "Easy To Use",
            details1: 'Intuitive Design for Seamless Navigation.',
            details2: 'Get Started in No Time!'
        },
        {
            image: <CgCalendarDates />,
            title: "Daily Reports",
             details1: 'Stay Informed with Real-Time Insights.',
             details2: 'Daily Reports at Your Fingertips!'
        },
        {
            image: <MdOutlineAccessTime />,
            title: "Any time, any where",
             details1: 'Access Your information Anytime,',
             details2: 'Anywhere. Stay Connected to Your',
             details3: "School's Progress!"
        },


    ]

    const services = [
        {
            icon:<FiSmartphone />,
            title: "E-Learning",
            details: "Make learning easier and smarter for your students anytime, anywhere with our e-learning feature."
        },
        {
            icon:<GrDocument />,
            title: "Results collation",
            details: "With CollegeDreams, you can easily collate the results of your students"
        },
        {
            icon:<MdMailOutline />,
            title: "Email Notification",
            details: "Send e-mail notifications and Bulk SMS to psrents"
        },
    ]
  return (
    <div className=' text-gray-400 flex flex-col items-center justify-center  h-[40svh] overflow-none md:mt-[20rem] lg:my-[20rem] xl:my-[20rem] 2xl:my-[20rem] mt-[50rem]'>
        
      
        <section id="kolo" className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[5rem]">
          {images.map((item, index) => (
              <div key={index} className=" group flex flex-col items-center ">
                <article className="relative ">
                            {/* Rotating Background Box */}
                            <div className="w-[4rem] h-[4rem] bg-blue-50 rounded-md   p-4 transition-transform duration-300 group-hover:animate-slowRotate"></div>
                            
                            {/* Static Icon in Front */}
                            <div className="absolute text-4xl text-customBlue mt-[-2rem] font-bold mr-[-1rem]">
                                {item.image}
                            </div>
                        </article>
              <h3 className="mt-2">{item.title}</h3>
              <p>{item.details1}</p>
              <p>{item.details2}</p>
              <p>{item?.details3}</p>
          </div>
          ))}
        </section>
        <section className="mt-[11rem] mb-[35rem] md:mb-0 xl:mb-0 2xl:mb-0 lg:mb-0  md:flex lg:flex xl:flex 2xl:flex justify-center gap-[2rem]">
            <article className="md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] text-center nunito ">
                <h2 className="text-black text-3xl">Our Main Services</h2>
                <p className="">CollegeDreams is one powerful software that contains all the tools needed to run a successful school.</p>
            <div>
                {services.map((item,index)=>(
                    <div key={index} className="flex gap-3 mb-[2rem]">
                    <div className="flex items-center text-3xl text-customBlue font-bold">{item.icon}</div>
                    <div>
                    <h2 className="font-semibold text-gray-600 mb-2 text-[1.2rem] ">{item.title}</h2>
                    <p>{item.details}</p>
                    </div>
                    </div>
                ))}
            </div>
            </article>
            <article className="relative md:w-[42%] lg:w-[42%] xl:w-[42%] 2xl:w-[42%] nunito flex items-center justify-center">
  {/* First image (Background Rectangle) */}
  <img
    src={rect}
    
    alt="Rectangle background"
    className="absolute w-[40rem] m ml-[6rem] h-auto md:max-w-none  z-0 opacity-10"
  />
  {/* Second image (Laptop) */}
  <img
    src={laptop}
    alt="Laptop"
    className="h-auto 2x md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 mb-[10rem] z-10 ml-[10rem]"
  />
</article>
        </section>
    </div>
  )
}

export default Clients