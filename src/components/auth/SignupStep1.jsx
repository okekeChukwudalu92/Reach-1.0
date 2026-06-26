import RoleSelector from "./RoleSelector";

export default function SignupStep1({ data, onChange, onNext }) {
  const handleSubmit = () => {
    if (!data.name || !data.phone || !data.role) return;
    onNext();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    onChange("phone", value);
  };

  return (
    <div className="form-step">
      <div className="form-title">Create your account</div>
      <div className="form-sub">
        Are you a student looking for a ride, or a SafeRide driver?
      </div>

      <RoleSelector selected={data.role} onSelect={(role) => onChange("role", role)} />

      <div className="field">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="e.g. Chase Okeke"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="field">
        <label>Phone Number</label>
        <div className="phone-wrap">
          <div className="country-code">🇳🇬 +234</div>
          <input
            type="number"
            className="phone-input"
            placeholder="812 345 6789"
            inputMode="numeric"
            value={data.phone}
            onChange={handlePhoneChange}
            maxLength="10"
          />
        </div>
      </div>

      <button className="btn-submit" onClick={handleSubmit}>
        Continue →
      </button>

      <div className="terms-note">
        By continuing you agree to our{" "}
        <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}