
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, ShoppingBag, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-gradient-blue-purple">FWApp</span>
        </div>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>中文 (Chinese)</DropdownMenuItem>
              <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              <DropdownMenuItem>தமிழ் (Tamil)</DropdownMenuItem>
              <DropdownMenuItem>မြန်မာ (Burmese)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <nav className="hidden md:flex gap-1">
            <Button 
              variant="ghost" 
              className="flex items-center gap-1"
              onClick={() => navigate('/')}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Avatar</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center gap-1"
              onClick={() => navigate('/voice-agent')}
            >
              <Headphones className="h-4 w-4" />
              <span>Voice Agent</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center gap-1"
              onClick={() => navigate('/transactions')}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Shop</span>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] flex justify-around py-2 px-4 z-50">
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center h-14 w-full"
          onClick={() => navigate('/')}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs mt-1">Avatar</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center h-14 w-full"
          onClick={() => navigate('/voice-agent')}
        >
          <Headphones className="h-5 w-5" />
          <span className="text-xs mt-1">Voice</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center h-14 w-full"
          onClick={() => navigate('/transactions')}
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs mt-1">Shop</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
