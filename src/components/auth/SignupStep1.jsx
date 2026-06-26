import RoleSelector from "./RoleSelector";

export default function SignupStep1({ data, onChange, onNext }) {
  const handleSubmit = () => {
    if (!data.name || !data.phone || !data.role) return;
    onNext();
  };

  return (
    <div className="form-step">
      <div className="form-title">Create your account</div>
      <div className="form-sub">
        Are you a student looking for a ride, or a saferide driver?
      </div>

      <RoleSelector selected={data.role} onSelect={(role) => onChange("role", roles)} />

      <div className="field">
        <label>Full Name</label>
        <input type="text"
          placeholder="e.g. Okeke Chukwudalu"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="field">
        <label> Phone Number </label>
        <div className="phone-wrap">
          <div className="country-code">📞 +234</div>
          <input type="tel"
            className="phone-input"
            placeholder="111 222 3344"
            value={data.phone}
            onChange={(e) => onChange = ("phone", e.target.value)}
          />
        </div>
      </div>
      <button className="btn-submit" onClick={handleSubmit}> Continue </button>

      <div className="terms-note">
        By continuing you agree to our{""}
        <a href="">terms</a> and <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}