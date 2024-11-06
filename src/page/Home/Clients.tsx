
import school1 from "../../assets/images/school1.png"
import school2 from "../../assets/images/school2.png"
import school3 from "../../assets/images/school3.png"

const Clients = () => {
    const images = [school1,school2,school3]
  return (
    <div className='bg-gray-100 text-gray-400 flex flex-col items-center justify-center  h-[40svh] overflow-none'>
        
        <section>Our Trusted Clients
        </section>
        <section >
            <p>Join a growing community of educational institutions that trust our platform to</p>
            
        </section>
        <p>streamline their operations.

</p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:pt-[5rem] pt-[3rem]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`School Image ${index + 1}`}
              className="w-full h-[5rem] md:h-[10rem] lg:h-[10rem] xl:h-[10rem] 2xl:h-[15rem] rounded-[50%]"
            />
          ))}
        </section>
    </div>
  )
}

export default Clients