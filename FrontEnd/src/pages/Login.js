import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form, FormGroup, Input
} from "reactstrap";
import Base from "../components/Base";
import { setUser } from "../Features/persist/persist";
import { login } from "../Features/user/userSlice";
import { storageItem } from "./../services/helper";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  


  function validateEmail(inputText)
{
  if(/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(inputText))
    return true;
  else
return false;
}

// const checkEmail=(e)=>{
//   if(){
//     return true;
//   }
//   else
//   return false;
// }

  const handleChange = (event, field) => {
    document.getElementById("test1").style="color:black"
      document.getElementById("test2").style="color:black"
    document.getElementById("test1").innerHTML="Your Username is your Email Id "
    document.getElementById("test2").innerHTML="Enter Your Password here.... "
    let actualValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
 
  // alert(document.getElementById("exapleEmail").value())
    if(document.getElementById("exampleEmail").value.trim()==="" ){
    
      document.getElementById("test1").style="color:red"
      document.getElementById("test1").innerHTML="first you have to fill your registered email id "
      // document.getElementById("test1").innerText("first you have to fill your registered email id ")
    }
    else if(loginDetails.password.trim()===""){
      
      document.getElementById("test2").style="color:red"
      document.getElementById("test2").innerHTML="you forgot to fill your password please complete that"
      
    }
    
    else{
      // validateEmail("testing value")
      if(validateEmail(document.getElementById("exampleEmail").value))  {
       
      document.getElementById("test1").style="color:green"
      document.getElementById("test2").style="color:green"
      document.getElementById("test1").innerHTML="correct  format of email id "
      document.getElementById("test2").innerHTML="correct  format of password"
      dispatch(login(loginDetails))
      .then((response) => {
        storageItem.setItem("token", response.data.jwt);
        toast.success(response.data.message);
        dispatch(setUser(response.data.user))
        if (response.data.user.role === "ROLE_USER") {
          navigate("/userhome");
        } else if (response.data.user.role === "ROLE_ADMIN") {
          navigate("/adminhome");
        }
        // console.log(response.data.jwt)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    }
    else{
      document.getElementById("test1").style="color:red"
      document.getElementById("test1").innerHTML="incorrect  format of email id "
    }

      
    }
    
      
    // event.preventDefault();
    // console.log(loginDetails);
    // if (loginDetails.email.trim === "" || loginDetails.password.trim === "") {
    //   toast.error("Email and password are required");
    //   return;
    // }

    // loginUser(loginDetails)
    //   .then((data) => {
    //     console.log("user logged in");
    //     console.log(data);

    //     //saving data to local storage
    //     doLogin(data,() => {
    //       console.log("login details is saves to local storage")
    //     })

    //     toast.success("Login Successfull")
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.response.status == 400 || error.response.status == 404) {
    //       toast.error(error.response.data.message);
    //     } else {
    //       toast.error("Something went wrong on server !!");
    //     }
    //   });
  };

  return (
    <Base>
      <div className="Login">
        <h2 style={{textAlign:"center",fontFamily:"-moz-initial"}}>Login here</h2>
        <Form className="form">
          <FormGroup>
            {/* <Label>Username</Label> */}
            <div id="test1" style={{color:"black",fontFamily:"-moz-initial"}}>Your Email Id is Your Username Please Enter Here</div>
            <Input
            required="true"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              value={loginDetails.email}
              onChange={(e) => {
                handleChange(e, "email");
              }}
            />
            
          </FormGroup>
          <FormGroup>
            {/* <Label for="examplePassword">Password</Label> */}
            <div id="test2" style={{color:"black",fontFamily:"-moz-initial"}}>Enter Your password here.....</div>
            <Input
             required={true}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={loginDetails.password}
              onChange={(e) => handleChange(e, "password")}
            />
          </FormGroup>
          <div>
            <Button
              type="button"
              className="lg container btn-info"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
            <div className="mt-3" style={{ textAlign: "center" }}>
              
              <span className="container ms-5 mt">
                <small>
                  Does not have Account <Link to="/signup">Register</Link>
                </small>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </Base>
  );
};

export default Login;
