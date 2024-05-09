import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function FoodComponent({ onValueFoodsCategoryChange }) {
  const [categories, setCategories] = useState([
    "fruits and vegetables",
    "canned",
    "fresh",
    "baked"
  ]);

  const handleCategoryChange = (event) => {
    const newValue = event.target.id;
    const isChecked = event.target.checked;
    if (isChecked) {
      const newChangedValuePostive = [...categories, newValue];
      setCategories(newChangedValuePostive);
      onValueFoodsCategoryChange(newChangedValuePostive);
    } else {
      const newChangedValueNegative = categories.filter(
        (category) => category !== newValue
      );
      setCategories(newChangedValueNegative);
      onValueFoodsCategoryChange(newChangedValueNegative);
    }
  };
  return (
    <div>
      <Form.Check
        type="checkbox"
        id="fruits and vegetables"
        label="fruits and vegetables"
        onChange={handleCategoryChange}
        checked={categories.includes("fruits and vegetables")}
      />
      <Form.Check
        type="checkbox"
        id="canned"
        label="canned"
        onChange={handleCategoryChange}
        checked={categories.includes("canned")}

      />
      <Form.Check
        type="checkbox"
        id="fresh"
        label="fresh"
        onChange={handleCategoryChange}
        checked={categories.includes("fresh")}

      />
      <Form.Check
        type="checkbox"
        id="baked"
        label="baked"
        onChange={handleCategoryChange}
        checked={categories.includes("baked")}

      />
    </div>
  );
}
