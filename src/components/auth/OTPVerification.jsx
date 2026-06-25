import { useState } from "react";

function OTPVerification({
  setStep,
}) {
  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleChange = (
    index,
    value
  ) => {
    const updated = [...otp];
    updated[index] =
      value.slice(-1);

    setOtp(updated);

    if (
      value &&
      index < 5
    ) {
      const next =
        document.getElementById(
          `otp-${index + 1}`
        );

      if (next) next.focus();
    }
  };

  return (
    <>
      <div className="step-header">
        <span className="step-badge">
          Step 2 of 3
        </span>

        <h2>Verify Phone</h2>

        <p>
          Enter the OTP sent to
          your phone.
        </p>
      </div>

      <div className="otp-container">
        {otp.map(
          (digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className="otp-input"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(
                  index,
                  e.target.value
                )
              }
            />
          )
        )}
      </div>

      <button
        className="primary-btn"
        onClick={() =>
          setStep(3)
        }
      >
        Verify OTP
      </button>
    </>
  );
}

export default OTPVerification;