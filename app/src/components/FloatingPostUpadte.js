import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function FloatingPostUpdate({ item, show, handleClose, updatePost }) {
  const [modifiedItem, setModifiedItem] = useState({ ...item });

  const handleFieldChange = (e, field) => {
    setModifiedItem({
      ...modifiedItem,
      [field]: e.target.value,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          {Object.entries(modifiedItem).map(([key, value]) => {
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
              <div key={key} className="mb-3">
                <label htmlFor={key} className="form-label">
                  {key}:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={key}
                  value={value}
                  onChange={(e) => handleFieldChange(e, key)}
                />
              </div>
            );
          })}
        </form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            updatePost(modifiedItem);
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FloatingPostUpdate;
