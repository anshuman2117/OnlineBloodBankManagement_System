import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";
import { getUserListHandler } from "../../Features/admin/adminSlice";

function ListAllUsers() {
  const [buttonValue, setButtonValue] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    userListHandler();
  }, []);

  const userListHandler = () => {
    dispatch(getUserListHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  // const changeButton=(props)=>(
  //   if(props.buttonValue==='APPROVED'){
  //     return ('btn-success')
  //   }
  // )

  return (
    <div>
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
          <h1>Registered Users</h1>
        </div>

        {/* <h3 style={{ textAlign: "center",fontFamily:'serif' }} className="m-3">
        available blood stock
      </h3> */}

        <div className="mb-5" style={{marginBottom:'20px'}}>
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
                    <th>User ID</th>
                    <th style={{ width: 100 }}>User Name</th>
                    <th>Email ID</th>
                    <th>Contact number</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Identity proof type</th>
                    <th>Id card number</th>
                    <th>Verifcation Status</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((userdata) => {
                    return (
                      <tr key={userdata.id}>
                        <td>{userdata.user.id}</td>
                        <td style={{ width: 100 }}>
                          {userdata.user.firstName} {userdata.user.lastName}
                        </td>

                        <td>{userdata.user.email}</td>
                        <td>{userdata.user.contactNo}</td>
                        <td>{userdata.user.age}</td>
                        <td>{userdata.user.gender}</td>
                        <td>{userdata.documentType}</td>
                        <td>{userdata.uniqueIdNumber}</td>
                        <td>
                          {userdata.status.includes("REJECTED") && (
                            <Button className="btn-danger">
                              {userdata.status}
                            </Button>
                          )}
                          {userdata.status.includes("PENDING") && (
                            <Button className="btn-warning">
                              {userdata.status}
                            </Button>
                          )}
                          {userdata.status.includes("APPROVED") && (
                            <Button className="btn-success">
                              {userdata.status}
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Base>
    </div>
  );
}

export default ListAllUsers;
