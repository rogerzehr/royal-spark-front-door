import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, FileText, ExternalLink, Calendar } from 'lucide-react';

const Staff = () => {
  const navigate = useNavigate();
  
  // Detailed staff data with pictures, duty descriptions, and expanded bios
  const staffMembers = [
    {
      name: "Maj. John Doe",
      title: "Innovation Lab Director",
      photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300",
      email: "john.doe@us.af.mil",
      phone: "555-123-4567",
      duty: "Directs all innovation lab activities, strategic planning, and stakeholder management",
      bio: "Maj. Doe has 10+ years experience in military innovation and digital transformation initiatives. He served as the Chief Digital Officer at Ramstein AB before joining RAF Mildenhall. John holds an MS in Computer Science from the Air Force Institute of Technology and has led multiple award-winning innovation projects across USAFE."
    },
    {
      name: "Capt. Jane Smith",
      title: "Innovation Officer",
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300",
      email: "jane.smith@us.af.mil",
      phone: "555-123-4568",
      duty: "Leads design thinking workshops, innovation training, and technology adoption initiatives",
      bio: "Capt. Smith specializes in UX/UI design and agile methodologies with a background in human-centered design. She previously worked with AFWERX to develop rapid prototype solutions for operational challenges. Jane has a BS in Systems Engineering from the Air Force Academy and is certified in Design Thinking from Stanford's d.school."
    },
    {
      name: "TSgt. Michael Johnson",
      title: "Technology Integration Specialist",
      photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300",
      email: "michael.johnson@us.af.mil",
      phone: "555-123-4569",
      duty: "Manages lab equipment, trains users on technology systems, and provides technical support",
      bio: "TSgt. Johnson is an expert in emerging technologies and their applications in military environments. With certifications in CompTIA A+, Network+, and Security+, he manages the lab's technical infrastructure and maintains all specialized equipment. Michael previously served as a Cyber Systems Operator and brings valuable expertise in systems integration."
    },
    {
      name: "MSgt. Sarah Williams",
      title: "Innovation Coach",
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300",
      email: "sarah.williams@us.af.mil",
      phone: "555-123-4570",
      duty: "Facilitates innovation training, coaches project teams, and manages the innovation pipeline",
      bio: "MSgt. Williams is certified in creative problem solving and innovation methodologies. She leads the lab's training programs and mentors project teams through the innovation process. With previous experience at the Air Force CyberWorx, Sarah specializes in bringing diverse teams together to solve complex challenges through collaborative innovation."
    },
    {
      name: "1Lt. David Rodriguez",
      title: "Innovation Strategy Officer",
      photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300",
      email: "david.rodriguez@us.af.mil",
      phone: "555-123-4571",
      duty: "Develops innovation strategy, facilitates stakeholder engagement, and manages metrics collection",
      bio: "1Lt. Rodriguez brings expertise in strategic planning and data analytics to the innovation lab. With an MBA from the University of Michigan, he leads our measurement and evaluation efforts to demonstrate impact and return on investment. David previously worked with the Defense Innovation Unit on several national security innovation initiatives."
    },
    {
      name: "A1C Emma Chen",
      title: "Digital Media Specialist",
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300",
      email: "emma.chen@us.af.mil",
      phone: "555-123-4572",
      duty: "Creates digital content, manages social media, and documents innovation activities",
      bio: "A1C Chen specializes in digital media production including photography, videography, and graphic design. She manages the lab's digital presence and creates compelling content to showcase innovation activities. With a background in multimedia design, Emma helps tell the story of innovation across RAF Mildenhall through various digital channels."
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {staffMembers.map((member, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-2/5">
                        <div className="h-full bg-accent/10 flex items-center justify-center p-6">
                          <div className="w-32 h-32 rounded-full bg-accent/20 overflow-hidden">
                            <img 
                              src={member.photo} 
                              alt={member.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 sm:w-3/5">
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-accent font-medium mb-2">{member.title}</p>
                        
                        <div className="flex items-center mb-3 text-sm">
                          <FileText className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-muted-foreground">{member.duty}</span>
                        </div>
                        
                        <div className="border-t border-border pt-3 mt-3">
                          <h4 className="font-medium mb-2">Biography:</h4>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                        </div>
                        
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
