import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function FloatingDonor({ item, show, handleClose }) {



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
 
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
    
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FloatingDonor;
