
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
  
  // Sample podcast episodes with .wav files and images
  const podcastEpisodes = [
    {
      id: 1,
      title: "Innovation in the Modern Military",
      episode: "EP 12",
      duration: "45:22",
      date: new Date(2025, 3, 28), // April 28, 2025
      description: "Discussion with Wing leadership on fostering a culture of innovation across all units.",
      audioFile: "/podcasts/innovation-military.wav",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      hosts: ["Maj. John Doe", "Col. Rebecca Smith"],
      guests: ["Wing Commander", "Innovation Officer"]
    },
    {
      id: 2,
      title: "Design Thinking for Mission Success",
      episode: "EP 11",
      duration: "38:15",
      date: new Date(2025, 3, 21), // April 21, 2025
      description: "How applying design thinking methodologies can improve mission effectiveness and streamline operations.",
      audioFile: "/podcasts/design-thinking.wav",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400",
      hosts: ["Capt. Jane Smith"],
      guests: ["Dr. Michael Johnson, Design Thinking Expert"]
    },
    {
      id: 3,
      title: "Technology Adoption: Challenges and Opportunities",
      episode: "EP 10",
      duration: "42:08",
      date: new Date(2025, 3, 14), // April 14, 2025
      description: "Exploring the barriers to tech adoption in military settings and strategies for overcoming them.",
      audioFile: "/podcasts/tech-adoption.wav",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
      hosts: ["TSgt. Michael Johnson", "Capt. Jane Smith"],
      guests: ["Chief Digital Transformation Officer"]
    },
    {
      id: 4,
      title: "Leading Innovation Teams",
      episode: "EP 09",
      duration: "39:45",
      date: new Date(2025, 3, 7), // April 7, 2025
      description: "Leadership strategies for building high-performing innovation teams in military environments.",
      audioFile: "/podcasts/innovation-teams.wav",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400",
      hosts: ["Maj. John Doe"],
      guests: ["Leadership Development Specialist"]
    },
    {
      id: 5,
      title: "Virtual Reality Training Applications",
      episode: "EP 08",
      duration: "44:30",
      date: new Date(2025, 2, 31), // March 31, 2025
      description: "How virtual reality is revolutionizing military training programs and improving readiness.",
      audioFile: "/podcasts/vr-training.wav",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
      hosts: ["TSgt. Michael Johnson"],
      guests: ["VR Training Systems Developer"]
    },
    {
      id: 6,
      title: "Agile Methodology for Military Operations",
      episode: "EP 07",
      duration: "41:17",
      date: new Date(2025, 2, 24), // March 24, 2025
      description: "Adapting agile project management principles for military operational planning and execution.",
      audioFile: "/podcasts/agile-military.wav",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      hosts: ["Capt. Jane Smith", "MSgt. Sarah Williams"],
      guests: ["Agile Coach and Former Military Officer"]
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

        {/* Latest Episodes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {podcastEpisodes.slice(1).map((episode) => (
                <Card key={episode.id} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col">
                  <div className="h-48 relative">
                    <img 
                      src={episode.image} 
                      alt={episode.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Button 
                      size="icon"
                      className="h-12 w-12 rounded-full absolute bottom-4 right-4 bg-secondary hover:bg-secondary/90"
                      onClick={() => togglePlay(episode.id)}
                    >
                      {playingId === episode.id ? 
                        <Pause className="h-6 w-6" /> : 
                        <Play className="h-6 w-6 ml-0.5" />
                      }
                    </Button>
                    <div className="absolute top-4 left-4 bg-secondary/80 text-white px-2 py-1 text-xs font-medium rounded">
                      {episode.episode}
                    </div>
                  </div>
                  <CardContent className="p-5 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{format(episode.date, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{episode.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{episode.description}</p>
                    
                    <div className="flex justify-between pt-3 border-t border-border text-sm">
                      <Button variant="ghost" size="sm" className="px-2">
                        <FileAudio className="h-4 w-4 mr-1" />
                        <span>Download</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="px-2">
                        <span>Details</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button 
                variant="outline" 
                className="rounded-full px-6 py-2 border-2 border-secondary group"
              >
                <span>View All Episodes</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Our Podcast</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Never miss an episode. Available on all major podcast platforms.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="rounded-full px-6 py-2 border-2 border-secondary">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Apple Podcasts
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-2 border-2 border-secondary">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Spotify
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-2 border-2 border-secondary">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Google Podcasts
                </Button>
              </div>
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
