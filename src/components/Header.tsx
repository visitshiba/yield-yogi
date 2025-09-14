import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import yieldXLogo from '@/assets/yield-x-logo.png';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ currentSection, onSectionChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'recommend', label: 'Get Recommendation', icon: '🌾' },
    { id: 'learn', label: 'Learn', icon: '📚' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onSectionChange('home')}
          >
            <img 
              src={yieldXLogo} 
              alt="Yield X AI Logo" 
              className="h-12 w-12 object-contain group-hover:drop-shadow-lg transition-all duration-200"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Yield X AI</h1>
              <p className="text-xs text-muted-foreground">Smart Farming</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className="px-6 py-2 rounded-full transition-all duration-200"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card/50 rounded-b-lg">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentSection === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start px-4 py-3"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;