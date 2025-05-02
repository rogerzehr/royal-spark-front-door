
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Events = () => {
  const navigate = useNavigate();
  
  // Sample upcoming events data
  const upcomingEvents = [
    {
      title: "Innovation Summit 2025",
      date: "June 15, 2025",
      time: "09:00 - 16:00",
      location: "Innovation Lab, Building 427",
      description: "Annual innovation showcase featuring projects from across RAF Mildenhall units."
    },
    {
      title: "Design Thinking Workshop",
      date: "May 20, 2025",
      time: "13:00 - 15:30",
      location: "Conference Room A, Building 427",
      description: "Hands-on workshop to learn the fundamentals of design thinking methodology."
    },
    {
      title: "Tech Talk: AI in Defense",
      date: "May 25, 2025",
      time: "14:00 - 15:30",
      location: "Auditorium, Building 425",
      description: "Expert panel discussing the implications of AI in modern defense applications."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
                Upcoming Events
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Join us for workshops, seminars, and innovation challenges designed to foster creativity and problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Events Listing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Calendar of Events</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary/10 p-6 flex flex-col justify-center items-center md:w-1/4">
                        <Calendar className="h-10 w-10 text-primary mb-2" />
                        <p className="font-semibold text-center">{event.date}</p>
                      </div>
                      <div className="p-6 md:w-3/4">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.location}</span>
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

        {/* Add to Calendar Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Want to Stay Updated?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Subscribe to our calendar to never miss an innovation event or workshop.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="rounded-full px-6 py-2 bg-primary hover:bg-primary/90">
                  Add to Calendar
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-2 border-2 border-primary">
                  Submit an Event
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Host Your Event Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Host Your Innovation Event</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Royal Spark Innovation Lab offers facilities for innovation-focused workshops, 
                training sessions, and collaborative meetings. Reach out to learn more about hosting your next event.
              </p>
              <Button 
                className="group rounded-full px-6 py-2 bg-secondary hover:bg-secondary/90"
              >
                <span>Contact Us</span>
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

export default Events;
