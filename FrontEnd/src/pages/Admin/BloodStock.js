import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import Base from "../../components/Base";
import {
  getBloodStockHandler,
  submitUpdateStockHandler
} from "../../Features/admin/adminSlice";
import "./bloodStock.css";

function BloodStock() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [show, setShow] = useState();
  const navigate = useNavigate();
 const [isshowHideBloodUpdate,setIsshowHideBloodUpdate]=useState(false)
  const [bloodData, setBloodData] = useState({
    bloodGroup: "",
    bloodSize: "",
    bloodQuantity: "",
  });

  const handleChange = (event, property) => {
    setBloodData({ ...bloodData, [property]: event.target.value });
  };

  useEffect(() => {
    bloodStockHandler();
  }, []);

  const bloodStockHandler = () => {
    dispatch(getBloodStockHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  //   const showForm=()=>{

  //     setShow(!show);

  //     var buttonText = show ? "Hide Component" : "Show Component";

  //     return (
  //         <div className="component-container">
  //           {show && children}
  //           <button onClick={toggleShow}>{buttonText}</button>
  //         </div>
  //       );
  //   }

 const showHideBloodUpdate=()=>{
     setIsshowHideBloodUpdate(true)
 }


  const submitUpdateStock = (e) => {
    dispatch(submitUpdateStockHandler(bloodData))
      .then((response) => {
        toast.success(response.data);
        setIsshowHideBloodUpdate(false)
        bloodStockHandler();
        navigate("/adminhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <Base>
        <Row
          style={{
            background: "lightblue",
            textAlign: "center",
            width: "200",
            height: "100",
            border: "5px",
          }}
        >
          <Col lg={10}>
            <div>
              <h1>Available blood stock</h1>
            </div>
          </Col>
          {/* <Col className="ms-2 mt-2"> <a href="#addStock" >Insert Blood Stock</a> </Col> */}
          <Col className="ms-2 mt-2">
            
            
              <Button onClick={showHideBloodUpdate} color="danger">Update Blood Stock</Button>
            
          </Col>
        </Row>

        {/* <h3 style={{ textAlign: "center",fontFamily:'serif' }} className="m-3">
        available blood stock
      </h3> */}




          {isshowHideBloodUpdate?
            

           <Form 
            className="Form-control mt-5 mb-5 ms-5">
            <Row >
              <Col style={{  border: '5px solid rgba(0, 0, 0, 0.05)' }}>
                <Label for="bloodGroup">SELECT BLOOD GROUP TYPE</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bloodGroup");
                  }}
                  id="bloodGroup"
                  name="bloodGroup"
                  type="select"
                >
                  {/* O_positive,O_negative,AB_positive,AB_negative,A_positive,A_negative,B_positive,B_negative 150 350 500   1 2 3 */}
                  <option default> choose any</option>
                  <option value="O_positive">O+</option>
                  <option value="O_negative">O-</option>
                  <option value="AB_positive">AB+</option>
                  <option value="AB_negative">AB-</option>
                  <option value="A_positive">A+</option>
                  <option value="A_negative">A-</option>
                  <option value="B_positive">B+</option>
                  <option value="B_negative">B-</option>
                </Input>
              </Col>
              <Col style={{  border: '5px solid rgba(0, 0, 0, 0.05)' }}>
                <Label for="bagSize">SELECT BAG SIZE OF BLOOD(in ml)</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bagSize");
                  }}
                  id="bagSize"
                  name="bagSize"
                  type="select"
                >
                  <option default> choose any</option>
                  <option value="150">150</option>
                  <option value="350">350</option>
                  <option value="500">500</option>
                </Input>
              </Col>
              <Col style={{  border: '5px solid rgba(0, 0, 0, 0.05)' }}>
                <Label for="bagQuantity">SELECT UNITS OF BLOOD DONATED</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bagQuantity");
                  }}
                  id="bagQuantity"
                  name="bagQuantity"
                  type="number"
                ></Input>
              </Col>
              <Col >
                <p />
                <Button
                  onClick={submitUpdateStock}
                  className="btn-warning mt-3"
                  type="button"
                >
                 Update Now
                </Button>
              </Col>
            </Row>
          </Form>
            
          :null}


        <div className="ms-5 allcard ml-20" style={{ alignContent: "center" }}>
          {data.map((bloodStockdata) => {
            return (
              <div
                key={bloodStockdata.id}
                className="col-3 bloodstock ms-1"
                style={{
                  border: 2,
                  position: "relative",
                  padding: 20,
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 30 }}>
                  <h5 className="  card-title ">
                    <small style={{ fontFamily: "sans-serif", color: "white" }}>
                      blood group:  </small>
                    {bloodStockdata.bloodGroup}
                  </h5>
                </div>
                <p />
                <div>
                  <h5 className="card-title">
                    <small style={{  fontFamily: "sans-serif", color: "white" }}>
                      
                      bag size:</small>
                    {bloodStockdata.bagSize}
                  </h5>
                </div>
                <div>
                  <h5 className=" card-title">
                    <small style={{ fontFamily: "sans-serif", color: "white" }}>
                      bag quantity:  </small>
                    {bloodStockdata.bagQuantity}
                  </h5>
                </div>
                <div>
                  <h5 className=" card-title">
                    <small style={{ fontFamily: "sans-serif", color: "white" }}>
                      Updated on: </small>
                      {bloodStockdata.lastUpdatedDate}
                  </h5>
                </div>
              </div>
            );
          })}

          
        </div>
      </Base>
    </div>
  );
}

export default BloodStock;
