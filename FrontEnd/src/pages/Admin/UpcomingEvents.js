import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button, Col, Container,
  FormGroup,
  Input,
  Label, Row, Table
} from "reactstrap";
import Base from "../../components/Base";
import { deleteCampHandler, getUpcomigEventsHandler } from "../../Features/admin/adminSlice";
import { updateCampHandler } from './../../Features/admin/adminSlice';



function UpcomingEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [camp, setCamp] = useState({
    id:"",
    title: "",
    description: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    venue: "",
    city:""
    // event_poster: "",
  });

  useEffect(() => {
    eventListHandler();
  }, []);
  const eventListHandler = () => {
    dispatch(getUpcomigEventsHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

// const toggle=()=>{
//   setIsShow(!isShow);
// }





const handleChange = (event, property) => {
  // console.log(event);
  setCamp({ ...camp, [property]: event.target.value });
};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const buttonUpdateEvent=(item)=>{
    handleShow()
    setCamp({
      id:item.id,
      title: item.title,
    description: item.description,
    eventStartDate: item.eventStartDate,
    eventStartTime: item.eventStartTime,
    eventEndDate: item.eventEndDate,
    eventEndTime: item.eventEndTime,
    venue: item.venue,
    city:item.city
    })

  }


const buttondeleteEvent=(item)=>{
  setCamp({id:item.id})
}

  
  const deleteEvent=(e)=>{
    
    buttondeleteEvent(camp.id)
    
    dispatch(deleteCampHandler(e))
    .then((response) => {
      toast.success(response.data);
      eventListHandler()
    })
    .catch((error) => {
      console.log(error)
      // toast.error(error.response.data.message);
    });
  };

 const updatingEvent=(e)=>{
  handleClose()
dispatch(updateCampHandler(camp))
.then((response) => {
  toast.success(response.data);
  eventListHandler()
  // navigate("/upcomingevents");
})
.catch((error) => {
  toast.error(error.response.data.message);
});
 };
 


  return (
    <Base>
      <div
        style={{
          background: "lightblue",
          textAlign: "center",
          width: "200",
          height: "100",
          border: "5px",
        }}
      >
        <h1>Upcoming Events</h1>
      </div>
      <div>
        <Row>
          <Col>
            <Table
              striped
              hover
              style={{
                padding: "1px",
                textAlign: "center",
                border: "2px",
              }}
            >
              <thead>
                <tr>
                  <th>Event No.</th>
                  <th>Event Name</th>
                  <th>Discription</th>
                  <th>Starting From </th>
                  <th>Ending on</th>
                  <th>Location</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.eventStartDate}</td>
                    <td>{item.eventEndDate}</td>
                    <td>{item.venue}</td>
                    <td>{item.city}</td>
                    <td >
                    <div>
                      <Button className="btn-warning" onClick={() => buttonUpdateEvent(item)}>Update </Button>
                    </div>
                    </td>
                    <td>
                    <div>
                      <Button className="btn-danger"  onClick={() => deleteEvent(item.id)}>Delete</Button>
                    </div>
                  </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

<div>

<div>
<>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>


        <form method="put" className="signup">
          <FormGroup > <Row style={{textAlign:"center"}}><Col  ><label>Event Id</label>
                     <Input style={{textAlign:"center"}} readOnly={'true'} value={camp.id}></Input>  </Col></Row></FormGroup>
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
                          value={camp.city}
                        >
                          <option default> choose a city</option>
                          <option value="THANE">THANE</option>
                          <option value="PUNE">PUNE</option>
                          <option value="SURAT">SURAT</option>
                          <option value="AHMEDABAD">AHMEDABAD</option>
                        </Input>
                      </FormGroup>
                        </form>
 


        </Modal.Body>
        <Modal.Footer>
          <Container className="text-center mb-5">
          <Button  className="btn-light" onClick={handleClose}>
            close
          </Button>
          <Button type="button" className="btn-warning" onClick={updatingEvent} >
            Update Event
          </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
      </div>
</div>


    </Base>
  );
}

export default UpcomingEvents;

