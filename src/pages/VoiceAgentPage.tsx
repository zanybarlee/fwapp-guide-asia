
import React from 'react';
import Header from '@/components/Header';
import VoiceAgent from '@/components/VoiceAgent';
import { Headphones, Languages, MessageSquare } from 'lucide-react';

const VoiceAgentPage = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-fwapp-lightblue rounded-full mb-4">
            <Headphones className="h-6 w-6 text-fwapp-blue" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Voice Assistant</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Talk to our multilingual assistant about jobs, housing, or any other needs. 
            Try asking about "construction jobs" or "mobile top-up".
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Languages className="h-3 w-3" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Languages className="h-3 w-3" />
              <span>中文</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Languages className="h-3 w-3" />
              <span>বাংলা</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Languages className="h-3 w-3" />
              <span>தமிழ்</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Languages className="h-3 w-3" />
              <span>မြန်မာ</span>
            </div>
          </div>
        </div>
        
        <VoiceAgent />
      </div>
    </div>
  );
};

export default VoiceAgentPage;
