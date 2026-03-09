import { MetricData, SalesData, User, Notification } from '../types';

export const METRICS: MetricData[] = [
  {
    label: 'Total Revenue',
    value: '$128,430',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign',
  },
  {
    label: 'Active Users',
    value: '2,420',
    change: 8.2,
    trend: 'up',
    icon: 'Users',
  },
  {
    label: 'Total Sales',
    value: '12,430',
    change: -3.1,
    trend: 'down',
    icon: 'ShoppingBag',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: 2.4,
    trend: 'up',
    icon: 'TrendingUp',
  },
];

export const SALES_CHART_DATA: SalesData[] = [
  { month: 'Jan', revenue: 4500, orders: 120 },
  { month: 'Feb', revenue: 5200, orders: 150 },
  { month: 'Mar', revenue: 4800, orders: 140 },
  { month: 'Apr', revenue: 6100, orders: 180 },
  { month: 'May', revenue: 5900, orders: 170 },
  { month: 'Jun', revenue: 7200, orders: 210 },
  { month: 'Jul', revenue: 8100, orders: 240 },
  { month: 'Aug', revenue: 7800, orders: 230 },
  { month: 'Sep', revenue: 8500, orders: 260 },
  { month: 'Oct', revenue: 9200, orders: 280 },
  { month: 'Nov', revenue: 10500, orders: 320 },
  { month: 'Dec', revenue: 12800, orders: 380 },
];

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alex Thompson', email: 'alex.t@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago', avatar: 'https://picsum.photos/seed/alex/100/100' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago', avatar: 'https://picsum.photos/seed/sarah/100/100' },
  { id: '3', name: 'Michael Ross', email: 'm.ross@example.com', role: 'User', status: 'Inactive', lastActive: '2 days ago', avatar: 'https://picsum.photos/seed/michael/100/100' },
  { id: '4', name: 'Emily Davis', email: 'emily.d@example.com', role: 'Viewer', status: 'Pending', lastActive: '5 hours ago', avatar: 'https://picsum.photos/seed/emily/100/100' },
  { id: '5', name: 'David Wilson', email: 'd.wilson@example.com', role: 'User', status: 'Active', lastActive: '10 mins ago', avatar: 'https://picsum.photos/seed/david/100/100' },
  { id: '6', name: 'Jessica Lee', email: 'j.lee@example.com', role: 'Editor', status: 'Active', lastActive: 'Just now', avatar: 'https://picsum.photos/seed/jessica/100/100' },
  { id: '7', name: 'Robert Brown', email: 'r.brown@example.com', role: 'User', status: 'Inactive', lastActive: '1 week ago', avatar: 'https://picsum.photos/seed/robert/100/100' },
  { id: '8', name: 'Sophia Garcia', email: 's.garcia@example.com', role: 'Viewer', status: 'Active', lastActive: '3 hours ago', avatar: 'https://picsum.photos/seed/sophia/100/100' },
  { id: '9', name: 'James Miller', email: 'j.miller@example.com', role: 'Admin', status: 'Active', lastActive: '15 mins ago', avatar: 'https://picsum.photos/seed/james/100/100' },
  { id: '10', name: 'Olivia Taylor', email: 'o.taylor@example.com', role: 'User', status: 'Pending', lastActive: '1 day ago', avatar: 'https://picsum.photos/seed/olivia/100/100' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'New User Registered',
    message: 'A new user has joined the platform.',
    time: '5 mins ago',
    read: false,
    type: 'info'
  },
  {
    id: '2',
    title: 'Sales Goal Reached',
    message: 'Congratulations! Monthly sales goal achieved.',
    time: '1 hour ago',
    read: false,
    type: 'success'
  },
  {
    id: '3',
    title: 'System Update',
    message: 'Scheduled maintenance in 2 hours.',
    time: '3 hours ago',
    read: true,
    type: 'warning'
  },
  {
    id: '4',
    title: 'Security Alert',
    message: 'Unusual login attempt detected.',
    time: '5 hours ago',
    read: true,
    type: 'error'
  }
];
