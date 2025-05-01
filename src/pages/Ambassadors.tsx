
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Award, Sparkles } from 'lucide-react';

const Ambassadors = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6 bg-background/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
                Ambassadors & Fellowship Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Empowering innovation leaders at RAF Mildenhall through collaboration, mentorship, and hands-on project experience.
              </p>
              <Button 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all animate-fade-in delay-200"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Program Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Fellowship Training</h3>
                  <p className="text-muted-foreground">
                    Comprehensive innovation training program designed to develop the next generation of military innovators.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Ambassador Network</h3>
                  <p className="text-muted-foreground">
                    Building a community of innovation champions across squadrons to drive change from within.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Project Acceleration</h3>
                  <p className="text-muted-foreground">
                    Turning innovative ideas into deployable solutions through mentorship and resources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Sparkles className="h-12 w-12 text-accent animate-pulse-slow" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to Become an Innovation Leader?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the Royal Spark Innovation Lab's Ambassador program and help shape the future of RAF Mildenhall.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="rounded-full px-6 py-2 bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-2 border-2 border-primary">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-8 px-4 bg-muted/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Royal Spark Innovation Lab · Team Mildenhall
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ambassadors;
