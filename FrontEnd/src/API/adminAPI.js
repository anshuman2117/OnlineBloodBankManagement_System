import { fetch } from "../services/helper";

// axios method to get the available blood stock
const getBloodStocks = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/bloodinventory/getblood`,
    {},
    header,
    {}
  );
};

// axios method to get the list of registerd users
const getUsersList = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/users/listOfAll`,
    {},
    header,
    {}
  );
};
const getUpcomingEvents = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/event/upcoming_events`,
    {},
    header,
    {}
  );
};

//axios method to get the all pending appointment details
const getPendingAppointments = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/appointment/pending`,
    {},
    header,
    {}
  );
};

//axios method to approve or reject the appointment status
const ApproveRejectAppointments = (data, header) => {
  return fetch(
    "put",
    `http://localhost:8080/api/admin/appointment/updateAppointmentsts`,
    data,
    header,
    {}
  );
};


//axios method to approve or reject the appointment status
const updateBloodStock = (data,header) => {
  return fetch(
    "put",
    `http://localhost:8080/api/admin/bloodinventory/addblood`,
    data,
    header,
    {}
  );
};

const addUserByAdmin = (data,header) => {
  return fetch(
    "post",
    `http://localhost:8080/api/admin/user/add_donor_user`,
    data,
    header,
    {}
  );
};

//method to organize a event
const createACamp = (data,header) => {
  return fetch(
    "post",
    `http://localhost:8080/api/admin/event/createEvent`,
    data,
    header,
    {}
  );
};

//method to organize a event
const updateACamp = (data,header) => {
  return fetch(
    "put",
    `http://localhost:8080/api/admin/event/createEvent`,
    data,
    header,
    {}
  );
};

//method to delete a event
const deleteACamp = (id,header) => {
  return fetch(
    "delete",
    `http://localhost:8080/api/admin/event/delete/${id}`,
    {},
    header,
    {}
  );
};


const getPendingIdproof = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/identityproof/pendingIdStatus`,
    {},
    header,
    {}
  );
};



const createBloodDonate = (id,data,header) => {
  return fetch(
    "post",
    `http://localhost:8080/api/admin/blooddonation/createBloodDonation/${id}`,
    data,
    header,
    {}
  );
};


const ApproveRejectIdproof = (param, id, header) => {
  return fetch(
    "put",
    `http://localhost:8080/api/admin/identityproof/updateIdVerification/${id}`,
    {},
    header,
    param
  );
};
//get all blood donations
const getAllDonationHistory = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/blooddonation/getAllDonation`,
    {},
    header,
    {}
  );
};

//get all apointment(past+future)
const getAllAppointmentHistory = (header) => {
  return fetch(
    "get",
    `http://localhost:8080/api/admin/appointment/list_all_appointment`,
    {},
    header,
    {}
  );
};

export const adminAPI = {
  getPendingAppointments,
  ApproveRejectAppointments,
  ApproveRejectIdproof,
  getPendingIdproof,
  getBloodStocks,
  getUsersList,
  getAllDonationHistory,
  getAllAppointmentHistory,
  updateBloodStock,
  createBloodDonate,
  getUpcomingEvents,
  addUserByAdmin,
  createACamp,
  updateACamp,
  deleteACamp
};
