import { Link } from "react-router-dom";
import "../styles/home.css";

function Landing() {
    return (
        <>
            {/* NAV */}
            <nav>
                <div className="logo">
                    Reach<span>.1.0</span>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#how">How it works</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>

                <div className="nav-cta">
                    <Link to="/auth" className="btn-ghost">
                        Log in
                    </Link>

                    <Link to="/auth" className="btn-primary">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-glow"></div>
                <div className="hero-glow-2"></div>

                <div className="hero-badge">
                    <div className="badge-dot"></div>
                    Now live on campus — SafeRide powered
                </div>

                <h1>
                    Campus rides,
                    <br />
                    <span className="highlight">on your terms.</span>
                </h1>

                <p>
                    Book a SafeRide tricycle from any campus park in seconds. Pay
                    digitally, verify with a QR scan, no cash, no queues, no stress.
                </p>

                <div className="hero-actions">
                    <Link to="/auth" className="btn-hero">
                        🚀 Start Your Ride Journey
                    </Link>

                    <a href="#how" className="btn-hero-ghost">
                        See how it works →
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat-value">
                            3<span> Parks</span>
                        </div>
                        <div className="hero-stat-label">Across campus</div>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="hero-stat">
                        <div className="hero-stat-value">
                            <span>₦</span>250
                        </div>
                        <div className="hero-stat-label">Fixed day fare</div>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="hero-stat">
                        <div className="hero-stat-value">
                            0<span> Cash</span>
                        </div>
                        <div className="hero-stat-label">100% digital</div>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="hero-stat">
                        <div className="hero-stat-value">
                            5<span> seats</span>
                        </div>
                        <div className="hero-stat-label">Per tricycle</div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            {/* HOW IT WORKS */}
            <section id="how">
                <div className="section">
                    <div className="section-eyebrow">How it works</div>

                    <div className="section-title">
                        Ride in four simple steps
                    </div>

                    <div className="section-sub">
                        From your phone to the park in under a minute. No arguments,
                        no fake transfers, just a scan and you're in.
                    </div>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">01</div>
                            <span className="step-icon">👛</span>
                            <div className="step-title">Top up your wallet</div>
                            <div className="step-desc">
                                Add funds to your Reach wallet via Paystack.
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">02</div>
                            <span className="step-icon">🚏</span>
                            <div className="step-title">
                                Pick a park & destination
                            </div>
                            <div className="step-desc">
                                Choose your park and destination.
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">03</div>
                            <span className="step-icon">🔍</span>
                            <div className="step-title">Find your driver</div>
                            <div className="step-desc">
                                You're assigned a driver ID like Andy25.
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-number">04</div>
                            <span className="step-icon">✅</span>
                            <div className="step-title">Scan & ride</div>
                            <div className="step-desc">
                                Driver verifies payment and ride begins.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <div id="features" className="features-section">
                <div className="section">
                    <div className="section-eyebrow">Features</div>

                    <div className="section-title">
                        Built for campus life
                    </div>

                    <div className="section-sub">
                        Every feature designed around how students move.
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <span className="feature-icon">🔐</span>
                            <div className="feature-title">
                                Escrow Protection
                            </div>
                            <div className="feature-desc">
                                Money moves only after verification.
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-icon">📱</span>
                            <div className="feature-title">
                                Install as an App
                            </div>
                            <div className="feature-desc">
                                Works like a native app.
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-icon">🌙</span>
                            <div className="feature-title">Night Rides</div>
                            <div className="feature-desc">
                                Book after hours with adjusted pricing.
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-icon">⚡</span>
                            <div className="feature-title">
                                Real-Time Booking
                            </div>
                            <div className="feature-desc">
                                Live driver availability.
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-icon">⏱️</span>
                            <div className="feature-title">
                                Auto-Cancel Timeout
                            </div>
                            <div className="feature-desc">
                                Unused bookings expire automatically.
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-icon">🚗</span>
                            <div className="feature-title">
                                Driver Dashboard
                            </div>
                            <div className="feature-desc">
                                Manage rides and earnings.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="cta-section">
                <h2>Ready to ride smarter?</h2>

                <p>
                    Join students already moving around campus the Reach way.
                </p>

                <Link to="/auth" className="btn-hero">
                    🚀 Start Your Ride Journey
                </Link>
            </section>

            {/* FOOTER */}
            <footer>
                <div>
                    <div className="footer-logo">
                        Reach<span>.1.0</span>
                    </div>

                    <div className="footer-brand">
                        A product by <strong>X-Timeline</strong>
                    </div>
                </div>

                <ul className="footer-links">
                    <li>
                        <a href="#how">How it works</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <Link to="/auth">Sign up</Link>
                    </li>
                </ul>

                <div className="footer-copy">
                    © 2025 X-Timeline. All rights reserved.
                </div>
            </footer>
        </>
    );
}

export default Landing;