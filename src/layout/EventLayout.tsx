import { Button } from "@/components/ui/button";
import UserBtn from "@/shared/UserBtn";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";




type Prop = React.PropsWithChildren<{}>
const EventLayout = ({children}:Prop)=>{
    const route = useNavigate()
    return (
        <div className=" bg-[#f1f4fd] flex h-[100vh]">
            {/* sideBar */}
            <aside className="block w-[167px] bg-white border-r-[1px]">
                <img
                onClick={()=>{
                    route('/event-overview/')
                }}
                className="block py-[20px] mx-auto" src="/idformsicon.png" alt="" />
                <div>
                    <SidbarItem
                    text="Overview"
                    isActive={true}
                    to="/event-overview"
                    svg={
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22.7251H15C20 22.7251 22 20.7251 22 15.7251V9.7251C22 4.7251 20 2.7251 15 2.7251H9C4 2.7251 2 4.7251 2 9.7251V15.7251C2 20.7251 4 22.7251 9 22.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 2.7251V22.7251"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12.7251H22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    }
                    />
                    <SidbarItem
                    text="Tickets"
                    to="/event-ticket"
                    svg={
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 13.2251C20 11.8451 21.12 10.7251 22.5 10.7251V9.7251C22.5 5.7251 21.5 4.7251 17.5 4.7251H7.5C3.5 4.7251 2.5 5.7251 2.5 9.7251V10.2251C3.88 10.2251 5 11.3451 5 12.7251C5 14.1051 3.88 15.2251 2.5 15.2251V15.7251C2.5 19.7251 3.5 20.7251 7.5 20.7251H17.5C21.5 20.7251 22.5 19.7251 22.5 15.7251C21.12 15.7251 20 14.6051 20 13.2251Z"  stroke-width="1.86186" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 4.7251L10.5 20.7251"  stroke-width="1.86186" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4.65 4.65"/>
                </svg>

                    }
                    />
                    <SidbarItem
                    text="Registration Form"
                    to="/register-form"
                    svg={
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 9.81494H21"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.5 9.2251V17.7251C21.5 20.7251 20 22.7251 16.5 22.7251H8.5C5 22.7251 3.5 20.7251 3.5 17.7251V9.2251C3.5 6.2251 5 4.2251 8.5 4.2251H16.5C20 4.2251 21.5 6.2251 21.5 9.2251Z"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 14.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 17.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 14.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 17.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 14.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 17.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    }
                    />
                     <SidbarItem
                    text="Check-in"
                    to="/checkin"
                    svg={
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 9.81494H21"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.5 9.2251V17.7251C21.5 20.7251 20 22.7251 16.5 22.7251H8.5C5 22.7251 3.5 20.7251 3.5 17.7251V9.2251C3.5 6.2251 5 4.2251 8.5 4.2251H16.5C20 4.2251 21.5 6.2251 21.5 9.2251Z"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 14.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 17.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 14.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 17.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 14.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 17.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    }
                    />
                    <SidbarItem
                    text="Communication"
                    to="/communication"
                    svg={
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5 2.7251V5.7251"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 9.81494H21"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.5 9.2251V17.7251C21.5 20.7251 20 22.7251 16.5 22.7251H8.5C5 22.7251 3.5 20.7251 3.5 17.7251V9.2251C3.5 6.2251 5 4.2251 8.5 4.2251H16.5C20 4.2251 21.5 6.2251 21.5 9.2251Z"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 14.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1947 17.4253H16.2037"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 14.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4955 17.4253H12.5045"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 14.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.79431 17.4253H8.80329"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                    }
                    />
                    <SidbarItem
                    text="Guests"
                    to="/guests"

                    svg={
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5001 7.33578C18.4401 7.32578 18.3701 7.32578 18.3101 7.33578C16.9301 7.28578 15.8301 6.15578 15.8301 4.75578C15.8301 3.32578 16.9801 2.17578 18.4101 2.17578C19.8401 2.17578 20.9901 3.33578 20.9901 4.75578C20.9801 6.15578 19.8801 7.28578 18.5001 7.33578Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4699 14.6159C18.8399 14.8459 20.3499 14.6059 21.4099 13.8959C22.8199 12.9559 22.8199 11.4159 21.4099 10.4759C20.3399 9.76594 18.8099 9.52594 17.4399 9.76594"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.46998 7.33578C6.52998 7.32578 6.59998 7.32578 6.65998 7.33578C8.03998 7.28578 9.13998 6.15578 9.13998 4.75578C9.13998 3.32578 7.98998 2.17578 6.55998 2.17578C5.12998 2.17578 3.97998 3.33578 3.97998 4.75578C3.98998 6.15578 5.08998 7.28578 6.46998 7.33578Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.49994 14.6159C6.12994 14.8459 4.61994 14.6059 3.55994 13.8959C2.14994 12.9559 2.14994 11.4159 3.55994 10.4759C4.62994 9.76594 6.15994 9.52594 7.52994 9.76594"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5001 14.806C12.4401 14.796 12.3701 14.796 12.3101 14.806C10.9301 14.756 9.83008 13.626 9.83008 12.226C9.83008 10.796 10.9801 9.646 12.4101 9.646C13.8401 9.646 14.9901 10.806 14.9901 12.226C14.9801 13.626 13.8801 14.766 12.5001 14.806Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.59021 17.9561C8.18021 18.8961 8.18021 20.4361 9.59021 21.3761C11.1902 22.4461 13.8102 22.4461 15.4102 21.3761C16.8202 20.4361 16.8202 18.8961 15.4102 17.9561C13.8202 16.8961 11.1902 16.8961 9.59021 17.9561Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    }
                    />
                                        <SidbarItem
                    to="/summary"

                    text="Sales Summary"
                    svg={
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 22.7251H22.5"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.25 4.7251V22.7251H14.75V4.7251C14.75 3.6251 14.3 2.7251 12.95 2.7251H12.05C10.7 2.7251 10.25 3.6251 10.25 4.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 10.7251V22.7251H7.5V10.7251C7.5 9.6251 7.1 8.7251 5.9 8.7251H5.1C3.9 8.7251 3.5 9.6251 3.5 10.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 15.7251V22.7251H21.5V15.7251C21.5 14.6251 21.1 13.7251 19.9 13.7251H19.1C17.9 13.7251 17.5 14.6251 17.5 15.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    }
                    />

<SidbarItem
                    text="Event Analytics"
                    to="/event-analytics"

                    svg={
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 22.7251H22.5"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.25 4.7251V22.7251H14.75V4.7251C14.75 3.6251 14.3 2.7251 12.95 2.7251H12.05C10.7 2.7251 10.25 3.6251 10.25 4.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 10.7251V22.7251H7.5V10.7251C7.5 9.6251 7.1 8.7251 5.9 8.7251H5.1C3.9 8.7251 3.5 9.6251 3.5 10.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 15.7251V22.7251H21.5V15.7251C21.5 14.6251 21.1 13.7251 19.9 13.7251H19.1C17.9 13.7251 17.5 14.6251 17.5 15.7251Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    }
                    />
                </div>
            </aside>
            {/* sideBar */}
            <main className="w-[90%]">
                    <nav className="flex items-center justify-between py-[25.5px] bg-white">
                        <div className="w-[2px]"></div>

                        <div className="flex gap-[17px] items-center">
                            <Button className="rounded-[8px] w-[129px] text-[18px] font-generalSansRegular font-[500] !py-[15px]">
                                Publish
                            </Button>
                            <UserBtn/>
                        </div>
                    </nav>

                    <div>
                        {children}
                    </div>

            </main>
        </div>
    )
}
export default EventLayout;


type SidbarItemProp ={
    text:string,
    isActive?:boolean,
    svg:any,
    to?:string,
}
const SidbarItem = ({text,svg,to='/coming-soon'}:SidbarItemProp)=>{
    return (
        <NavLink
        to={to}
        
        // className={
        //     `
        //     py-[13px] font-generalSansMedium font-[500] text-[1rem] text-grey20 stroke-grey20 flex flex-col items-center justify-center gap-[8px] text-center cursor-pointer
        //     hover:text-primary50 hover:stroke-primary50 hover:bg-[#E2E8FF] SidbarItem

        //    ${isActive?'text-primary50 stroke-primary50 bg-[#E2E8FF] SidbarItempHover':''}
        //     `
        // }
        className={({ isActive,  })=>`
        py-[13px] font-generalSansMedium font-[500] text-[1rem] text-grey20 stroke-grey20 flex flex-col items-center justify-center gap-[8px] text-center cursor-pointer
        hover:text-primary50 hover:stroke-primary50 hover:bg-[#E2E8FF] SidbarItem

       ${isActive?'text-primary50 stroke-primary50 bg-[#E2E8FF] SidbarItempHover':''}
        `}
        >
         
            {svg}
            <p>{text}</p>
        </NavLink>
    )
}