
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, PieChart, TrendingUp, Users, Lightbulb, FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Metrics = () => {
  const navigate = useNavigate();
  const [expandedStories, setExpandedStories] = useState<number[]>([]);
  
  const toggleStory = (index: number) => {
    if (expandedStories.includes(index)) {
      setExpandedStories(expandedStories.filter(i => i !== index));
    } else {
      setExpandedStories([...expandedStories, index]);
    }
  };
  
  // Sample metrics data
  const innovationMetrics = [
    {
      title: "Ideas Submitted",
      count: 127,
      change: "+23%",
      icon: <Lightbulb className="h-10 w-10 text-primary" />
    },
    {
      title: "Active Projects",
      count: 42,
      change: "+15%",
      icon: <FileText className="h-10 w-10 text-secondary" />
    },
    {
      title: "Team Members Engaged",
      count: 215,
      change: "+31%",
      icon: <Users className="h-10 w-10 text-accent" />
    }
  ];
  
  // Strategic mission goals data
  const strategicGoals = [
    {
      id: "100arw",
      title: "100 ARW Strategic Goals",
      goals: [
        {
          goalTitle: "Operational Efficiency",
          progress: 78,
          projects: 18,
          description: "Improving mission execution through optimized processes and resources",
          impact: "Reduced maintenance downtime by 22% through innovative scheduling systems",
          highlights: [
            "Enhanced sortie generation rate by 15% through streamlined pre-flight procedures",
            "Saved 1,200+ man-hours annually through automated documentation processes",
            "Increased aircraft availability by 8% through predictive maintenance innovations"
          ]
        },
        {
          goalTitle: "Personnel Development",
          progress: 65,
          projects: 12,
          description: "Enhancing airmen capabilities through training and innovative learning tools",
          impact: "Improved training completion rates by 34% through modernized learning platforms",
          highlights: [
            "Developed VR training simulations reducing training time by 45%",
            "Created mentorship matching platform with 85 active participants",
            "Launched digital skills accelerator program with 120 graduates"
          ]
        },
        {
          goalTitle: "Resource Optimization",
          progress: 92,
          projects: 22,
          description: "Maximizing resource utilization while reducing waste and redundancy",
          impact: "Generated $1.2M in cost savings through innovation initiatives",
          highlights: [
            "Implemented energy management system reducing consumption by 18%",
            "Digitalized inventory management reducing overordering by 25%",
            "Developed waste reduction program yielding 30% decrease in disposal costs"
          ]
        }
      ]
    },
    {
      id: "352sow",
      title: "352 SOW Strategic Goals",
      goals: [
        {
          goalTitle: "Mission Readiness",
          progress: 82,
          projects: 14,
          description: "Ensuring personnel and equipment are prepared for rapid deployment",
          impact: "Increased mission readiness rate to 92% through innovative preparation protocols",
          highlights: [
            "Developed quick-response equipment tracking system with 99.8% accuracy",
            "Created AI-assisted pre-mission briefing tool reducing preparation time by 35%",
            "Implemented real-time qualification tracking system improving deployment readiness"
          ]
        },
        {
          goalTitle: "Technical Innovation",
          progress: 75,
          projects: 16,
          description: "Advancing special operations capabilities through technical solutions",
          impact: "Fielded 8 new tactical technologies enhancing mission effectiveness",
          highlights: [
            "Prototyped lightweight communications hub for forward operations",
            "Developed specialized equipment modifications for unique mission requirements",
            "Created software solution for improved situational awareness in complex environments"
          ]
        },
        {
          goalTitle: "Cross-Functional Integration",
          progress: 68,
          projects: 9,
          description: "Enhancing cooperation between diverse mission components",
          impact: "Improved cross-team communication efficiency by 40% through new platforms",
          highlights: [
            "Created integrated mission planning tool used by multiple specialties",
            "Developed cross-training program increasing multi-capability teams by 25%",
            "Implemented shared knowledge management system with 1,500+ resources"
          ]
        }
      ]
    }
  ];
  
  // Impact stories
  const impactStories = [
    {
      title: "Process Improvement Initiative",
      summary: "Streamlined maintenance documentation process reduced administrative time by 35%, allowing technicians to focus more on aircraft maintenance.",
      fullStory: "This project began when SSgt Martinez identified excessive time spent on maintenance documentation. Working with our innovation lab, her team developed a digital solution using tablet devices and custom forms that eliminated redundant data entry and automated compliance tracking. The system was tested with the 351st Air Refueling Squadron maintenance team, validated with a 35% reduction in administrative time, and has now been adopted across all maintenance units. The project has reclaimed approximately 5,200 man-hours annually that are now redirected to hands-on maintenance activities, directly improving aircraft availability and mission capability.",
      wing: "100 ARW",
      impact: "High",
      leader: "SSgt Maria Martinez"
    },
    {
      title: "Digital Transformation Project",
      summary: "Implementation of digital tracking system for inventory management resulted in 28% reduction in supply chain disruptions and $120K annual cost savings.",
      fullStory: "The supply management team approached our innovation lab with challenges in inventory visibility that were causing mission delays. Working collaboratively, we developed a digital tracking system using commercial off-the-shelf technology with custom software integration. The system provides real-time inventory status, predictive ordering capabilities, and automated reordering of critical components. After a three-month pilot program, data showed a 28% reduction in supply-related mission delays and approximately $120K in annual cost savings through reduced emergency shipping and improved inventory optimization. The system has since been expanded to cover all mission-critical components and is being evaluated for wing-wide implementation.",
      wing: "352 SOW",
      impact: "Very High",
      leader: "TSgt James Wilson"
    },
    {
      title: "Training Modernization Program",
      summary: "VR-based training systems reduced qualification time by 45% while improving knowledge retention scores by 23%.",
      fullStory: "Lt Col Davis identified that traditional training methods were taking personnel away from operational duties for extended periods while not optimally preparing them for real-world scenarios. Working with our innovation team and educational technology specialists, they developed VR-based training modules that simulate real-world scenarios with high fidelity. The initial implementation focused on aircraft evacuation procedures and emergency response protocols. Data collected over six months showed a 45% reduction in time-to-qualification while simultaneously improving knowledge retention scores by 23% compared to traditional methods. The program has now expanded to 15 different training modules across both wings and has become a benchmark for USAFE training innovation.",
      wing: "100 ARW",
      impact: "High",
      leader: "Lt Col Sarah Davis"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
                Innovation Metrics
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Tracking the impact of innovation initiatives across RAF Mildenhall through data-driven insights.
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Performance Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {innovationMetrics.map((metric, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {metric.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{metric.count}</h3>
                    <p className="text-muted-foreground mb-2">{metric.title}</p>
                    <div className="flex items-center justify-center text-sm">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      <span className="text-green-500">{metric.change} from last year</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Goals Impact */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Strategic Mission Impact</h2>
            
            <Tabs defaultValue="100arw" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="100arw">100 ARW Goals</TabsTrigger>
                <TabsTrigger value="352sow">352 SOW Goals</TabsTrigger>
              </TabsList>
              
              {strategicGoals.map(wing => (
                <TabsContent key={wing.id} value={wing.id} className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold">{wing.title}</h3>
                    <p className="text-muted-foreground">Innovation initiatives supporting strategic priorities</p>
                  </div>
                  
                  {wing.goals.map((goal, idx) => (
                    <Card key={idx} className="bg-background border-0 shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle>{goal.goalTitle}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col md:flex-row md:items-center mb-4">
                          <div className="md:w-1/4 mb-4 md:mb-0">
                            <div className="text-sm text-muted-foreground mb-1">Progress</div>
                            <div className="flex items-center">
                              <div className="w-full bg-muted rounded-full h-3 mr-2">
                                <div 
                                  className="bg-primary h-3 rounded-full" 
                                  style={{ width: `${goal.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{goal.progress}%</span>
                            </div>
                          </div>
                          <div className="md:w-1/4 md:px-4 mb-4 md:mb-0">
                            <div className="text-sm text-muted-foreground mb-1">Active Projects</div>
                            <div className="text-lg font-semibold">{goal.projects}</div>
                          </div>
                          <div className="md:w-2/4">
                            <div className="text-sm text-muted-foreground mb-1">Description</div>
                            <div className="text-sm">{goal.description}</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-border pt-4 mt-4">
                          <div className="font-medium mb-2">Key Impact:</div>
                          <div className="text-sm text-muted-foreground mb-4">{goal.impact}</div>
                          
                          <div className="font-medium mb-2">Highlights:</div>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {goal.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-14 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Impact Stories</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {impactStories.map((story, index) => (
                <Card key={index} className="bg-background border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                        <p className="text-muted-foreground mb-3">{story.summary}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => toggleStory(index)}
                      >
                        {expandedStories.includes(index) ? 
                          <ChevronUp className="h-5 w-5" /> : 
                          <ChevronDown className="h-5 w-5" />
                        }
                      </Button>
                    </div>
                    
                    {expandedStories.includes(index) && (
                      <div className="mt-4 pt-4 border-t border-border text-sm">
                        <p className="text-muted-foreground mb-4">{story.fullStory}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Wing: </span>
                            <span className="text-muted-foreground">{story.wing}</span>
                          </div>
                          <div>
                            <span className="font-medium">Impact Level: </span>
                            <span className="text-muted-foreground">{story.impact}</span>
                          </div>
                          <div>
                            <span className="font-medium">Project Lead: </span>
                            <span className="text-muted-foreground">{story.leader}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Report Download */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Annual Innovation Report</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our comprehensive annual report detailing all innovation initiatives, 
                outcomes, and future strategic directions.
              </p>
              <Button className="rounded-full px-6 py-2 bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                <span>Download Full Report</span>
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

export default Metrics;
