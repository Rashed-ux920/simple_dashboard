import React from 'react';

/**
 * RecentClientsTable Component
 * Displays a table of recent clients with their policy types and statuses
 */
const RecentClientsTable = () => {
  // Sample client data
  const clients = [
    { id: 1, name: 'Sarah Johnson', policyType: 'Auto Insurance', status: 'completed' },
    { id: 2, name: 'Michael Chen', policyType: 'Home Insurance', status: 'pending' },
    { id: 3, name: 'Emily Rodriguez', policyType: 'Life Insurance', status: 'completed' },
    { id: 4, name: 'David Thompson', policyType: 'Health Insurance', status: 'pending' },
    { id: 5, name: 'Lisa Anderson', policyType: 'Auto Insurance', status: 'completed' },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Recent Clients</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wide">
                Client Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wide">
                Policy Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wide">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors"
              >
                <td className="py-4 px-4 text-white font-medium">{client.name}</td>
                <td className="py-4 px-4 text-gray-300">{client.policyType}</td>
                <td className="py-4 px-4">
                  <StatusBadge status={client.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * StatusBadge Component
 * Displays a status badge with appropriate color
 */
const StatusBadge = ({ status }) => {
  const statusConfig = {
    completed: {
      label: 'Completed',
      className: 'bg-[#1DB954]/20 text-[#1DB954] border-[#1DB954]/30',
    },
    pending: {
      label: 'Pending',
      className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default RecentClientsTable;
