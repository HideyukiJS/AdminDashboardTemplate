import { useState } from 'react';
import { Bell, Search, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'motion/react';
import NotificationDropdown from './NotificationDropdown';
import { Notification } from '../../types';

interface NavbarProps {
  onMenuClick: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onClearNotifications: () => void;
}

export default function Navbar({ 
  onMenuClick, 
  notifications, 
  onMarkAsRead, 
  onClearNotifications 
}: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30 px-4 lg:px-8">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 lg:hidden"
          >
            <Menu className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          </button>
          
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>

          <div className="relative">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 relative"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
              )}
            </motion.button>

            <NotificationDropdown
              isOpen={isNotificationsOpen}
              onClose={() => setIsNotificationsOpen(false)}
              notifications={notifications}
              onMarkAsRead={onMarkAsRead}
              onClearAll={onClearNotifications}
            />
          </div>

          <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

          <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">Admin User</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center border border-indigo-200 dark:border-indigo-800 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/admin/100/100" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
