import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import Base from "../../components/Base";
import { getAppointmentHistoryhandler } from "../../Features/user/userSlice";

function AppointmentHistory() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAppointmentHistoryhandler(id))
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  }, []);

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
        <h1>Appointment History</h1>
      </div>
      <div>
        <Table striped
          hover
          style={{
            padding: "1px",
            textAlign: "center",
            border: "2px",
          }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Appointment CreationDate</th>
              <th>Appointment ScheduleDate</th>
              <th>Status</th>
              <th>patient Name</th>
              <th>Blood group</th>
              <th>Bag size(ml)</th>
              <th>Bag Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.appointmentCreationDate}</td>
                <td>{item.appointmentScheduleDate}</td>
                <td>{item.status.includes("REJECTED") && (
                        <Button className="btn-danger">{item.status}</Button>
                      )}
                      {item.status.includes("PENDING") && (
                        <Button className="btn-warning">{item.status}</Button>
                      )}
                      {item.status.includes("APPROVED") && (
                        <Button className="btn-success">{item.status}</Button>
                      )}</td>
                <td>{item.patient.name}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.bagSize}</td>
                <td>{item.bagQuantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Base>
  );
}

export default AppointmentHistory;
