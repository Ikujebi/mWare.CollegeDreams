import axios from 'axios'


type TokenType = any
export const getToken = ():TokenType|null=>{
    const token = localStorage.getItem('eto',)
    if(token){
        return JSON.parse(token)
    }
    else{
        return null
    }
}
const keys = {
    baseUrl:'https://oyvub2dwme.execute-api.us-east-2.amazonaws.com/idforms-dev',
    premblyUrl:'',
    ClientSecretKey:''
}

export const {baseUrl,premblyUrl,ClientSecretKey} = keys;
export const cachedTime = {
    staleTime: 10 * (60 * 1000), // 10 mins 
    cacheTime: 15 * (60 * 1000), // 15 mins ,
    retry:1,
  }

export const eventoApi =axios.create({
baseURL: baseUrl,
// withCredentials:true
});

eventoApi.interceptors.request.use(async (config:any)=>{
    const tokenInfo = getToken();
    if(tokenInfo){
      if(tokenInfo.token){
        config['headers']={ 'Authorization':`${tokenInfo.token}`,'organisation':tokenInfo.organisation,'tenant':tokenInfo.tenant}
      }
      
      return config
    }
    //write something if there is no token then show some error
    return config;
  })
  
