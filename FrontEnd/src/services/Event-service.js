import { Myaxios } from "./helper";

export const createEvent = (events)=>{
    return Myaxios.post("/api/admin/event/createEvent",events  )
    .then((response)=> {
    var result =JSON.stringify(response.data)
    
    }
    );
}