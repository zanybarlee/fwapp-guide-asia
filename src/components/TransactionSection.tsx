
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, Phone, ShoppingBag, Globe, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'telecom-sim-1',
    name: 'Singtel Top-up $10',
    price: 10,
    description: 'Singtel prepaid card top-up for 7 days',
    category: 'telecom',
    image: '📱'
  },
  {
    id: 'telecom-sim-2',
    name: 'Singtel Top-up $20',
    price: 20,
    description: 'Singtel prepaid card top-up for 30 days',
    category: 'telecom',
    image: '📱'
  },
  {
    id: 'telecom-sim-3',
    name: 'StarHub Top-up $15',
    price: 15,
    description: 'StarHub prepaid card top-up',
    category: 'telecom',
    image: '📱'
  },
  {
    id: 'travel-1',
    name: 'MRT Card Top-up $20',
    price: 20,
    description: 'Top up your MRT card for public transportation',
    category: 'travel',
    image: '🚇'
  },
  {
    id: 'travel-2',
    name: 'Bus Pass Monthly',
    price: 88,
    description: 'Unlimited bus rides for one month',
    category: 'travel',
    image: '🚌'
  },
  {
    id: 'grocery-1',
    name: 'Grocery Voucher $50',
    price: 50,
    description: 'Voucher for NTUC FairPrice or Sheng Siong',
    category: 'grocery',
    image: '🛒'
  },
  {
    id: 'grocery-2',
    name: 'Food Delivery $30',
    price: 30,
    description: 'Voucher for Grab Food or Foodpanda',
    category: 'grocery',
    image: '🍱'
  },
  {
    id: 'services-1',
    name: 'Document Translation',
    price: 35,
    description: 'Official document translation service',
    category: 'services',
    image: '📄'
  }
];

const TransactionSection: React.FC = () => {
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);
  const [currentTab, setCurrentTab] = useState('telecom');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    
    toast({
      description: `Added ${product.name} to cart`,
      duration: 2000,
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setCart([]);
        setCheckoutSuccess(false);
      }, 3000);
    }, 2000);
  };

  const filteredProducts = products.filter(product => product.category === currentTab);

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gradient-red">FWApp Shop</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="telecom" className="w-full" onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="telecom" className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Telecom</span>
              </TabsTrigger>
              <TabsTrigger value="travel" className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Travel</span>
              </TabsTrigger>
              <TabsTrigger value="grocery" className="flex items-center gap-1">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Grocery</span>
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Services</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={currentTab}>
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </div>
                        <div className="text-3xl">{product.image}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-aptiv8-red hover:bg-aptiv8-red/90"
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-aptiv8-red" />
                <span>Your Cart</span>
              </CardTitle>
              <CardDescription>
                {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in your cart`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  <ShoppingBag className="h-10 w-10 mx-auto mb-2 opacity-20" />
                  <p>Add items to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {cart.length > 0 && (
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-red hover:opacity-90"
                disabled={cart.length === 0 || isCheckingOut}
                onClick={handleCheckout}
              >
                {isCheckingOut ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : checkoutSuccess ? (
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                ) : (
                  <CreditCard className="mr-2 h-4 w-4" />
                )}
                {isCheckingOut ? "Processing..." : checkoutSuccess ? "Payment Complete!" : "Checkout"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TransactionSection;
