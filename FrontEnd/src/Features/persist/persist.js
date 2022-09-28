import {createSlice} from "@reduxjs/toolkit"
import { userApi } from "../../API/userAPi"

const initialState = {
    user : {}
}

export const persistSlice = createSlice({
    name: "persist",
    initialState, 
    reducers: {
        setUser: (state,action) =>{ 
            state.user = action.payload
          },
        removeUser:(state,action)=>{
            state.user={}
        }
    }
})

export const saveData = (data) =>{
    return async (dispatch, getState) =>{
        return new Promise ( async (reject,resolve) =>{
            try{
                const response = await userApi.login(data)
                resolve(response)
            }catch(err){
                reject(err)
            }
        })
    }
}

export const {setUser,removeUser} = persistSlice.actions;
export default persistSlice.reducer