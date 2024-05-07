import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function SchoolComponent({
  onValueSchoolTypeChange,
  onValueSchoolSubjectChange,
  onValueSchoolAreaChange,
  onValueSchoolgovernorateChange,
}) {
  const [isBook, setBook] = useState(false);
  const [isStationaries, setStationaries] = useState(false);
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");

  const handleInputSubjectChange = (event) => {
    const newValue = event.target.value.toLowerCase();
    setSubject(newValue);
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
  const handleClickSchoolSubjectFilter = () => {
    const newValue = subject.toLowerCase();
    onValueSchoolSubjectChange(newValue);
  };
  const handleClickSchoolAreaFilter = () => {
    const newValue = area.toLowerCase();
    onValueSchoolAreaChange(newValue);
  };
  const handleClickSchoolgovernorateFilter = () => {
    const newValue = governorate.toLowerCase();
    onValueSchoolgovernorateChange(newValue);
  };

  return (
    <div>
      <Form.Check
        type="switch"
        id="books"
        label="books"
        onChange={() => {
          setBook(!isBook);
          if(isStationaries){
            setStationaries(false);
          }
          onValueSchoolTypeChange(isBook ? "" : "books");
        }}
        checked={isBook}
      />
      <Form.Check
        type="switch"
        id="stationaries"
        label="stationaries"
        onChange={() => {
          setStationaries(!isStationaries);
          if(isBook){
            setBook(false);
          }
          onValueSchoolTypeChange(isStationaries ? "" : "stationaries");
        }}
        checked={isStationaries}
      />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          subject
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={subject}
          onChange={handleInputSubjectChange}
        />
        <Button onClick={handleClickSchoolSubjectFilter}>Filter</Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">area </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={area}
          onChange={handleInputAreaChange}
        />
        <Button onClick={handleClickSchoolAreaFilter}>Filter</Button>
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
        <Button onClick={handleClickSchoolgovernorateFilter}>Filter</Button>
      </InputGroup>
    </div>
  );
}
