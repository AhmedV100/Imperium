import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import { Card, CardGroup } from "react-bootstrap";
import "./DonationCards.css";

function DonationHistory() {
  const donations = [
    { type: "Stationary", quantity: 10, time: "9:30 AM", date: "2024-05-01", eta: "3 hours" },
    { type: "Books", quantity: 5, time: "11:45 AM", date: "2024-05-02", eta: "5 hours" },
    { type: "Toys", quantity: 8, time: "2:15 PM", date: "2024-05-03", eta: "2 hours" },
    { type: "Clothes", quantity: 20, time: "4:30 PM", date: "2024-05-04", eta: "4 hours" },
    { type: "Medicines", quantity: 15, time: "6:45 PM", date: "2024-05-05", eta: "6 hours" },
  ];

  return (
    <>
    <header className="headnav"><NavBar /></header>
    <label style={{font:"inherit", fontSize:"50px", marginRight:"25px"}}>Donation history:</label>
    <div className="donation-container">
      {donations.map((donation, index) => (
        <Card key={index} className="custom-card">
          <Card.Body>
            <Card.Title>Donation Type: {donation.type}</Card.Title>
            <Card.Text>
              Quantity: {donation.quantity}<br />
              Time: {donation.time}<br />
              Date: {donation.date}<br />
              ETA of Driver: {donation.eta}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
    <footer><Footer /></footer>
    </>
  );
}

export default DonationHistory;