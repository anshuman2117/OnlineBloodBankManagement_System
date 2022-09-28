// import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { store } from "./App/store";
import About from "./pages/About";
import AddEvent from "./pages/Admin/AddEvent";
import AddUser from "./pages/Admin/AddUser";
import AdminHome from "./pages/Admin/AdminHome";
import Contactus from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserHome from "./pages/User/UserHome";
import BloodDonationHistory from "./pages/Admin/BloodDonationHistory";
import CreateUserBloodDonation from "./pages/Admin/CreateUserBloodDonation";

import CreateAppointment from "./pages/User/CreateAppointment";
import PendingAppointments from "./pages/Admin/PendingAppointments";
import AllAppointment from "./pages/Admin/AllAppointment";
import AppointmentHistory from "./pages/User/AppointmentHistory";
import { PendingUserVerification } from "./pages/Admin/PendingUserVerification";
import BloodStock from "./pages/Admin/BloodStock";
import { DonationHistory } from "./pages/User/DonationHistory";
import UpcomingEvents from "./pages/Admin/UpcomingEvents";
import ListAllUsers from "./pages/Admin/ListAllUsers";
import AddAddress from "./pages/User/AddAddress";
import GetAllAddresses from "./pages/User/GetAllAddresses";
import FAQ from "./pages/FAQ";
let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/addevent" element={<AddEvent />}></Route>
            <Route path="/adminhome" element={<AdminHome />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
            <Route path="/userhome" element={<UserHome />}></Route>
            <Route path="/bloodStock" element={<BloodStock />}></Route>
            <Route path="/addaddress" element={<AddAddress />}></Route>
            <Route path="/getalladdresses" element={<GetAllAddresses />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route
              path="/blooddonationhistory"
              element={<BloodDonationHistory />}
            ></Route>
            <Route
              path="/createuserblooddonation"
              element={<CreateUserBloodDonation />}
            ></Route>
            <Route
              path="/createappointment"
              element={<CreateAppointment />}
            ></Route>
            <Route
              path="/pendingappointment"
              element={<PendingAppointments />}
            ></Route>
            <Route path="/all_appointment" element={<AllAppointment />}></Route>
            <Route
              path="/appointmentHistory"
              element={<AppointmentHistory />}
            ></Route>
            <Route
              path="/pendinguserverification"
              element={<PendingUserVerification />}
            ></Route>
            <Route
              path="/createappointment"
              element={<CreateAppointment />}
            ></Route>
            <Route
              path="/donationhistory"
              element={<DonationHistory />}
            ></Route>
            <Route path="/upcomingevents" element={<UpcomingEvents />}></Route>
            <Route path="/listallusers" element={<ListAllUsers />}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
