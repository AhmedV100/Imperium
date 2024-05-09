// NotificationIcon.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function NotificationIcon({ count }) {
  return (
    <div style={{ position: "relative" }}>
      <FontAwesomeIcon icon={faBell} size="lg" />
      {count > 0 && <span className="notification-badge">{count}</span>}
    </div>
  );
}

export default NotificationIcon;
