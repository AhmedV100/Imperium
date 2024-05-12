import React, { useState, useParams } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import "./schedpickup.css";
import { Container, Button, Form, Row, Stack } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function SchedPickup() {
  const [selectedVehicle, setSelectedVehicle] = useState(""); // State to store the selected vehicle
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [selectedTime, setSelectedTime] = useState("00:00"); // State to store the selected time, defaulting to 9 am
  const navigate = useNavigate();
  const { donorId } = useParams();

  const handleSubmit = () => {
    if (!selectedVehicle || !selectedDate || !selectedTime) {
      alert("Please fill all fields.");
    } else {
      alert("Donation accepted!");
      navigate(`/donor/${donorId}/donationhistory`);
    }
  };
  const handleCancel = () => {
    navigate(`/donor/${donorId}/browser`);
  };

  return (
    <>
      <header className="headnav">
        <NavBar />
      </header>

      <div className="wrappp">
        <div className="boxx2">
          <Stack
            gap={3}
            className="col-md-5 mx-auto"
            style={{ width: "90%", marginTop: "28px" }}
          >
            <Container fluid>
              <Row style={{ marginBottom: "20px" }}>
                {" "}
                <h3 style={{ textAlign: "center", Font: "inherit" }}>
                  Select your pickup details:{" "}
                </h3>
              </Row>
              <Row>
                <h6 className="boxx3" style={{ marginBottom: "10px" }}>
                  Please choose your vehicle:
                </h6>
                <Form>
                  <div className="px-0">
                    <Form.Check
                      type="radio"
                      name="group1"
                      id="Motorcycle"
                      label="Motorcycle"
                      value="Motorcycle" // Value corresponding to the vehicle
                      checked={selectedVehicle === "Motorcycle"} // Check if this vehicle is selected
                      onChange={(e) => setSelectedVehicle(e.target.value)} // Call this function when this vehicle is selected
                    />
                    <Form.Check
                      type="radio"
                      name="group1"
                      id="Car"
                      label="Car"
                      value="Car"
                      checked={selectedVehicle === "Car"}
                      onChange={(e) => setSelectedVehicle(e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      name="group1"
                      id="Truck"
                      label="Truck"
                      value="Truck"
                      checked={selectedVehicle === "Truck"}
                      onChange={(e) => setSelectedVehicle(e.target.value)}
                    />
                  </div>
                </Form>
              </Row>
              <Row>
                <h6
                  className="boxx3"
                  style={{ marginBottom: "10px", marginTop: "21px" }}
                >
                  Please choose your time:
                </h6>
                <div className="time" style={{ width: "40%" }}>
                  <TimePicker
                    value={selectedTime}
                    onChange={(time) => setSelectedTime(time)} // Update the state with the selected time
                    clockIcon={null} // Remove clock icon to display as dropdown
                    format="HH:mm"
                    disableClock={true} // Disable clock view
                    minTime="00:00" // Set min time to 9 am
                    maxTime="23:00" // Set max time to 9 pm
                    step={60} // Set step to 1 hour
                  />
                </div>
              </Row>
              <Row>
                <h6
                  className="boxx3"
                  style={{ marginBottom: "15px", marginTop: "18px" }}
                >
                  Please select a date:
                </h6>
                <div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                  {selectedDate && (
                    <p>You selected: {selectedDate.toLocaleDateString()}</p>
                  )}
                </div>
              </Row>
            </Container>

            <Button
              className="color"
              variant="secondary"
              onClick={handleSubmit}
            >
              {" "}
              Confirm Donation
            </Button>

            <Button
              className="color"
              variant="secondary"
              onClick={handleCancel}
            >
              {" "}
              Cancel{" "}
            </Button>
          </Stack>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SchedPickup;
