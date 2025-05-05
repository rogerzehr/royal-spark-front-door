
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones, Play, Clock, ArrowRight, Mic, Calendar, Pause, Volume2, SkipBack, SkipForward, FileAudio } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { format } from 'date-fns';

const Podcasts = () => {
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [volume, setVolume] = useState(80);
  
  // Updated podcast episode for S1E1
  const podcastEpisodes = [
    {
      id: 1,
      title: "S1E1 Layered sUAS Defense",
      episode: "S1E1",
      duration: "45:22",
      date: new Date(2025, 3, 28), // April 28, 2025
      description: "This episode discusses how to layer defense on military installations to protect against small unmanned aerial systems (sUAS) activity, exploring cutting-edge countermeasures and strategic approaches.",
      audioFile: "/podcasts/suas-defense.wav",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&h=400",
      hosts: ["AI Royal Spark Members"],
      guests: ["Defense Systems Specialists"]
    }
  ];
  
  const togglePlay = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };
  
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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-fade-in">
                Royal Spark Podcasts
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Weekly discussions on innovation, leadership, and technology transforming the modern military environment.
              </p>
              <Button 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-all animate-fade-in delay-200 group"
              >
                <Headphones className="mr-2 h-5 w-5" />
                <span>Listen Now</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Episode</h2>
            <div className="max-w-5xl mx-auto">
              <Card className="bg-background border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-64 lg:h-auto relative">
                      <img 
                        src={podcastEpisodes[0].image} 
                        alt={podcastEpisodes[0].title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white/90 font-medium">{podcastEpisodes[0].episode}</span>
                          <h3 className="text-white text-2xl font-bold mt-1">{podcastEpisodes[0].title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-secondary" />
                            <span className="text-sm text-muted-foreground">{format(podcastEpisodes[0].date, 'MMMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-secondary" />
                            <span className="text-sm text-muted-foreground">{podcastEpisodes[0].duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">{podcastEpisodes[0].description}</p>
                        
                        <div className="space-y-3 mb-8">
                          <div>
                            <span className="text-sm font-medium">Hosts: </span>
                            <span className="text-sm text-muted-foreground">{podcastEpisodes[0].hosts.join(', ')}</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium">Guests: </span>
                            <span className="text-sm text-muted-foreground">{podcastEpisodes[0].guests.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <Button 
                            size="icon"
                            variant="outline"
                            className="h-12 w-12 rounded-full border-2"
                          >
                            <SkipBack className="h-5 w-5" />
                          </Button>
                          
                          <Button 
                            size="icon"
                            className="h-16 w-16 rounded-full bg-secondary hover:bg-secondary/90"
                            onClick={() => togglePlay(podcastEpisodes[0].id)}
                          >
                            {playingId === podcastEpisodes[0].id ? 
                              <Pause className="h-8 w-8" /> : 
                              <Play className="h-8 w-8 ml-1" />
                            }
                          </Button>
                          
                          <Button 
                            size="icon"
                            variant="outline"
                            className="h-12 w-12 rounded-full border-2"
                          >
                            <SkipForward className="h-5 w-5" />
                          </Button>
                          
                          <div className="flex items-center space-x-2 ml-2">
                            <Volume2 className="h-5 w-5 text-muted-foreground" />
                            <Slider
                              value={[volume]}
                              max={100}
                              step={1}
                              className="w-24"
                              onValueChange={(vals) => setVolume(vals[0])}
                            />
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button variant="outline" className="flex-1">
                            <FileAudio className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </Button>
                          <Button className="flex-1">
                            <span>Share Episode</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Suggest a Topic Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Mic className="h-12 w-12 text-accent animate-pulse-slow" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Have a Topic Suggestion?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for new innovation stories and insights to share. 
                If you have a topic idea or would like to be a guest, let us know.
              </p>
              <Button className="rounded-full px-6 py-2 bg-accent text-accent-foreground hover:bg-accent/90">
                Suggest a Topic
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

export default Podcasts;
