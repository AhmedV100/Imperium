import { Col, Row, Container, Image } from "react-bootstrap";
import SlideShow from "../components/SlideShow";

import row1DonationImage from "../images/row1-donation.png";
import row3DonationImage from "../images/row3-donation.png";

export default function HomeStruct() {
  return (
    <Container fluid>
      {/* <Row >
        <Image src={row1DonationImage} alt="row1-donation" />
        style={{ width: imageSize.width, height: imageSize.height }}
      </Row> */}
      <Row>
        <SlideShow fluid></SlideShow>
      </Row>
      {/* <Row>
        <Image src={row3DonationImage} alt="row3-donation" />
        style={{ width: imageSize.width, height: imageSize.height }}
      </Row> */}
    </Container>
  );
}
