import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from "react-router-dom";

import "./Cards.css";

import donationImage1 from "../images/row1-donation.png";
import donationImage2 from "../images/row3-donation.png";

function DonorCardOptions() {

  const navigate = useNavigate();

  const handleBrowserCardClick = () => {
    navigate("/donor/browser");
  };


  const handleDeliveryCardClick = () => {
    navigate("/donor/delivery");
  };

  return (
    <CardGroup style={{ scale: "0.93", width: "100%", marginBottom: "5%" }}>
      <Card className="card">
        <a >
          <Card.Img variant="top" onClick={handleBrowserCardClick} src={donationImage1} className="card-img" />
        </a>
        <Card.Body>
          <Card.Title>Browser</Card.Title>
          <Card.Text>Browse Items needs to donated now !</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 hr ago</small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <a >
          <Card.Img variant="top" onClick={handleDeliveryCardClick} src={donationImage2} className="card-img" />
        </a>
        <Card.Body>
          <Card.Title>Delivery</Card.Title>
          <Card.Text>Check your delivery!. </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 40 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default DonorCardOptions;
