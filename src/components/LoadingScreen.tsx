import React, { useEffect, useState } from 'react';
import { Search, CheckCircle, Users, FileText, Calculator } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { icon: Users, text: "Analyzing your profile...", delay: 10000 },
    { icon: Search, text: "Matching government schemes...", delay: 15000 },
    { icon: Calculator, text: "Calculating eligibility...", delay: 20000 },
    { icon: CheckCircle, text: "Preparing your results...", delay: 25000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Step animation
    const stepTimers = steps.map((step, index) => 
      setTimeout(() => setCurrentStep(index), step.delay)
    );

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      stepTimers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>

      <div className="text-center text-white max-w-md mx-auto px-8">
        {/* Main loading icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-spin-slow">
            <Search className="w-12 h-12 text-white animate-pulse" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Finding Eligible Schemes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please wait while we analyze your profile...
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{progress}% Complete</p>
        </div>

        {/* Step indicators */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                  isActive 
                    ? 'bg-white/10 border border-white/20 transform scale-105' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-green-500 text-white' 
                    : isActive 
                    ? 'bg-blue-500 text-white animate-pulse' 
                    : 'bg-gray-600 text-gray-400'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isActive ? 'animate-bounce' : ''}`} />
                  )}
                </div>
                <span className={`font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.text}
                </span>
                {isActive && !isCompleted && (
                  <div className="ml-auto">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;