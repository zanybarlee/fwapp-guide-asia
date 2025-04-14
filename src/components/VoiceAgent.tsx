
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const VoiceAgent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your FWApp assistant. How can I help you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample responses for the demo
  const sampleResponses: Record<string, string> = {
    'hello': "Hi there! How can I assist you today?",
    'job': "I can help you find job opportunities in Singapore. What type of work are you looking for?",
    'construction': "I've found several construction job openings in Singapore. Would you like me to send you details?",
    'housing': "FWApp can help you find affordable housing options. Do you have a specific area in mind?",
    'dormitory': "There are several dormitories available. Prices range from $200-$500 per month depending on location and amenities.",
    'banking': "I can guide you through opening a bank account or sending money home. Which service do you need help with?",
    'remittance': "FWApp partners with several remittance services that offer competitive rates. Would you like to compare rates now?",
    'health': "Your health is important! I can help you schedule a doctor's appointment or explain your medical benefits.",
    'emergency': "For emergencies, please call 995 for ambulance or 999 for police. Is this an emergency situation?",
    'help': "I'm here to help with job searches, accommodation, banking, healthcare, and more. What do you need assistance with?",
    'top up': "I can help you top up your mobile phone. Which provider do you use?",
    'singtel': "I can process a Singtel top-up for you. What amount would you like to add?",
    'starhub': "I can process a StarHub top-up for you. What amount would you like to add?",
    'm1': "I can process an M1 top-up for you. What amount would you like to add?",
    'thank': "You're welcome! Is there anything else I can help you with?",
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsProcessing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      respondToMessage(inputText);
      setIsProcessing(false);
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // If starting recording
    if (!isRecording) {
      // Simulate stopping recording after 5 seconds and getting a result
      setTimeout(() => {
        setIsRecording(false);
        setInputText("I'm looking for a construction job in Singapore");
        
        // Automatically send the message after a short delay
        setTimeout(() => {
          handleSendMessage();
        }, 500);
      }, 5000);
    }
  };

  const respondToMessage = (text: string) => {
    let responseText = "I'm not sure how to help with that yet. Could you try asking about jobs, housing, banking, or healthcare?";
    
    // Simple keyword matching
    for (const [keyword, response] of Object.entries(sampleResponses)) {
      if (text.toLowerCase().includes(keyword)) {
        responseText = response;
        break;
      }
    }
    
    // Add agent response
    const agentMessage: Message = {
      id: messages.length + 2,
      text: responseText,
      sender: 'agent',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, agentMessage]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] md:h-[calc(100vh-10rem)] max-w-2xl mx-auto p-4">
      <ScrollArea className="flex-1 p-4 bg-gray-50 rounded-lg mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-fwapp-blue text-white'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
          
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-fwapp-purple" />
                  <span className="text-sm text-gray-500">FWApp is thinking...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>
      
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full ${isRecording ? 'bg-red-100 text-red-500 border-red-200' : ''}`}
          onClick={toggleRecording}
        >
          {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>
        
        <Input
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1"
        />
        
        <Button onClick={handleSendMessage} disabled={!inputText.trim() || isProcessing}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default VoiceAgent;
