import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import BentoEnvironments from '../components/BentoEnvironments';
import StickyChallenges from '../components/StickyChallenges';
import DarkMetrics from '../components/DarkMetrics';
import FinalCTA from '../components/FinalCTA';
import ValueSection from '../components/ValueSection';
import DataIntelligence from '../components/DataIntelligence';
import Industries from '../components/Industries';
import Comparison from '../components/Comparison';
import UseCases from '../components/UseCasesSection';
import DualBrain from '../components/DualBrain';
import PlatformCapabilities from '../components/PlatformCapabilities';
import CaseStudy from '../components/CaseStudy';
import Integrations from '../components/Integrations';
import WhyFleetMind from '../components/WhyFleetMind';
import ChallengeSection from '../components/ChallengeSection';
import AIPipeline from '../components/AIPipeline';
import PillarsSection from '../components/PillarsSection';
import RealWorldImpact from '../components/RealWorldImpact';
import BentoGridSection from '../components/BentoGridSection';
import TestResultsSection from '../components/TestResultsSection';
import FAQSection from '../components/FAQSection';
import OverviewSection from '../components/OverviewSection';

const Home = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.fleetMind?.[language] || texts?.fleetMind?.es || {};

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500/30">
       <Hero />
       <OverviewSection />
       <BentoGridSection /> 
       <RealWorldImpact />
       <ChallengeSection />
       <ValueSection /> 
       <PillarsSection />
       <TestResultsSection /> 
       <Integrations />      
       <Comparison />
       <AIPipeline />    
      <FAQSection />      
      <LogoMarquee />

      
     
    </div>
  );
};

export default Home;