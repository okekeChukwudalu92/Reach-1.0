import React from 'react'

export default function AuthLayout({ children}) {
  return (
    <div className="auth-page">
        <div className="left-panel">
            <a href="/" className='left-logo'>Reach<span>1.0</span></a>
            <div className="left-content">
                <div className="left-tagline">
                    Move Smarter <br />
                    Pay <span className="accent">once</span> <br />
                    Ride easy
                </div>
                <p className="left-desc">
                    Reach connects student with Saferide tricycle across campus
                    Book, Pay digitally, verify with QR scan 
                </p>

                <div className="trust-items">
                    <div className="trust-item">
                        <div className="trust-icon">🔐</div>
                        <div className="trust-text">
                            <div className="trust-title">Money is protected</div>
                            <div className="trust-sub">Funds held in escrow until your ride is confirmed</div>
                        </div>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon">⏲</div>
                        <div className="trust-text">
                            <div className="trust-title">Real-Time Availability</div>
                            <div className="trust-sub">See drivers active at various parks right now</div>
                        </div>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon">📱</div>
                        <div className="trust-text">
                            <div className="trust-title">Install as an App</div>
                            <div className="trust-sub">Add to Home-Screen --No app store needed</div>
                        </div>
                    </div>
                </div>
            </div>
        

        <div className="left-footer">
            A product by <strong>X-Timeline</strong> .Built for SafeRide Campus operations
        </div>
    </div>
    <div className="right-panel">
        <div className="auth-box">
            {children}
        </div>
    </div>
    </div>
    
  );
}
