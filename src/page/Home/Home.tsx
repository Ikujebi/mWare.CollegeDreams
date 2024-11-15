import { useEffect, useState,FC } from 'react';
import Header from "./Header";
import laptop from "../../assets/images/laptopdashboard.png";
import Clients from "./Clients";
import About from './About'
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const Home: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  

    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  return (
    <div className="">
      <div className="h-[90svh] md:h-[100svh] lg:h-[100svh] xl:h-[100svh] 2xl:h-[100svh] flex items-center flex-col overflow-hidden">
        <header className="fixed  z-20">
          <Header isScrolled={isScrolled} /> {/* Pass the scroll state as a prop */}
        </header>

        <main className="w-[60rem] flex items-center mt-[10rem] justify-between">
          <section>
            <article className="text-[2.6rem] font-semibold">
              <h2>A free and Complete</h2>
              <h2>enterprise solution for</h2>
              <h2 className="text-customBlue">Schools</h2>
            </article>
            <article className='py-[2rem] nunito text-gray-400 nunito text-[1.01rem]'>
              <p>Designed to automate all school processes from online admission,</p>
              <p>student and staff management, result collation, e-payment with</p>
              <p>penney, elearning, online result checker and lots more....</p>
            </article>
            <article className='text-white flex gap-[.7rem] font-semibold'>
              <button className='bg-customBlue hover:bg-blue-600 px-[1.5rem] py-[.5rem] rounded-md'>Login</button>
              <button className='hover:bg-customBlue hover:text-white text-customBlue border border-customBlue px-[1.5rem] py-[.5rem] rounded-md'>Sign Up</button>
            </article>
          </section>
          <section>
            <img src={laptop} alt="Laptop dashboard" className="relative -mr-[25rem] w-[50rem] max-w-none" />
          </section>
        </main>
      </div>
      <section>
        <Clients />
      </section>
      <section>
        <About />
      </section>
      <section className=' '>
        <Testimonials />
      </section>
      <section className=' '>
        <Contact />
      </section>
      <section className=' '>
        <Footer />
      </section>

      {isScrolled && (
        <button
          onClick={isScrolled ? scrollToTop : scrollToNextSection}
          className="fixed bottom-8 right-8 bg-customBlue text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          aria-label={isScrolled ? "Scroll to Top" : "Scroll Down"}
        >
          {isScrolled ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      )}
    </div>
  );
}

export default Home;
