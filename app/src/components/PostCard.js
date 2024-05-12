import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import FloatingPost from "./FloatingPost";
import FloatingDonor from "./FloatingDonor"
import example from "../images/example.png";
import bloodExample from "../images/bloods/example.png";
import bookExample from "../images/books/example.png";
import caseExample from "../images/cases/example.png";
import clothExample from "../images/clothes/example.png";
import foodExample from "../images/foods/example.png";
import deviceExample from "../images/meds/example_deivce.png";
import equipmentExample from "../images/meds/example_equipment.png";
import medicationExample from "../images/meds/example_medication.png";
import stationaryExample from "../images/stationaries/example.png";
import teachExample from "../images/teaches/example.png";
import toyExample from "../images/toys/example.png";
import PostsButtons from "./PostsButtons";
// TODO handle update post
export default function PostCard({
  item,
  index,
  category,
  postId,
  donorId,
  toggleBoolValue,
}) {
  const [showCard, setShowCard] = useState(false);
  const [showDonor, setShowDonor] = useState(false);
  const donors = JSON.parse(localStorage.getItem("donors"));
  console.log("i am in postCard and donors are:", donors);
  let donor = donors.find((don) => don.id === donorId);
  if (typeof donor === "undefined") {
    donor = null;
  }
  console.log("Also in postCard and donor is:", donor);

  const deletePost = () => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const updatedPosts = posts.filter((post) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    toggleBoolValue();
  };

  const handleShowCard = () => setShowCard(true);
  const handleCloseCard = () => setShowCard(false);
  const handleShowDonor = () => setShowDonor(true);
  const handleCloseDonor = () => setShowDonor(false);
  const handleDeleteCard = () => deletePost();

  const cardStyle = {
    width: "18rem",
  };
  const ImgCardStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "150px",
    objectFit: "cover",
  };

  switch (category) {
    case "bloods":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={bloodExample} style={ImgCardStyle} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>blood type: {item.blood_type}</ListGroup.Item>
              <ListGroup.Item>
                hospital name: {item.hospital_name}
              </ListGroup.Item>
              <ListGroup.Item>
                hospital_area: {item.hospital_area}
              </ListGroup.Item>
            </ListGroup>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
            />
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "books":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={bookExample} style={ImgCardStyle} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>author: {item.author}</ListGroup.Item>
              <ListGroup.Item>language: {item.language}</ListGroup.Item>
              <ListGroup.Item>edition: {item.edition}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "cases":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={caseExample} />
            <Card.Body>
              <Card.Title>{item.patient_name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>age: {item.age}</ListGroup.Item>
              <ListGroup.Item>gender: {item.gender}</ListGroup.Item>
              <ListGroup.Item>weight: {item.weight}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "clothes":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={clothExample} />
            <Card.Body>
              <Card.Title>{item.type_of_clothing}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>age: {item.age}</ListGroup.Item>
              <ListGroup.Item>gender: {item.gender}</ListGroup.Item>
              <ListGroup.Item>season: {item.season}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "foods":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={foodExample} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
              <ListGroup.Item>type: {item.type}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "meds":
      switch (item.type) {
        case "device":
          return (
            <div>
              <Card style={cardStyle}>
                <Card.Img
                  variant="top"
                  src={deviceExample}
                  style={ImgCardStyle}
                />
                <Card.Body>
                  <Card.Title>{item.device_type}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>device_use: {item.use}</ListGroup.Item>
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  {item.donorId && (
                    <Button
                      size="lg"
                      onClick={handleShowDonor}
                      variant="primary"
                    >
                      Donor Info
                    </Button>
                  )}{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    See more
                  </Button>{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    update
                  </Button>{" "}
                  <Button size="lg" onClick={handleDeleteCard} variant="danger">
                    Delete
                  </Button>{" "}
                </Card.Body>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              <FloatingDonor
                item={donor}
                show={showDonor}
                handleClose={handleCloseDonor}
              />
            </div>
          );
        case "equipment":
          return (
            <div>
              <Card style={cardStyle}>
                <Card.Img
                  variant="top"
                  src={equipmentExample}
                  style={ImgCardStyle}
                />
                <Card.Body>
                  <Card.Title>{item.equipment_type}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>equipment_use: {item.use}</ListGroup.Item>
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  {item.donorId && (
                    <Button
                      size="lg"
                      onClick={handleShowDonor}
                      variant="primary"
                    >
                      Donor Info
                    </Button>
                  )}{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    See more
                  </Button>{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    update
                  </Button>{" "}
                  <Button size="lg" onClick={handleDeleteCard} variant="danger">
                    Delete
                  </Button>{" "}
                </Card.Body>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              <FloatingDonor
                item={donor}
                show={showDonor}
                handleClose={handleCloseDonor}
              />
            </div>
          );
        case "medication":
          return (
            <div>
              <Card style={cardStyle}>
                <Card.Img
                  variant="top"
                  src={medicationExample}
                  style={ImgCardStyle}
                />
                <Card.Body>
                  <Card.Title>{item.medication_type}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>medication_use: {item.use}</ListGroup.Item>
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  {item.donorId && (
                    <Button
                      size="lg"
                      onClick={handleShowDonor}
                      variant="primary"
                    >
                      Donor Info
                    </Button>
                  )}{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    See more
                  </Button>{" "}
                  <Button size="lg" onClick={handleShowCard} variant="info">
                    update
                  </Button>{" "}
                  <Button size="lg" onClick={handleDeleteCard} variant="danger">
                    Delete
                  </Button>{" "}
                </Card.Body>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              <FloatingDonor
                item={donor}
                show={showDonor}
                handleClose={handleCloseDonor}
              />
            </div>
          );
        default:
          break;
      }
      break;
    case "stationaries":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={stationaryExample}
              style={ImgCardStyle}
            />
            <Card.Body>
              <Card.Title>{item.type_of_item}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>amount: {item.amount}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "teaches":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={teachExample} style={ImgCardStyle} />
            <Card.Body>
              <Card.Title>{"Teaching"}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                number of students: {item.number_of_students}
              </ListGroup.Item>
              <ListGroup.Item>address: {item.address}</ListGroup.Item>
              <ListGroup.Item>
                subjects_to_be_taught: {item.subjects_to_be_taught}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    case "toys":
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={toyExample} style={ImgCardStyle} />
            <Card.Body>
              <Card.Title>{item.type}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>age: {item.age}</ListGroup.Item>
              <ListGroup.Item>gender: {item.gender}</ListGroup.Item>
              <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
    default:
      return (
        <div>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={example} style={ImgCardStyle} />
            <Card.Body>
              <Card.Title>{"....loading title..."}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
              <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
              <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {item.donorId && (
                <Button size="lg" onClick={handleShowDonor} variant="primary">
                  Donor Info
                </Button>
              )}{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                See more
              </Button>{" "}
              <Button size="lg" onClick={handleShowCard} variant="info">
                update
              </Button>{" "}
              <Button size="lg" onClick={handleDeleteCard} variant="danger">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          <FloatingDonor
            item={donor}
            show={showDonor}
            handleClose={handleCloseDonor}
          />
        </div>
      );
  }
}
