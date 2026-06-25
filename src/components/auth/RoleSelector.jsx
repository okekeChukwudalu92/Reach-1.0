function RoleSelector({ role, setRole }) {
    return (
      <div className="role-selector">
  
        <button
          type="button"
          className={
            role === "student"
              ? "role-card active"
              : "role-card"
          }
          onClick={() =>
            setRole("student")
          }
        >
          🎓 Student
        </button>
  
        <button
          type="button"
          className={
            role === "driver"
              ? "role-card active"
              : "role-card"
          }
          onClick={() =>
            setRole("driver")
          }
        >
          🚕 Driver
        </button>
  
      </div>
    );
  }
  
  export default RoleSelector;