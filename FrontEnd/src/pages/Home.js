import Base from "../components/Base";
import { Container, Row, Col, Carousel, ListGroupItem } from "react-bootstrap";
import { Card, CardBody, CardText, CardHeader, ListGroup } from "reactstrap";
import image1 from "../images/home1.webp";
import image2 from "../images/home2.jpg";
import image3 from "../images/home3.webp";
import image4 from "../images/home4.webp";
import image5 from "../images/home5.webp";
import image6 from "../images/home6.jpg";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUpcomingEventsHandler } from "../Features/user/userSlice";

const Home = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
    useEffect(() => {
      getAllUpcomingEvents();
    }, []);


const getAllUpcomingEvents=()=>{
  dispatch(getAllUpcomingEventsHandler())
  .then((response) => {
    console.log(response.data)
    setData(response.data);
  })
  .catch((err) => {});
}



  return (
    <div>
      <Base>
        <Carousel interval={1500}>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={"100%"} height={400} src={image6} alt="First slide" />
          </Carousel.Item>
        </Carousel>

        <Card color="light">
          <CardHeader
            style={{
              textAlign: "center",
              backgroundColor: "lightblue",
            }}
          >
            Benifits
          </CardHeader>
          <ListGroup>
            <ListGroupItem>
              <CardText>
                Donating blood may reduce the risk of heart disease for men and
                stimulate the generation of red blood cells.
              </CardText>
              <CardText>
                The amount of toxic chemicals (e.g. mercury, pesticides, fire
                retardants) circulating in the blood stream is reduced by the
                amount contained in given blood.
              </CardText>
              <CardText>
                The good news is you can give blood again and again to help save
                more lives!
              </CardText>
              <CardText>
                If you're a regular blood donor, you can give blood once in 12
                weeks.
              </CardText>
            </ListGroupItem>
          </ListGroup>
        </Card>


      <Carousel interval={3000}>
      {data.map((item) => (
              <Carousel.Item key={item.id}>
                {/* <h2>this is testing</h2> */}
                {/* <img src={`http://localhost:8080api/bloodbank/event/${item.id}/image`}
                alt/> */}
                <img src={`http://localhost:8080/api/bloodbank/event/${item.id}/image`} width={1200} height={700}/>
             {/* <h3>{item.id}</h3>
             <h3>{item.title}</h3>
          <p>{item.description}</p> */}
            <Carousel.Caption>
             <h3 style={{color:"red"}}>{item.title}</h3>
          <p style={{color:"red"}}>{item.description}</p>
             <h3 style={{color:"red"}}>event start date: {item.eventStartDate}</h3>
             <h3 style={{color:"red"}}>event start time: {item.eventStartTime}</h3>
             <h3 style={{color:"red"}}>event end date: {item.eventEndDate}</h3>
             <h3 style={{color:"red"}}>event end time: {item.eventEndTime}</h3>
             <h3 style={{color:"red"}}>event Venue: {item.venue}</h3>
             <h3 style={{color:"red"}}>event City: {item.city}</h3>
        </Carousel.Caption>
              </Carousel.Item>
            ))}
      </Carousel>


        <Card color="info" inverse className="text-center mb-3 ">
          <CardHeader
            style={{
              textAlign: "center",
              backgroundColor: "lightblue",
              color: "black",
            }}
          >
            Do you know?
          </CardHeader>
          <CardBody>
            <CardText>
              Every 2 Seconds, someone in the country is in need of blood
            </CardText>
            <CardText>
              Every year our nation requires about 4 Crore units of blood
            </CardText>
            <CardText>
              Out of which only a meager 5 Lakh units of blood are available
            </CardText>
          </CardBody>
        </Card>
      </Base>
    </div>
  );
};

export default Home;
