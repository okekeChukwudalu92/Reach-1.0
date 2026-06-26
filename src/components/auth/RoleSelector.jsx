export default function RoleSelector({ selected, onSelect }) {
    const roles = [
        {
            id: "student",
            icon: "🎓",
            title: "Student",
            desc: "Book rides across campus"
        },
        {
            id: "driver",
            icon:"🛺",
            title: "Driver",
            desc: "Accept rides and earn"
        },
    ];
    return(
        <div className="role-selector">
            {roles.map((role) => (
                <div
                key={role.id}
                className={`role-card ${selected === role.id ? "selected" : ""}`}
                onClick={() => onSelect(role.id)}>
                    <div className="role-icon">{role.icon}</div>
                    <div className="role-title">{role.title}</div>
                    <div className="role-desc">{role.desc}</div>
                </div>
            ))}
        </div>
    )
};