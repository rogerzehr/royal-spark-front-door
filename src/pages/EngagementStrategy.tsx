
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Users, Target, BarChart2, MessageSquare, ArrowRight } from 'lucide-react';

const EngagementStrategy = () => {
  const navigate = useNavigate();
  
  // Sample strategy pillars
  const strategyPillars = [
    {
      title: "Awareness Building",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      description: "Creating awareness of innovation opportunities through targeted communication campaigns across all units."
    },
    {
      title: "Community Development",
      icon: <Users className="h-10 w-10 text-secondary" />,
      description: "Building a robust network of innovation champions and advocates throughout RAF Mildenhall."
    },
    {
      title: "Capability Building",
      icon: <Target className="h-10 w-10 text-accent" />,
      description: "Developing innovation skills and competencies through workshops, training programs, and mentorship."
    },
    {
      title: "Continuous Improvement",
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      description: "Measuring engagement effectiveness and refining approaches based on feedback and outcomes."
    }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-fade-in">
                Engagement Strategy
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Our approach to building a culture of innovation across RAF Mildenhall through strategic engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy Pillars */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Engagement Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {strategyPillars.map((pillar, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Roadmap */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Engagement Roadmap</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2 hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-primary">Phase 1: Discovery</h3>
                      <p className="text-muted-foreground mt-2">Identify innovation needs and opportunities across different units</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-primary transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <Card className="bg-background border-0 shadow-md ml-0 md:ml-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Unit interviews and needs assessment</li>
                            <li>Innovation readiness evaluation</li>
                            <li>Stakeholder mapping and analysis</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-4 md:mb-0">
                      <Card className="bg-background border-0 shadow-md mr-0 md:mr-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Innovation ambassador recruitment</li>
                            <li>Capability development workshops</li>
                            <li>Communication campaign launch</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative order-2 md:order-1">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-secondary transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <h3 className="text-xl font-semibold text-secondary">Phase 2: Activation</h3>
                      <p className="text-muted-foreground mt-2">Build awareness and capabilities across the base</p>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-accent">Phase 3: Implementation</h3>
                      <p className="text-muted-foreground mt-2">Drive innovation projects and continuous improvement</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-accent transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <Card className="bg-background border-0 shadow-md ml-0 md:ml-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Innovation challenges and hackathons</li>
                            <li>Project coaching and development</li>
                            <li>Resource allocation and support</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to be part of RAF Mildenhall's innovation journey? 
                There are multiple ways to engage with our initiatives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <Card className="bg-background border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Submit an Idea</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share your innovative solution to a challenge you've identified.
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full">Learn More</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-background border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Become an Ambassador</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Represent innovation in your unit and help drive change.
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full" onClick={() => navigate('/ambassadors')}>Learn More</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-background border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Join a Workshop</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Participate in our design thinking and problem-solving events.
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full" onClick={() => navigate('/events')}>View Schedule</Button>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                className="rounded-full px-6 py-2 bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white group"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>Contact Our Team</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
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

export default EngagementStrategy;
