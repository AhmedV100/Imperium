import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const [categories, setCategories] = useState([
    "board game",
    "stuffed toy",
    "dolls",
    "sports",
    "cars",
    "outdoor",
  ]);
  const [isValidAge, setIsValidAge] = useState(true);

  const handleInputClothesAgeChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setAge(newValue);
  };

  const handleFilterAge = () => {
    const newValue = age.toLowerCase();
    if (
      newValue === "" ||
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
    if (isChecked && !categories.includes(newValue)) {
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

  const ageTooltip = (
    <Tooltip id="tooltip-age">"0+", "3+" or "4+" ...etc</Tooltip>
  );

  return (
    <div>
      <InputGroup className="mb-3">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={ageTooltip}
        >
          <InputGroup.Text id="inputGroup-sizing-default">age</InputGroup.Text>
        </OverlayTrigger>
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
        checked={categories.includes("board game")}
      />
      <Form.Check
        type="checkbox"
        id="stuffed toy"
        label="Stuffed Toys"
        onChange={handleCategoryChange}
        checked={categories.includes("stuffed toy")}
      />
      <Form.Check
        type="checkbox"
        id="dolls"
        label="Dolls"
        onChange={handleCategoryChange}
        checked={categories.includes("dolls")}
      />
      <Form.Check
        type="checkbox"
        id="sports"
        label="Sports"
        onChange={handleCategoryChange}
        checked={categories.includes("sports")}
      />
      <Form.Check
        type="checkbox"
        id="cars"
        label="Cars"
        onChange={handleCategoryChange}
        checked={categories.includes("cars")}
      />
      <Form.Check
        type="checkbox"
        id="outdoor"
        label="Outdoor"
        onChange={handleCategoryChange}
        checked={categories.includes("outdoor")}
      />
    </div>
  );
}
