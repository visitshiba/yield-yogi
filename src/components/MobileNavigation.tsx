import { Button } from '@/components/ui/button';
import { Home, Search, BookOpen } from 'lucide-react';

interface MobileNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const MobileNavigation = ({ currentSection, onSectionChange }: MobileNavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'recommend', label: 'Recommend', icon: Search },
    { id: 'learn', label: 'Learn', icon: BookOpen }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur border-t border-border shadow-strong">
      <div className="grid grid-cols-3 gap-1 p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center py-3 px-2 h-auto rounded-xl transition-all duration-200 ${
                isActive ? 'shadow-glow' : ''
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? 'animate-bounce-soft' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavigation;