export default function WalletHero({ balance = 2450 }) {
  return (
    <div className="wallet-hero">
      <div className="wallet-label">Wallet Balance</div>
      <div className="wallet-amount">
        <span>₦</span>
        {balance.toLocaleString()}
      </div>
      <div className="wallet-actions">
        <button className="btn-topup">＋ Top Up</button>
        <button className="btn-history">History</button>
      </div>
    </div>
  );
}