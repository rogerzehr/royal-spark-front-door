
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#events" className="text-sm hover:text-primary transition-colors">Events</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="outline" size="sm">Login</Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Royal Spark Innovation Lab</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is the main website. The splash page has successfully redirected you here.
          </p>
          
          <div className="flex justify-center">
            <Button>Explore Our Work</Button>
          </div>
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

export default Home;
