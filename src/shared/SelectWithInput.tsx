import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type Prop ={
    label?:string,
    options:{name:string,value:string}[],
    onChange:(value:string)=>void
    selectClassCss?:string,
    placeholder?:string,
    errorMessage?:string,
    dontParseError?:boolean,
    tip?:string,
    iconCss?:string,


}
const SelectWithLabel = ({iconCss,tip,dontParseError=false,label,options=[],onChange,selectClassCss,placeholder='Select option',errorMessage}:Prop)=>{

    return (
        <div className="">
            {
                label?
                <label htmlFor="" className="font-generalSansRegular font-[400]
                text-grey10 text-[0.875rem] pb-[0.5rem] block flex items-center gap-[0.625rem]">
   
                   <span>{label}</span>
                
   
                {
                       tip?
                       <>
                       {/* @ts-ignore */}
                    <Tooltip anchorSelect={`${'#'+label?.replaceAll(' ','-')}`} 
                   style={{backgroundColor:'white','color':'black',boxShadow:'0px 28px 44px 16px #33333326',
                   border: '1px solid #E6E6E6' }}
                   >
                       <p className="text-[.9rem] font-generalSansMedium font-[400]">{tip}</p>
                   </Tooltip>
                       {/* @ts-ignore */}
                   <img src="/info-circle.png" id={label?.replaceAll(' ','-')} className="cursor-pointer" alt="" />
   
                       </>:''
                   }
                </label>:''
            }


             <div className="relative"
            //  style={{'border':'1px solid red'}}
           
             >
                <img src="/selectdropdown.svg"
                 className={`absolute right-[15px] top-[30%] pointer-events-none	${iconCss}`} alt="" />
                <Select
                // className={`border-[#E3E3E3] border-[1.4px] rounded-[1rem] p-[1rem] w-full cursor-pointer bg-[#ffffff] appearance-none outline-none  ${selectClassCss?selectClassCss:'font-generalSansSemiBold font-[500]'}`}
               
                onValueChange={value=>{
                    // console.log({value})
                    if(onChange){
                        onChange(value)
                    }
                }}
                >
                <SelectTrigger className={`border-[green] border-[#E3E3E3] border-[1.4px] rounded-[1rem] p-[1rem] w-full cursor-pointer bg-[#ffffff] appearance-none outline-none  ${selectClassCss?selectClassCss:'font-generalSansSemiBold font-[500]'}`} >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                     {/* <option value={d.value} key={index}>{d.name}</option> */}

                    
                    <SelectContent 
                    // className='border-[red]'
                   
                    >
                    {
                        options.map((d,index)=>(
                            <SelectItem value={d.value} key={index}>{d.name}</SelectItem>
                        ))
                    }
                    </SelectContent>
                </Select>
             </div>
             {
          errorMessage?
            <small style={{'color':'crimson'}}>{
                !dontParseError?
                errorMessage?.replace(/[^\s]*/,label?label:'')
            :errorMessage    
            }</small>
            :''
        }

        </div>
    )
}

export default SelectWithLabel