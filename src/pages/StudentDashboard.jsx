import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import WalletHero from "../components/student/WalletHero";
import ParkSelector from "../components/student/ParkSelector";
import DestinationList from "../components/student/DestinationList";
import ActiveRide from "../components/student/ActiveRide";
import "../styles/student.css";

export default function StudentDashboard() {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState("home");
  const [selectedPark, setSelectedPark] = useState("school-gate");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeRide, setActiveRide] = useState(null);
  const [walletBalance, setWalletBalance] = useState(2450);

  const mockRide = {
    id: 1,
    driverId: "Andy25",
    from: "School Gate",
    to: "Main Library",
    amount: 250,
  };

  const handleCompleteRide = (rideId) => {
    alert("Ride completed!");
    setActiveRide(null);
  };

  const handleCancelRide = (rideId) => {
    alert("Booking cancelled. Money returned to wallet.");
    setActiveRide(null);
  };

  const handleBookRide = () => {
    if (!selectedDestination) {
      alert("Please select a destination");
      return;
    }
    setActiveRide(mockRide);
  };

  return (
    <div className="dashboard">
      <TopBar userName={user?.name || "Student"} />

      <div className="dashboard-content">
        {activePage === "home" && (
          <>
            <WalletHero balance={walletBalance} />
            <ParkSelector selected={selectedPark} onSelect={setSelectedPark} />
            <DestinationList
              selectedPark={selectedPark}
              onSelect={(dest) => {
                setSelectedDestination(dest);
                handleBookRide();
              }}
            />
            {activeRide && (
              <ActiveRide
                ride={activeRide}
                onComplete={handleCompleteRide}
                onCancel={handleCancelRide}
              />
            )}
          </>
        )}

        {activePage === "wallet" && (
          <div className="section">
            <div className="section-label">Wallet</div>
            <WalletHero balance={walletBalance} />
            <div style={{ padding: "0 24px", marginBottom: "24px" }}>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                Recent transactions will appear here.
              </p>
            </div>
          </div>
        )}

        {activePage === "history" && (
          <div className="section">
            <div className="section-label">Ride History</div>
            <div style={{ padding: "0 24px" }}>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                Your completed rides will appear here.
              </p>
            </div>
          </div>
        )}

        {activePage === "profile" && (
          <div className="section">
            <div className="section-label">Profile</div>
            <div style={{ padding: "0 24px" }}>
              <p style={{ color: "var(--text)", fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
                {user?.name || "Student"}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                +234 {user?.phone || "***"}
              </p>
            </div>
          </div>
        )}
      </div>

      <BottomNav
        userRole="student"
        activePage={activePage}
        onNavigate={setActivePage}
      />
    </div>
  );
}