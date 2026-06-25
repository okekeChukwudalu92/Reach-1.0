function SignupStep1({
    role,
    setRole,
    signupData,
    setSignupData,
    setStep,
  }) {
    const handleContinue = () => {
      if (
        !signupData.fullName ||
        !signupData.phone
      ) {
        alert("Please complete all fields");
        return;
      }
  
      setStep(2);
    };
  
    return (
      <>
        <div className="step-header">
          <span className="step-badge">
            Step 1 of 3
          </span>
  
          <h2>Create Account</h2>
  
          <p>
            Choose your role and provide
            your details.
          </p>
        </div>
  
        <div className="role-selector">
          <button
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
  
        <div className="auth-form">
          <div className="form-group">
            <label>
              Full Name
            </label>
  
            <input
              type="text"
              value={signupData.fullName}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  fullName:
                    e.target.value,
                })
              }
              placeholder="John Doe"
            />
          </div>
  
          <div className="form-group">
            <label>
              Phone Number
            </label>
  
            <input
              type="tel"
              value={signupData.phone}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  phone:
                    e.target.value,
                })
              }
              placeholder="08012345678"
            />
          </div>
  
          <button
            className="primary-btn"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </>
    );
  }
  
  export default SignupStep1;