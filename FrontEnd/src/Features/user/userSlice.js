import { createSlice } from "@reduxjs/toolkit";
import { storageItem } from "../../services/helper";
import {
  userApi,
  appointmentCreation,
  appointmentHistory,
} from "../../API/userAPi";

const initialState = {
  users: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    users: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const login = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.login(data, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const addAddresshandler = (id, data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.addAddress(id, data, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getAddressByIdHandler = (id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.getAddressById(id, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const appointmentCreationhandler = (data, id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.appointmentCreation(data, id, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getAppointmentHistoryhandler = (id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.appointmentHistory(id, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getDonationHistoryHandler = (id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await userApi.donationHistory(id, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

// to list all upcoming events
export const getAllUpcomingEventsHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        
        const response = await userApi.getUpcomingEvents();

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const {} = userSlice.actions;
export default userSlice.reducer;
