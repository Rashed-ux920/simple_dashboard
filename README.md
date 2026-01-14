# Insura Agent Dashboard

A modern, responsive Agent Dashboard UI for the Insura insurance platform.

<img width="1891" height="841" alt="image" src="https://github.com/user-attachments/assets/7dc507bb-21a5-4da2-a9f2-2eca240d590c" />

## Features

- 🎨 Modern design inspired by Spotify + Stripe SaaS dashboards
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Clean, semantic HTML structure
- ⚡ Built with React functional components
- 🎨 Styled with Tailwind CSS
- ♿ Accessible components with proper ARIA labels
- 🌙 Dark theme with Spotify green accents

## Tech Stack

- React 18 (functional components only)
- Tailwind CSS
- Vite (build tool)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
insura/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Left navigation sidebar
│   │   ├── TopBar.jsx           # Sticky top navigation bar
│   │   ├── StatCard.jsx         # Statistics card component
│   │   ├── RecentClientsTable.jsx # Clients table component
│   │   └── ActivityFeed.jsx     # Activity feed component
│   ├── App.jsx                  # Main dashboard component
│   ├── main.jsx                 # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Design System

- **Background**: `#0B0B0B` (deep black)
- **Primary Color**: `#1DB954` (Spotify green)
- **Text**: White with muted gray variants
- **Cards**: Rounded corners, subtle borders, soft shadows
- **Hover Effects**: Smooth transitions with green accents

## Components

### Sidebar
- Logo and navigation items
- Active state with green glow
- Collapsible on mobile

### TopBar
- Page title
- Notification bell with badge
- Agent avatar with initials

### StatCard
- Displays key metrics
- Green accent values
- Trend indicators

### RecentClientsTable
- Client information table
- Status badges (Completed/Pending)
- Hover effects

### ActivityFeed
- Recent actions list
- Icon-based activity types
- Timestamp display

## Responsive Breakpoints

- Mobile: < 1024px (sidebar hidden, hamburger menu)
- Tablet: 1024px - 1280px
- Desktop: > 1280px

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
