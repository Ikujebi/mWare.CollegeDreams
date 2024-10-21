import { Input } from "../components/ui/input"
import { Tooltip } from "react-tooltip"


type Prop ={
    label?:string,
    placeHolder?:string,
    register?:any//this has to do with react hook form
    type?:'time'|'date'|'text'|'textarea',
    className?:string,
    inputClassName?:string
    errorMessage?:string,
    dontParseError?:boolean,
    isTextArea?:boolean,
    icon?:any,
    iconClassName?:string
    value?:any
    min?:string,
    tip?:string,
    allowApperance?:boolean,
    defualtValue?:string,

}
const InputWithLabel =({inputClassName='',type='text',className='',label,placeHolder='',
errorMessage,dontParseError,icon,iconClassName,defualtValue,register,tip
}:Prop)=>{


    return (

        <div className={`w-[100%] relative ${className}`}>
            {
                label?
                <label htmlFor="" className="text-[14px]  text-grey10 font-generalSansRegular font-[400] block pb-[8px]">
                <span>
                {label}
                </span>
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

            <Input 
            type={type}
            className={inputClassName}
            placeholder={placeHolder}
    defaultValue={defualtValue}
            style={
                errorMessage?{'boxShadow':'0px 0px 0px 4px #FB43371A'}:{}
            }
            {...register}
            />


{
          errorMessage?
            <small className="inline-block mt-[8px] text-[#F51A0A] font-generalSansRegular font-[400] text-[14px]">{
                !dontParseError?
                errorMessage?.replace(/[^\s]*/,label?label:'')
            :errorMessage    
            }</small>
            :''
        }

        {
            icon?
            <div
            className={`absolute  ${errorMessage?'bottom-[2.5rem]':'bottom-[1rem]'} right-[1rem] pointer-events-none text-[1.4rem] ${iconClassName}`}>
                {icon}
            </div>
            :''
        }
        </div>
    )
};

export default InputWithLabel;



export const eventInputClass=`placeholder:font-generalSansRegular placeholder:font-[400] placeholder:text-[1rem] placeholder:text-[#353535]
!font-generalSansRegular !font-[400] !text-[1rem] !text-[#353535] 
`