import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function FloatingPost({ item, show, handleClose }) {
  const [donationQuantity, setDonationQuantity] = useState(0);
  const [validQuantity, setValidQuantity] = useState(true);

  const handleDonationChange = (event) => {
    const value = parseInt(event.target.value);
    setDonationQuantity(value);

    if (value >= item.quantity || value >= item.amount) {
      setValidQuantity(true);
    } else {
      setValidQuantity(false);
    }
  };

  const handleDonate = () => {
    if (donationQuantity >= item.quantity || donationQuantity >= item.amount) {
      // Perform donation action
    }
  };

  const renderLocationComponent = (google_maps_marker) => {
    return (
      <div>
        <iframe
          title="Google Maps Marker"
          src={google_maps_marker}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  };

  const renderAdditionalComponent = (item) => {
    switch (item.object_type) {
      case "bloods":
        return renderLocationComponent(item.google_maps_marker);
      case "teaches":
        return renderLocationComponent(item.google_map_marker);
      case "cases":
        return renderLocationComponent(item.location);
      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Additional Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {Object.entries(item).map(([key, value]) => {
            if (
              !value ||
              [
                "google_maps_marker",
                "google_map_marker",
                "picture",
                "location",
              ].includes(key)
            ) {
              return null;
            }
            return (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            );
          })}
        </ul>
        {renderAdditionalComponent(item)}
        {(item.quantity || item.amount) && (
          <div>
            <label htmlFor="donationQuantity">Enter donation quantity:</label>
            <input
              id="donationQuantity"
              type="number"
              min={item.quantity}
              value={donationQuantity}
              onChange={handleDonationChange}
              style={{
                outlineColor: validQuantity ? "inherit" : "red",
              }}
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FloatingPost;
