import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,

  } from "../components/ui/carousel"
  import { type CarouselApi } from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type Prop =React.PropsWithChildren<{}>

const AuthenticatationLayout =({children}:Prop)=>{


    return (
        <div className=" h-[100vh] w-[100%]  flex items-center">
            {/* image background */}
            {/* <div className="auth_background w-[50%] h-[100%] py-[40px] px-[27px]"
            // style={{'border':'1px solid red'}}
            >
                <img src="/Logowhite.svg" alt="logo" />
            </div> */}
            <SliderImage />

            <div className="w-[60%]">
                {/* content here */}
                {children}
            </div>

        </div>
    )
}

export default AuthenticatationLayout;



const SliderImage =()=>{
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
    
    return (
        <Carousel className="w-[50%] relative "  setApi={setApi}
        plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
                 {/*  */}
             
            
        <CarouselContent className="h-[100vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} 
            style={{
                backgroundImage:`url(/loginimage/${index+1}.png)`
            }}
            className="auth_background relative   h-[100%] w-[100%] py-[40px] px-[27px]"
            >
                <img src="/Logowhite.svg" alt="logo" />

                <div className="w-[89.51px] flex gap-[3.75px] items-center absolute bottom-[70px] left-[50%]">
                    {
                        // @ts-ignore
                        [...new Array(6)].map((d:any,index)=>(
                            <div 
                            key={index}
                            onClick={()=>{
                                if(!api)return
                                console.log(index+1)
                                api.scrollTo(index)
                            }}
                            className={`
                            cursor-pointer
                            ${
                                (index+1)===current?
                                'w-[17.75px] h-[7.55px] rounded-[3.4px] bg-primary50':
                                'w-[10.58px] h-[10.2px] rounded-[5.1px] bg-[#FFFFFF]'
                            }
                            `}
                            ></div>
        
                        ))
                    }
                    
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    )
}