
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart2, PieChart, TrendingUp, Users, Lightbulb, FileText, Download } from 'lucide-react';

const Metrics = () => {
  const navigate = useNavigate();
  
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Performance Indicators</h2>
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

        {/* Charts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Innovation Performance</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* This would be replaced with actual chart components in a real implementation */}
              <Card className="bg-background border-0 shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                    Innovation Projects by Category
                  </h3>
                  <div className="h-64 bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Bar Chart Visualization</p>
                    {/* This would be a real chart in implementation */}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-0 shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-secondary" />
                    Resource Allocation
                  </h3>
                  <div className="h-64 bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Pie Chart Visualization</p>
                    {/* This would be a real chart in implementation */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Impact Stories</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-background border-0 shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Process Improvement Initiative</h3>
                  <p className="text-muted-foreground mb-4">
                    Streamlined maintenance documentation process reduced administrative time by 35%, 
                    allowing technicians to focus more on aircraft maintenance.
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    <span>Read full case study</span>
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Digital Transformation Project</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementation of digital tracking system for inventory management resulted in 
                    28% reduction in supply chain disruptions and $120K annual cost savings.
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    <span>Read full case study</span>
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
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
                <span>Download Report</span>
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
