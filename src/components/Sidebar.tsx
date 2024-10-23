import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export function Sidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-purple-400">Real Estate CRM</h1>
      </div>
      
      <nav className="space-y-2">
        <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
          <HomeIcon className="h-6 w-6 text-purple-400" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/analytics" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
          <ChartBarIcon className="h-6 w-6 text-purple-400" />
          <span>Analytics</span>
        </Link>
        
        <Link to="/investors" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
          <UserGroupIcon className="h-6 w-6 text-purple-400" />
          <span>Investors</span>
        </Link>
        
        <Link to="/reports" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
          <DocumentTextIcon className="h-6 w-6 text-purple-400" />
          <span>Reports</span>
        </Link>
        
        <Link to="/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
          <CogIcon className="h-6 w-6 text-purple-400" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}