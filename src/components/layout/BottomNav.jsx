export default function BottomNav({ userRole, activePage, onNavigate }) {
  const studentNav = [
    { icon: "🏠", label: "Home", page: "home" },
    { icon: "🗺️", label: "Parks", page: "parks" },
    { icon: "👛", label: "Wallet", page: "wallet" },
    { icon: "📋", label: "History", page: "history" },
    { icon: "👤", label: "Profile", page: "profile" },
  ];

  const driverNav = [
    { icon: "🏠", label: "Home", page: "home" },
    { icon: "📋", label: "Bookings", page: "bookings" },
    { icon: "💰", label: "Wallet", page: "wallet" },
    { icon: "📊", label: "Stats", page: "stats" },
    { icon: "👤", label: "Profile", page: "profile" },
  ];

  const navItems = userRole === "driver" ? driverNav : studentNav;

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.page}
          className={`nav-item ${activePage === item.page ? "active" : ""}`}
          onClick={() => onNavigate(item.page)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}