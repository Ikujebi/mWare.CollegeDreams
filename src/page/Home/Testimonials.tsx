import { FC } from 'react';
import client1 from '../../assets/images/client/01.png'
import client2 from '../../assets/images/client/02.png'
import client3 from '../../assets/images/client/03.jpg'
import client4 from '../../assets/images/client/04.png'
import photo from '../../assets/images/photo.png'
import { IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";






const Testimonials: FC = () => {

    const chat = [
        {
            image:  client1,
            testimony: '    CollegeDreams is incredibly intuitive and powerful. Since my school joined, my productivity has skyrocketed',
            client:'- ALOTUNSIN SAMUEL (ENGR)',
            office:  ' Admin, Air Force Secondary School, Ikeja - Lagos' ,

        },
        {
            image:  client2,
            testimony: `"Hi. I'm Laurat , a teacher by profession and a good user of Collegedreams app. Thank you Collegedreams for your efforts, resilience and boundless care for our pupils and students. Your impact cannot be measured. We are grateful for everything"`,
            client:'- Mrs. Laurat',
            office:  ' Admin, AFPS Kaduna' ,

        },
        {
            image:  client3,
            testimony: ' " With CollegeDreams, everything is so easy to navigate. Since my school adopted it, my productivity has seen a huge boost"',
            client:'- Mr. Oke Segun',
            office:  'Principal, Hebron Intl College, Lagos' ,

        },
        {
            image:  client4,
            testimony: '"I have been having the opportunity to use CollegeDreams software now as far back as 2012 and it is thoroughly impressed by its comprehensive features and user-friendly design. It is exceptionally efficient, providing clear insights into pupils performance over various periods. The grading system is robust and flexible, accommodating different grading schemes and making it easy to maintain accurate records "',
            client:'- Mrs Bisi Kojo ',
            office:  'Admin, AFPS Shasha - Lagos' ,

        },
        {
            image:  photo,
            testimony: `"Since my school started using CollegeDreams, I've found it extremely user-friendly and effective. My productivity has never been better!"`,
            client:'- Mr. Anderson',
            office:  ' Admin, AFGCS Abuja' ,

        },
        {
            image:  photo,
            testimony:  `" Ever since our school started using CollegeDreams, I've found it to be both user-friendly and highly effective"` ,
            client:'- Flt Ltn Ezekafor ',
            office:  'Admin, AFMS Jos' ,

        },
        
       
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,  // Enable or disable arrows
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };
    

  return (
    <div className='flex justify-center w-full '>
    <div className='   mt-[15rem] w-[60rem] 2xl:w-[80rem]'>
    <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Testimonials</h1>
        <p className='text-gray-400 mt-7'>What our clients said about <span className='text-customBlue font-semibold'>CollegeDreams</span> Project.</p>
        </header>

        <main className='mt-[3rem] '>
        <Slider {...settings}>
          {chat.map((item, i) => (
          <div key={i} className='flex flex-col items-center justify-center gap-1 pb-[4rem]'>
          <div className='flex  w-[3.5rem]'>
              <img src={item.image} alt="" className='w-[3rem] h-[3rem] object-cover rounded-full' />
          </div>
          <div className='bg-gray-100 ml-[3.5rem] rounded-lg shadow-lg pl-1'>
                  <div className="flex  -mt-[3rem] text-[#FFD700] text-[1rem]">
                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                  </div>
                  <div className='mt-4 max-w-xs '>
                    <p className='text-gray-700 text-sm'>{item.testimony}</p>
                  </div>
                  <div className='mt-4 max-w-xs '>
                    <p className='text-gray-700 text-sm'> <span className='text-customBlue font-semibold'>{item.client}</span> {item.office}</p>
                  </div>
                </div>
              </div>
          ))}
        </Slider>
        </main>
        <footer></footer>
    </div>
    </div>
  )
}

export default Testimonials



