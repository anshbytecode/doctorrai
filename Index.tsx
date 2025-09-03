
import { useState } from 'react';
import { SymptomChecker } from '@/components/SymptomChecker';
import { DoctorRecommendations } from '@/components/DoctorRecommendations';
import { HealthEducation } from '@/components/HealthEducation';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [activeTab, setActiveTab] = useState('symptoms');
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'symptoms' && (
          <SymptomChecker 
            onAnalysisComplete={setAnalysisResult}
            onNavigateToDoctor={() => setActiveTab('doctors')}
          />
        )}
        {activeTab === 'doctors' && (
          <DoctorRecommendations analysisResult={analysisResult} />
        )}
        {activeTab === 'education' && <HealthEducation />}
      </main>
    </div>
  );
};

export default Index;
