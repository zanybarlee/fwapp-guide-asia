
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';

const DigitalAvatar: React.FC = () => {
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [greeting, setGreeting] = useState("Hey there, welcome to FWApp! I'm here to help you get started.");

  const startSpeaking = () => {
    if (muted) return;
    setSpeaking(true);
    
    // Simulate the avatar speaking for a few seconds
    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    // Auto start speaking when component mounts
    const timer = setTimeout(() => {
      startSpeaking();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-3xl mx-auto">
      {/* Digital avatar display area */}
      <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl bg-gradient-blue-purple relative">
        {/* Image background */}
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('/lovable-uploads/f759bff1-e9d8-440b-b251-b21ac362622f.png')`,
            backgroundSize: 'cover'
          }}
        >
          {/* Content overlay with purple gradient */}
          <div className="absolute inset-0 bg-gradient-blue-purple bg-opacity-70">
            {/* Centered content */}
            <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
              <div className="bg-[#9b87f5]/90 p-6 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-1">Digital Human Assistant</h2>
                <p className="text-sm mb-4 text-white/80">Your personal FWApp guide</p>
                
                <p className="mb-6">Due to security restrictions, we can't embed the NVIDIA Digital Human demo directly.</p>
                
                <Button 
                  variant="outline" 
                  className="bg-white/20 hover:bg-white/30 text-white border-white"
                  onClick={() => window.open('https://build.nvidia.com/nvidia/digital-humans-for-customer-service', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open NVIDIA Digital Human Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting message */}
      <div className="bg-white shadow-blue rounded-lg p-4 mb-6 text-center w-full">
        <p className="text-lg font-medium">{greeting}</p>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <Button 
          onClick={startSpeaking} 
          disabled={speaking} 
          className="bg-fwapp-blue hover:bg-blue-700"
        >
          Greet Me
        </Button>
        
        <Button 
          variant="outline" 
          onClick={toggleMute} 
          className="border-fwapp-blue text-fwapp-blue hover:bg-fwapp-lightblue"
        >
          {muted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
          {muted ? "Unmute" : "Mute"}
        </Button>
      </div>
    </div>
  );
};

export default DigitalAvatar;
