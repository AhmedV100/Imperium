import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

function PostsButtons({
  item,
  postId,
  donorId,
  handleShowDonor,
  handleShowCard,
  handleDeleteCard,
  handleShowPostUpdate,
}) {
  return (
    <Card.Body>
      <Row className="mb-3">
        {donorId && (
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
          <Button size="lg" onClick={handleShowPostUpdate} variant="info" block>
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
