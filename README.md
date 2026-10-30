# 💈 FASHION CUT — Premium Barber Shop & Appointment Booking Platform

FASHION CUT is a modern, full-stack barber shop web application designed with a high-end masculine aesthetic featuring **Pitch Black (`#111111`)**, **Dark Charcoal (`#1C1C1C`)**, and **Pure Gold (`#D4AF37`)** accent branding.

The platform provides a seamless experience for salon customers to explore grooming services, haircut & beard styles, view barber profiles, book real-time appointments, and download calendar sync `.ics` receipts. It also features a built-in **Admin Management Console** for salon owners.

---

## ✨ Features

- ✂️ **Sticky Navigation Bar**: Smooth scrolling navigation, quick Book Appointment CTA, mobile drawer menu, and admin portal link.
- 💈 **Hero Section**: High-resolution barber visuals, trust badges (*Professional Barbers*, *Premium Products*, *Modern Styling*, *Easy Booking*), and instant booking trigger.
- 🧼 **Services & Pricing**: 8 core grooming services with fixed pricing, duration, description, and "Most Popular" highlight badge on *Haircut + Beard*.
- ✂️ **15 Haircut Styles**: "Choose Your Style" grid (Fade Cut, French Crop, Undercut, Pompadour, Modern Mullet, etc.) with 1-click booking pre-fill.
- 🧔 **8 Beard Styles**: Beard sculpting options with pre-fill actions into the booking system.
- 👨‍🦱 **Barbers Showcase**: Profiles for Senior Barbers & Stylists (Raj Sharma, Aman Verma, Rohit Singh) with experience, ratings, and instant barber selection.
- 📅 **7-Step Interactive Booking Engine**:
  1. Service Selection
  2. Haircut/Beard Style Selection
  3. Barber Choice (or "Any Available Barber")
  4. Date Selection (HTML5 Date picker, blocking past dates)
  5. Time Slot Picker (09:00 AM – 08:00 PM with real-time disabled booked slot rendering)
  6. Customer Details (Indian mobile number & email validation, special notes)
  7. Booking Summary & Confirmation (`FC-2026-XXXX`)
- 📄 **Booking Confirmation**: Booking ID receipt, `.ics` Calendar integration, and printable download receipt.
- 🖼️ **Portfolio Gallery**: Filterable image gallery (All, Haircuts, Beards, Barber Shop, Styling) with a full-screen Lightbox preview modal.
- ⭐ **Customer Reviews**: Testimonials display plus interactive "Leave a Review" form modal.
- 📊 **Animated Statistics Counter**: 10+ Yrs Exp, 5,000+ Happy Customers, 15+ Styles, 4.9 Rating.
- 🎁 **Special Offer Banner**: First Visit Special 15% OFF promo box.
- 🕒 **Dynamic Business Hours**: Calculates live system time to render an animated **"OPEN TODAY"** or **"CLOSED NOW"** badge.
- 📞 **Contact & Google Maps**: Clickable Call Now, WhatsApp integration (`wa.me`), directions, embedded map, and contact form.
- 🛡️ **Admin Dashboard**:
  - Protected Admin Login (`admin` / `fashioncut123` or 1-Click Instant Demo Login)
  - Real-time Metrics (Today's, Upcoming, Completed, Cancelled, Revenue)
  - Live search & filters by date, barber, status, and service
  - Status management dropdowns (`pending` ➔ `confirmed` ➔ `completed` / `cancelled`).

---

## 🛠️ Technology Stack

- **Frontend**: React.js 18, Vite, Tailwind CSS, Lucide React Icons
- **Backend**: Node.js, Express.js, JWT Authentication, CORS
- **Database**: MongoDB & Mongoose (with automated dual in-memory fallback for zero-setup execution)

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18+)
- npm (v9+)

### 2. Installation
Clone or navigate to the project root directory:

```bash
cd scratch/fashion-cut
```

Install backend dependencies:
```bash
cd server
npm install
```

Install frontend dependencies:
```bash
cd ../client
npm install
```

---

## 💻 Running the Application

### Option A: Run Backend & Frontend Separately

**Terminal 1 (Backend Server):**
```bash
cd server
npm start
```
*Server runs at: `http://localhost:5000`*

**Terminal 2 (Frontend Client):**
```bash
cd client
npm run dev
```
*App runs at: `http://localhost:3000`*

---

## 🔐 Admin Login Credentials

- **Username**: `admin`
- **Password**: `fashioncut123`
*(Or click **Instant Demo Admin Access** on the login modal)*

---

## 📡 REST API Specifications

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/services` | Retrieve list of salon services |
| `GET` | `/api/barbers` | Retrieve list of barbers & ratings |
| `GET` | `/api/styles` | Retrieve haircut & beard styles |
| `GET` | `/api/slots` | Fetch taken time slots for a given date & barber |
| `POST` | `/api/appointments` | Create a new appointment booking |
| `GET` | `/api/appointments` | List appointments |
| `GET` | `/api/appointments/:id` | Fetch single appointment by ID |
| `PUT` | `/api/appointments/:id` | Update appointment status |
| `GET` | `/api/reviews` | List customer reviews |
| `POST` | `/api/reviews` | Add a new review |
| `POST` | `/api/contact` | Send a contact message |
| `POST` | `/api/admin/login` | Admin authentication & JWT generator |
| `GET` | `/api/admin/appointments` | Admin list with search/filter queries |
| `PUT` | `/api/admin/appointments/:id/status` | Update booking status via admin token |

---

## 🍃 MongoDB Setup (Optional)

If MongoDB is installed and running locally on `mongodb://localhost:27017/fashion_cut`, the server will connect automatically. If MongoDB is not running, the application seamlessly uses its high-performance in-memory store so all features remain 100% operational out of the box!
