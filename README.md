# Lumina Systems | Enterprise Analytics Dashboard

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![License](https://img.shields.io/badge/license-Apache--2.0-green.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)

Lumina Systems is a high-performance, professional-grade enterprise dashboard designed for modern data orchestration. Built with a focus on **precision**, **scalability**, and **user experience**, it provides a seamless interface for monitoring complex systems and managing organizational data.

---


## 🚀 Core Capabilities

### 📈 Intelligent Analytics
- **Dynamic KPI Engine**: Real-time synchronization between data tables and metric cards.
- **Advanced Visualizations**: High-fidelity Area and Bar charts powered by Recharts, featuring custom gradients and interactive tooltips.
- **Trend Analysis**: Instant visual feedback on performance shifts with percentage indicators.

### 👥 Enterprise User Management
- **Granular Control**: Full CRUD operations for team management.
- **Smart Filtering**: Multi-dimensional filtering system allowing users to combine search queries with Role and Status filters.
- **Optimized Pagination**: High-performance data grid capable of handling large datasets with smooth transitions.

### 🔔 Real-Time Notification System
- **Event Orchestration**: A centralized notification hub with categorized alerts (Info, Success, Warning, Error).
- **Interactive Panel**: Glassmorphism-based dropdown with "Mark as Read" and "Clear All" functionalities.
- **Visual Cues**: Real-time unread indicators and animated entrance/exit states.

### 🌓 Adaptive Interface
- **Theme Orchestration**: A robust Dark/Light mode implementation with system-wide consistency and smooth color transitions.
- **Responsive Fluidity**: A mobile-first architecture that ensures a premium experience across all device form factors.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Type Safety** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling Engine** | [Tailwind CSS 4.0](https://tailwindcss.com/) |
| **Motion & Animation** | [Motion](https://motion.dev/) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── dashboard/    # MetricCards, DashboardCharts, UserTable
│   └── layout/       # Sidebar, Navbar, NotificationDropdown
├── hooks/            # useTheme (Global state management)
├── data/             # Centralized Mock Data & Constants
├── types/            # Enterprise-grade TypeScript Interfaces
├── lib/              # Core Utilities (Tailwind merging, etc.)
└── App.tsx           # Application Root & State Orchestration
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   
   git clone https://github.com/your-org/lumina-systems.git
   cd lumina-systems
   

2. **Install dependencies**
   
   npm install
   

3. **Launch development environment**
  
   npm run dev
   

4. **Build for production**
   
   npm run build
   

---

## 📝 License

This project is licensed under the **MIT**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with precision by <b>Hideyuki</b><br/>
  © 2026 Lumina Systems. All rights reserved.
</p>
