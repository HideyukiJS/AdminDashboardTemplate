import { motion, AnimatePresence } from 'motion/react';
import { Bell, Check, Trash2, Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Notification } from '../../types';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
}

const typeIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

const typeColors = {
  info: 'text-blue-500 bg-blue-50 dark:bg-blue-500/10',
  success: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10',
  warning: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10',
  error: 'text-rose-500 bg-rose-50 dark:bg-rose-500/10',
};

export default function NotificationDropdown({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onClearAll,
}: NotificationDropdownProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 z-40 lg:hidden" 
            onClick={onClose} 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-zinc-900 dark:text-white">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full">
                    {unreadCount} NEW
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={onClearAll}
                  className="p-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                  title="Clear all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length > 0 ? (
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {notifications.map((notification) => {
                    const Icon = typeIcons[notification.type];
                    return (
                      <div 
                        key={notification.id}
                        className={cn(
                          "p-4 transition-colors relative group",
                          !notification.read ? "bg-indigo-50/30 dark:bg-indigo-500/5" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                        )}
                      >
                        <div className="flex gap-3">
                          <div className={cn(
                            "p-2 rounded-lg shrink-0 h-fit",
                            typeColors[notification.type]
                          )}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className={cn(
                                "text-sm font-semibold truncate",
                                !notification.read ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
                              )}>
                                {notification.title}
                              </p>
                              <span className="text-[10px] text-zinc-400 whitespace-nowrap mt-0.5">
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                        {!notification.read && (
                          <button
                            onClick={() => onMarkAsRead(notification.id)}
                            className="absolute right-4 bottom-4 p-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                            title="Mark as read"
                          >
                            <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-6 h-6 text-zinc-400" />
                  </div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">All caught up!</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">No new notifications for you.</p>
                </div>
              )}
            </div>

            {notifications.length > 0 && (
              <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 text-center">
                <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                  View All Notifications
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
