
import { Activity, Users, BookOpen } from 'lucide-react';
import { Button } from '@button';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}


export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const tabs = [
    { id: 'symptoms', label: 'Symptom Checker', icon: Activity },
    { id: 'doctors', label: 'Find Doctors', icon: Users },
    { id: 'education', label: 'Health Education', icon: BookOpen },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`flex items-center space-x-2 px-6 py-4 rounded-none border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );

};
