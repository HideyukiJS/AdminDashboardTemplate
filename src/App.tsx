/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import MetricCards from './components/dashboard/MetricCards';
import DashboardCharts from './components/dashboard/DashboardCharts';
import UserTable from './components/dashboard/UserTable';
import { motion } from 'motion/react';
import { MOCK_USERS, METRICS, SALES_CHART_DATA, MOCK_NOTIFICATIONS } from './data/mockData';
import { User, Notification } from './types';

function DashboardContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { theme } = useTheme();

  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [salesData, setSalesData] = useState(SALES_CHART_DATA);
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const activeUsersCount = useMemo(() => 
    users.filter(u => u.status === 'Active').length, 
  [users]);

  const metrics = useMemo(() => {
    return METRICS.map(m => {
      if (m.label === 'Active Users') {
        return { ...m, value: activeUsersCount.toLocaleString() };
      }
      return m;
    });
  }, [activeUsersCount]);

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleAddUser = () => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New User',
      email: 'new.user@example.com',
      role: 'User',
      status: 'Active',
      lastActive: 'Just now',
      avatar: `https://picsum.photos/seed/${Math.random()}/100/100`
    };
    setUsers([newUser, ...users]);
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <MetricCards metrics={metrics} />
            <DashboardCharts data={salesData} />
            <UserTable 
              users={users} 
              onDelete={handleDeleteUser} 
              onAdd={handleAddUser}
            />
          </>
        );
      case 'analytics':
        return (
          <div className="space-y-8">
            <DashboardCharts data={salesData} />
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Detailed Analytics Report</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Detailed breakdown of performance metrics and user engagement over the last 12 months.
              </p>
            </div>
          </div>
        );
      case 'users':
        return (
          <UserTable 
            users={users} 
            onDelete={handleDeleteUser} 
            onAdd={handleAddUser}
          />
        );
      case 'settings':
        return (
          <div className="bg-white dark:bg-black p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">System Settings</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Configure your workspace and user permissions.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={theme}>
      <div className="flex min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            onClearNotifications={handleClearNotifications}
          />
          
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Page Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white"
                  >
                    Welcome back, Admin!
                  </motion.h1>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    Here's what's happening with Lumina Systems today.
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <button className="px-4 py-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                    Download Report
                  </button>
                  <button 
                    onClick={handleAddUser}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all"
                  >
                    Create New
                  </button>
                </motion.div>
              </div>

              {renderContent()}
            </div>
          </main>


          {/* Footer */}
          <footer className="py-6 px-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © 2026 Lumina Systems. All rights reserved. Built with precision.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
}
// :o