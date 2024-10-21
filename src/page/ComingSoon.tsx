import { Button } from "../components/ui/button"
import EventLayout from "../layout/EventLayout"



const ComingSoon = ()=>{


    return (
        <EventLayout>
            <ComingSoonGreeting/>
        </EventLayout>
    )
}

export default ComingSoon
export const ComingSoonGreeting =()=>(
    <div className="flex items-center justify-center h-[90vh]">
                    <div className="max-w-[500px]">
                    <img src="/bunch_of_nice_people.svg" className="block mx-auto" alt="" />
                <h2 className="font-generalSansBold text-[1.125rem] font-[600] text-center mt-[1.5rem] mt-[0.5rem]">Hey there👋🏽</h2>
                <p 
                className="text-center text-[1rem] font-[500] font-generalSansRegular"
                >
                It seems this page is still being built construction, but leave your email with us and we will tell you when we fully launch
                </p>
    
                <div className="flex items-center gap-[0.5rem] mt-[1.5rem]">
                <input type="text"
                    name={'coming-soon'}
                      placeholder="Enter your email address"
            className="w-[100%] md:w-[80%] border-[1px] rounded-[1rem] p-[1rem] outline-none"
    
                      />
                      <Button
                    //   size='sm'
                    className="py-[1rem] px-[2.5rem]  rounded-[1rem] w-[300px]"
                      >Submit</Button>
                </div>
                    </div>
               </div>
    )