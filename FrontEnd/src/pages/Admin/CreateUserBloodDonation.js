import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { createBloodDonationHandler } from "../../Features/admin/adminSlice";
import image1 from "../../images/2.jpg";

const CreateUserBloodDonation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [blood, setBlood] = useState({
    bloodGroup: "",
    bagSize: "",
    bagQuantity: "",
    dateOfDonation: "",
    id: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setBlood({ ...blood, [property]: event.target.value });
  };

  // const handleIdChange=(event,id)=>{
  //   setId({id,id:event.target.value});
  // }

  // const resetData = () => {
  //   setBlood({
  //     bloodGroup: "",
  //     bagSize: "",
  //     bagQuantity: "",
  //     dateOfDonation: "",
  //   });
  // };

  const submitBlood = (e) => {
    dispatch(createBloodDonationHandler(blood.id, blood))
      .then((response) => {
        toast.success(response.data);
        navigate("/blooddonationhistory");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <Base>
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
        }}
      >
        <Container className="mb-5 mt-1">
          {/* <h3>sign up form</h3> */}
          <Row className="mt-1">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" outline>
                <CardHeader>
                  <Container className="text-center">
                    <h3 style={{ color: "black" }}> Create a Blood Donation</h3>
                  </Container>
                </CardHeader>

                <CardBody>
                  <form onSubmit={submitBlood} className="signup">
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="bloodGroup">Enter User id</Label>
                          <Input
                            onChange={(event) => {
                              handleChange(event, "id");
                            }}
                            id="id"
                            name="id"
                            type="number"
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="bloodGroup">
                            SELECT BLOOD GROUP TYPE
                          </Label>
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
                      </Col>
                    </Row>

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

                    {/* for identity proof type drop down */}
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
                      <Label for="dateOfDonation">DONATION DATE</Label>
                      <Input
                        onChange={(event) => {
                          handleChange(event, "dateOfDonation");
                        }}
                        id="dateOfDonation"
                        name="dateOfDonation"
                        type="date"
                      />
                    </FormGroup>

                    <Container className="text-center mb-5">
                      <Button type="button" onClick={submitBlood} color="info">
                        submit
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

export default CreateUserBloodDonation;

// private BloodGroup bloodGroup
// 	@NotEmpty
// 	private int bagSize;

// 	private int bagQuantity;

// 	private LocalDate dateOfDonation;
