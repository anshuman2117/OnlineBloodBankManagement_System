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
import Base from "../../components/Base";
import { addUserByAdminHandler } from "../../Features/admin/adminSlice";
import "../signup.css";

function AddUser() {

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
      contactNo: "",
      age: "",
      gender: "",
      documentType: "",
      uniqueIdNumber: "",
    });
  };
//

  const submitForm = (e) => {
    dispatch(addUserByAdminHandler(user))
      .then((response) => {
        toast.success(response.data);
        navigate("/adminhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
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
                  <form  className="signup">
                    <Row>
                      <Col><FormGroup>
                      {/* for first name */}
                      <label for="fName"> First Name</label>
                      <Input
                        type="text"
                        id="fisrtName"
                        name="firstName"
                        placeholder="enter your first name here"
                        onChange={(e) => handleChange(e, "firstName")}
                        value={user.fName}
                      ></Input>
                    </FormGroup>
                    </Col>

                      <Col>
                      
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

                      </Col>
                    </Row>

                   <Row>
                    <Col>
                    {/* for email  */}
                    <FormGroup>
                      <label for="email"> Email id</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter your email here"
                        onChange={(e) => handleChange(e, "email")}
                        value={user.email}
                      ></Input>
                    </FormGroup>
                    </Col>
                    <Col>
                    {/* for contact No  */}
                    <FormGroup>
                      <label for="contact"> Contact No </label>
                      <Input
                        type="text"
                        id="contactNo"
                        name="contactNo"
                        placeholder="enter your Mobile number here"
                        onChange={(e) => handleChange(e, "contactNo")}
                        value={user.contactNo}
                      ></Input>
                    </FormGroup>
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    {/* for Age  */}
                    <FormGroup>
                      <label for="age"> Age </label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="enter your Age here"
                        onChange={(e) => handleChange(e, "age")}
                        value={user.age}
                      ></Input>
                    </FormGroup>
                    </Col>
                    <Col>
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
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                   </Row>
                    
                    
                    
                    
                    
                    {/* for identity proof type drop down */}
                    <FormGroup>
                      <Label for="documentType">
                        SELECT IDENTITY PROOF TYPE
                      </Label>
                      <Input
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
                        onChange={(event) => {
                          handleChange(event, "uniqueIdNumber");
                        }}
                        type="text"
                        id="docid"
                        name="uniqueIdNumber"
                        placeholder="enter your document id here"
                      ></Input>
                    </FormGroup>

                    <Container className="text-center mb-5">
                      <Button color="info"
                      type="button" onClick={submitForm}
                      >Add User</Button>
                      <Button type="reset" color="secondary" className="ms-5">
                        reset
                      </Button>
                     
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
}

export default AddUser;
