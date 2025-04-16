
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const DigitalAvatar: React.FC = () => {
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [greeting, setGreeting] = useState("Hey there, welcome to FWApp! I'm here to help you get started.");
  const [iframeError, setIframeError] = useState(true); // Set to true to always use the fallback UI
  const isMobile = useIsMobile();

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

  const openNvidiaPage = () => {
    window.open('https://build.nvidia.com/nvidia/digital-humans-for-customer-service', '_blank', 'noopener,noreferrer');
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
      {/* Clickable image container */}
      <div 
        onClick={openNvidiaPage} 
        className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl cursor-pointer group relative"
      >
        {/* Background image that fills the entire container */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/5eff63e3-9241-400a-9c0c-095c0e66704a.png" 
            alt="Digital Human Background" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Overlay with external link icon */}
        <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-6 w-6 text-fwapp-blue" />
        </div>
      </div>

      <div className="bg-white shadow-blue rounded-lg p-4 mb-6 text-center w-full">
        <p className="text-lg font-medium">{greeting}</p>
      </div>

      <div className="flex gap-4">
        <Button 
          onClick={startSpeaking} 
          disabled={speaking} 
          className="bg-aptiv8-red hover:bg-aptiv8-red/90"
        >
          Greet Me
        </Button>
        
        <Button 
          variant="outline" 
          onClick={toggleMute} 
          className="border-aptiv8-red text-aptiv8-red hover:bg-aptiv8-lightred"
        >
          {muted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
          {muted ? "Unmute" : "Mute"}
        </Button>
      </div>
    </div>
  );
};

export default DigitalAvatar;

