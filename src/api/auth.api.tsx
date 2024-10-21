// import axios from "axios";

import axios from "axios";
import { baseUrl } from "./api";



export const createAccountApi =async (data:any)=>{

    const form = new FormData();

    Object.keys(data).map((key)=>{
        form.append(key,data[key])
    })

    const resp = await axios.post(`${baseUrl}/auth/single/sign-up`,form);

    return resp.data
 
}