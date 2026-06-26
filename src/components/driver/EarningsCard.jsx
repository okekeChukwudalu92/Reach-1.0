export default function EarningsCard({ earnings = 2565, deducted = 142.5, canWithdraw = false }) {
  return (
    <div className="section">
      <div className="section-label">Wallet</div>
      <div className="earnings-card">
        <div className="earnings-row">
          <div>
            <div style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
              Available
            </div>
            <div className="earnings-amount">
              <span>₦</span>
              {earnings.toLocaleString()}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "4px" }}>
              After 5% fee
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "13px",
                color: "var(--muted)",
              }}
            >
              ₦{deducted.toLocaleString()} deducted
            </div>
          </div>
        </div>

        <div className="commission-note">
          Withdrawal opens after <strong>6:30 PM</strong> when you go offline
        </div>

        <button
          className={`btn-withdraw ${canWithdraw ? "active" : ""}`}
          disabled={!canWithdraw}
        >
          {canWithdraw ? "Withdraw — Ready" : "Withdraw — Go Offline First"}
        </button>

        <div className="withdraw-note">
          Night rate commission: 7% · 50+ night rides: 9%
        </div>
      </div>
    </div>
  );
}