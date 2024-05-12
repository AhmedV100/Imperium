import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import "./DonationNotification.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function DonationNotification() {
    // Mock data for donations
    const donations = [
        { type: "Food", date: "25/5/2024", status: "accepted" },
        { type: "Clothes", date: "26/5/2024", status: "being_picked_up" },
        { type: "Toys", date: "27/5/2024", status: "delivered" },
        { type: "Medicines", date: "29/5/2024", status: "lost" },
        { type: "Medicines", date: "30/5/2024", status: "being_delivered" },
        { type: "Stationary", date: "30/5/2024", status: "accepted" }
    ];

    // State to track active tab and notifications
    const [activeTab, setActiveTab] = useState("new");
    const [viewedNotifications, setViewedNotifications] = useState([]);
    const [newNotifications, setNewNotifications] = useState(donations);

    // Function to handle marking a notification as viewed
    const markAsViewed = (index) => {
        const notification = newNotifications[index];
        setViewedNotifications([...viewedNotifications, notification]);
        setNewNotifications(newNotifications.filter((_, i) => i !== index));
    };

    return (
        <>
            <header className="headnav"><NavBar /></header>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="new" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="new">New</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="viewed">Viewed</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {activeTab === "new" && (
                        <div className="notification-section">
                            <h4>New Notifications</h4>
                            {newNotifications.map((donation, index) => (
                                <Card key={index} className="notification-card">
                                    <Card.Body>
                                        <Card.Text><strong>New:</strong> Donation ({donation.type}, {donation.date}) is {donation.status.replace(/_/g, ' ')}</Card.Text>
                                        <Button variant="primary" onClick={() => markAsViewed(index)}>Mark as Viewed</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    )}
                    {activeTab === "viewed" && (
                        <div className="notification-section">
                            <h4>Viewed Notifications</h4>
                            {viewedNotifications.map((donation, index) => (
                                <Card key={index} className="notification-card">
                                    <Card.Body>
                                        <Card.Text><strong>Viewed:</strong> Donation ({donation.type}, {donation.date}) is {donation.status.replace(/_/g, ' ')}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    )}
                </Card.Body>
            </Card>
            <footer><Footer /></footer>
        </>
    );
}

export default DonationNotification;
