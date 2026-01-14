import React from 'react';

/**
 * StatIcon Component
 * Renders SVG icons for stat cards
 */
const StatIcon = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    clients: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    forms: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    campaigns: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tasks: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return icons[name] || null;
};

/**
 * StatCard Component
 * Displays a statistic with label and value
 * Used in the stats overview section
 */
const StatCard = ({ label, value, icon, trend }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6 hover:border-[#1DB954]/30 transition-all duration-200 hover:shadow-lg hover:shadow-[#1DB954]/5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-[#1DB954]" aria-hidden="true">
            <StatIcon name={icon} />
          </div>
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
            {label}
          </h3>
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        {trend && (
          <span className="text-sm text-[#1DB954] font-medium">{trend}</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
