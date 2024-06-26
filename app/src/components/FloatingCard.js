import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

function FloatingCard({ item, show, handleClose }) {
  const nav = useNavigate();
  const { donorId } = useParams();
  const [donationQuantity, setDonationQuantity] = useState(0);
  const [validQuantity, setValidQuantity] = useState(true);

  const hardcodedfornowandpray =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.622999652575!2d-74.0000000010245!3d40.00000000293648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzU1LjEiTiA3NMKwMTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1630419451337!5m2!1sen!2sus";

  const handleDonationChange = (event) => {
    const value = parseInt(event.target.value);
    setDonationQuantity(value);

    if ((item.quantity && value > 0) || (item.amount && value > 0)) {
      setValidQuantity(true);
    } else {
      setValidQuantity(false);
    }
  };

  const handleDonate = () => {
    if (
      (item.quantity && donationQuantity > 0) ||
      (item.amount && donationQuantity > 0)
    ) {
      console.log(donorId);
      nav(`/donor/${donorId}/schedpickup`);
    } else if (!item.amount && !item.quantity) {
      nav(`/donor/${donorId}/schedpickup`);
    }else{
      alert("Can not donate!");
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

  const renderAdditionalComponent = (hardcodedfornowandpray, item) => {
    return renderLocationComponent(hardcodedfornowandpray);
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
        {renderAdditionalComponent(hardcodedfornowandpray, item)}
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
        <Button
          size="lg"
          variant="success"
          onClick={handleDonate}
          disabled={!validQuantity}
        >
          Donate
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FloatingCard;
