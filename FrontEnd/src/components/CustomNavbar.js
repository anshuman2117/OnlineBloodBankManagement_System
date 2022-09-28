import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { removeUser } from "../Features/persist/persist";
import { storageItem } from "../services/helper";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

function CustomNavbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let userDetails = useSelector((state) => state.persist.user);

  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const isLoggedIn = () => {
    let data = storageItem.getItem("token");
    if (data != null) return true;
    else return false;
  };

  const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
      return userDetails;
    } else {
      return undefined;
    }
  };

  const logout = () => {
    dispatch(removeUser());
    storageItem.removeItem("token");
    navigate("/");
    window.location.reload(true);
  };

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  return (
    <div className="customNav">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          BloodForLives
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>
            {!login && (
              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Need Blood
                </NavLink>
              </NavItem>
            )}

           
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/contactus">
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={ReactLink} to="/aboutus">
                    About Us
                  </DropdownItem>
                  {/* <DropdownItem tag={ReactLink} to="/faq">
                    FAQ
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
           
          </Nav>

          <Nav navbar>
            {login && user.role === "ROLE_ADMIN" && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Users
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/listallusers">
                      All Users
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/pendinguserverification">
                      Pending ID Verification
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/adduser">
                      Add New User
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Appointments
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/all_appointment">
                      All Appointments
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/pendingappointment">
                      All Pending Appointments
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Blood Donations
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/blooddonationhistory">
                      Blood Donations HIstory
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/createuserblooddonation">
                      Create Blood Donation
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                {/* <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Blood Consumptions
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/services">
                      All blood consumptions
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Events
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem tag={ReactLink} to="/services">
                      See all events
                    </DropdownItem> */}
                    <DropdownItem tag={ReactLink} to="/upcomingevents">
                      Upcoming Events
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/addevent">
                      Create Event
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Blood Stock
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/bloodStock">
                      All blood stock
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink tag={ReactLink} to="/adminhome">
                    {user.email}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={logout} style={{cursor:'pointer'}}>Logout</NavLink>
                </NavItem>
              </>
            )}

            {login && user.role === "ROLE_USER" && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Appointment
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/AppointmentHistory">
                      Appointment History
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/createappointment">
                      Create New Appointment
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Address
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/getalladdresses">
                      View all addresses
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/addaddress">
                      Create New Address
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Blood Donations
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/donationhistory">
                      Donation History
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                {/* <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Blood consumptions
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/services">
                      All Blood consumptions
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}

                <NavItem>
                  <NavLink tag={ReactLink} to="/userhome">
                    {user.email}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink nav onClick={logout} style={{cursor:'pointer'}}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            )}

            {!login && (
              <>
                <Nav></Nav>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
