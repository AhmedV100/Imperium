import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate,useParams } from "react-router-dom";

import "./Cards.css";

import donationImage1 from "../images/Deliverygif.gif";
import donationImage2 from "../images/notificationbell.gif";

function DeliveryCardOptions() {
  const { donorId } = useParams();

  const navigate = useNavigate();

  const handleBrowserCardClick = () => {
    navigate(`/donor/${parseInt(donorId)}/donationhistory`);
  };


  const handleDeliveryCardClick = () => {
    navigate(`/donor/${parseInt(donorId)}/donationnotification`);
  };

  return (
    <CardGroup style={{ scale: "0.93", width: "100%", marginBottom: "5%" }}>
      <Card className="card">
        <a >
          <Card.Img variant="top" onClick={handleBrowserCardClick} src={donationImage1} className="card-img" />
        </a>
        <Card.Body>
          <Card.Title>Donation History</Card.Title>
          <Card.Text>Check your donated items</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2 hr ago</small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <a >
          <Card.Img variant="top" onClick={handleDeliveryCardClick} src={donationImage2} className="card-img" />
        </a>
        <Card.Body>
          <Card.Title>Notifications</Card.Title>
          <Card.Text>Updates on your delivery.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default DeliveryCardOptions;
