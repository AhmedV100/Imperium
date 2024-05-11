import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./MakePost.css"; 
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
let Categories = [
  {
    name: "clothes",
    fields: [
      { name: "type_of_clothing", type: "text" },
      {
        name: "age",
        type: "dropdwon",
        options: ["child", "teenager", "adult"],
      },
      { name: "gender", type: "dropdown", options: ["Male", "Female", "both"] },
      {
        name: "season",
        type: "dropdown",
        options: ["summer", "winter", "fall", "spring", "all seasons"],
      },
      { name: "material", type: "text" },
      { name: "quantity", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "toys",
    fields: [
      {
        name: "type",
        type: "dropdown",
        options: [
          "board game",
          "stuffed toy",
          "dolls",
          "sports",
          "cars",
          "outdoor",
        ],
      },
      {
        name: "age",
        type: "dropdown",
        options: ["0+", "3+", "4+", "6+", "5+", "8+"],
      },
      {
        name: "gender",
        type: "dropdown",
        options: ["Male", "Female", "Unisex"],
      },
      { name: "category", type: "text" },
      { name: "quantity", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "foods",
    fields: [
      { name: "name", type: "text" },
      { name: "quantity", type: "text" },
      {
        name: "type",
        type: "dropdown",
        options: ["fruits and vegetables", "canned", "fresh", "baked"],
      },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "meds",
    fields: [
      { name: "device_type", type: "text" },
      { name: "use", type: "text" },
      { name: "type", type: "text" },
      { name: "equipment_type", type: "text" },
      { name: "medication_type", type: "text" },
      { name: "image", type: "text" },
      { name: "quantity", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "bloods",
    fields: [
      { name: "name", type: "text" },
      { name: "blood_type", type: "dropdown", options: ["A", "B", "AB", "O"] },
      { name: "hospital_name", type: "text" },
      { name: "hospital_area", type: "text" },
      { name: "governorate", type: "text" },
      { name: "hospital_address", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "books",
    fields: [
      { name: "name", type: "text" },
      { name: "author", type: "text" },
      { name: "language", type: "text" },
      { name: "edition", type: "text" },
      { name: "summary", type: "text" },
      { name: "quantity", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "stationaries",
    fields: [
      { name: "type_of_item", type: "text" },
      { name: "amount", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "teaches",
    fields: [
      { name: "number_of_students", type: "text" },
      { name: "address", type: "text" },
      { name: "google_map_marker", type: "text" },
      { name: "subjects_to_be_taught", type: "text" },
      { name: "area", type: "text" },
      { name: "government", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
  {
    name: "cases",
    fields: [
      { name: "patient_name", type: "text" },
      { name: "age", type: "text" },
      { name: "gender", type: "text" },
      { name: "weight", type: "text" },
      { name: "location", type: "text" },
      { name: "address", type: "text" },
      { name: "organization_name", type: "text" },
      { name: "medical_specialty", type: "text" },
      { name: "case_description", type: "text" },
      {
        name: "google_maps_marker",
        type: "dropdown",
        options: [
          "New Cairo, 5th Settlement",
          "Cairo, Tahrir Square",
          "Sharkia, Zagazig, AlZera'a",
        ],
      },
    ],
  },
];



function MakePost() {
  const { orgId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({});
  const nav = useNavigate();

  // Function to reset form fields
  const resetForm = () => {
    setFormData({});
  };

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    resetForm(); 
  };

  const validateForm = () => {
    for (const category of Categories) {
      if (category.name === selectedCategory) {
        for (const field of category.fields) {
          if (!formData[field.name]) {
            return false; 
          }
        }
        return true;
      }
    }
    return false; 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !validateForm()) {
      alert("Please fill in all fields.");
      return;
    }
    const finalData = { ...formData, google_maps_marker:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.622999652575!2d-74.0000000010245!3d40.00000000293648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzU1LjEiTiA3NMKwMTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1630419451337!5m2!1sen!2sus"};
     const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
     console.log("i am in MakePosts submit:",finalData);
     
     const newPost = {
       id: existingPosts.length,
       orgId: parseInt(orgId),
       donorId: null,
       fulfilled: false,
       object_type: selectedCategory,
       fields: finalData,
     };
     const updatedPosts = [...existingPosts, newPost];
     localStorage.setItem("posts", JSON.stringify(updatedPosts));
     alert("Success!");
     nav(-1);
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
                  <Form.Group as={Col} controlId={`form${field.name}`}>
                    <Form.Label>{field.name}</Form.Label>
                    {field.type === "dropdown" ? (
                      <Form.Select
                        onChange={(e) =>
                          handleFieldChange(field.name, e.target.value)
                        }
                      >
                        <option value="">Choose...</option>
                        {field.options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      <Form.Control
                        type={field.type}
                        placeholder={`Enter ${field.name}`}
                        onChange={(e) =>
                          handleFieldChange(field.name, e.target.value)
                        }
                      />
                    )}
                  </Form.Group>
                </Row>
              ))}
            </>
          )}
          <Button variant="primary" type="submit" onClick={handleSubmit} className="submit-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MakePost;
