import { createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../../API/adminAPI";
import { storageItem } from "../../services/helper";

const initialState = {
  users: {},
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    users: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getPendingAppointmenthandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getPendingAppointments(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const approveRejectAppointmentsHendler = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.ApproveRejectAppointments(data, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const addUserByAdminHandler = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.addUserByAdmin(data, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const submitUpdateStockHandler = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.updateBloodStock(data, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getBloodStockHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getBloodStocks(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getUserListHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getUsersList(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getUpcomigEventsHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getUpcomingEvents(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getPendingIdproofhandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getPendingIdproof(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const approveRejectIdproofHendler = (param, id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.ApproveRejectIdproof(param, id, header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const createBloodDonationHandler = (id, data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        // alert(data)
        const response = await adminAPI.createBloodDonate(id, data, header);
        // alert(1)
        resolve(response);
      } catch (err) {
        // alert(err)
        reject(err);
      }
    });
  };
};

// method to set token with event creation request
export const createCampHandler = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        // alert(data)
        const response = await adminAPI.createACamp(data,header);
        // alert(1)
        resolve(response);
      } catch (err) {
        // alert(err)
        reject(err);
      }
    });
  };
};


// method to set token with event creation request
export const updateCampHandler = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        
        const response = await adminAPI.updateACamp(data, header);
        // alert(1)
        resolve(response);
      } catch (err) {
        // alert(err)
        reject(err);
      }
    });
  };
};



// method to set token with event creation request
export const deleteCampHandler = (id) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        // alert(data)
        const response = await adminAPI.deleteACamp(id, header);
        // alert(1)
        resolve(response);
      } catch (err) {
        // alert(err)
        reject(err);
      }
    });
  };
};


// method to set token with  request for getting  all the blood donation
export const getAllDonationHistoryHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getAllDonationHistory(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const getAllAppointmentHistoryHandler = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = storageItem.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let header = {
          Authorization: bearerToken,
        };
        const response = await adminAPI.getAllAppointmentHistory(header);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const {} = adminSlice.actions;
export default adminSlice.reducer;
