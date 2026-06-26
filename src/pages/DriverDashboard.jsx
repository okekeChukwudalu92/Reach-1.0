import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import StatusHero from "../components/driver/StatusHero";
import BookingCard from "../components/driver/BookingCard";
import QRScannerCard from "../components/driver/QRScannerCard";
import EarningsCard from "../components/driver/EarningsCard";
import "../styles/driver.css";

export default function DriverDashboard() {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState("home");
  const [isOnline, setIsOnline] = useState(false);
  const [earnings, setEarnings] = useState(2565);
  const [totalRides, setTotalRides] = useState(12);
  const [nightRides, setNightRides] = useState(3);

  const mockBooking = {
    id: 1,
    passengerName: "Chase K.",
    passengerPhone: "+234 812 *** 4490",
    from: "School Gate",
    to: "Main Library",
    amount: 250,
    currentSeats: 3,
    expiresIn: "9:42",
  };

  const mockStats = {
    today: totalRides,
    earned: earnings,
    nightRides: nightRides,
  };

  const handleStatusChange = (online) => {
    setIsOnline(online);
  };

  const handleAcceptBooking = (bookingId) => {
    alert("Booking accepted!");
  };

  const handleRejectBooking = (bookingId) => {
    alert("Booking rejected.");
  };

  const handleStartScan = () => {
    alert("QR Scanner would open here");
  };

  return (
    <div className="dashboard">
      <TopBar userName={user?.name || "Driver"} />

      <div className="dashboard-content">
        {activePage === "home" && (
          <>
            <StatusHero driverId={user?.name} onStatusChange={handleStatusChange} />

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">{mockStats.today}</div>
                <div className="stat-label">Today</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: "var(--accent)" }}>
                  ₦{mockStats.earned.toLocaleString()}
                </div>
                <div className="stat-label">Earned</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: "var(--night)" }}>
                  {mockStats.nightRides}
                </div>
                <div className="stat-label">Night Rides</div>
              </div>
            </div>

            {isOnline && <BookingCard booking={mockBooking} onAccept={handleAcceptBooking} onReject={handleRejectBooking} />}

            {isOnline && <QRScannerCard onStartScan={handleStartScan} />}

            <EarningsCard earnings={earnings} deducted={earnings * 0.05} canWithdraw={false} />
          </>
        )}

        {activePage === "bookings" && (
          <div className="section">
            <div className="section-label">Your Bookings</div>
            <div style={{ padding: "0 24px" }}>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                {isOnline ? "Waiting for bookings..." : "Go online to accept rides"}
              </p>
            </div>
          </div>
        )}

        {activePage === "wallet" && (
          <>
            <EarningsCard earnings={earnings} deducted={earnings * 0.05} canWithdraw={false} />
          </>
        )}

        {activePage === "stats" && (
          <div className="section">
            <div className="section-label">Statistics</div>
            <div style={{ padding: "0 24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "var(--muted)", fontSize: "12px", marginBottom: "4px" }}>
                  Total Rides
                </p>
                <p style={{ color: "var(--text)", fontSize: "18px", fontWeight: "700" }}>
                  {mockStats.today}
                </p>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "var(--muted)", fontSize: "12px", marginBottom: "4px" }}>
                  Total Earned
                </p>
                <p style={{ color: "var(--accent)", fontSize: "18px", fontWeight: "700" }}>
                  ₦{mockStats.earned.toLocaleString()}
                </p>
              </div>
              <div>
                <p style={{ color: "var(--muted)", fontSize: "12px", marginBottom: "4px" }}>
                  Night Rides
                </p>
                <p style={{ color: "var(--night)", fontSize: "18px", fontWeight: "700" }}>
                  {mockStats.nightRides}
                </p>
              </div>
            </div>
          </div>
        )}

        {activePage === "profile" && (
          <div className="section">
            <div className="section-label">Profile</div>
            <div style={{ padding: "0 24px" }}>
              <p style={{ color: "var(--text)", fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
                Driver ID: #{user?.name || "Driver"}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                +234 {user?.phone || "***"}
              </p>
            </div>
          </div>
        )}
      </div>

      <BottomNav
        userRole="driver"
        activePage={activePage}
        onNavigate={setActivePage}
      />
    </div>
  );
}