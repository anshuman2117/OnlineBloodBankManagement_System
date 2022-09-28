import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user-service";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    age: "",
    gender: "",
    documentType: "",
    uniqueIdNumber: "",
    // image: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //  useEffect(()=>{  //use effect takes 2 params 1 for value 2nd call back fn e.g.
  // this will be automatically called when data(callback will changed)
  //     console.log(user);
  //    },[user])

  const handleChange = (event, property) => {
    /* here property will be passed as name of use state field */
    // console.log(event.target.value)
    // console.log(property)
    // here we are using "property" to change the fields of useState dynamically
    setUser({ ...user, [property]: event.target.value });

  };

  const resetUser = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contactNo: "",
      age: "",
      gender: "",
      documentType: "",
      uniqueIdNumber: "",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    signUp(user)
      .then((resp) => {        
        toast.success("you registerd successfully");
        resetUser();
        navigate("/login")
      })
      .catch((error) => {
       
        toast.error("Registration unsuccessfull");
      });
  };

  return (
    <div className="signupBackground">
      <Base>
        <Container className="mb-5 mt-5">
          {/* <h3>sign up form</h3> */}
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" outline>
                <CardHeader>
                  <Container className="text-center">
                    <h3> fill your details to register yourself</h3>
                  </Container>
                </CardHeader>

                <CardBody>
                  <form onSubmit={submitForm} className="signup">
                    <FormGroup>
                      {/* for first name */}
                      <label for="fName"> First Name</label>
                      <Input
                      required={"true"}
                        type="text"
                        id="fisrtName"
                        name="firstName"
                        placeholder="enter your first name here"
                        onChange={(e) => handleChange(e, "firstName")}
                        
                        value={user.fName}
                      ></Input>
                    </FormGroup>

                    {/* for Last name */}
                    <FormGroup>
                      <label for="lName"> Last Name</label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="enter your Last name here"
                        onChange={(e) => handleChange(e, "lastName")}
                        value={user.lName}
                      ></Input>
                    </FormGroup>

                    {/* for email  */}
                    <FormGroup>
                      <label for="email"> Email id</label>
                      <Input
                      required={"true"}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="enter your email here"
                      onChange={(e) => handleChange(e, "email")}
                      value={user.email}
                      ></Input>
                    </FormGroup>
                    {/* for password  */}
                    <FormGroup>
                      <label for="password"> password </label>
                      <Input
                      required={"true"}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="enter your password here"
                      onChange={(e) => handleChange(e, "password")}
                      value={user.password}
                      ></Input>
                    </FormGroup>
                    {/* for contact No  */}
                    <FormGroup>
                      <label for="contact"> Contact No </label>
                      <Input
                      required={"true"}
                      min={5999999999}
                      max={9999999999}
                    
                      type="number"
                      id="contactNo"
                      name="contactNo"
                      placeholder="enter your Mobile number here"
                      onChange={(e) => handleChange(e, "contactNo")}
                      value={user.contactNo}
                      ></Input>
                    </FormGroup>
                    {/* for Age  */}
                    <FormGroup>
                      <label for="age"> Age </label>
                      <Input
                        type="number"
                        max={100}
                        min={15}
                        id="age"
                        name="age"
                        placeholder="enter your Age here"
                        onChange={(e) => handleChange(e, "age")}
                        value={user.age}
                        ></Input>
                    </FormGroup>
                    {/* for Gender  */}
                    <FormGroup
                      onChange={(e) => handleChange(e, "gender")}
                      value={user.gender}
                      >
                      <label for="gender"> Gender </label>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value={"MALE"}
                          id="male"
                          className="ms-3"
                          />
                        <label for="male">Male</label>
                        <input
                          type="radio"
                          name="gender"
                          value={"FEMALE"}
                          id="female"
                          className="ms-3"
                          />
                        <label for="female">Female</label>
                        <input
                          type="radio"
                          name="gender"
                          value={"OTHER"}
                          id="other"
                          className="ms-3"
                          />
                        <label for="other">other</label>
                      </div>
                    </FormGroup>
                    {/* for identity proof type drop down */}
                    <FormGroup>
                      <Label for="documentType">
                        SELECT IDENTITY PROOF TYPE
                      </Label>
                      <Input
                          required={"true"}
                        onChange={(event) => {
                          handleChange(event, "documentType");
                        }}
                        id="documentType"
                        name="documentType"
                        type="select"
                        >
                        <option default> choose any</option>
                        <option value="AADHAR_CARD">ADHAR CARD</option>
                        <option value="VOTER_ID">VOTER ID</option>
                        <option value="PAN_CARD">PAN CARD</option>
                      </Input>
                    </FormGroup>
                    {/* for Document id  */}
                    <FormGroup>
                      <label for="docid"> Document id</label>
                      <Input
                          required={"true"}
                        onChange={(event) => {
                          handleChange(event, "uniqueIdNumber");
                        }}
                        type="text"
                        minLength={10}
                        maxLength={12}
                        id="docid"
                        name="uniqueIdNumber"
                        placeholder="enter your document id here"
                      ></Input>
                    </FormGroup>

                    <Container className="text-center mb-5">
                      <Button color="info">Register</Button>
                      <Button type="reset" color="secondary" className="ms-5">
                        reset
                      </Button>
                      <small className="ms-4 mb-2">
                        already registered <Link to="/login">Login</Link>
                      </small>
                    </Container>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};
export default Signup;
