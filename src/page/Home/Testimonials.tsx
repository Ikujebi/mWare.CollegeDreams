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
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  client2,
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  client3,
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  client4,
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  photo,
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  photo,
            testimony: ' ',
            client:'',
            office:  '' ,

        },
        {
            image:  photo,
            testimony: ' ',
            client:'',
            office:  '' ,

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
    <div>
    <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Testimonials</h1>
        <p className='text-gray-400 mt-7'>What our clients said about <span className='text-customBlue font-semibold'>CollegeDreams</span> Project.</p>
        </header>

        <main className='mt-[3rem]'>
        <Slider {...settings}>
          {chat.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[15rem]">
              <img src={item.image} alt="" className="w-[12rem] h-[12rem]" />
              <div className="flex mt-2 text-[#FFD700]">
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
              </div>
            </div>
          ))}
        </Slider>
        </main>
        <footer></footer>
    </div>
  )
}

export default Testimonials