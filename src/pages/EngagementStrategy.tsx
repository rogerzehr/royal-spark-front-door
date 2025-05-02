
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, BarChart2, MessageSquare, ArrowRight, BookOpen, GraduationCap, School } from 'lucide-react';

const EngagementStrategy = () => {
  const navigate = useNavigate();
  
  // Strategy pillars
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
  
  // School engagement programs
  const schoolPrograms = [
    {
      title: "STEM Ambassador Program",
      audience: "Local Primary and Secondary Schools",
      description: "Our team visits local schools to deliver engaging STEM workshops and share real-world innovation challenges.",
      activities: [
        "Interactive demonstrations of lab equipment including 3D printing",
        "Hands-on problem-solving activities tied to curriculum objectives",
        "Career talks highlighting STEM opportunities in the military"
      ]
    },
    {
      title: "Innovation Challenge Competition",
      audience: "Secondary Schools and Colleges",
      description: "Annual competition where student teams develop solutions to real challenges faced by the base.",
      activities: [
        "Mentorship from innovation lab staff throughout the project",
        "Access to innovation lab facilities for prototype development",
        "Presentation day with awards and implementation opportunities"
      ]
    },
    {
      title: "Teacher Development Workshops",
      audience: "Local Educators",
      description: "Professional development for teachers focusing on innovation methodologies they can bring to the classroom.",
      activities: [
        "Design thinking workshops for classroom application",
        "Technology integration training for educational settings",
        "Resources and curriculum materials to support innovation education"
      ]
    }
  ];
  
  // Airmen engagement initiatives
  const airmenInitiatives = [
    {
      title: "Innovation Spark Sessions",
      target: "All Airmen",
      frequency: "Monthly",
      description: "Facilitated brainstorming sessions focused on specific challenge areas identified by leadership.",
      outcomes: "Generated 45+ implementable ideas in the past six months with 12 currently in development."
    },
    {
      title: "Innovation Ambassador Program",
      target: "Selected Representatives from Each Unit",
      frequency: "Ongoing",
      description: "Training program that equips unit-level innovation ambassadors with the skills to identify opportunities and facilitate innovation in their units.",
      outcomes: "28 trained ambassadors across 14 units actively promoting innovation culture."
    },
    {
      title: "Skill-Building Workshops",
      target: "All Interested Personnel",
      frequency: "Bi-weekly",
      description: "Practical workshops on innovation methodologies, technology skills, and problem-solving techniques.",
      outcomes: "Over 200 personnel trained in design thinking, rapid prototyping, and digital skills."
    },
    {
      title: "Innovation Coffee Hours",
      target: "Open to All",
      frequency: "Weekly",
      description: "Informal sessions where personnel can drop in to discuss ideas, get feedback, or connect with potential collaborators.",
      outcomes: "Created 15+ cross-functional project teams and sparked numerous collaborative initiatives."
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
                Our approach to building a culture of innovation across RAF Mildenhall through strategic engagement with airmen and the local community.
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
        
        {/* Airmen Engagement Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <Users className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Airmen Engagement</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
                Our multi-faceted approach to engaging with airmen across RAF Mildenhall to foster a culture of innovation and continuous improvement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {airmenInitiatives.map((initiative, index) => (
                  <Card key={index} className="bg-background border-0 shadow-md h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                          {index + 1}
                        </span>
                        {initiative.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-1 mb-4">
                        <div className="flex items-baseline">
                          <span className="font-medium text-sm mr-2">Target:</span>
                          <span className="text-muted-foreground text-sm">{initiative.target}</span>
                        </div>
                        <div className="flex items-baseline">
                          <span className="font-medium text-sm mr-2">Frequency:</span>
                          <span className="text-muted-foreground text-sm">{initiative.frequency}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{initiative.description}</p>
                      <div className="pt-3 mt-3 border-t border-border">
                        <div className="font-medium text-sm mb-1">Outcomes:</div>
                        <p className="text-sm text-muted-foreground">{initiative.outcomes}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* School Engagement Section */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <School className="h-10 w-10 text-accent mr-4" />
                <h2 className="text-3xl font-bold">School Engagement</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
                Our educational outreach programs designed to inspire the next generation of innovators and strengthen community ties.
              </p>
              
              <div className="space-y-8">
                {schoolPrograms.map((program, index) => (
                  <Card key={index} className="bg-background border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                          {index === 0 ? (
                            <BookOpen className="h-16 w-16 text-accent/80" />
                          ) : index === 1 ? (
                            <Lightbulb className="h-16 w-16 text-primary/80" />
                          ) : (
                            <GraduationCap className="h-16 w-16 text-secondary/80" />
                          )}
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
                          <p className="text-accent mb-3 text-sm font-medium">{program.audience}</p>
                          <p className="text-muted-foreground mb-4">{program.description}</p>
                          
                          <h4 className="font-medium mb-2 text-sm">Key Activities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {program.activities.map((activity, idx) => (
                              <li key={idx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Roadmap */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">2025 Engagement Roadmap</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2 hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Q1 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-primary">Q1: Awareness Campaign</h3>
                      <p className="text-muted-foreground mt-2">Building visibility and interest across the base</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-primary transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <Card className="bg-background border-0 shadow-md ml-0 md:ml-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Launch innovation awareness campaign across units</li>
                            <li>Host innovation open house events</li>
                            <li>Kickoff school partnership program with 3 local schools</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Q2 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-4 md:mb-0">
                      <Card className="bg-background border-0 shadow-md mr-0 md:mr-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Train second cohort of unit innovation ambassadors</li>
                            <li>Launch innovation challenge for airmen</li>
                            <li>Coordinate summer STEM camp with local schools</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative order-2 md:order-1">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-secondary transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <h3 className="text-xl font-semibold text-secondary">Q2: Capability Development</h3>
                      <p className="text-muted-foreground mt-2">Building skills and expanding program reach</p>
                    </div>
                  </div>
                  
                  {/* Q3 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-accent">Q3: Program Expansion</h3>
                      <p className="text-muted-foreground mt-2">Broadening engagement across more units and schools</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-accent transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <Card className="bg-background border-0 shadow-md ml-0 md:ml-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Implement innovation project showcase</li>
                            <li>Launch educator workshop series for local teachers</li>
                            <li>Expand innovation ambassador program to all units</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Q4 */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-4 md:mb-0">
                      <Card className="bg-background border-0 shadow-md mr-0 md:mr-4">
                        <CardContent className="p-4">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Host annual innovation summit with all stakeholders</li>
                            <li>Evaluate program impact and refine strategy for 2026</li>
                            <li>Launch school innovation competition finals</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative order-2 md:order-1">
                      <div className="absolute left-0 md:left-0 top-0 md:top-1/2 w-6 h-6 rounded-full bg-primary transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>
                      <h3 className="text-xl font-semibold text-primary">Q4: Impact Assessment</h3>
                      <p className="text-muted-foreground mt-2">Measuring results and planning for the future</p>
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
              <h2 className="text-3xl font-bold mb-6">Want to Get Involved?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to be part of RAF Mildenhall's innovation journey? 
                There are multiple ways to engage with our initiatives.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  className="rounded-full px-6 py-2 bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white group"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span>Contact Our Team</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

export default EngagementStrategy;
