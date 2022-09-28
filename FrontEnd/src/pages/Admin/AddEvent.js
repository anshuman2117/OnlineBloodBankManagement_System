import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader, Col, Container,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import Base from "../../components/Base";

// import { createEvent } from "../../services/event-service";
import { createCampHandler } from './../../Features/admin/adminSlice';

const  AddEvent = ()=>  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [camp, setCamp] = useState({
    title: "",
    description: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    venue: "",
    // event_poster: "",
  });

  // const createEvent=()=>{}
  const submitCamp = (e) => {
    
dispatch(createCampHandler(camp))
.then((response) => {
  toast.success(response.data);
  navigate("/upcomingevents");
})
.catch((error) => {
  toast.error(error.response.data.message);
});
    
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    // console.log(event);
    setCamp({ ...camp, [property]: event.target.value });
  };

  return (
    <Base>
    <div>
      <Row>
        <Col sm={2}> <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias, aperiam provident, accusamus voluptas a nostrum aliquid sit officia neque nobis et officiis commodi soluta laborum facere eveniet eius ipsa culpa sapiente. Culpa, laudantium. In iure numquam, animi officiis ab magnam illum, dicta error quia, esse eius accusamus eligendi? Quo animi distinctio, minus blanditiis eligendi temporibus, officiis vitae architecto vel, expedita totam corporis quas natus reiciendis error velit repudiandae! Quod atque beatae iusto ipsam, quis nobis quos culpa. Suscipit optio ipsa perspiciatis quas tempore expedita illum similique ipsum, minima voluptatem error ad rerum est, pariatur fugit distinctio repellat non possimus.
          </div></Col>
            <Col lg={8}>
            <Row className=" xl-auto g-2  mt-2 ms-5">
        
        <Col>
          <Container className="mb-5 mt-0 ">
            <Row>
              <Col sm={{ size: 10 }}>
                <Card color="dark" outline>
                  <CardHeader>
                    <Container className="text-center">
                      <h3> Fill Details to Create an Event</h3>
                    </Container>
                  </CardHeader>

                  <CardBody>
                    {/* <form onSubmit={submitForm} className="signup"> */}
                    <form method="post" className="signup">
                      <FormGroup>
                        {/* for event title name*/}
                        <label for="title"> Event Title</label>
                        <Input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="enter Event title here"
                          onChange={(e) => handleChange(e, "title")}
                          value={camp.title}
                        ></Input>
                      </FormGroup>

                      {/* for description */}
                      <FormGroup>
                        <label for="description"> Description</label>
                        <Input
                        style={{resize:'none'}}
                        rows="4"
                          type="textarea"
                          id="description"
                          name="description"
                          placeholder="write event description here"
                          onChange={(e) => handleChange(e, "description")}
                          value={camp.description}
                        ></Input>
                      </FormGroup>

                      {/* for eventStartDate  */}
                      <Row>
                        <Col>
                          <FormGroup>
                            <label for="eventStartDate">
                              {" "}
                              Event Start Date
                            </label>
                            <Input
                              type="date"
                              id="eventStartDate"
                              name="eventStartDate"
                              onChange={(e) =>
                                handleChange(e, "eventStartDate")
                              }
                              value={camp.eventStartDate}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <label for="eventStartTime">
                              {" "}
                              event Start Time{" "}
                            </label>
                            <Input
                              type="time"
                              step="2"
                              id="eventStartTime"
                              name="eventStartTime"
                              onChange={(e) =>
                                handleChange(e, "eventStartTime")
                              }
                              value={camp.eventStartTime}
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          {/* event end date */}
                          <FormGroup>
                            <label for="eventEndDate"> event End Date</label>
                            <Input
                              type="date"
                              id="eventEndDate"
                              name="eventEndDate"
                              onChange={(e) => handleChange(e, "eventEndDate")}
                              value={camp.eventEndDate}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col>
                          {/* for event end time */}
                          <FormGroup>
                            <label for="eventEndTime"> event End Time </label>
                            <Input
                              type="time"
                              step="2"
                              id="eventEndTime"
                              name="eventEndTime"
                              onChange={(e) => handleChange(e, "eventEndTime")}
                              value={camp.eventEndTime}
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      {/* for Venue */}
                      <FormGroup>
                        <label for="venue"> Event Venue</label>
                        <Input
                          type="text"
                          id="venue"
                          name="venue"
                          placeholder="write full address of event....."
                          onChange={(e) => handleChange(e, "venue")}
                          value={camp.venue}
                        ></Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="city">SELECT CITY</Label>
                        <Input
                          onChange={(event) => {
                            handleChange(event, "city");
                          }}
                          id="city"
                          name="city"
                          type="select"
                        >
                          <option default> choose a city</option>
                          <option value="THANE">THANE</option>
                          <option value="PUNE">PUNE</option>
                          <option value="SURAT">SURAT</option>
                          <option value="AHMEDABAD">AHMEDABAD</option>
                        </Input>
                      </FormGroup>

                      <Container className="text-center mb-5">
                        <Button type="button" 
                        onClick={submitCamp} color="info">Create Event</Button>
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
        </Col>
      </Row>         
            </Col>
        <Col lg={2} >
        </Col>
      </Row>
      
    </div>
    
    </Base>
  );
}

export default AddEvent;
