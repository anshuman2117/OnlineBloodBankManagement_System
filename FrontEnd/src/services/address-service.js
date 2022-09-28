import { Myaxios } from "./helper";

export const addAddress = (address)=>{
    return Myaxios.get("/{id}",address)
    .then((response)=> response.address);
}
