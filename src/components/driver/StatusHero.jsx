import { useState } from "react";

export default function StatusHero({ driverId, onStatusChange }) {
  const [isOnline, setIsOnline] = useState(false);

  const handleToggle = () => {
    setIsOnline(!isOnline);
    onStatusChange(!isOnline);
  };

  return (
    <div className="status-hero">
      <div className="status-left">
        <div className="status-label">Your Status</div>
        <div className={`status-value ${!isOnline ? "offline" : ""}`}>
          {isOnline ? "Active" : "Offline"}
        </div>
        <div className="status-sub">
          {isOnline
            ? "Students can see and book you"
            : "Go online to accept bookings"}
        </div>
      </div>
      <div className="toggle-wrap">
        <button
          className={`toggle ${isOnline ? "on" : ""}`}
          onClick={handleToggle}
        >
          <div className="toggle-knob"></div>
        </button>
        <div className="toggle-label">{isOnline ? "Online" : "Offline"}</div>
      </div>
    </div>
  );
}