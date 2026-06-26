import { useRef } from "react";
export default function OtpVerification({ phone, onVerify, onnBack }) {
  const inputs = useRef([]);

  const handleChange = (e, i) => {
    const val = e.target.value;
    if (val && i < 5) inputs.current[i + 1].focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputs.current[i - 1].focus();
    }
  };

  return (
    <div className="form-step">
      <button className="back-link" onClick={onnBack}>
        Go Back
      </button>

      <div className="form-title">Verify your Number</div>
      <div className="form-sub">
        We sent a 6 -digit code to ("")
        <strong style={{ color: "var(--text)" }}>+234{phone} Enter it Below</strong>
      </div>
      <div className="field">
        <div className="otp-wrap">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              className="otp-input"
              type="text"
              maxLength={1}
              ref={(el) => (inputs.current[i] = el)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>
      </div>
      <div style={{textAlign: "center", fontSize: "13px", color: "var(--muted)", marginBottom: "20px"}}>
        Didn't get it? {""}
        <a href="" style={{color: "var(--accent)", textDecoration: "none", fontWeight: "600"}}>
          Resend
        </a>
      </div>

      <button className="btn-submit" onClick={onVerify}>
        Verify
      </button>
    </div>
  );

}