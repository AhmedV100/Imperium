import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function CatrogrySide() {
  const [active, setActive] = useState("/donor/browser");

  return (
    <ListGroup defaultActiveKey={active}>
      <ListGroup.Item action href="/donor/browser">
        All
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/clothes">
        Clothes
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/toys">
        Toys
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/food">
        Food
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/medical">
        Medical Supplies
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/school">
        School Supplies
      </ListGroup.Item>
      <ListGroup.Item action href="/donor/browser/blood">
        Blood Donations
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CatrogrySide;
