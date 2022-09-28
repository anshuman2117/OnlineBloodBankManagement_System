import {
  MDBBreadcrumb,
  MDBBreadcrumbItem, MDBCard, MDBCardBody,
  MDBCardImage, MDBCardText, MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import Base from "../../components/Base";

const UserHome = () => {
  let userDetails = useSelector((state) => state.persist.user);
  return (
    <Base>
      

      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    src={`http://localhost:8080/users/${userDetails.id}/image`}
                    alt="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1"><h3>{userDetails.firstName} {userDetails.lastName}</h3></p>
                  {/* <p className="text-muted mb-4">{userDetails.role}</p> */}
                  <div className="d-flex justify-content-center mb-2">
                    
                    
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userDetails.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />


                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                       {userDetails.contactNo}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userDetails.gender}  
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />


                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userDetails.age}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  

                </MDBCardBody>
              </MDBCard>

              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Base>
  );
};

export default UserHome;

// {\"user\":{\"id\":19,\"firstName\":\"dhruv1\",\"lastName\":\"tank1\",\"email\":\"hahdsuahaiu07@gmail.com\",\"contactNo\":\"5442873238\",\"age\":34,\"gender\":\"MALE\",\"image\":null,\"documentType\":null,\"uniqueIdNumber\":null,\"status\":\"PENDING\",\"role\":\"ROLE_USER\"}}"
