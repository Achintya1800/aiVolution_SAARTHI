import React, { useState } from 'react';
import { ChevronDown, Sun, Shield, Phone, MapPin, FileText, Building } from 'lucide-react';
import ChatbotWidget from './components/ChatbotWidget';
import LoadingScreen from './components/LoadingScreen';
import Dashboard from './components/Dashboard';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    residenceArea: '',
    category: '',
    hasDisability: '',
    disabilityPercentage: '',
    isMinority: '',
    bplCategory: '',
    destitute: '',
    familyIncome: '',
    parentIncome: '',
    documents: {
      aadhaarCard: false,
      panCard: false,
      rationCard: false,
      voterId: false
    }
  });

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
  ];

  const handleNext = () => {
    if (currentStep === 1 && mobileNumber && selectedState && isAgreed) {
      setCurrentStep(2);
    } else if (currentStep === 9) {
      // Handle form submission
      setIsLoading(true);
    } else if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateDocumentStatus = (document: string, status: boolean) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [document]: status
      }
    }));
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowDashboard(true);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // Show dashboard
  if (showDashboard) {
    return <Dashboard />;
  }

  const renderProgressBar = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step < currentStep
                  ? 'bg-green-500 text-white'
                  : step === currentStep
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step < currentStep ? '✓' : step}
            </div>
            {step < 9 && (
              <div
                className={`w-12 h-1 mx-2 ${
                  step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter Your Mobile Number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500 bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                OTP
              </label>
              <input
                type="text"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500 bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-700 font-medium">
                Remember, this mobile number will be used for log in
              </p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                id="agreement"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2 transition-colors"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                I agree to the terms and conditions of the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2">
                  End-user license agreement
                </a>
                (EULA)
              </label>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Tell us about yourself, you are a...
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'male', label: 'Male', icon: '♂' },
                  { value: 'female', label: 'Female', icon: '♀' },
                  { value: 'transgender', label: 'Transgender', icon: '⚧' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('gender', option.value)}
                    className={`p-6 border-2 rounded-xl text-center transition-all duration-200 hover:shadow-md ${
                      formData.gender === option.value
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="text-3xl mb-3">{option.icon}</div>
                    <div className="font-medium">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>and your age is
              </p>
              <div className="flex items-center gap-4 justify-center">
                <select
                  value={formData.age}
                  onChange={(e) => updateFormData('age', e.target.value)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white hover:border-gray-300 transition-all duration-200 shadow-sm text-center min-w-[100px]"
                >
                  <option value="">--</option>
                  {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <span className="text-gray-700 font-medium text-lg">years</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                Please select your state
              </p>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
              >
                <option value="">--Select One--</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Please select your area of residence
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Urban', 'Rural'].map((area) => (
                  <button
                    key={area}
                    onClick={() => updateFormData('residenceArea', area)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.residenceArea === area
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-gray-800 mb-6">
              <span className="text-red-500">*</span>You belong to...
            </p>
            <div className="space-y-4">
              {[
                { value: 'general', label: 'General' },
                { value: 'obc', label: 'Other Backward Class (OBC)', info: 'i' },
                { value: 'pvtg', label: 'Particularly Vulnerable Tribal Group (PVTG)', info: 'i' },
                { value: 'sc', label: 'Scheduled Caste (SC)', info: 'i' },
                { value: 'st', label: 'Scheduled Tribe (ST)', info: 'i' },
                { value: 'dnt', label: 'De-Notified, Nomadic, and Semi-Nomadic (DNT) communities' }
              ].map((category) => (
                <button
                  key={category.value}
                  onClick={() => updateFormData('category', category.value)}
                  className={`w-full p-5 border-2 rounded-xl text-left font-medium transition-all duration-200 flex items-center justify-between hover:shadow-md ${
                    formData.category === category.value
                      ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <span>{category.label}</span>
                  {category.info && (
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                      {category.info}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Do you identify as a person with a disability?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('hasDisability', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.hasDisability === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {formData.hasDisability === 'Yes' && (
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                  <span className="text-red-500">*</span>What is your differently abled percentage?
                </p>
                <div className="flex justify-center">
                  <select
                    value={formData.disabilityPercentage}
                    onChange={(e) => updateFormData('disabilityPercentage', e.target.value)}
                    className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white hover:border-gray-300 transition-all duration-200 shadow-sm min-w-[200px] text-center"
                  >
                    <option value="">Select percentage</option>
                    {Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map((percentage) => (
                      <option key={percentage} value={percentage}>{percentage}%</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Do you identify as a person with a disability?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('hasDisability', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.hasDisability === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Do you belong to minority?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('isMinority', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.isMinority === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Do you belong to BPL category?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('bplCategory', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.bplCategory === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Are you in any of the following condition - Destitute /Penury /Extreme Hardship /Distress
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('destitute', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.destitute === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Documents Checklist
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Please check the documents you have available. This will help us recommend the best schemes for you.
              </p>
              
              <div className="space-y-4">
                {[
                  { key: 'aadhaarCard', label: 'Aadhaar Card', description: 'Government issued identity proof' },
                  { key: 'panCard', label: 'PAN Card', description: 'Permanent Account Number card' },
                  { key: 'rationCard', label: 'Ration Card', description: 'Food security card' },
                  { key: 'voterId', label: 'Voter ID', description: 'Election commission identity card' }
                ].map((doc) => (
                  <div key={doc.key} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-200">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.documents[doc.key as keyof typeof formData.documents]}
                        onChange={(e) => updateDocumentStatus(doc.key, e.target.checked)}
                        className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-colors"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{doc.label}</h3>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        formData.documents[doc.key as keyof typeof formData.documents] 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {formData.documents[doc.key as keyof typeof formData.documents] ? '✓' : ''}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Having more documents will unlock additional government schemes and benefits for you.
                </p>
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                <span className="text-red-500">*</span>Do you belong to BPL category?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('bplCategory', option)}
                    className={`p-6 border-2 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md ${
                      formData.bplCategory === option
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                What is your family's annual income?
              </p>
              <input
                type="text"
                value={formData.familyIncome}
                onChange={(e) => updateFormData('familyIncome', e.target.value)}
                placeholder="Enter here"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500 bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
              />
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                What is your parent / guardian's annual income?
              </p>
              <input
                type="text"
                value={formData.parentIncome}
                onChange={(e) => updateFormData('parentIncome', e.target.value)}
                placeholder="Enter here"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500 bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Dark blue section */}
      <div className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        
        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full p-12">
          <div className="text-center text-white max-w-lg">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome to सारथी
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted digital companion for seamless registration and verification
              </p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Secure Registration</h3>
                  <p className="text-sm text-gray-400">Your data is protected with enterprise-grade security</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">OTP Verification</h3>
                  <p className="text-sm text-gray-400">Quick and reliable mobile number verification</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">State-wise Services</h3>
                  <p className="text-sm text-gray-400">Customized experience based on your location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form section */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Header with language selector and theme toggle */}
        <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
          <div className="relative">
            <select className="appearance-none bg-white/80 backdrop-blur-sm text-gray-700 text-sm pr-8 pl-3 py-2 rounded-lg border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
              <option>English</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
          <button className="text-gray-700 hover:text-gray-900 p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <Sun className="w-5 h-5" />
          </button>
        </div>

        {/* Main form container */}
        <div className="flex items-center justify-center min-h-screen px-8">
          <div className="w-full max-w-2xl">
            {/* Form card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 backdrop-blur-sm overflow-hidden">
              {/* Progress Bar - Inside Card */}
              {currentStep > 1 && currentStep <= 9 && (
                <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            step < currentStep
                              ? 'bg-green-500 text-white shadow-lg'
                              : step === currentStep
                              ? 'bg-blue-500 text-white shadow-lg scale-110'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step < currentStep ? '✓' : step}
                        </div>
                        {step < 9 && (
                          <div
                            className={`w-8 h-1 mx-2 rounded-full transition-all duration-300 ${
                              step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 lg:p-10 space-y-6">
              {/* Header with icon */}
              <div>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {currentStep === 1 ? 'Sign Up' : 'Help us find the best schemes for you'}
                  </h1>
                </div>
                {currentStep === 1 && (
                  <>
                    <p className="text-gray-600 text-base mb-2 text-center leading-relaxed">
                      Let's start by verifying your 10 digit mobile number.
                    </p>
                    <p className="text-gray-600 text-base text-center leading-relaxed">
                      We will send you an OTP on this number for verification
                    </p>
                  </>
                )}
              </div>

              {/* Step Content */}
              <div className="min-h-[280px] flex flex-col justify-center">
                {renderStepContent()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col items-center pt-6 border-t border-gray-100 bg-gray-50/50">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-all duration-200 mb-4 self-start rounded-xl hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                )}
                
                <div className="flex items-center gap-3">
                  {currentStep > 2 && currentStep < 9 && (
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      <button 
                        onClick={() => setIsLoading(true)}
                        className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Skip to Results
                      </button>
                    </button>
                  )}
                  
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 1 && (!mobileNumber || !selectedState || !isAgreed)}
                    className={`px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg flex items-center gap-2 text-lg ${
                      (currentStep === 1 && mobileNumber && selectedState && isAgreed) || currentStep > 1
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.05] shadow-green-500/30'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {currentStep === 9 ? 'Submit →' : 'Next →'}
                  </button>
                </div>

                {/* Reset Form and Login Link */}
                <div className="text-center pt-4">
                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 mx-auto transition-colors">
                    🔄 Reset Form
                  </button>
                </div>

                {/* Login link - only show on first step */}
                {currentStep === 1 && (
                  <div className="text-center pt-3">
                    <p className="text-base text-gray-600">
                      Already have an account?{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2">
                        Login here
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot Widget */}
      <ChatbotWidget 
        isOpen={isChatbotOpen} 
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
      />
    </div>
  );
}

export default App;