export default function QRScannerCard({ onStartScan }) {
  return (
    <div className="section">
      <div className="section-label">Verify Ride</div>
      <div className="qr-section">
        <div className="qr-placeholder">
          📷
          <div className="qr-scan-line"></div>
        </div>
        <div className="qr-desc">
          Ask the student to show their QR code. Tap below to open the scanner
          and verify their payment.
        </div>
        <button className="btn-scan" onClick={onStartScan}>
          📷 Start Scan
        </button>
      </div>
    </div>
  );
}