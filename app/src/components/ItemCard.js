import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import example from "../images/example.png";

export default function ItemCard({ item }) {
  const cardStyle = {
    width: "18rem",
  };
  switch (item.object_type) {
    case "bloods":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>blood type:{item.blood_type}</ListGroup.Item>
            <ListGroup.Item>hospital name:{item.hospital_name}</ListGroup.Item>
            <ListGroup.Item>hospital_area:{item.hospital_area}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "books":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>author:{item.author}</ListGroup.Item>
            <ListGroup.Item>language:{item.language}</ListGroup.Item>
            <ListGroup.Item>edition:{item.edition}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "cases":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.patient_name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>age:{item.age}</ListGroup.Item>
            <ListGroup.Item>gender:{item.gender}</ListGroup.Item>
            <ListGroup.Item>weight:{item.weight}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "clothes":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.type_of_clothing}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>age:{item.age}</ListGroup.Item>
            <ListGroup.Item>gender:{item.gender}</ListGroup.Item>
            <ListGroup.Item>season:{item.season}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "foods":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>quantity:{item.quantity}</ListGroup.Item>
            <ListGroup.Item>type:{item.type}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "meds":
      switch (item.type) {
        case "device":
          return (
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.device_type}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>device_use:{item.use}</ListGroup.Item>
                <ListGroup.Item>quantity:{item.quantity}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button size="lg" variant="success">
                  Donate
                </Button>{" "}
                <Button size="lg" variant="info">
                  See more
                </Button>{" "}
              </Card.Body>
            </Card>
          );
        case "equipment":
          return (
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.equipment_type}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>equipment_use:{item.use}</ListGroup.Item>
                <ListGroup.Item>quantity:{item.quantity}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button size="lg" variant="success">
                  Donate
                </Button>{" "}
                <Button size="lg" variant="info">
                  See more
                </Button>{" "}
              </Card.Body>
            </Card>
          );
        case "medication":
          return (
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.medication_type}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>medication_use:{item.use}</ListGroup.Item>
                <ListGroup.Item>quantity:{item.quantity}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button size="lg" variant="success">
                  Donate
                </Button>{" "}
                <Button size="lg" variant="info">
                  See more
                </Button>{" "}
              </Card.Body>
            </Card>
          );
        default:
          break;
      }
      break;
    case "stationaries":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.type_of_item}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>amount:{item.amount}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "teaches":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{"Teaching"}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              number of students:{item.number_of_students}
            </ListGroup.Item>
            <ListGroup.Item>address:{item.address}</ListGroup.Item>
            <ListGroup.Item>
              subjects_to_be_taught:{item.subjects_to_be_taught}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    case "toys":
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>age:{item.age}</ListGroup.Item>
            <ListGroup.Item>gender:{item.gender}</ListGroup.Item>
            <ListGroup.Item>quantity:{item.quantity}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
    default:
      return (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={example} />
          <Card.Body>
            <Card.Title>{"....loading title..."}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
            <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
            <ListGroup.Item>{"....loading details..."}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button size="lg" variant="success" disabled="true">
              Donate
            </Button>{" "}
            <Button size="lg" variant="info" disabled="true">
              See more
            </Button>{" "}
          </Card.Body>
        </Card>
      );
  }
}
