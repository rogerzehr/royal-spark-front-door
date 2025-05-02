
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Calendar, ExternalLink } from 'lucide-react';

const Staff = () => {
  const navigate = useNavigate();
  
  // Sample staff data
  const staffMembers = [
    {
      name: "Maj. John Doe",
      title: "Innovation Lab Director",
      photo: "/placeholder.svg",
      email: "john.doe@us.af.mil",
      phone: "555-123-4567",
      bio: "10+ years experience in military innovation and digital transformation initiatives."
    },
    {
      name: "Capt. Jane Smith",
      title: "Innovation Officer",
      photo: "/placeholder.svg",
      email: "jane.smith@us.af.mil",
      phone: "555-123-4568",
      bio: "Background in UX/UI design and agile methodologies. Leads the design thinking workshops."
    },
    {
      name: "TSgt. Michael Johnson",
      title: "Technology Integration Specialist",
      photo: "/placeholder.svg",
      email: "michael.johnson@us.af.mil",
      phone: "555-123-4569",
      bio: "Expert in emerging technologies and their applications in military environments."
    },
    {
      name: "MSgt. Sarah Williams",
      title: "Innovation Coach",
      photo: "/placeholder.svg",
      email: "sarah.williams@us.af.mil",
      phone: "555-123-4570",
      bio: "Certified in creative problem solving and innovation methodologies. Facilitates innovation training."
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
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-fade-in">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Dedicated professionals committed to empowering innovation across RAF Mildenhall.
              </p>
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Innovation Lab Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {staffMembers.map((member, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <div className="h-full bg-accent/10 flex items-center justify-center p-6">
                          <div className="w-24 h-24 rounded-full bg-accent/20 overflow-hidden">
                            <img 
                              src={member.photo} 
                              alt={member.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 sm:w-2/3">
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-accent font-medium mb-3">{member.title}</p>
                        <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-accent" />
                            <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">{member.email}</a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-accent" />
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Meeting Section */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Schedule a Meeting</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Want to discuss an innovative idea or learn more about our services? 
                Book a meeting with our innovation team.
              </p>
              <Button className="rounded-full px-6 py-2 bg-accent hover:bg-accent/90 group">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Innovation Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Passionate about innovation and problem-solving? We're always looking for motivated 
                team members to join our mission of advancing innovation at RAF Mildenhall.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full px-6 py-2 border-2 border-primary group"
              >
                <span>View Opportunities</span>
                <ExternalLink className="ml-2 h-4 w-4 transition-opacity group-hover:opacity-100 opacity-70" />
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

export default Staff;
