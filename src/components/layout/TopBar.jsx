export default function TopBar({ userRole, userName }) {
  return (
    <div className="topbar">
      <div className="logo">Reach<span>.1.0</span></div>
      <div className="user-chip">
        <div className="avatar">{userName?.[0]?.toUpperCase()}</div>
        <span className="user-name">{userName || "User"}</span>
      </div>
    </div>
  );
}