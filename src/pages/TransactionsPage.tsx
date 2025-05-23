
import React from 'react';
import Header from '@/components/Header';
import TransactionSection from '@/components/TransactionSection';
import { ShoppingBag } from 'lucide-react';

const TransactionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-aptiv8-lightred rounded-full mb-4">
            <ShoppingBag className="h-6 w-6 text-aptiv8-red" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-red">Shop & Services</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Purchase mobile top-ups, transit cards, and other essential services for your stay in Singapore.
          </p>
        </div>
        
        <TransactionSection />
      </div>
    </div>
  );
};

export default TransactionsPage;
