import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./MakePost.css"; // Import your CSS file for styling
import { useAppContext } from "../../Provider/DataProvider";

let Categories = [
  { name: "clothes", fields: ["Size", "Color", "Additional Info"] },
  {
    name: "toys",
    fields: [
      "Type",
      "Age",
      "Gender",
      "Category",
      "Quantity",
      "Additional Info",
    ],
  },
  { name: "food", fields: ["Name", "Quantity", "Type", "Additional Info"] },
  { name: "medical supplies", fields: ["Type", "Quantity", "Additional Info"] },
  {
    name: "school supplies",
    fields: ["Type of Item", "Amount", "Additional Info"],
  },
  {
    name: "blood donations",
    fields: [
      "Blood Type",
      "Hospital Name",
      "Hospital Address",
      "Additional Info",
    ],
  },
];

const BloodTypes = ["A", "B", "AB", "O"];

function MakePost() {
  const contextValue = useAppContext();
  console.log("Context Value:", contextValue);

  //const [data, setData] = contextValue; 

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({});

  // Function to reset form fields
  const resetForm = () => {
    setFormData({});
  };

  // Function to handle form field changes
  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    resetForm(); // Reset form fields when category changes
  };

  return (
    <div className="make-post-container">
      <div className="make-post-frame">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option disabled>Choose...</option>
                {Categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          {/* Render specific fields based on selected category */}
          {selectedCategory && (
            <>
              <h4 className="title-of-category">
                Fields for {selectedCategory}
              </h4>
              {Categories.find(
                (cat) => cat.name === selectedCategory
              ).fields.map((field, index) => (
                <Row key={index} className="mb-3">
                  <Form.Group as={Col} controlId={`form${field}`}>
                    <Form.Label>{field}</Form.Label>
                    {field === "Size" ? (
                      <Form.Select
                        onChange={(e) =>
                          handleFieldChange(field, e.target.value)
                        }
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </Form.Select>
                    ) : field === "Gender" && selectedCategory === "toys" ? (
                      <Form.Select
                        onChange={(e) =>
                          handleFieldChange(field, e.target.value)
                        }
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Form.Select>
                    ) : field === "Blood Type" &&
                      selectedCategory === "blood donations" ? (
                      <Form.Select
                        onChange={(e) =>
                          handleFieldChange(field, e.target.value)
                        }
                      >
                        {BloodTypes.map((type, index) => (
                          <option key={index}>{type}</option>
                        ))}
                      </Form.Select>
                    ) : (
                      <Form.Control
                        type="text"
                        placeholder={`Enter ${field}`}
                        onChange={(e) =>
                          handleFieldChange(field, e.target.value)
                        }
                      />
                    )}
                  </Form.Group>
                </Row>
              ))}
            </>
          )}
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MakePost;
