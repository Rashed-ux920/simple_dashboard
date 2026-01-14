import React from 'react';

/**
 * TopBar Component
 * Sticky top navigation bar with page title, notifications, and user avatar
 */
const TopBar = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-white">Agent Dashboard</h2>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button
            className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
            aria-label="Notifications"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Notification badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#1DB954] rounded-full"></span>
          </button>

          {/* Agent Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <span className="hidden md:block text-gray-300 font-medium">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
