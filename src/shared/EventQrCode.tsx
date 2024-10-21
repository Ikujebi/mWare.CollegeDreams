import { useEffect, useRef, useState } from "react";

// import { Page, Text, View, Document, StyleSheet,Image, PDFDownloadLink, Svg } from '@react-pdf/renderer';
// @ts-ignore
import QRCode from 'qrcode'
import generatePDF, { Options } from "react-to-pdf";
import InputWithLabel, { eventInputClass } from "./InputWithLabel";
import { FiCopy } from "react-icons/fi";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";



export const QRCodeGenEvent = ({event}:{event?:any})=>{
    // const {id}= useParams()
    const id = '1'

    const [img,setImg] = useState(null);
    const targetRef = useRef(null)
    const options: Options = {
        filename: `eventqrcode.pdf`,
        overrides: {
          canvas: {
            imageTimeout: 10000,
          },
        },
      };
      useEffect(()=>{
        if(typeof id == 'string'){
            
            const formUrl = `https://identityforms.prembly.com/event/detail/${id}`
            // @ts-ignore
            QRCode.toDataURL(formUrl,{
                color:{
                    light: '#0000' ,
                    dark:'#ffff'
                },
                width:'150'
            }, 
            // @ts-ignore
            function (err:any, url:any) {
                console.log({url})
                setImg(url)
              })
            
            // setImg
        }
    },[id])
    const handleGenerate =()=>{
        generatePDF(targetRef, options);

    }

    return (
        <div className="gap-[16.4px] border-[1px] border-[#E6E6E6] py-[1rem] px-[14.1px] rounded-[1rem] bg-white flex item">
            <div className="w-[303.47px]">
            <h1 className="font-generalSansSemiBold font-[600] text-[22.55px] pb-[1rem] ">Event QR Code and Link</h1>



<InputWithLabel
label="Event Link"
defualtValue={`identityforms.prembly.com/event`}
// inputClassName={`!p-[.9rem] 
// !font-generalSansMedium !font-[400] !text-[1rem] !text-[#353535] 
// `}
inputClassName={eventInputClass}

iconClassName="!pointer-events-auto	"

icon={
<FiCopy
onClick={()=>{
    copy(`https://identityforms.prembly.com/event/detail/${id}`)
    toast.success('Link copied')
}}
    className="!cursor-pointer"/>}
// onChange={value=>{}}
/>
<div>
    <p className=" font-[400] font-generalSansRegular text-[0.875rem] pb-[1rem] pt-[1rem]">Promote Event</p>

    <div className="flex items-center gap-[1rem]">
        <img src="/eventSocialLink/eventFacebook.svg"
        onClick={()=>{
            const title = event.name
            const body = encodeURIComponent(`${title}: idform.com/event4130`);
            const fburl=`https://www.facebook.com/sharer/sharer.php?=${body}`
            window.open(fburl,'blank')
        }}
        className="cursor-pointer" alt="" />
        <img src="/eventSocialLink/eventInstagram.svg" 
        onClick={()=>{
            // const title = event.name
            // const body = encodeURIComponent(`${title}: idform.com/event4130`);
            // const fburl=`https://www.facebook.com/sharer/sharer.php?=${body}`
            // window.open(fburl,'blank')
        }}
        className="cursor-pointer" alt="" />
        <img src="/eventSocialLink/eventTwitter.svg"
        onClick={()=>{
            const title = event.name
            const body = encodeURIComponent(`${title}: idform.com/event4130`);
            const fburl=`https://twitter.com/intent/tweet?text=${event.name}&url=${body}`
            window.open(fburl,'blank')
        }}
        className="cursor-pointer" alt="" />
        <img src="/eventSocialLink/eventLinkdin.svg" 
          onClick={()=>{
            // const title = event.name
            // const body = encodeURIComponent(`${title}: idform.com/event4130`);
            const link=`https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL&title=${event.name}&summary=YOUR_SUMMARY&source=idform.com/event4130`
            window.open(link,'blank')
        }}
        className="cursor-pointer" alt="" />
    </div>
</div>

            </div>

            <div className="relative w-[250.15px]">
            <Button
            onClick={()=>{
             handleGenerate()
            }}
            className="w-[106.19px] p-[0.4rem] rounded-[0.5rem] text-[#1D1D1D]  !bg-[#F4F4F4] flex item-center gap-[0.5rem] absolute right-2 top-2 text-[0.875rem] font-[500] font-generalSansMedium">
                <img src="/arrow-down.svg" alt=""/>
                <span>DOWNLOAD</span>
            </Button>
            <div className="  bg-black rounded-[0.5rem] qrcode_background h-[230px] flex items-center justify-center "
                        ref={targetRef}
                        >
                            {/* @ts-ignore */}
                            <img src={img} className="block mx-auto" alt="" />
                        </div>
            </div>

        </div>
    )
}