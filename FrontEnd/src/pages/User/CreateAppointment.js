import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { appointmentCreationhandler } from "../../Features/user/userSlice";
import image1 from "../../images/bloodbank_1.png";

const CreateAppointment = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    name: "",
    gender: "",
    age: "",
    doctorName: "",
    description: "",
    appointmentScheduleDate: "",
    center: "",
    bloodGroup: "",
    bagSize: "",
    bagQuantity: "",
    dateOfDonation: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setAppointment({ ...appointment, [property]: event.target.value });
  };

  const resetData = () => {
    setAppointment({
      name: "",
      gender: "",
      age: "",
      doctorName: "",
      description: "",
      appointmentScheduleDate: "",
      center: "",
      bloodGroup: "",
      bagSize: "",
      bagQuantity: "",
      dateOfDonation: "",
    });
  };

  const submitAppointment = (e) => {
    dispatch(appointmentCreationhandler(appointment, id))
      .then((response) => {
        toast.success(response.data);
        navigate("/userhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    // e.preventDefault();
    // console.log(appointment);
    // createAppointment(appointment)
    //   .then((resp) => {
    //     console.log(resp);
    //     console.log("success log");
    //     toast.success("Appointment created successfully");
    //     resetData();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("Error log");
    //     toast.error("Appointment creation unsuccessfull");
    //   });
  };

  return (
    <Base>
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
        }}
      >
        <Container className="mb-5 ">
          {/* <h3>sign up form</h3> */}
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" outline>
                <CardHeader>
                  <Container className="text-center">
                    <h3 style={{ color: "black" }}>Get Appointment</h3>
                  </Container>
                </CardHeader>

                <CardBody>
                  <form className="signup">
                    <FormGroup>
                      {/* for first name */}
                      <label for="name">Patient Name</label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="enter patient name here"
                        onChange={(e) => handleChange(e, "name")}
                        value={appointment.name}
                      ></Input>
                    </FormGroup>

                    {/* for Gender  */}
                    <FormGroup
                      onChange={(e) => handleChange(e, "gender")}
                      value={appointment.gender}
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

                    <FormGroup>
                      <label for="age"> Age </label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="enter your Age here"
                        onChange={(e) => handleChange(e, "age")}
                        value={appointment.age}
                      ></Input>
                    </FormGroup>

                    <FormGroup>
                      {/* for doctor name */}
                      <label for="doctorName"> Enter Doctor's name</label>
                      <Input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        placeholder="enter doctor name here"
                        onChange={(e) => handleChange(e, "doctorName")}
                        value={appointment.doctorName}
                      ></Input>
                    </FormGroup>

                    <FormGroup>
                      {/* for first name */}
                      <label for="description">Enter description</label>
                      <Input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter discription about the blood need"
                        onChange={(e) => handleChange(e, "description")}
                        value={appointment.description}
                      ></Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="appointmentScheduleDate">
                        Choose the appointment date
                      </Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "appointmentScheduleDate");
                        }}
                        id="appointmentScheduleDate"
                        name="appointmentScheduleDate"
                        type="date"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="center">
                        Select the center you want to get blood from
                      </Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "center");
                        }}
                        id="center"
                        name="center"
                        type="select"
                      >
                        <option default> Select a center</option>
                        <option value="SURAT">SURAT</option>
                        <option value="AHMEDABAD">AHMEDABAD</option>
                        <option value="THANE">THANE</option>
                        <option value="PUNE">PUNE</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bagSize">
                        SELECT BAG SIZE OF THE RECIEVED BLOOD(in ml)
                      </Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "bagSize");
                        }}
                        id="bagSize"
                        name="bagSize"
                        type="select"
                      >
                        <option default> choose any</option>
                        <option value="150">150</option>
                        <option value="350">350</option>
                        <option value="500">500</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bagQuantity">
                        SELECT UNITS OF BLOOD DONATED
                      </Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "bagQuantity");
                        }}
                        id="bagQuantity"
                        name="bagQuantity"
                        type="select"
                      >
                        <option default> choose any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bloodGroup">SELECT BLOOD GROUP TYPE</Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "bloodGroup");
                        }}
                        id="bloodGroup"
                        name="bloodGroup"
                        type="select"
                      >
                        {/* O_positive,O_negative,AB_positive,AB_negative,A_positive,A_negative,B_positive,B_negative 150 350 500   1 2 3 */}
                        <option default> choose any</option>
                        <option value="O_positive">O+</option>
                        <option value="O_negative">O-</option>
                        <option value="AB_positive">AB+</option>
                        <option value="AB_negative">AB-</option>
                        <option value="A_positive">A+</option>
                        <option value="A_negative">A-</option>
                        <option value="B_positive">B+</option>
                        <option value="B_negative">B-</option>
                      </Input>
                    </FormGroup>

                    <Container className="text-center mb-5">
                      <Button
                        type="button"
                        onClick={submitAppointment}
                        color="info"
                      >
                        Take Appointmentt
                      </Button>
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
      </div>
    </Base>
  );
};

export default CreateAppointment;

// private String name;
// 	private Gender gender;
// 	private Integer age;
// 	private String doctorName;
// 	private String description;
// 	private LocalDate appointmentScheduleDate;
// 	private Center center;
// 	private int bagSize;
// 	private int bagQuantity;
// 	private BloodGroup bloodGroup;
