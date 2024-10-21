import { Button } from "@/components/ui/button";
import AuthenticatationLayout from "@/layout/AuthenticatationLayout";
import InputWithLabel from "@/shared/InputWithLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useForm,} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "./api/auth.api";
import toast from "react-hot-toast";
import { 
    // googleLogout,
    useGoogleLogin,
    // GoogleLogin
 } from '@react-oauth/google';
const schema = yup.object({
    businessName:yup.string(),
    password:yup.string().required(),
    email:yup.string().required().email(),
    status:yup.string()
})
type FormI = yup.InferType<typeof schema>

const LoginPage =()=>{
    // const [status,setStatus] = useState<'individual'|'business'>('individual');
    const {
        register,setValue, 
        // handleSubmit,control,getValues,
        formState: { errors },watch,trigger,
        // setError
    } = useForm<FormI>({resolver: yupResolver(schema),
    defaultValues:{
        status:'individual',
        password:''
    }
    })

    const status = watch('status');

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log({googleUser:codeResponse})
            localStorage.setItem('googleuser',JSON.stringify(codeResponse))
        },
        onError: (
            // error
        ) => {
            toast.error('login failed')
        },
    });
    
    const handleGoogle = ()=>{
        login()
    }

    return (    
        <AuthenticatationLayout>
            <div className="w-[604px] mx-auto"
            // style={{'border':'1px solid red'}}
            >
                <img src="/bluelogo.png" 
                className="block mx-auto "
                alt="idforms" />
                <div className="flex items-center w-[100%] mt-[30px] mb-[10px] font-generalSansMedium font-[500] text-[18px]">
                {/* status */}
                    <div className={`
                        py-[1rem]  rounded-tl-[1rem] rounded-bl-[1rem] text-white w-[50%] text-center cursor-pointer 
                        ${status=='individual'?'bg-[#111111]':'bg-[#11111140]'}
                    `}
                    onClick={()=>{
                        setValue('status','individual')
                    }}
                    >
                    Individual
                    </div>
                    <div
                    className={`
                    py-[1rem]  rounded-tr-[1rem] rounded-br-[1rem] text-white  w-[50%] text-center cursor-pointer 
                    ${status=='business'?'bg-[#111111]':'bg-[#11111140]'}
                    `}
                    onClick={()=>{
                        setValue('status','business')
                    }}
                    >
                    Business
                    </div>
                </div>

                {/* form details */}
                <div className="pt-[1.8rem]">
                    <h2 className="font-epi font-[600] text-[2rem] text-primary50">Yo! 👋 Welcome to Evento</h2>
                    <p className="text-primary50">Sign in or Sign up below</p>
                </div>
                {/* end form details */}
                <form className=" py-[1.75rem]">
                    {
                        status=='individual'?
                        <Individual 
                        register={register}
                        trigger={trigger}
                        errors={errors}
                        watch={watch}
                        />
                        :
                        <Buiness
                        register={register}
                        trigger={trigger}
                        errors={errors}
                        watch={watch}
                        />
                    }

                    <div className=" text-center mt-[1.75rem] flex items-center flex-col gap-[1rem]">
                        <p className="font-generalSansMedium font-[500] text-[1rem] ">Already have an account? <span className="text-primary50 font-generalSansBold font-[700] text-[18px] text-primary50">Sign in</span></p>
                        <p className="text-[#000000] font-[500] font-generalSansMedium text-[20px]">or</p>
                        <Button
                        variant={'secondary'}
                        className="w-[unset] flex items-center gap-[8px]" 
                        onClick={handleGoogle} 
                        >
                            <img src="/Google.png" alt="" />
                            <span>
                            Continue With Google
                            </span>
                        </Button>
                        
                    </div>
                </form>

            </div>
        </AuthenticatationLayout>
    )
}

export default LoginPage;


const Individual =({register,errors,trigger,watch}:any)=>{
    const [count,setCount] = useState(0)
    // @ts-ignore
    const route= useNavigate();
    const allWatch = watch();

    const {mutate,isPending} = useMutation({
        mutationFn:createAccountApi,
        onSuccess:()=>{
            toast.success('Account Created Successfully')
            route('/create')
        }
    })
    const onSubmit = ()=>{
        console.log(allWatch)
        mutate({
            email:allWatch.email,
            password:allWatch.password,
        })
    }   
    return (
        <div>
            {
                count==0?
                <InputWithLabel
                register={register('email')}
                placeHolder="Enter your  email address"
                errorMessage={errors.email?.message}
                label="Email Address"/>:
                <InputWithLabel
                register={register('password')}
                placeHolder="Enter your password"
                errorMessage={errors.email?.message}
                label="Password"/>
            }

            <Button
            className="mt-[28px]"
            onClick={async(e) =>{
                e.preventDefault();
                if(count === 1){
                    // route('/create')
                    // console.log(allWatch)
                    onSubmit()
                }else if(await trigger(['email'])){
                    setCount(1);
                }
            }}

            >
                {isPending?
                'Loading...'
                :
                    count===1?
                    'Create Account':'Countinue'
                }
                
            </Button>
        </div>
    )
}


const Buiness =(
    // @ts-ignore
    {register,errors,trigger,watch}:any
)=>{
    const [count,setCount] = useState(0)
    // @ts-ignore
    const route= useNavigate();
    const allWatch = watch();

    const {mutate,isPending} = useMutation({
        mutationFn:createAccountApi,
        onSuccess:()=>{
            toast.success('Account Created Successfully')
            route('/create')
        }
    })
    const onSubmit = ()=>{
        // console.log(allWatch)
        mutate({
            email:allWatch.email,
            password:allWatch.password,
            business_name:allWatch.businessName
        })
    }   
    return (
        <div>
            {
                count==0?
                <div className="flex flex-col gap-[1rem]">
                    <InputWithLabel
                    placeHolder="Enter your  business name"
                    label="Business Name"
                    register={register('businessName')}
                    errorMessage={errors.businessName?.message}
                    
                    />
                    <InputWithLabel
                register={register('email')}
                placeHolder="Enter your  email address"
                errorMessage={errors.email?.message}
                label="Email Address"
                    />
                </div>
                :
                <InputWithLabel
                register={register('password')}
                placeHolder="Enter your password"
                errorMessage={errors.email?.message}
                />
            }

            <Button
            className="mt-[28px]"
            onClick={e=>{
                e.preventDefault();
                setCount(1)
                if(count === 1){
                    // route('/create')
                    onSubmit()
                }
            }}
            >
                {isPending?
                'Loading...'
                :
                    count===1?
                    'Create Account':'Countinue'
                }
                
            </Button>
        </div>
    )
}


