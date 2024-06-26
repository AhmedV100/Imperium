import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ClothesComponent({
  onValueClothesAgeChange,
  onValueClothesGenderChange,
  onValueClothesSeasonChange,
}) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [season, setSeason] = useState("");
  const [isValidAge, setIsValidAge] = useState(true);
  const [isValidGender, setIsValidGender] = useState(true);
  const [isValidSeason, setIsValidSeason] = useState(true);

  const handleInputClothesAgeChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setAge(newValue);
  };

  const handleInputClothesGenderChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setGender(newValue);
  };

  const handleInputClothesSeasonChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setSeason(newValue);
  };

  const handleFilterAge = () => {
    const newValue = age.toLowerCase();
    if (
      newValue === "" ||
      newValue === "child" ||
      newValue === "adult" ||
      newValue === "teenager"
    ) {
      setIsValidAge(true);
      onValueClothesAgeChange(newValue);
    } else {
      setIsValidAge(false);
    }
  };
  const handleFilterGender = () => {
    const newValue = gender.toLowerCase();
    if (
      newValue === "" ||
      newValue === "male" ||
      newValue === "female" ||
      newValue === "both"
    ) {
      setIsValidGender(true);
      onValueClothesGenderChange(newValue);
    } else {
      setIsValidGender(false);
    }
  };
  const handleFilterSeason = () => {
    const newValue = season.toLowerCase();
    if (
      newValue === "" ||
      newValue === "summer" ||
      newValue === "winter" ||
      newValue === "fall" ||
      newValue === "autumn" ||
      newValue === "all seasons" ||
      newValue === "spring"
    ) {
      setIsValidSeason(true);
      onValueClothesSeasonChange(newValue);
    } else {
      setIsValidSeason(false);
    }
  };

  const ageTooltip = (
    <Tooltip id="tooltip-age">"child", "teenager" or "adult"</Tooltip>
  );

  const genderTooltip = (
    <Tooltip id="tooltip-gender">"male" or "female"</Tooltip>
  );

  const seasonTooltip = (
    <Tooltip id="tooltip-season">"winter", "summer", "spring" ...etc  </Tooltip>
  );

  return (
    <div>
      <InputGroup className="mb-3">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={ageTooltip}
        >
          <InputGroup.Text id="inputGroup-sizing-default">
            age
          </InputGroup.Text>
        </OverlayTrigger>
        <Form.Control
          className={isValidAge ? "" : "border border-danger"}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={age}
          onChange={handleInputClothesAgeChange}
          readOnly={!isValidAge}
          onClick={() => setIsValidAge(true)}
        />
        <Button onClick={handleFilterAge}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={genderTooltip}
        >
          <InputGroup.Text id="inputGroup-sizing-default">
            gender
          </InputGroup.Text>
        </OverlayTrigger>
        <Form.Control
          className={isValidGender ? "" : "border border-danger"}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={gender}
          onChange={handleInputClothesGenderChange}
          readOnly={!isValidGender}
          onClick={() => setIsValidGender(true)}
        />
        <Button onClick={handleFilterGender}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={seasonTooltip}
        >
          <InputGroup.Text id="inputGroup-sizing-default">
            season
          </InputGroup.Text>
        </OverlayTrigger>
        <Form.Control
          className={isValidSeason ? "" : "border border-danger"}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={season}
          onChange={handleInputClothesSeasonChange}
          readOnly={!isValidSeason}
          onClick={() => setIsValidSeason(true)}
        />
        <Button onClick={handleFilterSeason}>Filter</Button>
      </InputGroup>
    </div>
  );
}
