export default function ParkSelector({ selected, onSelect }) {
  const parks = [
    { id: "school-gate", name: "School Gate", icon: "🚏" },
    { id: "don-greg", name: "Don Greg", icon: "🌿" },
    { id: "express-gate", name: "Express Gate", icon: "🛣️" },
  ];

  return (
    <div className="section">
      <div className="section-label">Select Park</div>
      <div className="park-grid">
        {parks.map((park) => (
          <div
            key={park.id}
            className={`park-card ${selected === park.id ? "active" : ""}`}
            onClick={() => onSelect(park.id)}
          >
            <div className="park-icon">{park.icon}</div>
            <div className="park-name">{park.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}