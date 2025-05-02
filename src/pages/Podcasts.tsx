
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones, Play, Clock, ArrowRight, ExternalLink, Mic, Calendar } from 'lucide-react';

const Podcasts = () => {
  const navigate = useNavigate();
  
  // Sample podcast episodes
  const podcastEpisodes = [
    {
      title: "Innovation in the Modern Military",
      episode: "EP 12",
      duration: "45 mins",
      date: "April 28, 2025",
      description: "Discussion with Wing leadership on fostering a culture of innovation across all units."
    },
    {
      title: "Design Thinking for Mission Success",
      episode: "EP 11",
      duration: "38 mins",
      date: "April 21, 2025",
      description: "How applying design thinking methodologies can improve mission effectiveness and streamline operations."
    },
    {
      title: "Technology Adoption: Challenges and Opportunities",
      episode: "EP 10",
      duration: "42 mins",
      date: "April 14, 2025",
      description: "Exploring the barriers to tech adoption in military settings and strategies for overcoming them."
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

        {/* Latest Episodes */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Episodes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {podcastEpisodes.map((episode, index) => (
                <Card key={index} className="bg-background border-0 shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-secondary/10 p-6 flex flex-col justify-center items-center md:w-1/4">
                        <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                          <Play className="h-8 w-8 text-secondary ml-1" />
                        </div>
                        <p className="font-semibold text-center">{episode.episode}</p>
                      </div>
                      <div className="p-6 md:w-3/4">
                        <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                        <p className="text-muted-foreground mb-4">{episode.description}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <Clock className="h-4 w-4 mr-2 text-secondary" />
                            <span>{episode.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-secondary" />
                            <span>{episode.date}</span>
                          </div>
                        </div>
                      </div>
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
