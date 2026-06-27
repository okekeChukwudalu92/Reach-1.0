cat > README.md << 'EOF'
# Reach 1.0 — Campus Ride Booking PWA

Frontend for the Reach campus ride-booking platform. Built with React + Vite.

## Features Built

✅ Landing page with SEO-friendly design
✅ Phone-based authentication (mock)
✅ Role-based signup (student/driver)
✅ Student dashboard with wallet, park selector, destination list, active rides
✅ Driver dashboard with status toggle, incoming bookings, QR scanner, earnings
✅ Real-time UI updates
✅ PWA-ready (installable)
✅ Mobile-first design

## Tech Stack

- React 18
- Vite
- React Router
- CSS (no dependencies)

## Getting Started

```bash
npm install
npm run dev

src/
├── components/
│   ├── layout/ (TopBar, BottomNav)
│   ├── auth/ (Auth components)
│   ├── student/ (Student dashboard components)
│   └── driver/ (Driver dashboard components)
├── pages/ (Landing, Auth, StudentDashboard, DriverDashboard)
├── context/ (AuthContext for mock auth)
├── routes/ (AppRoutes with role-based routing)
└── styles/ (CSS for each page/section)