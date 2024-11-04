import { useState,FC,useEffect } from 'react';
import client1 from '../../assets/images/client/01.png'
import client2 from '../../assets/images/client/02.png'
import client3 from '../../assets/images/client/03.jpg'
import client4 from '../../assets/images/client/04.png'
import photo from '../../assets/images/photo.png'
import { IoStar } from "react-icons/io5";


const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

    const totalItems = chat.length;
    const visibleItems = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % totalItems);
    };

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - visibleItems + totalItems) % totalItems);
    // };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Adjust the time interval here (in milliseconds)
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

  return (
    <div>
    <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Testimonials</h1>
        <p className='text-gray-400 mt-7'>What our clients said about <span className='text-customBlue font-semibold'>CollegeDreams</span> Project.</p>
        </header>

        <main>
          <section className='flex'>
          {chat.slice(currentIndex, currentIndex + visibleItems).map((item, i) => (
                            <div key={i} className="flex flex-col items-center w-[15rem]">
                                <img src={item.image} alt="" className="w-full h-auto" />
                                <div className="flex mt-2 text-[#FFD700]">
                                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                                </div>
                            </div>
                        ))}
          </section>
        </main>
        <footer></footer>
    </div>
  )
}

export default Testimonials