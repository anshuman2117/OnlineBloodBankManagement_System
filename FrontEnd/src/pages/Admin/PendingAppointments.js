import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";
import {
  approveRejectAppointmentsHendler,
  getPendingAppointmenthandler,
} from "../../Features/admin/adminSlice";

function PendingAppointments() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    appointmentHandler();
  }, []);
  const appointmentHandler = () => {
    dispatch(getPendingAppointmenthandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  const approve = (item) => {
    let data = {
      id: item.id,
      status: "APPROVED",
    };
    dispatch(approveRejectAppointmentsHendler(data))
      .then((response) => {
        appointmentHandler();
      })
      .catch((error) => {});
  };
  const reject = (item) => {
    let data = {
      id: item.id,
      status: "REJECTED",
    };
    dispatch(approveRejectAppointmentsHendler(data))
      .then((response) => {
        appointmentHandler();
      })
      .catch((error) => {});
  };

  return (
    <Base>
    <div>
    <div style={{
        background:"lightblue",
        textAlign:"center",
        width:"200",
        height:"100",
        border:"5px"
        }}><h1>Pending Appointments</h1></div>
      <Row>
        
        <Col>
          <Table striped
              hover
              style={{
                padding: "1px",
                textAlign: "center",
                border: "2px",
              }}>
            <thead>
              <tr>
                <th>Appointment Id</th>
                <th>Name</th>
                <th>Appointment Schedule date</th>
                <th style={{textAlign:'center'}} colSpan={2}>Status</th>
                <th>Blood group</th>
                <th>Patient name</th>
                <th>bag Size (in ml)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{textAlign:'center',height:70}}>{item.id}</td>
                  <td>{item.user.firstName}</td>
                  <td style={{textAlign:'center'}}>{item.appointmentScheduleDate}</td>
                  <td >
                    <div>
                      <Button className="btn-success" onClick={() => approve(item)}>Approve</Button>
                    </div>
                    </td>
                    <td>
                    <div>
                      <Button className="btn-danger"  onClick={() => reject(item)}>Reject</Button>
                    </div>
                  </td>
                  <td>{item.bloodGroup}</td>
                  <td>{item.patient.name}</td>
                  <td style={{textAlign:'center'}}>{item.bagSize}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
    
    </Base>
  );
}

export default PendingAppointments;
