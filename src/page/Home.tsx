import Header from "../components/Header"
import laptop from "../assets/images/laptopdashboard.png"
import Clients from "../components/Clients"

const Home = () => {
  return (
    <div  className=" ">
      <div className="h-[90svh] flex items-center flex-col overflow-hidden">
      <header >
        <Header/>
        </header>

        <main className="w-[60rem] flex items-center mt-[10rem] justify-between ">
          <section>
            <article className="text-[3rem]">
            <h2>A free and Complete
            </h2>
            <h2>enterprise solution for
            </h2>
            <h2 className="text-customBlue">Schools</h2>
            </article>
            <article>
          <button className='bg-customBlue text-white  rounded-md '>sign up</button>
          </article></section>
          <section className="">
            <img src={laptop} alt=""className="  relative -mr-[25rem] w-[50rem] max-w-none" /></section>
        </main>
        </div>
        <section>
        <Clients />
        </section>
    </div>
  )
}

export default Home