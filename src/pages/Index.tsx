import React from 'react';
import Header from '@/components/Header';
import DigitalAvatar from '@/components/DigitalAvatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Info, Languages, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      
      <main className="flex-1">
        <section className="py-6 md:py-12 bg-gradient-to-b from-aptiv8-lightred to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-red">Welcome to Aptiv8 FWApp</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Your all-in-one companion for foreign workers in Asia. Get assistance with jobs, 
                accommodations, remittances, and more.
              </p>
            </div>
            
            <DigitalAvatar />
            
            <div className="mt-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Explore Aptiv8 FWApp Features</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-aptiv8-red" />
                      <span>Digital Assistant</span>
                    </CardTitle>
                    <CardDescription>Get personalized help</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our friendly digital avatar guides you through Aptiv8 and answers your questions.
                    </p>
                    <Button variant="outline" className="w-full text-aptiv8-red border-aptiv8-red hover:bg-aptiv8-lightred" onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })}>
                      Try Now <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Languages className="h-5 w-5 text-aptiv8-red" />
                      <span>Voice Agent</span>
                    </CardTitle>
                    <CardDescription>Talk in your language</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Speak to our AI assistant in your native language for help with jobs, housing, and more.
                    </p>
                    <Button variant="outline" className="w-full text-aptiv8-red border-aptiv8-red hover:bg-aptiv8-lightred" onClick={() => navigate('/voice-agent')}>
                      Try Voice Agent <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-aptiv8-red" />
                      <span>Shop & Services</span>
                    </CardTitle>
                    <CardDescription>Buy what you need</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Top up your phone, purchase transit cards, and access other essential services.
                    </p>
                    <Button variant="outline" className="w-full text-aptiv8-red border-aptiv8-red hover:bg-aptiv8-lightred" onClick={() => navigate('/transactions')}>
                      Go to Shop <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">How Aptiv8 Helps Workers</h2>
          
          <Tabs defaultValue="job-seeking" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="job-seeking">Job Seeking</TabsTrigger>
              <TabsTrigger value="living">Daily Living</TabsTrigger>
              <TabsTrigger value="support">Support Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="job-seeking">
              <Card>
                <CardHeader>
                  <CardTitle>Find Your Next Job</CardTitle>
                  <CardDescription>
                    Aptiv8 connects workers with trusted employers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Our platform provides access to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Verified job listings across multiple industries</li>
                    <li>Application tracking and status updates</li>
                    <li>Interview preparation assistance</li>
                    <li>Contract translation and explanation</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="living">
              <Card>
                <CardHeader>
                  <CardTitle>Simplify Daily Life</CardTitle>
                  <CardDescription>
                    Essential services for foreign workers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Access everyday necessities:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Mobile top-ups and data plans</li>
                    <li>Transportation passes and cards</li>
                    <li>Money transfer and remittance services</li>
                    <li>Essential shopping and groceries</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle>Get Help When Needed</CardTitle>
                  <CardDescription>
                    Support services in your language
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Aptiv8 provides critical support:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Healthcare information and access</li>
                    <li>Legal advice and document assistance</li>
                    <li>Emergency services contact information</li>
                    <li>Community support and social connections</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>;
};
export default Index;