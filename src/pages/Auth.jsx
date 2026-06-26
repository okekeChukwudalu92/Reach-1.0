import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css"

import AuthTabs from "../components/auth/AuthTabs";
import SignupStep1 from "../components/auth/SignupStep!";
import AuthLayout from "../components/auth/AuthLayout"
import OtpVerification from "../components/auth/OTPVerification";

export default function Auth() {
  const navigate = useNavigate();
  const { mockLogin } = useAuth();

  const [activeTab, setActiveTab] = useState("signup");
  const [step, setStep] = useState(1);

  const [signupData, setSignupData] = useState({
    name: "",
    phone: "",
    role: "student",
  });

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  const handleSignupChange = (field, value) => {
    setSignupData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOtpVerify = () => {
    mockLogin(signupData.name, signupData.phone, signupData.role);
    navigate(signupData.role === "driver" ? "/driver" : "/student");
  };

  const handleLogin = () => {
    // mock login — role defaults to student until backend is ready
    mockLogin("User", loginData.phone, "student");
    navigate("/student");
  };

  return (
    <AuthLayout>
      <AuthTabs activeTab={activeTab} onSwitch={(tab) => { setActiveTab(tab); setStep(1); }} />

      {activeTab === "signup" && (
        <>
          {step === 1 && (
            <SignupStep1
              data={signupData}
              onChange={handleSignupChange}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <OtpVerification
              phone={signupData.phone}
              onVerify={handleOtpVerify}
              onBack={() => setStep(1)}
            />
          )}
        </>
      )}

      {activeTab === "login" && (
        <div className="form-step">
          <div className="form-title">Welcome back</div>
          <div className="form-sub">
            Log in to your Reach account to book or manage rides.
          </div>

          <div className="field">
            <label>Phone Number</label>
            <div className="phone-wrap">
              <div className="country-code">🇳🇬 +234</div>
              <input
                type="tel"
                className="phone-input"
                placeholder="812 345 6789"
                value={loginData.phone}
                onChange={(e) => setLoginData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={loginData.password}
              onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            />
          </div>

          <div style={{ textAlign: "right", marginTop: "-8px", marginBottom: "20px" }}>
            <a href="#" style={{ fontSize: "12px", color: "var(--accent)", textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>

          <button className="btn-submit" onClick={handleLogin}>
            Log In →
          </button>

          <div className="form-footer">
            Don't have an account?{" "}
            <a href="#" onClick={() => setActiveTab("signup")}>Sign up</a>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}