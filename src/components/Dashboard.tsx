import React, { useState } from 'react';
import { 
  Shield, 
  Bell, 
  User, 
  Search, 
  Home, 
  FileText, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Building,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ChevronDown,
  Menu
} from 'lucide-react';
import ChatbotWidget from './ChatbotWidget';
import DocumentsPage from './DocumentsPage';
import SchemeDetailsModal from './SchemeDetailsModal';
import ApplicationModal from './ApplicationModal';

const Dashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'documents'
  const [isSchemeModalOpen, setIsSchemeModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedSchemeForApplication, setSelectedSchemeForApplication] = useState(null);

  const categories = ['All', 'Family', 'Education', 'Occupation', 'Health', 'Housing', 'Regional'];

  const applications = [
    {
      name: 'Aatmanirbhar Bharat Loan Scheme',
      status: 'Pending Review',
      progress: 65,
      nextStep: 'Upload Aadhaar Copy',
      color: 'yellow'
    },
    {
      name: 'Pradhan Mantri Awas Yojana',
      status: 'Document Verification',
      progress: 85,
      nextStep: 'Await verification call',
      color: 'blue'
    },
    {
      name: 'Mudra Yojana',
      status: 'Incomplete',
      progress: 40,
      nextStep: 'Complete business plan form',
      color: 'red'
    },
    {
      name: 'PM Kisan Samman Nidhi',
      status: 'Complete',
      progress: 100,
      nextStep: 'Funds disbursed',
      color: 'green'
    }
  ];

  const certificates = [
    {
      name: 'Caste Certificate',
      description: 'Required for SC/ST/OBC category schemes',
      schemes: '+15 Schemes',
      color: 'green'
    },
    {
      name: 'Income Certificate',
      description: 'Essential for income-based schemes',
      schemes: '+22 Schemes',
      color: 'green'
    },
    {
      name: 'Disability Certificate',
      description: 'Unlock schemes for differently-abled persons',
      schemes: '+8 Schemes',
      color: 'green'
    }
  ];

  const schemes = [
    {
      name: 'Pradhan Mantri Awas Yojana (PMAY)',
      description: 'Housing loan subsidy for urban and rural poor.',
      benefit: 'Up to ₹2.67 lakh subsidy on home loans',
      category: 'Housing',
      eligibility: '85% Eligible',
      eligibilityColor: 'green',
      icon: Home
    },
    {
      name: 'Mudra Yojana',
      description: 'Micro-finance loans for small businesses.',
      benefit: 'Loans up to ₹10 lakh without collateral',
      category: 'Occupation',
      eligibility: '72% Eligible',
      eligibilityColor: 'yellow',
      icon: Briefcase
    },
    {
      name: 'PM Kisan Samman Nidhi',
      description: 'Direct income support to farmers.',
      benefit: '₹6,000 annual income support',
      category: 'Occupation',
      eligibility: '90% Eligible',
      eligibilityColor: 'green',
      icon: Building
    },
    {
      name: 'Ayushman Bharat',
      description: 'Health insurance scheme for poor families.',
      benefit: 'Up to ₹5 lakh health coverage per family',
      category: 'Health',
      eligibility: '65% Eligible',
      eligibilityColor: 'yellow',
      icon: Heart,
      missingDoc: 'Income Certificate'
    },
    {
      name: 'National Scholarship Portal',
      description: 'Scholarships for students from various backgrounds.',
      benefit: 'Merit and means-based financial assistance',
      category: 'Education',
      eligibility: '88% Eligible',
      eligibilityColor: 'green',
      icon: GraduationCap
    },
    {
      name: 'Beti Bachao Beti Padhao',
      description: 'Scheme for girl child welfare and education.',
      benefit: 'Educational and financial support for girls',
      category: 'Family',
      eligibility: '78% Eligible',
      eligibilityColor: 'yellow',
      icon: User
    }
  ];

  const handleViewDetails = (scheme: any) => {
    setSelectedScheme(scheme);
    setIsSchemeModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSchemeModalOpen(false);
    setSelectedScheme(null);
  };

  const handleApplyNow = (scheme: any) => {
    setSelectedSchemeForApplication(scheme);
    setIsApplicationModalOpen(true);
    setIsSchemeModalOpen(false); // Close the scheme details modal
  };

  const handleCloseApplicationModal = () => {
    setIsApplicationModalOpen(false);
    setSelectedSchemeForApplication(null);
  };

  // Show Documents page
  if (currentView === 'documents') {
    return (
      <>
        <DocumentsPage 
          onNavigate={setCurrentView}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <ChatbotWidget 
          isOpen={isChatbotOpen} 
          onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
        />
      </>
    );
  }

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      case 'yellow': return 'bg-yellow-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getEligibilityColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-800';
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      case 'red': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 overflow-x-hidden">
      {/* Left Sidebar */}
      <div className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      } flex-shrink-0`}>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            {isSidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">Saarthi</h1>
                <p className="text-xs text-gray-500">Government Scheme Navigator</p>
              </div>
            )}
          </div>
          
          <nav className="space-y-2">
            <div className="bg-blue-600 text-white rounded-lg p-3 flex items-center gap-3">
              <Home className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Home</span>}
            </div>
            
            <div className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors">
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span>Schemes</span>}
            </div>
            
            <div className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors">
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span>Documents</span>}
            </div>
            
            <div 
              onClick={() => setCurrentView('documents')}
              className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors"
            >
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span>Community</span>}
            </div>
            
            <div className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors">
              <Building className="w-5 h-5" />
              {isSidebarOpen && (
                <span className="text-sm">Common Service Center</span>
              )}
            </div>
          </nav>
        </div>
        
        {/* Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 -right-3 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        >
          <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${
            isSidebarOpen ? 'rotate-90' : '-rotate-90'
          }`} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
                >
                  <Menu className="w-5 h-5 text-gray-600" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">Welcome</h2>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-4 lg:mx-8 min-w-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search schemes, documents..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50 hover:bg-white transition-all duration-200 text-sm"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Language Selector */}
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 text-gray-700 text-sm pr-8 pl-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors">
                    <option>EN</option>
                    <option>हिंदी</option>
                    <option>বাংলা</option>
                    <option>தமிழ்</option>
                    <option>తెలుగు</option>
                    <option>ಕನ್ನಡ</option>
                    <option>മലയാളം</option>
                    <option>ગુજરાતી</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                
                <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </button>
                
                <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-gray-700">Rahul Kumar</p>
                    <p className="text-xs text-gray-500">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto overflow-x-hidden max-w-full">
        {/* Applications in Progress */}
        <section className="mb-8 min-w-0 max-w-full overflow-x-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Your Applications in Progress</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-full">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0 max-w-full group backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight break-words flex-1 pr-2 min-w-0 group-hover:text-blue-700 transition-colors">{app.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    app.color === 'green' ? 'bg-green-100 text-green-800' :
                    app.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    app.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  } flex-shrink-0 shadow-sm border border-opacity-20 ${
                    app.color === 'green' ? 'border-green-200' :
                    app.color === 'blue' ? 'border-blue-200' :
                    app.color === 'yellow' ? 'border-yellow-200' :
                    'border-red-200'
                  }`}>
                    {app.status}
                  </span>
                </div>
                
                <div className="mb-5 bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Progress</span>
                    <span className="text-sm font-bold text-gray-900">{app.progress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner overflow-hidden">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 shadow-sm ${
                        app.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                        app.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                        app.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        'bg-gradient-to-r from-red-400 to-red-500'
                      }`}
                      style={{ width: `${app.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-5 p-3 bg-blue-50/50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">Next Step</p>
                  <p className="text-sm font-medium text-gray-800 break-words">{app.nextStep}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 border border-blue-500">
                  Continue
                </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section className="mb-8 min-w-0 max-w-full overflow-x-hidden">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-900">Unlock More Schemes: Documents You Need</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-full">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0 max-w-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900 break-words flex-1 pr-2 min-w-0 group-hover:text-orange-700 transition-colors text-lg">{cert.name}</h3>
                  <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 shadow-sm border border-green-200">
                    {cert.schemes}
                  </span>
                </div>
                
                <div className="bg-gray-50/80 rounded-xl p-4 mb-6 border border-gray-100">
                  <p className="text-sm text-gray-700 leading-relaxed">{cert.description}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3.5 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 border border-orange-400">
                  <Plus className="w-4 h-4" />
                  Apply for Certificate
                </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Schemes */}
        <section className="min-w-0 max-w-full overflow-x-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Explore Government Schemes</h2>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6 max-w-full overflow-x-hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Schemes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-full">
            {schemes.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow min-w-0 max-w-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEligibilityColor(scheme.eligibilityColor)}`}>
                      {scheme.eligibility}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 break-words">{scheme.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{scheme.description}</p>
                  <p className="text-sm font-medium text-gray-900 mb-4">{scheme.benefit}</p>
                  
                  {scheme.missingDoc && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-xs text-yellow-800">
                        <strong>Missing Document:</strong> Upload your {scheme.missingDoc} to apply.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{scheme.category}</span>
                    <button 
                      onClick={() => handleViewDetails(scheme)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex-shrink-0"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        </div>
      </div>
      
      {/* Scheme Details Modal */}
      <SchemeDetailsModal 
        isOpen={isSchemeModalOpen}
        scheme={selectedScheme}
        onClose={handleCloseModal}
        onApplyNow={handleApplyNow}
      />
      
      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isApplicationModalOpen}
        scheme={selectedSchemeForApplication}
        onClose={handleCloseApplicationModal}
      />
      
      {/* Chatbot Widget */}
      <ChatbotWidget 
        isOpen={isChatbotOpen} 
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
      />
    </div>
  );
};

export default Dashboard;