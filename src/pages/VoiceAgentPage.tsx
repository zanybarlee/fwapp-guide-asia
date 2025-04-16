
import React, { useState } from 'react';
import Header from '@/components/Header';
import VoiceAgent from '@/components/VoiceAgent';
import { Headphones, Languages, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VoiceAgentPage = () => {
  const [showIframe, setShowIframe] = useState(false);
  
  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

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
          
          <div className="mt-6">
            <Button 
              onClick={toggleIframe} 
              className="bg-fwapp-blue hover:bg-blue-700"
            >
              {showIframe ? "Close Demo" : "Try Voice Agent"}
            </Button>
          </div>
        </div>
        
        {showIframe ? (
          <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg mb-8">
            <div className="aspect-video w-full bg-white">
              <iframe 
                src="http://localhost:3005/" 
                className="w-full h-full border-0" 
                title="Voice Agent Demo"
              ></iframe>
            </div>
            <button 
              onClick={toggleIframe}
              className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        ) : (
          <VoiceAgent />
        )}
      </div>
    </div>
  );
};

export default VoiceAgentPage;
