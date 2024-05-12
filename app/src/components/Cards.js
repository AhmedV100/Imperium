import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cards.css'

import bloodExample from "../images/bloods/example.png";
import bookExample from "../images/books/example.png";
import clothExample from "../images/clothes/example.png";

function UnfeaturedCards() {  
  return (
    <CardGroup style={{ scale: '0.93', width: '100%', marginBottom: '4%' }}>
      <Card className="card">
        <a href="/Login">
          <Card.Img variant="top"
            src={bloodExample}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Donation 1</Card.Title>
          <Card.Text>
            Help the ones in needs of more blood donations.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <a href="/Login">
          <Card.Img variant="top" src={bookExample}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Books</Card.Title>
          <Card.Text>
            You can give books to assist people in need of more education.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <a href="/Login">
          <Card.Img variant="top" src={clothExample}
            className="card-img"
          />
        </a>
        <Card.Body>
          <Card.Title>Clothes</Card.Title>
          <Card.Text>
            Some people cannot even affoct proper clothing, you can make a difference here.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default UnfeaturedCards;
