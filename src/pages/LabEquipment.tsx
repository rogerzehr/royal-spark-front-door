
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Printer, Cpu, Headset, Wrench, Calendar, Laptop, Cog, FileSearch } from 'lucide-react';

const LabEquipment = () => {
  const navigate = useNavigate();
  
  // Equipment categories with manuals
  const equipmentCategories = [
    {
      title: "3D Printing",
      icon: <Printer className="h-10 w-10 text-primary" />,
      description: "State-of-the-art 3D printers for rapid prototyping and manufacturing custom parts.",
      equipment: [
        { name: "Ultimaker S5", manual: "/manuals/ultimaker-s5.pdf" },
        { name: "Formlabs Form 3", manual: "/manuals/formlabs-form3.pdf" },
        { name: "Prusa i3 MK3S+", manual: "/manuals/prusa-i3-mk3s.pdf" }
      ]
    },
    {
      title: "Computing Resources",
      icon: <Cpu className="h-10 w-10 text-secondary" />,
      description: "High-performance computing stations equipped for CAD, simulation, and data analysis.",
      equipment: [
        { name: "Dell Precision 7920 Workstations", manual: "/manuals/dell-precision-7920.pdf" },
        { name: "NVIDIA RTX A6000 GPUs", manual: "/manuals/nvidia-rtx-a6000.pdf" },
        { name: "Apple Mac Studio", manual: "/manuals/mac-studio.pdf" }
      ]
    },
    {
      title: "VR/AR Systems",
      icon: <Headset className="h-10 w-10 text-accent" />,
      description: "Virtual and augmented reality equipment for training and visualization applications.",
      equipment: [
        { name: "Meta Quest Pro", manual: "/manuals/meta-quest-pro.pdf" },
        { name: "HTC Vive Pro 2", manual: "/manuals/htc-vive-pro2.pdf" },
        { name: "Microsoft HoloLens 2", manual: "/manuals/hololens-2.pdf" }
      ]
    },
    {
      title: "Hardware Tools",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      description: "Comprehensive set of tools for electronics work, mechanical assembly, and testing.",
      equipment: [
        { name: "Hakko FX-888D Soldering Station", manual: "/manuals/hakko-fx888d.pdf" },
        { name: "Oscilloscope - Rigol DS1054Z", manual: "/manuals/rigol-ds1054z.pdf" },
        { name: "Electronics Testing Kit", manual: "/manuals/electronics-kit.pdf" }
      ]
    },
    {
      title: "Collaboration Spaces",
      icon: <Laptop className="h-10 w-10 text-secondary" />,
      description: "Configurable workspaces designed for team collaboration and design thinking sessions.",
      equipment: [
        { name: "Digital Whiteboard - Samsung Flip 2", manual: "/manuals/samsung-flip2.pdf" },
        { name: "Conference System - Poly Studio", manual: "/manuals/poly-studio.pdf" },
        { name: "Modular Furniture System", manual: "/manuals/modular-furniture.pdf" }
      ]
    },
    {
      title: "CNC Equipment",
      icon: <Cog className="h-10 w-10 text-accent" />,
      description: "Computer numerical control machinery for precision manufacturing and fabrication.",
      equipment: [
        { name: "Bantam Tools Desktop CNC", manual: "/manuals/bantam-tools-cnc.pdf" },
        { name: "Carbide 3D Nomad Pro", manual: "/manuals/carbide-nomad-pro.pdf" },
        { name: "Laser Cutter - Glowforge Pro", manual: "/manuals/glowforge-pro.pdf" }
      ]
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
                Innovation Lab & Equipment
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Cutting-edge resources and facilities to transform innovative ideas into tangible solutions.
              </p>
              <Button 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all animate-fade-in delay-200"
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span>Schedule Lab Access</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Equipment Categories with Manuals */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Available Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {equipmentCategories.map((category, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border flex-grow">
                      <h4 className="text-md font-medium mb-2">Available Equipment:</h4>
                      <ul className="space-y-3">
                        {category.equipment.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center text-sm">
                            <span>{item.name}</span>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-primary hover:text-primary/80">
                              <FileSearch className="h-4 w-4" />
                              <span>Manual</span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Tour Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Lab Tour</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take a virtual tour of our innovation facilities and get familiar with our equipment and resources.
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-muted/20 rounded-lg mb-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-center h-72">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 h-20 w-20">
                    <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <Button className="rounded-full px-6 py-2 bg-primary hover:bg-primary/90">
                Request In-Person Tour
              </Button>
            </div>
          </div>
        </section>

        {/* Reservation Instructions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How to Reserve Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <Card className="bg-background border-0 shadow-md p-6 text-center">
                  <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create an Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Register for our equipment reservation system using your military email.
                  </p>
                </Card>
                
                <Card className="bg-background border-0 shadow-md p-6 text-center">
                  <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Complete Training</h3>
                  <p className="text-muted-foreground text-sm">
                    Attend required safety and operational training for equipment you wish to use.
                  </p>
                </Card>
                
                <Card className="bg-background border-0 shadow-md p-6 text-center">
                  <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Book Resources</h3>
                  <p className="text-muted-foreground text-sm">
                    Reserve equipment and lab space through our online scheduling system.
                  </p>
                </Card>
              </div>
              
              <div className="text-center">
                <Button className="rounded-full px-6 py-2 bg-accent hover:bg-accent/90">
                  Access Reservation System
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

export default LabEquipment;
