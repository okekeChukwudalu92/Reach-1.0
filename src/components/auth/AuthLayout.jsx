import { Link } from "react-router-dom";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="left-panel">

        <div className="logo-container">
          {/* Reach SVG goes here */}
        </div>

        <Link to="/" className="left-logo">
          Reach<span>.1.0</span>
        </Link>

        <div className="left-content">
          <h1>
            Move smarter.
            <br />
            Pay once.
            <br />
            Ride easy.
          </h1>

          <p>
            Reach connects students with
            verified SafeRide drivers using
            QR verification and digital
            payments.
          </p>
        </div>
      </div>

      <div className="right-panel">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;