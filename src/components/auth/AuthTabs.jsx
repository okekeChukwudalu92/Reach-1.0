function AuthTabs({ tab, setTab }) {
    return (
      <div className="auth-tabs">
        <button
          className={
            tab === "signup"
              ? "tab active"
              : "tab"
          }
          onClick={() => setTab("signup")}
        >
          Sign Up
        </button>
  
        <button
          className={
            tab === "login"
              ? "tab active"
              : "tab"
          }
          onClick={() => setTab("login")}
        >
          Login
        </button>
      </div>
    );
  }
  
  export default AuthTabs;