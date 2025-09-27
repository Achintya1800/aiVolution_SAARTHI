import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  MessageCircle, 
  Eye, 
  Users, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Star,
  Filter,
  ArrowLeft,
  Home,
  User,
  Award,
  HelpCircle,
  Shield,
  ChevronDown,
  Menu,
  Building
} from 'lucide-react';

interface DocumentsPageProps {
  onNavigate: (view: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ onNavigate, isSidebarOpen, setIsSidebarOpen }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', count: 1187, active: true },
    { name: 'Housing Scheme', count: 234 },
    { name: 'Farmer Scheme', count: 189 },
    { name: 'Rural Employment', count: 156 },
    { name: 'Documents', count: 298 },
    { name: 'Banking', count: 167 },
    { name: 'Health', count: 143 }
  ];

  const trendingTopics = [
    { name: 'PM Awas Issues', count: 34, color: 'red' },
    { name: 'Kisan Credit Card', count: 28, color: 'green' },
    { name: 'MGNREGA Jobs', count: 19, color: 'blue' }
  ];

  const discussions = [
    {
      id: 1,
      user: {
        name: 'Raj Kumar',
        location: 'Rampur, Meerut, Uttar Pradesh',
        avatar: 'R',
        badge: 'Normal'
      },
      title: 'How much money do we get for house construction?',
      content: 'I have applied for PM Awas Yojana. How much total money will I get and how will it come in installments?',
      tags: ['PM Awas Yojana', 'money', 'installment', 'amount'],
      stats: {
        answers: 1,
        views: 145,
        followers: 23
      },
      timeAgo: '280 days ago',
      hasExpertAnswer: true,
      expertAnswer: 'For rural areas, ₹1,20,000 is provided for pucca house construction. This comes in three installments...',
      priority: 'normal'
    },
    {
      id: 2,
      user: {
        name: 'Raj Kumar',
        location: 'Rampur, Meerut, Uttar Pradesh',
        avatar: 'R',
        badge: 'Urgent'
      },
      title: 'What to do if name is not in SECC list?',
      content: 'My name is not in SECC 2011 list but I am from a poor family. Can I still get PM Awas?',
      tags: ['PM Awas Yojana', 'SECC', 'list', 'name'],
      stats: {
        answers: 1,
        views: 89,
        followers: 15
      },
      timeAgo: '280 days ago',
      hasExpertAnswer: false,
      priority: 'urgent'
    },
    {
      id: 3,
      user: {
        name: 'Priya Sharma',
        location: 'Delhi, Delhi',
        avatar: 'P',
        badge: 'Normal'
      },
      title: 'Documents required for Ayushman Bharat registration?',
      content: 'What are all the documents needed to register for Ayushman Bharat health scheme?',
      tags: ['Ayushman Bharat', 'documents', 'registration', 'health'],
      stats: {
        answers: 3,
        views: 234,
        followers: 45
      },
      timeAgo: '150 days ago',
      hasExpertAnswer: true,
      expertAnswer: 'You need Aadhaar card, ration card, and income certificate for registration...',
      priority: 'normal'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getTopicColor = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-50 border-red-200 text-red-800';
      case 'green': return 'bg-green-50 border-green-200 text-green-800';
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
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
            <div 
              onClick={() => onNavigate('dashboard')}
              className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors"
            >
              <Home className="w-5 h-5" />
              {isSidebarOpen && <span>Home</span>}
            </div>
            
            <div className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors">
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span>Schemes</span>}
            </div>
            
            <div className="text-gray-600 hover:bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-colors">
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span>Documents</span>}
            </div>
            
            <div className="bg-blue-600 text-white rounded-lg p-3 flex items-center gap-3">
              <FileText className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Community</span>}
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
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
                >
                  <Menu className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">Village Saarthi Community</h1>
                    <p className="text-sm text-gray-500">Discussion: Rampur, Meerut, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask or search..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                </div>
                
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center gap-2 shadow-lg">
                  <Plus className="w-4 h-4" />
                  Ask
                </button>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">R</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-8 py-4 overflow-x-auto">
              <button className="flex items-center gap-2 text-orange-600 font-medium border-b-2 border-orange-600 pb-2 flex-shrink-0">
                <Home className="w-4 h-4" />
                Home
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium pb-2 flex-shrink-0">
                <Star className="w-4 h-4" />
                Schemes
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium pb-2 flex-shrink-0">
                <Users className="w-4 h-4" />
                Community
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium pb-2 flex-shrink-0">
                <Award className="w-4 h-4" />
                Experts
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium pb-2 flex-shrink-0">
                <HelpCircle className="w-4 h-4" />
                My Questions
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto overflow-x-hidden max-w-full">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8 max-w-full overflow-x-hidden">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 flex-shrink-0 ${
                  activeCategory === category.name
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name === 'All' && <Filter className="w-4 h-4" />}
                {category.name}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.name
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-full">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6 min-w-0">
              {/* Today's Discussion Banner */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Today's Discussion</h2>
                    <p className="text-orange-100">5 active discussions in the community</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">0</div>
                    <div className="text-orange-100 text-sm">New Questions</div>
                  </div>
                </div>
              </div>

              {/* Discussion Posts */}
              <div className="space-y-6">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 min-w-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold">{discussion.user.avatar}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="min-w-0 flex-1 pr-2">
                            <h3 className="font-semibold text-gray-900 break-words">{discussion.user.name}</h3>
                            <p className="text-sm text-gray-500 break-words">{discussion.user.location}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(discussion.user.badge)}`}>
                              {discussion.user.badge}
                            </span>
                            <span className="text-sm text-gray-400">{discussion.timeAgo}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer transition-colors break-words">
                          {discussion.title}
                        </h2>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed break-words">{discussion.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {discussion.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200 flex-shrink-0">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {discussion.stats.answers} answers
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {discussion.stats.views} views
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {discussion.stats.followers} followers
                            </div>
                          </div>
                        </div>
                        
                        {discussion.hasExpertAnswer && (
                          <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm font-semibold text-green-800">Expert Answer Available</span>
                            </div>
                            <p className="text-sm text-green-700 break-words">{discussion.expertAnswer}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 min-w-0">
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Trending Topics</h3>
                </div>
                
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className={`p-4 rounded-xl border cursor-pointer hover:shadow-sm transition-all duration-200 ${getTopicColor(topic.color)}`}>
                      <h4 className="font-semibold mb-1 break-words">{topic.name}</h4>
                      <p className="text-sm opacity-80">{topic.count} new discussions</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Ask a Question
                  </button>
                  <button className="w-full bg-blue-50 text-blue-700 py-3 px-4 rounded-xl font-semibold hover:bg-blue-100 transition-all duration-200 flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    Browse Documents
                  </button>
                  <button className="w-full bg-green-50 text-green-700 py-3 px-4 rounded-xl font-semibold hover:bg-green-100 transition-all duration-200 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    Join Community
                  </button>
                </div>
              </div>

              {/* Help & Support */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Need Help?</h3>
                </div>
                <p className="text-sm text-blue-700 mb-4">Get expert guidance on government schemes and documentation.</p>
                <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Contact Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;