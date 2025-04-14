
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

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
      <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl">
        <iframe 
          src="https://build.nvidia.com/nvidia/digital-humans-for-customer-service" 
          className="w-full h-full border-0"
          title="NVIDIA Digital Human Demo"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-white shadow-blue rounded-lg p-4 mb-6 text-center w-full">
        <p className="text-lg font-medium">{greeting}</p>
      </div>

      <div className="flex gap-4">
        <Button onClick={startSpeaking} disabled={speaking} className="bg-fwapp-blue hover:bg-blue-700">
          Greet Me
        </Button>
        
        <Button variant="outline" onClick={toggleMute} className="border-fwapp-blue text-fwapp-blue hover:bg-fwapp-lightblue">
          {muted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
          {muted ? "Unmute" : "Mute"}
        </Button>
      </div>
    </div>
  );
};

export default DigitalAvatar;
