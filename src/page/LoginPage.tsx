import { Button } from "../components/ui/button";
import AuthenticatationLayout from "../layout/AuthenticatationLayout";
import InputWithLabel from "../shared/InputWithLabel";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldErrors , UseFormRegister, UseFormTrigger} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "../api/auth.api";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
interface FormProps {
    register: UseFormRegister<FormI>;
    errors: FieldErrors<FormI>;
    trigger: UseFormTrigger<FormI>;
    watch: Watch;
  }
// Validation schema
const schema = yup.object({
  businessName: yup.string(),
  password: yup.string().required('Password is required'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  status: yup.string(),
});

type FormI = yup.InferType<typeof schema>;
type Watch = ReturnType<typeof useForm<FormI>>['watch'];

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { register,handleSubmit, setValue, formState: { errors }, watch, trigger} = useForm<FormI>({
    resolver: yupResolver(schema),
    defaultValues: {
      status: 'individual',
      password: '',
    },
  });

  const status = watch('status');

  // Google login handler
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log({ googleUser: codeResponse });
      localStorage.setItem('googleuser', JSON.stringify(codeResponse));
    },
    onError: () => {
      toast.error('Login failed');
    },
  });

  const handleGoogle = () => {
    login();
  };

  const createAccountMutation = useMutation({
    mutationFn: createAccountApi,
    onSuccess: () => {
      toast.success('Account Created Successfully');
      navigate('/create');
    },
  });

  // Individual form submission
  const onSubmitIndividual: SubmitHandler<FormI> = (data) => {
    console.log("Individual data: ", data);
    createAccountMutation.mutate({ email: data.email, password: data.password });
  };

  // Business form submission
  const onSubmitBusiness: SubmitHandler<FormI> = (data) => {
    
    console.log("Business data: ", data);
    createAccountMutation.mutate({ email: data.email, password: data.password, business_name: data.businessName });
  };

  // Mutation for account creation
  

  return (
    <AuthenticatationLayout>
      <div className="w-[604px] mx-auto">
        <img src="/bluelogo.png" className="block mx-auto" alt="idforms" />
        <div className="flex items-center w-[100%] mt-[30px] mb-[10px] font-generalSansMedium font-[500] text-[18px]">
          {/* Status toggle buttons */}
          <div
            className={`py-[1rem] rounded-tl-[1rem] rounded-bl-[1rem] text-white w-[50%] text-center cursor-pointer ${status === 'individual' ? 'bg-[#111111]' : 'bg-[#11111140]'}`}
            onClick={() => setValue('status', 'individual')}
          >
            Individual
          </div>
          <div
            className={`py-[1rem] rounded-tr-[1rem] rounded-br-[1rem] text-white w-[50%] text-center cursor-pointer ${status === 'business' ? 'bg-[#111111]' : 'bg-[#11111140]'}`}
            onClick={() => setValue('status', 'business')}
          >
            Business
          </div>
        </div>

        {/* Form details */}
        <div className="pt-[1.8rem]">
          <h2 className="font-epi font-[600] text-[2rem] text-primary50">Yo! 👋 Welcome to Evento</h2>
          <p className="text-primary50">Sign in or Sign up below</p>
        </div>

        <form className=" py-[1.75rem]" onSubmit={handleSubmit(status === 'individual' ? onSubmitIndividual : onSubmitBusiness)}>
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
            <Button variant={'secondary'} className="w-[unset] flex items-center gap-[8px]" onClick={handleGoogle}>
              <img src="/Google.png" alt="" />
              <span>Continue With Google</span>
            </Button>
          </div>
        </form>
      </div>
    </AuthenticatationLayout>
  );
};

export default LoginPage;

const Individual =({register,errors,trigger,watch}:FormProps)=>{
    const [count,setCount] = useState(0)
    
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
    
    {register,errors,watch}:FormProps
)=>{
    const [count,setCount] = useState(0)
    
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