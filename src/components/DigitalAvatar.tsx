
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
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto">
      <div className="relative w-48 h-48 mb-6">
        <motion.div
          className="w-full h-full bg-gradient-blue-purple rounded-full flex items-center justify-center shadow-xl"
          animate={{ scale: speaking ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: speaking ? Infinity : 0, duration: 1.5 }}
        >
          <motion.div
            className="text-white text-6xl font-bold"
            animate={{ 
              rotate: speaking ? [0, 5, -5, 0] : 0
            }}
            transition={{ repeat: speaking ? Infinity : 0, duration: 2 }}
          >
            FW
          </motion.div>
        </motion.div>
        
        {/* Hand wave animation */}
        <motion.div 
          className="absolute -bottom-2 -right-2 text-3xl"
          animate={{ rotate: speaking ? [0, 14, -8, 14, -4, 10, 0] : 0 }}
          transition={{ repeat: speaking ? Infinity : 0, duration: 2.5, repeatDelay: 1 }}
        >
          👋
        </motion.div>
      </div>

      <div className="bg-white shadow-blue rounded-lg p-4 mb-6 text-center">
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
