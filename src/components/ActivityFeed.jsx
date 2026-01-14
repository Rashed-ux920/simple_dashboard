import React from 'react';

/**
 * ActivityIcon Component
 * Renders SVG icons for activity items
 */
const ActivityIcon = ({ type, className = 'w-5 h-5' }) => {
  const icons = {
    'acord-form': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'email-campaign': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'new-client': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    'policy-update': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };

  return icons[type] || icons['acord-form'];
};

/**
 * ActivityFeed Component
 * Displays a list of recent activities/actions
 */
const ActivityFeed = () => {
  // Sample activity data
  const activities = [
    {
      id: 1,
      type: 'acord-form',
      message: 'ACORD form generated for Sarah Johnson',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'email-campaign',
      message: 'Email campaign sent to 150 clients',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'new-client',
      message: 'New client added: Michael Chen',
      time: '1 day ago',
    },
    {
      id: 4,
      type: 'policy-update',
      message: 'Policy updated for Emily Rodriguez',
      time: '2 days ago',
    },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Activity Feed</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

/**
 * ActivityItem Component
 * Individual activity item in the feed
 */
const ActivityItem = ({ activity }) => {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800/20 transition-colors">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954]">
        <ActivityIcon type={activity.type} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium">{activity.message}</p>
        <p className="text-gray-400 text-sm mt-1">{activity.time}</p>
      </div>
    </div>
  );
};

export default ActivityFeed;
