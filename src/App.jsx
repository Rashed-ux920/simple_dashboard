import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatCard from './components/StatCard';
import RecentClientsTable from './components/RecentClientsTable';
import ActivityFeed from './components/ActivityFeed';

/**
 * AgentDashboard - Main Dashboard Component
 * Production-ready SaaS dashboard for Insura insurance platform
 * 
 * Features:
 * - Responsive sidebar navigation
 * - Sticky top bar with notifications
 * - Stats overview cards
 * - Recent clients table
 * - Activity feed
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-0">
          {/* Top Bar */}
          <TopBar />

          {/* Dashboard Content */}
          <main className="p-6">
            {/* Stats Overview */}
            <section className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  label="Total Clients"
                  value="1,247"
                  icon="clients"
                  trend="+12%"
                />
                <StatCard
                  label="ACORD Forms Generated"
                  value="342"
                  icon="forms"
                  trend="+8%"
                />
                <StatCard
                  label="Active Campaigns"
                  value="18"
                  icon="campaigns"
                  trend="+3"
                />
                <StatCard
                  label="Pending Tasks"
                  value="24"
                  icon="tasks"
                />
              </div>
            </section>

            {/* Recent Clients and Activity Feed */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentClientsTable />
              <ActivityFeed />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
