import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthTabs from "../components/auth/AuthTabs";
import RoleSelector from "../components/auth/RoleSelector";
import "../styles/auth.css"

function Auth() {
  const [tab, setTab] = useState("signup");
  const [role, setRole] = useState("student");

  const [signupData, setSignupData] = useState({
    fullName: "",
    phone: "",
  });

  return (
    <AuthLayout>
      <AuthTabs tab={tab} setTab={setTab} />

      {tab === "signup" && (
        <>
          <RoleSelector
            role={role}
            setRole={setRole}
          />

          <div className="auth-form">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter full name"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    fullName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="08012345678"
                value={signupData.phone}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <button className="primary-btn">
              Continue
            </button>
          </div>
        </>
      )}

      {tab === "login" && (
        <div className="auth-form">
          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="08012345678"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button className="primary-btn">
            Login
          </button>
        </div>
      )}
    </AuthLayout>
  );
}

export default Auth;