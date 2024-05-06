import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cards.css'

import donationImage1 from "../images/row1-donation.png";
import donationImage2 from "../images/row3-donation.png";

function UnfeaturedCards() {  
  return (
    <CardGroup style={{ scale: '0.93', width: '100%', marginBottom: '4%' }}>
      <Card className="card">
        <a href="your_link_here">
          <Card.Img variant="top"
            src={donationImage1}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <a href="your_link_here">
          <Card.Img variant="top" src={donationImage2}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <a href="your_link_here">
          <Card.Img variant="top" src={donationImage1}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default UnfeaturedCards;
