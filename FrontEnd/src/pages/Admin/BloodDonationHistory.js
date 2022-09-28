import React, { useEffect, useState } from "react";
import Base from "../../components/Base";
import { Table } from "reactstrap";
import { getAllDonationHistoryHandler } from "../../Features/admin/adminSlice";
import { useDispatch } from "react-redux";

export const BloodDonationHistory = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    bloodStockHandler();
  }, []);

  const bloodStockHandler = () => {
    dispatch(getAllDonationHistoryHandler())
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
        <h1>All Blood Donations</h1>
      </div>
      <div
        style={{
          background: "lightblue",
          textAlign: "center",
          width: "200",
          height: "100",
          border: "5px",
        }}
      >
      
      </div>
      <div>
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
              <th>Id</th>
              <th>Name</th>
              <th>Blood sample ID</th>

              <th>Blood Group</th>
              <th>Bag size(ml)</th>
              <th>Bag Quantity</th>
              <th>Donation Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.user.id}>
                <td>{item.id}</td>
                <td>
                  {item.user.firstName} {item.user.lastName}
                </td>
                <td>{item.bloodSampleId}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.bagSize}</td>
                <td>{item.bagQuantity}</td>
                <td>{item.dateOfDonation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Base>
  );
};
export default BloodDonationHistory;

//getAllDonationHistoryHandler
