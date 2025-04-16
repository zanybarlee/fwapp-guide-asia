
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
        <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl bg-gradient-blue-purple flex flex-col items-center justify-center text-white p-6">
          <div className="flex flex-col items-center mb-4">
            <motion.div
              animate={{ scale: speaking ? [1, 1.05, 1] : 1 }}
              transition={{ repeat: speaking ? Infinity : 0, duration: 2 }}
              className="rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4"
              style={{ width: '180px', height: '180px' }}
            >
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/5eff63e3-9241-400a-9c0c-095c0e66704a.png" 
                  alt="Digital Human Assistant" 
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-4xl">👩</AvatarFallback>
              </Avatar>
            </motion.div>
            <h2 className="text-2xl font-bold mb-1">Digital Human Assistant</h2>
            <p className="text-center text-white/80 text-sm mb-4">
              Your personal FWApp guide
            </p>
          </div>
          <p className="text-center mb-4">
            Due to security restrictions, we can't embed the NVIDIA Digital Human demo directly.
          </p>
          <Button 
            variant="outline" 
            className="bg-white/20 hover:bg-white/30 text-white border-white"
            onClick={() => window.open('https://build.nvidia.com/nvidia/digital-humans-for-customer-service', '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open NVIDIA Digital Human Demo
          </Button>
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
