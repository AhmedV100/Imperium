import { Row, Col, Container } from "react-bootstrap";
import SlideShow from "../components/SlideShow";
import Cards from "./Cards"
import './category-style.css'

export default function HomeStruct() {
  return (
    <Container fluid style={{margin: '0'}}>
      <Row>
        <Col md={7} style={{ marginLeft: '6%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>
          <SlideShow fluid></SlideShow>
        </Col>
        <Col style={{ marginLeft: '3%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>
          <h1 style={{ color: 'black', fontSize: '32px', fontWeight: 'bold', marginLeft: '12%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>Welcome to Imperium!</h1>
          <p style={{ marginTop: '2.5%', marginBottom: '3%', marginRight: '7%', padding: '0', textAlign: 'justify' }}>
          Welcome to Imperium, where generosity meets purpose! We are thrilled to introduce you to a platform 
          dedicated to making a meaningful impact without the exchange of money. Our mission is simple yet profound: to 
          foster a community driven by compassion, where donations are measured in kindness and support rather than currency. 
          <br />
          <br />
          At Imperium, we believe that the true essence of giving lies in the desire to uplift others and create 
          positive change, irrespective of financial transactions. Whether you have time, skills, or resources to share, 
          every contribution, no matter how small, holds immense value in our collective effort to make the world a better place.
          <br />
          <br />
          Join us on this journey of altruism and solidarity. Together, let's redefine the meaning of generosity and create a 
          ripple effect of compassion that knows no bounds. Thank you for being a part of our mission to spread kindness and 
          create lasting impact, one selfless act at a time.
          </p>
        </Col>
      </Row>
      <Row>
      <p className="category-text">
        Donate here!
      </p>
      </Row>
      <Row>
        <Cards fluid></Cards>
      </Row>
    </Container>
  );
}
