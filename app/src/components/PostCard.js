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
import FloatingPostUpdate from "./FloatingPostUpadte";
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
  const [showPostUpdate, setShowPostUpdate] = useState(false);
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
const updatePost = (updatedFields) => {
  const posts = JSON.parse(localStorage.getItem("posts"));
    const updatedPosts = posts.map((post) => {
        return (post.id !== postId)? post:
        {...post,fields: updatedFields};
    });
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    toggleBoolValue();
    };

  const handleShowCard = () => setShowCard(true);
  const handleCloseCard = () => setShowCard(false);
  const handleShowPostUpdate = () => setShowPostUpdate(true);
  const handleClosePostUpdate = () => setShowPostUpdate(false);
  const handleShowDonor = () => setShowDonor(true);
  const handleCloseDonor = () => setShowDonor(false);
  const handleDeleteCard = () => deletePost();



  switch (category) {
    case "bloods":
      return (
        <div>
        <Card className="card">
        <a onClick={handleShowCard}>
          <Card.Img variant="top"
            src={bloodExample}
            className="card-img"
          />
        </a>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          blood type: {item.blood_type} <br />
          hospital name: {item.hospital_name} <br />
          hospital_area: {item.hospital_area}
          </Card.Text>
        </Card.Body>
         <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
           
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "books":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={bookExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                author: {item.author} <br />
                language: {item.language} <br />
                edition: {item.edition}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "cases":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={caseExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>{item.patient_name}</Card.Title>
              <Card.Text>
                age: {item.age} <br />
                gender: {item.gender} <br />
                weight: {item.weight}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "clothes":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={clothExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>{item.type_of_clothing}</Card.Title>
              <Card.Text>
                age: {item.age} <br />
                gender: {item.gender} <br />
                season: {item.season}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "foods":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={foodExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                quantity: {item.quantity} <br />
                type: {item.type}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "meds":
      switch (item.type) {
        case "device":
          return (
            <div>
              <Card className="card">
                <a onClick={handleShowCard}>
                  <Card.Img
                    variant="top"
                    src={deviceExample}
                    className="card-img"
                  />
                </a>
                <Card.Body>
                  <Card.Title>{item.device_type}</Card.Title>
                  <Card.Text>
                    device_use: {item.use} <br />
                    quantity: {item.quantity}
                  </Card.Text>
                </Card.Body>
                <PostsButtons
                  item={item}
                  postId={postId}
                  donorId={donorId}
                  handleShowDonor={handleShowDonor}
                  handleShowCard={handleShowCard}
                  handleDeleteCard={handleDeleteCard}
                  handleShowPostUpdate={handleShowPostUpdate}
                />
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              {donor && (
                <FloatingDonor
                  item={donor}
                  show={showDonor}
                  handleClose={handleCloseDonor}
                />
              )}
              <FloatingPostUpdate
                item={item}
                show={showPostUpdate}
                handleClose={handleClosePostUpdate}
                updatePost={updatePost}
              />
            </div>
          );
        case "equipment":
          return (
            <div>
              <Card className="card">
                <a onClick={handleShowCard}>
                  <Card.Img
                    variant="top"
                    src={equipmentExample}
                    className="card-img"
                  />
                </a>
                <Card.Body>
                  <Card.Title>{item.equipment_type}</Card.Title>
                  <Card.Text>
                    equipment_use: {item.use} <br />
                    quantity: {item.quantity}
                  </Card.Text>
                </Card.Body>
                <PostsButtons
                  item={item}
                  postId={postId}
                  donorId={donorId}
                  handleShowDonor={handleShowDonor}
                  handleShowCard={handleShowCard}
                  handleDeleteCard={handleDeleteCard}
                  handleShowPostUpdate={handleShowPostUpdate}
                />
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              {donor && (
                <FloatingDonor
                  item={donor}
                  show={showDonor}
                  handleClose={handleCloseDonor}
                />
              )}
              <FloatingPostUpdate
                item={item}
                show={showPostUpdate}
                handleClose={handleClosePostUpdate}
                updatePost={updatePost}
              />
            </div>
          );
        case "medication":
          return (
            <div>
              <Card className="card">
                <a onClick={handleShowCard}>
                  <Card.Img
                    variant="top"
                    src={medicationExample}
                    className="card-img"
                  />
                </a>
                <Card.Body>
                  <Card.Title>{item.medication_type}</Card.Title>
                  <Card.Text>
                    medication_use: {item.use} <br />
                    quantity: {item.quantity}
                  </Card.Text>
                </Card.Body>
                <PostsButtons
                  item={item}
                  postId={postId}
                  donorId={donorId}
                  handleShowDonor={handleShowDonor}
                  handleShowCard={handleShowCard}
                  handleDeleteCard={handleDeleteCard}
                  handleShowPostUpdate={handleShowPostUpdate}
                />
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <FloatingPost
                item={item}
                show={showCard}
                handleClose={handleCloseCard}
              />
              {donor && (
                <FloatingDonor
                  item={donor}
                  show={showDonor}
                  handleClose={handleCloseDonor}
                />
              )}
              <FloatingPostUpdate
                item={item}
                show={showPostUpdate}
                handleClose={handleClosePostUpdate}
                updatePost={updatePost}
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
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img
                variant="top"
                src={stationaryExample}
                className="card-img"
              />
            </a>
            <Card.Body>
              <Card.Title>{item.type_of_item}</Card.Title>
              <Card.Text>amount: {item.amount}</Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "teaches":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={teachExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                number of students: {item.number_of_students} <br />
                address: {item.address} <br />
                subjects_to_be_taught: {item.subjects_to_be_taught}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />{" "}
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    case "toys":
      return (
        <div>
          <Card className="card">
            <a onClick={handleShowCard}>
              <Card.Img variant="top" src={toyExample} className="card-img" />
            </a>
            <Card.Body>
              <Card.Title>{item.type}</Card.Title>
              <Card.Text>
                age: {item.age} <br />
                gender: {item.gender} <br />
                quantity: {item.quantity}
              </Card.Text>
            </Card.Body>
            <PostsButtons
              item={item}
              postId={postId}
              donorId={donorId}
              handleShowDonor={handleShowDonor}
              handleShowCard={handleShowCard}
              handleDeleteCard={handleDeleteCard}
              handleShowPostUpdate={handleShowPostUpdate}
            />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <FloatingPost
            item={item}
            show={showCard}
            handleClose={handleCloseCard}
          />
          {donor && (
            <FloatingDonor
              item={donor}
              show={showDonor}
              handleClose={handleCloseDonor}
            />
          )}
          <FloatingPostUpdate
            item={item}
            show={showPostUpdate}
            handleClose={handleClosePostUpdate}
            updatePost={updatePost}
          />
        </div>
      );
    default:
        return (
          <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
        );
  }
}
