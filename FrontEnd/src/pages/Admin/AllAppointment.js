import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";
import { getAllAppointmentHistoryHandler } from "../../Features/admin/adminSlice";

function AllAppointment() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [classNameValue, setClassNameValue] = useState("");

  useEffect(() => {
    appointmentHandler();
  }, []);

  //  useEffect(() => {

  //    if(sts==='APPROVED'){
  //     sts='';
  //     setClassNameValue='btn-success'
  //    }
  //    if(sts==='PENDING'){
  //     let sts='';
  //     setClassNameValue='btn-warning'
  //    }
  //    if(sts==='REJECTED'){
  //     setClassNameValue='btn-danger'
  //    }

  //  }, [sts])

  const appointmentHandler = () => {
    dispatch(getAllAppointmentHistoryHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
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
        <h1>All Appointments</h1>
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
                  <th>Appointment Id</th>
                  <th>Name</th>
                  <th>Appointment Schedule date</th>
                  <th>Blood group</th>
                  <th>Patient name</th>
                  <th>bag Size (in ml)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.user.firstName}</td>
                    <td>{item.appointmentScheduleDate}</td>

                    <td>{item.bloodGroup}</td>
                    <td>{item.patient.name}</td>
                    <td>{item.bagSize}</td>
                    <td>
                                          
                      {item.status.includes("REJECTED")&&(
                      <Button className="btn-danger">{item.status}</Button>
                      )
                      }
                      {item.status.includes("PENDING")&&(
                      <Button className="btn-warning">{item.status}</Button>
                      )
                      }
                      {item.status.includes("APPROVED")&&(
                      <Button className="btn-success">{item.status}</Button>
                      )
                      }
                    </td>
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

export default AllAppointment;
