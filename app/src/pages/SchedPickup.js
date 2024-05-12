import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import "./schedpickup.css";
import { Container, Button, Form, Row, Stack } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function SchedPickup() {
    const [selectedVehicle, setSelectedVehicle] = useState(""); // State to store the selected vehicle

    const handleVehicleChange = (event) => {
        setSelectedVehicle(event.target.value); // Update the state with the selected vehicle
    };
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedTime, setSelectedTime] = useState("00:00"); // State to store the selected time, defaulting to 9 am

    const handleTimeChange = (time) => {
        setSelectedTime(time); // Update the state with the selected time
    };
    const handleSubmit = () => {
        const appointment = {
            time: selectedTime,
            date: selectedDate,
            vehicle: selectedVehicle
        };
        console.log("Appointment:", appointment); // For demonstration, you can replace this with any other logic (e.g., saving to state or sending to a server)
    };

    return (
        <>
            <header className="headnav"><NavBar /></header>
           
            <div className="wrappp">
                
                <div className="boxx2">
                    <Stack gap={3} className="col-md-5 mx-auto" style={{ width: "90%", marginTop: "28px" }}>
                        <Container fluid>
                            <Row style={{marginBottom:"20px"}}> <h3 style={{textAlign:"center", Font:"inherit"}}>Select your pickup details: </h3></Row>
                            <Row>
                                <h6 className="boxx3" style={{marginBottom:"10px"}}>Please choose your vehicle:</h6>
                                <Form>
                                    <div className="px-0">
                                        <Form.Check
                                            type="radio"
                                            name="group1"
                                            id="Motorcycle"
                                            label="Motorcycle"
                                            value="Motorcycle" // Value corresponding to the vehicle
                                            checked={selectedVehicle === "Motorcycle"} // Check if this vehicle is selected
                                            onChange={handleVehicleChange} // Call this function when this vehicle is selected
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="group1"
                                            id="Car"
                                            label="Car"
                                            value="Car"
                                            checked={selectedVehicle === "Car"}
                                            onChange={handleVehicleChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="group1"
                                            id="Truck"
                                            label="Truck"
                                            value="Truck"
                                            checked={selectedVehicle === "Truck"}
                                            onChange={handleVehicleChange}
                                        />
                                    </div>
                                </Form>

                            </Row>
                            <Row>
                                <h6 className="boxx3" style={{marginBottom:"10px",marginTop:"21px"}}>Please choose your time:</h6>
                                <div className="time" style={{ width: "40%" }}>
                                    <TimePicker
                                        value={selectedTime}
                                        onChange={handleTimeChange}
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
                                <h6 className="boxx3" style={{marginBottom:"15px",marginTop:"18px"}}>Please select a date:</h6>
                                <div>

                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="dd/MM/yyyy"

                                    />
                                    {selectedDate && (
                                        <p>You selected: {selectedDate.toLocaleDateString()}</p>
                                    )}
                                </div>
                            </Row>

                        </Container>

                        <Button className="color" variant="secondary" onClick={handleSubmit}> Confirm Donation</Button>
                        <Button className="color" variant="secondary">Cancel</Button>
                    </Stack>
                </div>
            </div>
            <footer><Footer /></footer>

        </>
    );

}

export default SchedPickup;