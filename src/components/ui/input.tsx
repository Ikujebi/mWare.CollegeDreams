import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
    {
  // @ts-ignore
    type==='textarea'?
  <textarea 
  // name="" id="" 
  // cols={30} rows={10}
  className={cn(
    "flex  w-full rounded-[1rem] border border-neutral-200 bg-white px-[16px] py-[17px] text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey60 placeholder:font-[400] placeholder:font-generalSansRegular outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
    className
  )}
  // @ts-ignore
  ref={ref}
  {...props}
  ></textarea>
  :
  <input
  type={type}
  className={cn(
    "flex  w-full rounded-[1rem] border border-neutral-200 bg-white px-[16px] py-[17px] text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey60 placeholder:font-[400] placeholder:font-generalSansRegular outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
    className
  )}
  ref={ref}
  {...props}
/>  
  
  }
      </>
      
    )
  }
)
Input.displayName = "Input"

export { Input }
