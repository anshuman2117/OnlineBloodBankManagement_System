// import Base from "../components/Base"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Base from "../components/Base";
import { removeUser } from "../Features/persist/persist";
import { storageItem } from "../services/helper";
import "./ContactUs.css";

const Contactus = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeUser());
    storageItem.removeItem("token");
    navigate("/");
  };

  return (
    <Base>
       <div class="contact_info">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

                        <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div class="contact_info_image"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt=""></img></div>
                            <div class="contact_info_content">
                                <div class="contact_info_title">Phone</div>
                                <div class="contact_info_text">+91 9999 999 9999</div>
                            </div>
                        </div>
                        <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div class="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""></img></div>
                            <div class="contact_info_content">
                                <div class="contact_info_title">Email</div>
                                <div class="contact_info_text">contact@bloodforlives.com</div>
                            </div>
                        </div>

                        <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div class="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""></img></div>
                            <div class="contact_info_content">
                                <div class="contact_info_title">Address</div>
                                <div class="contact_info_text">29,Akurdi,MH,INDIA</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    
        

    </Base>
  );
};

export default Contactus;
