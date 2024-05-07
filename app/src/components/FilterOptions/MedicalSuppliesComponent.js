import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function MedicalSuppliesComponent({
  onValueMedicalDevicesChange,
  onValueMedicalEquipmentChange,
  onValueMedicalMedicationChange,
  onValueMedicalUseChange,
  onValueMedicalGovernorateChange,
  onValueMedicalAreaChange,
  onValueMedicalSpecialtyChange,
  onValueMedicalOrganizationNameChange,
}) {
  const [medicalDevices, setMedicalDevices] = useState("");
  const [medicalEquipment, setMedicalEquipment] = useState("");
  const [medication, setMedication] = useState("");
  const [medicalUse, setMedicalUse] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [area, setArea] = useState("");
  const [medicalSpecialty, setMedicalSpecialty] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleInputMedicalDevicesChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setMedicalDevices(newValue);
  };

  const handleInputMedicalEquipmentChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setMedicalEquipment(newValue);
  };

  const handleInputMedicationChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setMedication(newValue);
  };

  const handleInputMedicalUseChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setMedicalUse(newValue);
  };

  const handleInputGovernorateChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setGovernorate(newValue);
  };

  const handleInputAreaChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setArea(newValue);
  };

  const handleInputMedicalSpecialtyChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setMedicalSpecialty(newValue);
  };

  const handleInputOrganizationNameChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setOrganizationName(newValue);
  };

  // HANDLE FILTER CLICK
  const handleClickMedicalDevicesFilter = () => {
    const newValue = medicalDevices.toLowerCase();
    onValueMedicalDevicesChange(newValue);
  };
  const handleClickMedicalEquipmentFilter = () => {
    const newValue = medicalEquipment.toLowerCase();
    onValueMedicalEquipmentChange(newValue);
  };
  const handleClickMedicationFilter = () => {
    const newValue = medication.toLowerCase();
    onValueMedicalMedicationChange(newValue);
  };
  const handleClickMedicalUseFilter = () => {
    const newValue = medicalUse.toLowerCase();
    onValueMedicalUseChange(newValue);
  };
  const handleClickMedicalGovernorateFilter = () => {
    const newValue = governorate.toLowerCase();
    onValueMedicalGovernorateChange(newValue);
  };
  const handleClickMedicalAreaFilter = () => {
    const newValue = area.toLowerCase();
    onValueMedicalAreaChange(newValue);
  };
  const handleClickMedicalSpecialtyFilter = () => {
    const newValue = medicalSpecialty.toLowerCase();
    onValueMedicalSpecialtyChange(newValue);
  };
  const handleClickMedicalOrganizationNameFilter = () => {
    const newValue = organizationName.toLowerCase();
    onValueMedicalOrganizationNameChange(newValue);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          medical devices
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={medicalDevices}
          onChange={handleInputMedicalDevicesChange}
        />
        <Button onClick={handleClickMedicalDevicesFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          medical equipment
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={medicalEquipment}
          onChange={handleInputMedicalEquipmentChange}
        />
        <Button onClick={handleClickMedicalEquipmentFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          medication
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={medication}
          onChange={handleInputMedicationChange}
        />
        <Button onClick={handleClickMedicationFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          medical use
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={medicalUse}
          onChange={handleInputMedicalUseChange}
        />
        <Button onClick={handleClickMedicalUseFilter}>Filter</Button>
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
        <Button onClick={handleClickMedicalGovernorateFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">area</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={area}
          onChange={handleInputAreaChange}
        />
        <Button onClick={handleClickMedicalAreaFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          case:medical specialty
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={medicalSpecialty}
          onChange={handleInputMedicalSpecialtyChange}
        />
        <Button onClick={handleClickMedicalSpecialtyFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          organization name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={organizationName}
          onChange={handleInputOrganizationNameChange}
        />
        <Button onClick={handleClickMedicalOrganizationNameFilter}>
          Filter
        </Button>
      </InputGroup>
    </div>
  );
}
