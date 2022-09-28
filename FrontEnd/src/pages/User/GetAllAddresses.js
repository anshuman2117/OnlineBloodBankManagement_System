import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Table } from "reactstrap";

import Base from "../../components/Base";
import { getAddressByIdHandler } from "../../Features/user/userSlice";

function GetAllAddresses() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAddressByIdHandler(id))
      .then((response) => {
        setData(response.data);
      })

      .catch((err) => {
        toast.error(err.response.data.message);
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
        <h1>All Addresses</h1>
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
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.pincode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Base>
  );
}
export default GetAllAddresses;
//getAddressByIdHandler
