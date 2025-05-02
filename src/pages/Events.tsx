
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarIcon, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from 'date-fns';

const Events = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<string>('all');
  
  // Sample upcoming events data with expanded details
  const upcomingEvents = [
    {
      id: 1,
      title: "Innovation Summit 2025",
      date: new Date(2025, 5, 15), // June 15, 2025
      time: "09:00 - 16:00",
      location: "Innovation Lab, Building 427",
      type: "summit",
      capacity: 75,
      currentRSVPs: 42,
      description: "Annual innovation showcase featuring projects from across RAF Mildenhall units. Join us for keynote speakers, project demonstrations, and networking opportunities."
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      date: new Date(2025, 4, 20), // May 20, 2025
      time: "13:00 - 15:30",
      location: "Conference Room A, Building 427",
      type: "workshop",
      capacity: 30,
      currentRSVPs: 18,
      description: "Hands-on workshop to learn the fundamentals of design thinking methodology. Participants will work through a real-world problem using the five stages of design thinking."
    },
    {
      id: 3,
      title: "Tech Talk: AI in Defense",
      date: new Date(2025, 4, 25), // May 25, 2025
      time: "14:00 - 15:30",
      location: "Auditorium, Building 425",
      type: "lecture",
      capacity: 50,
      currentRSVPs: 31,
      description: "Expert panel discussing the implications of AI in modern defense applications. Featuring speakers from the Defense Innovation Unit and USAF technology specialists."
    },
    {
      id: 4,
      title: "3D Printing Basics",
      date: new Date(2025, 4, 10), // May 10, 2025
      time: "10:00 - 12:00",
      location: "Innovation Lab, Building 427",
      type: "training",
      capacity: 15,
      currentRSVPs: 12,
      description: "Introduction to 3D printing technology and hands-on practice with our lab's equipment. Participants will design and print a simple object to take home."
    },
    {
      id: 5,
      title: "Innovation Challenge Kickoff",
      date: new Date(2025, 5, 5), // June 5, 2025
      time: "11:00 - 13:00",
      location: "Conference Hall, Building 425",
      type: "challenge",
      capacity: 100,
      currentRSVPs: 58,
      description: "Launch of our quarterly innovation challenge focusing on operational efficiency. Teams will receive challenge briefs and form groups to tackle real-world problems."
    },
    {
      id: 6,
      title: "Virtual Reality Demo Day",
      date: new Date(2025, 5, 22), // June 22, 2025
      time: "13:00 - 17:00",
      location: "Innovation Lab, Building 427",
      type: "demo",
      capacity: 40,
      currentRSVPs: 27,
      description: "Open house showcasing our virtual reality training applications. Drop in anytime during the event hours to test the latest VR equipment and applications."
    }
  ];
  
  // Filter events by selected date and type
  const filteredEvents = upcomingEvents.filter(event => {
    const dateMatch = !date || (
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
    
    const typeMatch = filter === 'all' || event.type === filter;
    
    return dateMatch && typeMatch;
  });
  
  // Group events by date for calendar view
  const eventsByDate = upcomingEvents.reduce<Record<string, typeof upcomingEvents>>((acc, event) => {
    const dateKey = format(event.date, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});

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
              <div className="flex justify-center space-x-4">
                <Button 
                  variant={view === 'list' ? 'default' : 'outline'} 
                  className="rounded-full" 
                  onClick={() => setView('list')}
                >
                  List View
                </Button>
                <Button 
                  variant={view === 'calendar' ? 'default' : 'outline'} 
                  className="rounded-full" 
                  onClick={() => setView('calendar')}
                >
                  Calendar View
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Listing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold mb-4 md:mb-0 text-center md:text-left">Calendar of Events</h2>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[240px] flex justify-between items-center">
                      <span>{date ? format(date, 'PPP') : 'Pick a date'}</span>
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="workshop">Workshops</SelectItem>
                      <SelectItem value="lecture">Lectures</SelectItem>
                      <SelectItem value="summit">Summits</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="challenge">Challenges</SelectItem>
                      <SelectItem value="demo">Demos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {view === 'list' ? (
              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <Card key={event.id} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-primary/10 p-6 flex flex-col justify-center items-center md:w-1/4">
                            <CalendarIcon className="h-10 w-10 text-primary mb-2" />
                            <p className="font-semibold text-center">{format(event.date, 'MMMM d, yyyy')}</p>
                          </div>
                          <div className="p-6 md:w-3/4">
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                                {event.type}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-primary" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-primary" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-border">
                              <div className="flex items-center mb-3 sm:mb-0">
                                <Users className="h-4 w-4 mr-2 text-primary" />
                                <span className="text-sm">{event.currentRSVPs} / {event.capacity} spots filled</span>
                              </div>
                              <Button className="w-full sm:w-auto">Register</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No events found for the selected date and filter.</p>
                    <Button variant="outline" className="mt-4" onClick={() => {setDate(undefined); setFilter('all');}}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-w-5xl mx-auto bg-background shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b bg-muted/20">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg">{format(date || new Date(), 'MMMM yyyy')}</h3>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={() => {
                        const newDate = new Date(date || new Date());
                        newDate.setMonth(newDate.getMonth() - 1);
                        setDate(newDate);
                      }}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => {
                        const newDate = new Date(date || new Date());
                        newDate.setMonth(newDate.getMonth() + 1);
                        setDate(newDate);
                      }}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                    modifiers={{
                      hasEvent: Object.keys(eventsByDate).map(dateKey => new Date(dateKey)),
                    }}
                    modifiersClassNames={{
                      hasEvent: "bg-primary/20 font-bold text-primary",
                    }}
                  />
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                      Events on {date ? format(date, 'MMMM d, yyyy') : 'Selected Date'}
                    </h4>
                    
                    {filteredEvents.length > 0 ? (
                      <div className="space-y-3">
                        {filteredEvents.map((event) => (
                          <Card key={event.id} className="bg-background border border-border">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className="font-medium">{event.title}</h5>
                                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{event.time}</span>
                                  </div>
                                </div>
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                                  {event.type}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm py-3">No events scheduled for this date.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
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
