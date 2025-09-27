import React, { useState } from 'react';
import { MessageCircle, X, Mic, Send, Bot } from 'lucide-react';

interface ChatbotWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ isOpen, onToggle }) => {
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chatbot Icon */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={onToggle}
            className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 animate-bounce"
            style={{
              animation: 'gentle-bounce 2s infinite',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
            }}
          >
            <Bot className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* Chatbot Panel */}
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">सारथीBot</h3>
              <p className="text-sm text-gray-300">Your AI-powered assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-xs text-gray-300"></span>
            </div>
            <button
              onClick={onToggle}
              className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{ height: 'calc(100vh - 160px)' }}>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-gray-100 max-w-xs">
              <p className="text-gray-800 text-sm leading-relaxed">Hello! How can I assist you today?</p>
              <span className="text-xs text-gray-400 mt-2 block">Just now</span>
            </div>
          </div>
          
          {/* Suggested actions */}
          <div className="space-y-3 mt-6">
            <p className="text-xs text-gray-500 font-medium mb-3">Quick actions:</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-gray-50 hover:border-green-300 transition-all duration-200">
                Help with registration
              </button>
              <button className="px-3 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-gray-50 hover:border-green-300 transition-all duration-200">
                Technical support
              </button>
              <button className="px-3 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-gray-50 hover:border-green-300 transition-all duration-200">
                FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-3 py-2 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
              />
            </div>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg">
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          {/* Typing indicator */}
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span>AI is ready to help</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget;