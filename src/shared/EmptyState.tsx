import { Button } from "@/components/ui/button"



type EventEmptyState ={
    title?:string;
    content1?:string;
    content2?:string;
    link?:string;
    onBtnClick?:()=>void;
    btnText?:string,
    removeBtn?:boolean

}

const EventEmptyState = ({
    title='No Events Created',
    content1='You have not yet created an event, your created',
    content2=' events will appear here for easy management',
    onBtnClick,
    btnText='Create Event',
    removeBtn=true
}:EventEmptyState)=>{

    return (
    <div className="mt-[3rem] text-center">
    <img
    src="/noticket.svg"
    className="block mb-[1rem] mx-auto"
    alt="" />
    <h2
    className="font-generalSansbold text-grey10 font-[600] text-[18px]  "
    >
        {title}
    </h2>
    <p
    className="font-generalSansMedium text-[1rem] font-[500] py-[0.5rem] 
    "
    >
    <span className="block"> 
        {content1}
    </span>
    <span> 
   {content2}
    </span>
    </p>
    
{
    removeBtn?
    <Button className="block rounded-[1rem] mx-auto mt-[1.5rem] w-[100%] max-w-[296px] !py-[15.5px]"
    onClick={()=>{
        if(onBtnClick){
            onBtnClick()
        }
    
    }}
    >{btnText}</Button>:''
}
    </div>
)
}

export default EventEmptyState