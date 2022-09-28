import { Myaxios } from "./helper";

export const signUp = (user)=>{
    return Myaxios.post("/users/register",user)
    .then((response)=> response.data);
}

export const loginUser = (loginDetails)=>{
    return Myaxios.post("/api/auth/signin",loginDetails)
    .then((response)=> response.data);
}


