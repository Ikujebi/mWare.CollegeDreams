import UserBtn from "@/shared/UserBtn";
import React from "react";


type Prop =React.PropsWithChildren<{
layoutCss?:string
}>

const GeneralLayout =({children,layoutCss=''}:Prop)=>{

    return(
        <div className={layoutCss}>
            <nav className="max-w-[1268.57px] mx-auto py-[30px]  flex items-center justify-between">
                <img src="/bluelogo.png" className="w-[171.57px]" alt="" />

                <UserBtn />
            </nav>
            
            <div className="w-[1268.57px] mx-auto" >
                {children}
            </div>

        </div>
    )
};

export default GeneralLayout;