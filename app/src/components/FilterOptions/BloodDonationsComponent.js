import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function BloodDonationComponent({
  onValueBloodHospitalNameChange,
  onValueBloodAreaChange,
  onValueBloodGovernorateChange,
}) {
  const [hospitalName, setHospitalName] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");

  const handleInputHospitalNameChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setHospitalName(newValue);
  };
  const handleInputAreaChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setArea(newValue);
  };
  const handleInputGovernorateChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setGovernorate(newValue);
  };
  // HANDLE FILTER CLICK
  const handleClickBloodHospitalNameFilter = () => {
    const newValue = hospitalName.toLowerCase();
    onValueBloodHospitalNameChange(newValue);
  };
  const handleClickBloodAreaFilter = () => {
    const newValue = area.toLowerCase();
    onValueBloodAreaChange(newValue);
  };
  const handleClickBloodGovernorateFilter = () => {
    const newValue = governorate.toLowerCase();
    onValueBloodGovernorateChange(newValue);
  };

  return (
    <div>
      {" "}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          hospital name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={hospitalName}
          onChange={handleInputHospitalNameChange}
        />
        <Button onClick={handleClickBloodHospitalNameFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          governorate
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={governorate}
          onChange={handleInputGovernorateChange}
        />
        <Button onClick={handleClickBloodGovernorateFilter}>Filter</Button>{" "}
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          hospital area
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={area}
          onChange={handleInputAreaChange}
        />
        <Button onClick={handleClickBloodAreaFilter}>Filter</Button>{" "}
      </InputGroup>
    </div>
  );
}
