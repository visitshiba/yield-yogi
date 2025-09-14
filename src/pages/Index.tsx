import { useState } from 'react';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import RecommendationPage from '@/components/RecommendationPage';
import LearnPage from '@/components/LearnPage';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main className="pt-2 pb-20 min-h-screen">
        {currentSection === 'home' && <HomePage onSectionChange={setCurrentSection} />}
        {currentSection === 'recommend' && <RecommendationPage onSectionChange={setCurrentSection} />}
        {currentSection === 'learn' && <LearnPage onSectionChange={setCurrentSection} />}
      </main>

      <MobileNavigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <Footer />
    </div>
  );
};

export default Index;
