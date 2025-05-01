
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import Particle from '@/components/Particle';
import SparkIcon from '@/components/SparkIcon';
import BackgroundGrid from './BackgroundGrid';
import { useNavigate } from 'react-router-dom';
import { Users, FlaskConical, BarChart2, MessageSquare } from 'lucide-react';

const SplashPage = () => {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsEntering(true);
    // Navigate to the specific page after animation
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundGrid />
        <Particle className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/90" />
      </div>
      
      {/* Main content */}
      <div 
        className={`relative z-10 max-w-4xl w-full px-4 sm:px-6 transition-all duration-500 ease-in-out ${
          isEntering ? 'opacity-0 translate-y-10' : 'opacity-100'
        }`}
      >
        <div className="text-center mb-8">
          <Logo animate className="mx-auto" />
          
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
            Where <span className="text-secondary">Innovation</span> Takes Flight
          </h1>
          
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Team Mildenhall's Royal Spark Innovation Cell is a focused capability accelerator aligned with strategic mission objectives.
            Empowering 100 ARW & 352 SOW Airmen as 'intrapreneurs' at the forefront of military innovation.
          </p>
          
          {/* Features section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                icon: (
                  <div className="bg-primary/10 p-3 rounded-full">
                    <SparkIcon className="text-primary w-5 h-5" />
                  </div>
                ),
                title: "Problem Solving",
                description: "Tackling mission challenges with innovative approaches"
              },
              {
                icon: (
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                ),
                title: "Empowerment",
                description: "Enabling Airmen to drive meaningful change"
              },
              {
                icon: (
                  <div className="bg-accent/10 p-3 rounded-full">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                ),
                title: "Forward Thinking",
                description: "Keeping the 100 ARW & 352 SOW at the cutting edge of advancement"
              }
            ].map((feature, i) => (
              <div key={i} className={`flex flex-col space-y-2 animate-fade-in delay-${i * 100}`}>
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 animate-fade-in delay-400">
            {/* Main navigation buttons */}
            <Button 
              onClick={() => handleNavigation('/staff')}
              className="border-2 border-primary rounded-full px-6 hover:bg-primary/10 transition-all"
              variant="outline"
            >
              <Users className="mr-2 h-4 w-4" />
              Staff
            </Button>
            
            <Button 
              onClick={() => handleNavigation('/lab-equipment')}
              className="border-2 border-primary rounded-full px-6 hover:bg-primary/10 transition-all"
              variant="outline"
            >
              <FlaskConical className="mr-2 h-4 w-4" />
              Lab/Equipment
            </Button>
            
            <Button 
              onClick={() => handleNavigation('/metrics')}
              className="border-2 border-primary rounded-full px-6 hover:bg-primary/10 transition-all"
              variant="outline"
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Metrics
            </Button>
            
            <Button 
              onClick={() => handleNavigation('/engagement')}
              className="border-2 border-primary rounded-full px-6 hover:bg-primary/10 transition-all"
              variant="outline"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Engagement Strategy
            </Button>
          </div>
          
          {/* Secondary buttons */}
          <div className="flex flex-wrap justify-center items-center space-x-4 mt-6">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-primary rounded-full px-4 transition-all hover:bg-primary/10 hover:text-primary-foreground group"
              onClick={() => handleNavigation('/events')}
            >
              <svg className="w-4 h-4 mr-2 text-primary group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Events
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="relative border-2 border-primary rounded-full px-4 transition-all hover:bg-primary/10 hover:text-primary-foreground group"
              onClick={() => handleNavigation('/podcasts')}
            >
              <svg className="w-4 h-4 mr-2 text-primary group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Weekly Podcasts
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className={`absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground transition-all duration-500 ease-in-out ${isEntering ? 'opacity-0' : 'opacity-100'}`}>
        © {new Date().getFullYear()} Royal Spark Innovation Lab · 100 ARW & 352 SOW · RAF Mildenhall
      </div>
    </div>
  );
};

export default SplashPage;
