import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import Base from "../../components/Base";
import { addAddresshandler } from "../../Features/user/userSlice";
import "../signup.css";

function AddAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setAddress({ ...address, [property]: event.target.value });
  };

  const resetaddress = () => {
    setAddress({
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
  };
  //

  const submitForm = (e) => {
    dispatch(addAddresshandler(id, address))
      .then((response) => {
        console.log(address);
        toast.success(response.data);
        navigate("/getalladdresses");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div style={{ height: "100%", background: "lightblue" }}>
      <Base>
        <Container className="mb-15">
          {/* <h3>sign up form</h3> */}
          <Row className="mt-1 ">
            <Col sm={{ size: 5, offset: 4 }}>
              <Card color="dark" outline>
                <CardHeader>
                  <Container className="text-center">
                    <h3> Fill Address details </h3>
                  </Container>
                </CardHeader>

                <CardBody>
                  <form onSubmit={submitForm} className="signup">
                    <FormGroup>
                      {/* for first name */}
                      <label for="address">Enter Full Address</label>
                      <Input
                        type="textarea"
                        rows="4"
                        id="address"
                        name="address"
                        placeholder="Enter address"
                        onChange={(e) => handleChange(e, "address")}
                        value={address.address}
                      ></Input>
                    </FormGroup>

                    {/* for Last name */}
                    <FormGroup>
                      <label for="city">City</label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter city"
                        onChange={(e) => handleChange(e, "city")}
                        value={address.city}
                      ></Input>
                    </FormGroup>
                    <FormGroup>
                      <label for="pincode"> Pincode </label>
                      <Input
                        type="number"
                        id="pincode"
                        name="pincode"
                        placeholder="enter your Age here"
                        onChange={(e) => handleChange(e, "pincode")}
                        value={address.pincode}
                      ></Input>
                    </FormGroup>

                    {/* for email  */}
                    <FormGroup>
                      <label for="state"> State</label>
                      <Input

                        type="state"
                        id="state"
                        name="state"
                        placeholder="enter state here"
                        onChange={(e) => handleChange(e, "state")}
                        value={address.state}
                      ></Input>
                    </FormGroup>

                    <Container className="text-center mb-15">
                      <Button color="info" type="button" onClick={submitForm}>
                        Add User
                      </Button>
                      <Button type="reset" color="secondary" className="ms-5">
                        reset
                      </Button>
                    </Container>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}

export default AddAddress;
