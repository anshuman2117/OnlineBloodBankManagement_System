import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

import Base from "../../components/Base";
import { getDonationHistoryHandler } from "../../Features/user/userSlice";

export const DonationHistory = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [data, setData] = useState([]);

  useEffect(() => {
   
    dispatch(getDonationHistoryHandler(id))
      .then((response) => {
        setData(response.data);
      })

      .catch((err) => {
        toast.error("Opps your donation history is empty!!");
      });
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
        <h1>Blood Donations</h1>
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
                <td>{item.user.firstName} {item.user.lastName}</td>
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
