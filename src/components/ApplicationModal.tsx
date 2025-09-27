import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Home, 
  Upload, 
  CheckCircle, 
  Calendar,
  Phone,
  Mail,
  CreditCard,
  Users,
  DollarSign,
  Camera,
  FileText,
  Info
} from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  scheme: any;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, scheme, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: 'Raj Kumar Singh',
    dateOfBirth: '15-06-1985',
    gender: 'Male',
    mobileNumber: '+91 9876543210',
    email: 'raj.singh@email.com',
    aadhaarNumber: '1234-5678-9012',
    maritalStatus: '',
    
    // Family & Income
    familyMembers: '4',
    annualIncome: '',
    hasProperty: '',
    
    // Documents
    documents: {
      aadhaarCard: null,
      panCard: null,
      incomeCard: null,
      propertyPhoto: null
    }
  });

  if (!isOpen || !scheme) return null;

  const steps = [
    { 
      id: 1, 
      title: 'Personal Details', 
      subtitle: 'Basic information about you',
      icon: User,
      status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'pending'
    },
    { 
      id: 2, 
      title: 'Family & Income', 
      subtitle: 'Family and financial details',
      icon: Home,
      status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'pending'
    },
    { 
      id: 3, 
      title: 'Document Upload', 
      subtitle: 'Required documents',
      icon: Upload,
      status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'active' : 'pending'
    },
    { 
      id: 4, 
      title: 'Review & Submit', 
      subtitle: 'Review your application',
      icon: CheckCircle,
      status: currentStep === 4 ? 'active' : 'pending'
    }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Saarthi automatically found and pre-filled this from your profile.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Pre-filled from your Aadhaar details.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => updateFormData('mobileNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar Number</label>
                <input
                  type="text"
                  value={formData.aadhaarNumber}
                  onChange={(e) => updateFormData('aadhaarNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Verified from your onboarding process.</p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                Marital Status
                <Info className="w-4 h-4 text-gray-400" />
              </label>
              <select
                value={formData.maritalStatus}
                onChange={(e) => updateFormData('maritalStatus', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Select marital status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Family & Income Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Family Members</label>
                <input
                  type="number"
                  value={formData.familyMembers}
                  onChange={(e) => updateFormData('familyMembers', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Estimated based on your profile information.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  Annual Household Income (₹)
                  <Info className="w-4 h-4 text-gray-400" />
                </label>
                <select
                  value={formData.annualIncome}
                  onChange={(e) => updateFormData('annualIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select income range</option>
                  <option value="0-100000">₹0 - ₹1,00,000</option>
                  <option value="100000-300000">₹1,00,000 - ₹3,00,000</option>
                  <option value="300000-500000">₹3,00,000 - ₹5,00,000</option>
                  <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
                  <option value="1000000+">Above ₹10,00,000</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">This helps determine your eligibility category under PMAY.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                Do you or your family own any residential property?
                <Info className="w-4 h-4 text-gray-400" />
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="hasProperty"
                    value="no"
                    checked={formData.hasProperty === 'no'}
                    onChange={(e) => updateFormData('hasProperty', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">No, we don't own any residential property</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="hasProperty"
                    value="yes"
                    checked={formData.hasProperty === 'yes'}
                    onChange={(e) => updateFormData('hasProperty', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Yes, we own some property</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Document Upload</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Aadhaar Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Aadhaar Card</h3>
                <p className="text-sm text-gray-600 mb-4">Your Aadhaar card (both sides if needed)</p>
                <div className="space-y-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                    <Upload className="w-4 h-4" />
                    Choose File
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto">
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
              </div>

              {/* PAN Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">PAN Card <span className="text-red-500">*</span></h3>
                <p className="text-sm text-gray-600 mb-4">Clear photo of your PAN card</p>
                <div className="space-y-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                    <Upload className="w-4 h-4" />
                    Choose File
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto">
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
              </div>

              {/* Income Certificate */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Income Certificate <span className="text-red-500">*</span></h3>
                <p className="text-sm text-gray-600 mb-4">Official income certificate from competent authority</p>
                <div className="space-y-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                    <Upload className="w-4 h-4" />
                    Choose File
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto">
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
              </div>

              {/* Property Photo */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Property Photo</h3>
                <p className="text-sm text-gray-600 mb-4">Photo of the land/property where construction is planned</p>
                <div className="space-y-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                    <Upload className="w-4 h-4" />
                    Choose File
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto">
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
              </div>
            </div>

            {/* Document Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">Document Guidelines</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Ensure all documents are clear and readable</li>
                <li>• Upload high-quality images or PDFs</li>
                <li>• File size should not exceed 5MB per document</li>
                <li>• All text and details should be clearly visible</li>
              </ul>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Review Your Application</h2>
            
            {/* Saarthi Message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">
                <strong>Saarthi says:</strong> Please review all the information below to ensure it's correct before submitting your application.
              </p>
            </div>

            {/* Personal Details Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-medium">{formData.dateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium">{formData.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mobile Number:</span>
                  <span className="font-medium">{formData.mobileNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aadhaar Number:</span>
                  <span className="font-medium">{formData.aadhaarNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Marital Status:</span>
                  <span className="font-medium">{formData.maritalStatus || 'Single'}</span>
                </div>
              </div>
            </div>

            {/* Family & Income Details Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Family & Income Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Family Members:</span>
                  <span className="font-medium">{formData.familyMembers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Income:</span>
                  <span className="font-medium">{formData.annualIncome || '0-300000'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Existing Property:</span>
                  <span className="font-medium">{formData.hasProperty === 'yes' ? 'Yes' : 'Yes'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Details:</span>
                  <span className="font-medium">k</span>
                </div>
              </div>
            </div>

            {/* Uploaded Documents Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Uploaded Documents</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Aadhaar Card - Not Uploaded</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-700">Pan Card</p>
                    <p className="text-xs text-green-600">document-4a2c-4d82-b8f4-d5f2b2c6a3b1.pdf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-700">Income Certificate</p>
                    <p className="text-xs text-green-600">Government-Book-Volume-1-6.pdf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Property Photo - Not Uploaded</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to Submit */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Ready to Submit</h4>
                  <p className="text-sm text-green-800 mb-3">
                    Your application for Pradhan Mantri Awas Yojana (PMAY) is complete and ready for submission. Once submitted, 
                    you will receive a confirmation email and can track your application status.
                  </p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Application will be reviewed within 15 working days</li>
                    <li>• You will receive SMS updates on your registered mobile number</li>
                    <li>• Additional documents may be requested if needed</li>
                  </ul>
                </div>
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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Apply for {scheme?.name || 'Pradhan Mantri Awas Yojana (PMAY)'}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-gray-50 border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : step.status === 'active'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <p className={`text-sm font-semibold ${
                        step.status === 'active' ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{step.subtitle}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-1 mx-4 rounded-full transition-all duration-300 ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 max-h-[60vh] overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-6">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Next: {steps[currentStep]?.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                Submit Application
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;