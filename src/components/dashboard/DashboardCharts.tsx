import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell 
} from 'recharts';
import { motion } from 'motion/react';
import { useTheme } from '../../hooks/useTheme';
import { SalesData } from '../../types';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  isDark: boolean;
}

const CustomTooltip = ({ active, payload, label, isDark }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-2xl backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 min-w-[140px]">
        <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-[0.1em]">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 capitalize">
                {entry.name}
              </p>
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">
              {entry.name === 'revenue' ? `$${entry.value.toLocaleString()}` : entry.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface DashboardChartsProps {
  data: SalesData[];
}

export default function DashboardCharts({ data }: DashboardChartsProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gridColor = isDark ? '#27272a' : '#f4f4f5';
  const textColor = isDark ? '#a1a1aa' : '#71717a';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Area Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Revenue Overview</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Monthly revenue growth</p>
          </div>
          <select className="bg-zinc-50 dark:bg-zinc-800 border-none rounded-lg text-xs font-medium px-3 py-1.5 focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-100">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#4f46e5" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                activeDot={{ r: 6, strokeWidth: 0, fill: '#4f46e5' }}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Orders Bar Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Orders Volume</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Monthly order counts</p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Completed</span>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: isDark ? '#18181b' : '#f4f4f5', radius: 4 }}
                content={<CustomTooltip isDark={isDark} />} 
              />
              <Bar 
                dataKey="orders" 
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === data.length - 1 ? '#4f46e5' : '#818cf8'} 
                    fillOpacity={0.8}
                    className="hover:fill-opacity-100 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
