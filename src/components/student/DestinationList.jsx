export default function DestinationList({ selectedPark, onSelect }) {
  const destinations = [
    { id: 1, name: "Faculty of Engineering", price: 250, type: "day" },
    { id: 2, name: "Main Library", price: 250, type: "day" },
    { id: 3, name: "Student Hostel A", price: 350, type: "night" },
    { id: 4, name: "Medical Centre", price: 250, type: "day" },
    { id: 5, name: "Sports Complex", price: 250, type: "day" },
  ];

  return (
    <div className="section">
      <div className="section-label">Where to?</div>
      <div className="dest-list">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="dest-item"
            onClick={() => onSelect(dest)}
          >
            <div className="dest-left">
              <div className="dest-dot"></div>
              <div className="dest-name">
                {dest.name}
                {dest.type === "night" && <span className="night-badge">NIGHT</span>}
              </div>
            </div>
            <div
              className="dest-price"
              style={{ color: dest.type === "night" ? "var(--night)" : "var(--accent)" }}
            >
              ₦{dest.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}