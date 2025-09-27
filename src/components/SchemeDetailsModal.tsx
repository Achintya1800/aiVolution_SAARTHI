import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Share2, 
  FileText, 
  DollarSign, 
  Users, 
  Settings, 
  File, 
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SchemeDetailsModalProps {
  isOpen: boolean;
  scheme: any;
  onClose: () => void;
  onApplyNow: (scheme: any) => void;
}

const SchemeDetailsModal: React.FC<SchemeDetailsModalProps> = ({ isOpen, scheme, onClose, onApplyNow }) => {
  const [activeTab, setActiveTab] = useState('Details');

  if (!isOpen || !scheme) return null;

  const tabs = [
    { id: 'Details', label: 'Details', icon: FileText },
    { id: 'Benefits', label: 'Benefits', icon: DollarSign },
    { id: 'Eligibility', label: 'Eligibility', icon: Users },
    { id: 'Application Process', label: 'Application Process', icon: Settings },
    { id: 'Documents Required', label: 'Documents Required', icon: File },
    { id: 'FAQ', label: 'FAQ', icon: HelpCircle }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Details':
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">About This Scheme</h3>
            </div>
            <div className="prose prose-gray max-w-none px-4">
              <p className="text-gray-700 leading-relaxed text-base">
                The scheme "Immediate Relief Assistance" is a Sub-Component under the scheme "Welfare and Relief for 
                Fishermen During Lean Seasons and Natural Calamities Scheme". The scheme is extended to all the regions 
                of the Union territory of Puducherry. The scheme is introduced with the objective of extending financial 
                assistance to the fishermen's families to compensate for the loss due to the missing breadwinner and to 
                support them financially to run their family.
              </p>
            </div>
          </div>
        );

      case 'Benefits':
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Benefits</h3>
            </div>
            
            <div className="space-y-8 px-4">
              <div className="border-l-4 border-green-500 pl-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 text-lg">Skill Training</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  The program provides skill training to beneficiaries in a variety of sectors, including agriculture, 
                  construction, retail, and hospitality. The training is designed to be industry-relevant and to equip 
                  beneficiaries with the skills they need to secure employment.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 text-lg">Placement Assistance</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  The program provides placement assistance to beneficiaries by connecting them with potential employers. 
                  The program also provides support to beneficiaries during the job search process, such as resume writing 
                  and interview preparation.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 text-lg">Post-Placement Support</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  The program provides post-placement support to beneficiaries to help them adjust to their new jobs. 
                  This support may include mentorship, counseling, and access to resources.
                </p>
              </div>
            </div>
          </div>
        );

      case 'Eligibility':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Eligibility Criteria</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Target Group</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  The target group for DDU-GKY is poor rural youth in the age group 15-35.
                </p>
                <p className="text-gray-700">
                  The upper age limit for women candidates, and candidates belonging to Particularly Vulnerable Tribal Groups 
                  (PVTGs), Persons with Disabilities (PwDs), Transgender and other Special Groups like rehabilitated bonded labor, 
                  victims of trafficking, manual scavengers, trans-genders, HIV-positive persons, etc shall be 45 years.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Identification Process</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  The poor will be identified by a process called <strong>Participatory Identification of Poor (PIP)</strong>. 
                  Till the time poor are identified through the use of PIP, apart from the existing list of Below Poverty Line (BPL) 
                  households, the applicant qualifying as ANY ONE of the following shall also be eligible to avail of the skilling 
                  program even if such youth are not on the BPL list:
                </p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Youth from MGNREGA worker households with at least 15 days of work in the previous financial year by any of its family members.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Youth from a household with RSBY card wherein the details of youth are mentioned in the card.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Youth from households who have been issued Antyodaya Anna Yojana / BPL PDS cards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Youth from a household where a family member is a member of SHG under NRLM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Youth from a household covered under auto inclusion parameters as per SECC, 2011 (when notified).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'Application Process':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Application Process</h3>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Online</span>
                <span className="text-blue-700 font-medium">Application Method</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visit the Official Website</h4>
                  <p className="text-gray-700">
                    Visit the <a href="#" className="text-blue-600 underline">Official Website</a> of Kaushal Panjee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Candidate Registration</h4>
                  <p className="text-gray-700">
                    In the Left Pane, click "Candidate Registration". You will be taken to the <a href="#" className="text-blue-600 underline">Online Registration Form</a>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Select Registration Type</h4>
                  <p className="text-gray-700">
                    In the "Registration Type" section, select "Fresh/New Registration" and click "Next".
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Complete Application</h4>
                  <p className="text-gray-700">
                    In the corresponding sections, fill in all the mandatory fields, upload the required documents, and click 
                    "Submit". Note the Registration ID for future reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Documents Required':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <File className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">Documents Required</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-4 flex items-center gap-2">
                  <File className="w-5 h-5" />
                  Identity Documents
                </h4>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Aadhaar Card
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Voter ID Card
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Passport (if available)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  <File className="w-5 h-5" />
                  Income Documents
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Income Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    BPL Card
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    MGNREGA Job Card
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <File className="w-5 h-5" />
                  Educational Documents
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    10th Mark Sheet
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    12th Mark Sheet (if applicable)
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <File className="w-5 h-5" />
                  Other Documents
                </h4>
                <ul className="space-y-2 text-purple-800">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Bank Account Details
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Passport Size Photo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'FAQ':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What is the age limit for this scheme?</h4>
                <p className="text-gray-700">
                  The target group is poor rural youth in the age group 15-35. For women candidates and special groups, 
                  the upper age limit is 45 years.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Is there any fee for registration?</h4>
                <p className="text-gray-700">
                  No, the registration and training under this scheme is completely free of cost.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What kind of training is provided?</h4>
                <p className="text-gray-700">
                  The program provides skill training in various sectors including agriculture, construction, retail, 
                  and hospitality. The training is industry-relevant and designed to help secure employment.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Is placement guaranteed after training?</h4>
                <p className="text-gray-700">
                  While placement is not guaranteed, the program provides placement assistance by connecting beneficiaries 
                  with potential employers and supporting them during the job search process.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
              <span className="text-xl font-semibold">Puducherry</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0">
                <Share2 className="w-6 h-6" />
              </button>
              <button 
                onClick={() => onApplyNow && onApplyNow(scheme)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex-shrink-0"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Title and Tags */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              <span className="text-blue-600">"Immediate Relief Assistance"</span> under{' '}
              <span className="text-purple-600">"Welfare and Relief for Fishermen During Lean Seasons and Natural Calamities Scheme"</span>
            </h1>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium border border-red-200">
                Missing
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                Fisherman
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                Relief
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
                Financial Assistance
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200">
                Family
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-0">
              <div className="flex space-x-0 w-full">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap flex-1 justify-center ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-b-2 border-transparent'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px] max-h-[500px] overflow-y-auto pr-2">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetailsModal;