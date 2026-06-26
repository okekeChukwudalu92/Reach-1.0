export default function BookingCard({ booking, onAccept, onReject }) {
  if (!booking) return null;

  return (
    <div className="section">
      <div className="section-label">Incoming Booking</div>
      <div className="booking-card">
        <div className="booking-header">
          <div>
            <div className="passenger-name">{booking.passengerName}</div>
            <div className="passenger-phone">{booking.passengerPhone}</div>
          </div>
          <div className="new-badge">
            <div className="new-dot"></div>
            New
          </div>
        </div>

        <div className="booking-route">
          <div className="route-from">{booking.from}</div>
          <div className="route-arrow">→</div>
          <div className="route-to">{booking.to}</div>
        </div>

        <div className="booking-meta">
          <div className="meta-item">
            <div className="meta-label">Fare</div>
            <div className="meta-value">₦{booking.amount}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Seat</div>
            <div className="meta-value">{booking.currentSeats} / 5</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Expires</div>
            <div className="meta-value" style={{ color: "var(--warning)" }}>
              {booking.expiresIn}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="btn-submit"
            onClick={() => onAccept(booking.id)}
            style={{ flex: 1 }}
          >
            Accept ✓
          </button>
          <button
            className="btn-cancel"
            onClick={() => onReject(booking.id)}
            style={{ flex: 1 }}
          >
            Reject ✗
          </button>
        </div>
      </div>
    </div>
  );
}