import { Row, Col, Container } from "react-bootstrap";
import SlideShow from "../components/SlideShow";
import Cards from "./Cards"

import row1DonationImage from "../images/row1-donation.png";
import row3DonationImage from "../images/row3-donation.png";

export default function HomeStruct() {
  return (
    <Container fluid style={{margin: '0'}}>
      <Row>
        <Col md={7} style={{ marginLeft: '6%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>
          <SlideShow fluid></SlideShow>
        </Col>
        <Col style={{ marginLeft: '3%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>
          <h1 style={{ color: 'black', fontSize: '32px', fontWeight: 'bold', marginLeft: '12%', marginTop: '2.5%', marginBottom: '3%', padding: '0' }}>Welcome to Imperium!</h1>
          <p style={{ marginTop: '2.5%', marginBottom: '3%', marginRight: '7%', padding: '0', textAlign: 'justify' }}> Welcome to our Non-Monetary Donation Platform! Our NGO's mission is to bridge the gap between those in need and generous donors like you.</p>
        </Col>
      </Row>
      <Row>
        <Cards fluid></Cards>
      </Row>
    </Container>
  );
}
