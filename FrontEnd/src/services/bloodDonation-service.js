import { Myaxios } from "./helper";

export const createBloodDonation = (bloodDonation)=>{
    return Myaxios.post("/api/admin/blooddonation/createBloodDonation/"+19,bloodDonation)
    .then((response)=> {
    var result =JSON.stringify(response.data)
    
    }
    );
}