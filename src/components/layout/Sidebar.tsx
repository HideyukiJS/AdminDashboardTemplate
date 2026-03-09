import { LayoutDashboard, BarChart3, Settings, Users, LogOut, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'users', label: 'Users', icon: Users },
];

const secondaryItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? '260px' : '0px',
          x: isOpen ? 0 : -260,
        }}
        className={cn(
          "fixed top-0 left-0 h-full bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 z-50 overflow-hidden lg:relative lg:translate-x-0",
          !isOpen && "lg:w-20 lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3 px-2 mb-8 h-10">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/lumina/100/100" 
                alt="Lumina Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-xl text-zinc-900 dark:text-white whitespace-nowrap"
              >
                Lumina Systems
              </motion.span>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-8">
            <div>
              <p className={cn(
                "px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2",
                !isOpen && "hidden"
              )}>
                Main Menu
              </p>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                      activeTab === item.id
                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    )}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 shrink-0",
                      activeTab === item.id ? "text-indigo-600 dark:text-indigo-400" : "group-hover:text-zinc-900 dark:group-hover:text-white"
                    )} />
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <p className={cn(
                "px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2",
                !isOpen && "hidden"
              )}>
                System
              </p>
              <nav className="space-y-1">
                {secondaryItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                      activeTab === item.id
                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    )}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 shrink-0",
                      activeTab === item.id ? "text-indigo-600 dark:text-indigo-400" : "group-hover:text-zinc-900 dark:group-hover:text-white"
                    )} />
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200">
              <LogOut className="w-5 h-5 shrink-0" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium whitespace-nowrap"
                >
                  Logout
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
