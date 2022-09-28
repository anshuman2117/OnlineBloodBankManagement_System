import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";

import {
  approveRejectIdproofHendler,
  getPendingIdproofhandler,
} from "../../Features/admin/adminSlice";

export const PendingUserVerification = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // alert(1)
    idVerificationHandler();
    // dispatch()
  }, []);

  const [data, setData] = useState([]);

  const idVerificationHandler = () => {
    dispatch(getPendingIdproofhandler())
      .then((response) => {
        setData(response.data);
      })

      .catch((err) => {});
  };

  const approve = (item) => {
    let param = {
      status: "APPROVED",
    };
    dispatch(approveRejectIdproofHendler(param, item.user.id))
      .then((response) => {
        idVerificationHandler();
      })
      .catch((error) => {});
  };
  const reject = (item) => {
    let param = {
      status: "REJECTED",
    };
    dispatch(approveRejectIdproofHendler(param, item.user.id))
      .then((response) => {
        idVerificationHandler();
      })
      .catch((error) => {});
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
          <h1>Pending User Verification</h1>
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
                  <th>User id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email id</th>

                  <th>Identity proof Type</th>
                  <th>Id card number</th>
                  <th colSpan={2}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.user.id}</td>
                    <td>{item.user.firstName}</td>
                    <td>{item.user.lastName}</td>
                    <td>{item.user.email}</td>

                    <td>{item.documentType}</td>
                    <td>{item.uniqueIdNumber}</td>
                    <td>
                      <div>
                        <Button
                          className="btn-success"
                          onClick={() => approve(item)}
                        >
                          Approve
                        </Button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <Button
                          className="btn-danger"
                          onClick={() => reject(item)}
                        >
                          Reject
                        </Button>
                      </div>
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
};
