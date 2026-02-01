import { Metadata } from 'next';

import DashboardContent from '../../../features/dashboard/components/dashboard-content';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Protected dashboard page',
};

const DashboardPage = () => {
  return <DashboardContent />;
};

export default DashboardPage;
