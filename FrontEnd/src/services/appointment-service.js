import { Myaxios } from "./helper";

export const createAppointment = (appointment)=>{
    return Myaxios.post("/api/appointment/createAppointment/"+50,appointment)
    .then((response)=> {
    var result =JSON.stringify(response.data)
    
    }
    );
}