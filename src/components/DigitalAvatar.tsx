import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const DigitalAvatar: React.FC = () => {
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [greeting, setGreeting] = useState("Hey there, welcome to FWApp! I'm here to help you get started.");
  const [iframeError, setIframeError] = useState(false);

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
      {iframeError ? (
        // Fallback UI when iframe can't load
        <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl bg-gradient-blue-purple relative">
          <AvatarImage 
            src="/lovable-uploads/f759bff1-e9d8-440b-b251-b21ac362622f.png" 
            alt="Digital Human Assistant" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6">
            <h2 className="text-2xl font-bold mb-1 relative z-10">Digital Human Assistant</h2>
            <p className="text-center text-white/80 text-sm mb-4 relative z-10">
              Your personal FWApp guide
            </p>
            <p className="text-center mb-4 relative z-10">
              Due to security restrictions, we can't embed the NVIDIA Digital Human demo directly.
            </p>
            <Button 
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 text-white border-white relative z-10"
              onClick={() => window.open('https://build.nvidia.com/nvidia/digital-humans-for-customer-service', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open NVIDIA Digital Human Demo
            </Button>
          </div>
        </div>
      ) : (
        // Attempt to load iframe, but with onError handler
        <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://build.nvidia.com/nvidia/digital-humans-for-customer-service" 
            className="w-full h-full border-0"
            title="NVIDIA Digital Human Demo"
            allowFullScreen
            onError={() => setIframeError(true)}
            onLoad={(e) => {
              // Check if iframe loaded successfully
              try {
                // This will throw an error if cross-origin
                const contentDocument = (e.target as HTMLIFrameElement).contentDocument;
                if (!contentDocument) {
                  setIframeError(true);
                }
              } catch (error) {
                console.log("Cross-origin frame detected, may not load properly");
                // We don't set error here as sometimes frames load despite CSP console errors
              }
            }}
          />
        </div>
      )}

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
