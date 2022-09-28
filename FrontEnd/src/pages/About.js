// import Base from "../components/Base"
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import CustomNavbar from "../components/CustomNavbar";
import Base from "./../components/Base";
const aboutus = () => {
  return (
    <div>
      {/* <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam
          a voluptate illo officia odio doloribus. Illo harum neque consequuntur
          blanditiis pariatur sint, aspernatur quis eius id distinctio obcaecati
          optio iusto porro beatae quaerat autem corrupti illum tempora aut unde
          incidunt debitis recusandae velit. Veritatis voluptatem consequatur
          qui inventore, asperiores culpa odio assumenda libero, nostrum dolores
          tempora vero amet cumque perferendis pariatur illum impedit dolorum.
          Aliquam officia pariatur aliquid tenetur assumenda alias provident
          incidunt animi consequatur corrupti libero ratione omnis quibusdam
          magni totam ipsum a cum cupiditate reprehenderit facilis molestias,
          consectetur non rerum. Nemo eos voluptas quia! Quos, saepe laborum.
        </div>
        <hr />
        <div className="mt-5" style={{textAlign:"center"}}>Core designing Team</div>


      



    <div className="container row mt-5 mb-5 m-4">
      <Card className="mx-auto "  style={{width:300}}>
        <CardImg  width="70" src="https://i.pravatar.cc/75" style={{width:270}} alt="Card image cap" />
        <CardBody>
        <CardTitle style={{textAlign:"center"}}>Name</CardTitle>
          <CardSubtitle style={{textAlign:"center"}}>Student</CardSubtitle>
          <CardText style={{textAlign:"center"}}>there are some dummy text</CardText>
          
        </CardBody>
      </Card>
      <Card className="mx-auto "  style={{width:300}}>
        <CardImg  width="70" src="https://i.pravatar.cc/75" style={{width:270}} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center"}}>Name</CardTitle>
          <CardSubtitle style={{textAlign:"center"}}>Student</CardSubtitle>
          <CardText style={{textAlign:"center"}}>there are some dummy text</CardText>
          
        </CardBody>
      </Card>
    </div> */}
    <CustomNavbar/>

      <div
        style={{
          padding:"15px",
          backgroundColor: "#ecf6fe",
          color: "#043c6d",
        }}
      >
        <h3>About Us</h3>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <p>
              Blood donation and transfusion service is an indispensable part of
              contemporary medicine and health care. Blood management has been
              recognized as a challenging task because of life threatening
              nature of blood products entails the punctilious administration
              due to its perishable nature &amp; required timely processing and
              it also saves the life.{" "}
            </p>
            <p>
              Such great challenge has been considerably alleviated with the
              development of information and computer technology. e-Blood Bank
              is an integrated blood bank automation system. This web based
              mechanism inter connects all the Blood Banks of the State into a
              single network. Integrated Blood Bank MIS refers the acquisition,
              validation, storage and circulation of various live data and
              information electronically regarding blood donation and
              transfusion service. Such system is able to assemble heterogeneous
              data into legible reports to support decision making from
              effective donor screening to optimal blood dissemination in the
              field. Those electronic processes will help the public for easy
              access to the blood availability status of blood banks on finger
              tips; so that he can place a requisition of a particular blood
              group in nearby blood bank (Especially rare groups) save a
              valuable life.
            </p>
            <p>
              It also provides online status of blood group wise availability of
              blood units in all the licensed blood banks in the state. It
              includes online tracking and trailing system of the blood and
              blood products (components of blood) by the state level
              administrators. The system manages all the activities from blood
              collection both from camps &amp; hospitals till the issue of blood
              units. It includes donor screening, blood collection, mandatory
              testing, storage and issue of the unit (whole human blood IP,
              different Blood component and aphaeresis blood products).
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Blood Collection Management</li>
              <li>Blood Issue Management</li>
              <li>Inventory Management</li>
              <li>Stock Management</li>
              <li>Camp Management</li>
              <li>User and System Management</li>
            </ul>
            <p>
              <strong>Advantages:</strong>
            </p>
            <ul>
              <li>
                State &amp; Blood Bank dashboard to provide the group wise blood
                stocks status for all stakeholders.
              </li>
              <li>
                Dashboards for Blood Bank Officers (Tested/ Untested/ Buffer
                stock of blood units)
              </li>
              <li>
                Distribution of blood from mother blood banks to blood storage
                centers.
              </li>
              <li>
                Recruitment and retention of the regular blood donors in the
                state.{" "}
              </li>
              <li>
                Maintain all the registers according to Drugs &amp; Cosmetic Act
                of 1940.
              </li>
              <li>
                Inventory of kits and consumables with alert for short expiry.{" "}
              </li>
              <li>
                Alert mechanism for License, regular donors, organization to do
                VBD Camps.
              </li>
              <li>Provides a paperless donor room </li>
              <li>
                Real time information form collection to testing and use of
                blood and blood products.
              </li>
              <li>Unique bar coding for each blood packets.</li>
              <li>
                The citizen can access the availability of blood units from any
                blood bank of India.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <img className="css-border" src="https://i.pravatar.cc/75" />   
        <img className="css-shadow" src="https://i.pravatar.cc/75" /> */}
    </div>
  );
};

export default aboutus;
