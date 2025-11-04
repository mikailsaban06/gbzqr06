# QR Menu - Digital Menu Solution

Modern, responsive QR menu solution for restaurants built with Next.js 15.

## Features

- 🚀 Next.js 15 with App Router
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with CSS Modules
- 🔐 Authentication system with mock API
- 💾 LocalStorage for session management
- 🔍 SEO optimized (meta tags, OpenGraph, structured data)
- ✨ TypeScript for type safety
- 🎯 Mock API endpoints ready for backend integration

## Pages

- **Landing Page (/)**: Hero, Features, Pricing, Contact sections
- **Login (/login)**: Phone number + password authentication
- **Forgot Password (/forgot-password)**: Password reset flow
- **OTP Verification (/verify-otp)**: OTP verification with fixed code "111111"
- **Dashboard (/dashboard)**: User dashboard with sidebar layout

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Mock Authentication

The application uses mock API endpoints for authentication:

- **Login**: Any phone number (10 digits) + valid password
- **Password Requirements**: 
  - Minimum 10 characters
  - Must include uppercase letter
  - Must include lowercase letter
  - Must include number
  - No sequential digits (e.g., 123, 456)
- **OTP Code**: Fixed code "111111" for testing

## Project Structure

```
├── app/
│   ├── api/auth/          # Mock API routes
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── forgot-password/   # Forgot password page
│   ├── verify-otp/        # OTP verification page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
├── context/              # React contexts
├── lib/                  # Utilities (apiClient, storage)
├── types/                # TypeScript types
└── public/               # Static assets
```

## Key Features

### Authentication Flow
1. User enters phone (10 digits) and password
2. Mock API validates credentials
3. Token and user data stored in localStorage
4. Redirect to dashboard
5. Session persists on page refresh

### Password Reset Flow
1. User enters phone number
2. System sends mock OTP
3. User enters OTP "111111" + new password
4. Password reset successful
5. Redirect to login

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Collapsible sidebar on mobile

### SEO Optimization
- Meta tags for all pages
- OpenGraph and Twitter cards
- Structured data (Schema.org)
- Robots.txt and sitemap
- Canonical URLs

## Backend Integration (Future)

The mock API structure is designed for easy backend integration:

1. Replace `/app/api/auth/*` routes with real API endpoints
2. Update `apiClient` to add authentication headers
3. Connect to real database
4. Implement proper password hashing
5. Add real OTP service (SMS/email)

All TypeScript interfaces are ready for backend integration.

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Storage**: localStorage
- **Routing**: next/navigation

## Development Notes

- All code and comments are in English
- UI text is in Turkish
- Clean, professional code structure
- Ready for backend integration
- No external dependencies required
- SEO best practices applied

## License

Private project - All rights reserved

---

Built with ❤️ for modern restaurants


