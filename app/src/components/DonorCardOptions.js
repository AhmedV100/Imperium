import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate, useParams } from "react-router-dom";

import "./Cards.css";

import donationImage1 from "../images/donation image.jpg";
import donationImage2 from "../images/delivery.png";

function DonorCardOptions() {
  const { donorId } = useParams();

  const navigate = useNavigate();

  const handleBrowserCardClick = () => {
    navigate(`/donor/${parseInt(donorId)}/browser`);
  };


  const handleDeliveryCardClick = () => {
    navigate(`/donor/${parseInt(donorId)}/deliveryandnotifications`);
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
      </Card>
      <Card className="card">
        <a >
          <Card.Img variant="top" onClick={handleDeliveryCardClick} src={donationImage2} className="card-img" />
        </a>
        <Card.Body>
          <Card.Title>Delivery</Card.Title>
          <Card.Text>Check your delivery!. </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default DonorCardOptions;
