import { useState, useEffect } from "react";

export default function ActiveRide({ ride, onComplete, onCancel }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = (timeLeft / 600) * 100;

  if (!ride) return null;

  return (
    <div className="section">
      <div className="section-label">Active Ride</div>
      <div className="booking-card">
        <div className="booking-top">
          <div>
            <div className="booking-driver">#{ride.driverId}</div>
            <div className="booking-driver-label">Your driver — find them at the park</div>
          </div>
          <div className="status-pill">
            <div className="status-dot"></div>
            Booked
          </div>
        </div>

        <div className="booking-info">
          <div className="info-block">
            <div className="info-block-label">From</div>
            <div className="info-block-value">{ride.from}</div>
          </div>
          <div className="info-block">
            <div className="info-block-label">To</div>
            <div className="info-block-value">{ride.to}</div>
          </div>
          <div className="info-block">
            <div className="info-block-label">Amount</div>
            <div className="info-block-value" style={{ color: "var(--accent)" }}>
              ₦{ride.amount}
            </div>
          </div>
          <div className="info-block">
            <div className="info-block-label">Status</div>
            <div className="info-block-value">Awaiting scan</div>
          </div>
        </div>

        <div className="timer-bar">
          <div className="timer-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="timer-label">Expires in {formatTime(timeLeft)}</div>

        <button className="btn-complete" onClick={() => onComplete(ride.id)}>
          ✓ Complete Ride
        </button>
        <button className="btn-cancel" onClick={() => onCancel(ride.id)}>
          Cancel Booking
        </button>
      </div>
    </div>
  );
}