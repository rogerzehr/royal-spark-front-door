
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Ambassadors = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Ambassadors & Fellowship Program</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This page will contain information about our Ambassadors and Fellowship program.
          </p>
        </div>
      </main>
      
      <footer className="border-t py-6 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Royal Spark Innovation Lab · Team Mildenhall
        </div>
      </footer>
    </div>
  );
};

export default Ambassadors;
