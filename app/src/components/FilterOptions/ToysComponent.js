import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function ToysComponent({
  onValueToysAgeChange,
  onValueToysGenderChange,
  onValueToysCategoryChange,
}) {
  const [age, setAge] = useState("");
  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);
  const [isUnisex, setUnisex] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isValidAge, setIsValidAge] = useState(true);

  const handleInputClothesAgeChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setAge(newValue);
  };

  const handleFilterAge = () => {
    const newValue = age.toLowerCase();
    if (
      newValue === "0+" ||
      newValue === "3+" ||
      newValue === "4+" ||
      newValue === "6+" ||
      newValue === "5+" ||
      newValue === "8+"
    ) {
      setIsValidAge(true);
      onValueToysAgeChange(newValue);
    } else {
      setIsValidAge(false);
    }
  };
  const handleClickUnisexChange = () => {
    setUnisex(!isUnisex);
    if (!isUnisex) {
      setMale(false);
      setFemale(false);
      onValueToysGenderChange("unisex");
    } else {
      if (isMale) {
        onValueToysGenderChange("male");
      } else if (isFemale) {
        onValueToysGenderChange("female");
      }
      onValueToysGenderChange("");
    }
  };

  const handleCategoryChange = (event) => {
    const newValue = event.target.id;
    const isChecked = event.target.checked;
    if (isChecked) {
      const newChangedValuePostive = [...categories, newValue];
      setCategories(newChangedValuePostive);
      onValueToysCategoryChange(newChangedValuePostive);
    } else {
      const newChangedValueNegative = categories.filter(
        (category) => category !== newValue
      );
      setCategories(newChangedValueNegative);
      onValueToysCategoryChange(newChangedValueNegative);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Age</InputGroup.Text>
        <Form.Control
          className={`${
            isValidAge
              ? "border-success"
              : isValidAge === false
              ? "border-danger"
              : ""
          }`}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={age}
          onChange={handleInputClothesAgeChange}
          readOnly={!isValidAge}
          onClick={() => setIsValidAge(true)}
        />
        <Button onClick={handleFilterAge}>Filter</Button>
      </InputGroup>

      <Form.Check
        type="switch"
        id="male"
        label="Male"
        onChange={() => {
          if (!isUnisex) {
            setMale(!isMale);
            if (isFemale) {
              setFemale(false);
            }
            onValueToysGenderChange(isMale ? "" : "male");
          } else {
            setUnisex(!isUnisex);
            setMale(!isMale);
            onValueToysGenderChange(isMale ? "" : "male");
          }
        }}
        checked={isMale && !isUnisex}
      />
      <Form.Check
        type="switch"
        id="female"
        label="Female"
        onChange={() => {
          if (!isUnisex) {
            setFemale(!isFemale);
            if (isMale) {
              setMale(false);
            }
            onValueToysGenderChange(isFemale ? "" : "female");
          } else {
            setUnisex(!isUnisex);
            setFemale(!isFemale);
            onValueToysGenderChange(isFemale ? "" : "female");
          }
        }}
        checked={isFemale && !isUnisex}
      />

      <Form.Check
        type="switch"
        id="unisex"
        label="Unisex"
        onChange={handleClickUnisexChange}
        checked={isUnisex}
      />

      <Form.Check
        type="checkbox"
        id="board game"
        label="Board Games"
        onChange={handleCategoryChange}
      />
      <Form.Check
        type="checkbox"
        id="stuffed toy"
        label="Stuffed Toys"
        onChange={handleCategoryChange}
      />
      <Form.Check
        type="checkbox"
        id="dolls"
        label="Dolls"
        onChange={handleCategoryChange}
      />
      <Form.Check
        type="checkbox"
        id="sports"
        label="Sports"
        onChange={handleCategoryChange}
      />
      <Form.Check
        type="checkbox"
        id="cars"
        label="Cars"
        onChange={handleCategoryChange}
      />
      <Form.Check
        type="checkbox"
        id="outdoor"
        label="Outdoor"
        onChange={handleCategoryChange}
      />
    </div>
  );
}
