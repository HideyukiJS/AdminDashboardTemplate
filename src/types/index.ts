export interface MetricData {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface SalesData {
  month: string;
  revenue: number;
  orders: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  lastActive: string;
  avatar: string;
}

export type Theme = 'light' | 'dark';

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}
