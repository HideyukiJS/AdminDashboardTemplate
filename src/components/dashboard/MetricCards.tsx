import { DollarSign, Users, ShoppingBag, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { MetricData } from '../../types';

const iconMap = {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
};

interface MetricCardsProps {
  metrics: MetricData[];
}

export default function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                "p-3 rounded-xl transition-colors",
                metric.trend === 'up' 
                  ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                  : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400"
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                metric.trend === 'up'
                  ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400"
              )}>
                {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {Math.abs(metric.change)}%
              </div>
            </div>
            
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{metric.label}</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                {metric.value}
              </h3>
            </div>
            
            <div className="mt-4 h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={cn(
                  "h-full rounded-full",
                  metric.trend === 'up' ? "bg-emerald-500" : "bg-rose-500"
                )}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
