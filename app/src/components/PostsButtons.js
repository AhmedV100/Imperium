import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

function PostsButtons({
  item,
  handleShowDonor,
  handleShowCard,
  handleDeleteCard,
}) {
  return (
    <Card.Body>
      <Row className="mb-3">
        {item.donorId && (
          <Col>
            <Button size="lg" onClick={handleShowDonor} variant="primary" block>
              Donor Info
            </Button>
          </Col>
        )}
        <Col>
          <Button size="lg" onClick={handleShowCard} variant="info" block>
            See more
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button size="lg" onClick={handleShowCard} variant="info" block>
            Update
          </Button>
        </Col>
        <Col>
          <Button size="lg" onClick={handleDeleteCard} variant="danger" block>
            Delete
          </Button>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default PostsButtons;
