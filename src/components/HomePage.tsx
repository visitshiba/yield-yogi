import { ArrowRight, Brain, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import aiAgricultureImage from '@/assets/ai-agriculture.jpg';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage = ({ onSectionChange }: HomePageProps) => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Recommendations",
      description: "Advanced machine learning algorithms analyze soil conditions to recommend the best crops for your land."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights", 
      description: "Get detailed analytics on nutrient levels, weather patterns, and soil composition for optimal farming."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Knowledge",
      description: "Access agricultural expertise and best practices tailored to your specific farming conditions."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Farmers Helped" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "22", label: "Crop Types" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smart Crop
                  <span className="text-primary block">Recommendations</span>
                  <span className="text-accent">with AI</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Maximize your harvest with data-driven crop recommendations. 
                  Our AI analyzes soil conditions, weather patterns, and agricultural best practices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onSectionChange('recommend')}
                  className="px-8 py-4 text-lg rounded-full gradient-bg hover:shadow-glow transition-all duration-300 animate-pulse-slow"
                >
                  Get Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onSectionChange('learn')}
                  className="px-8 py-4 text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              <img
                src={heroImage}
                alt="Modern agricultural landscape with AI technology"
                className="relative z-10 w-full h-auto rounded-3xl shadow-strong animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Why Choose Yield X AI?
              </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge technology combines agricultural expertise with artificial intelligence 
              to provide you with the most accurate crop recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 card-gradient border-primary/10 animate-bounce-soft" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Advanced AI Technology for Agriculture
              </h3>
              <p className="text-lg text-muted-foreground">
                Our machine learning models are trained on extensive agricultural datasets, 
                weather patterns, and soil composition data to provide recommendations with 95% accuracy.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time soil analysis and recommendations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Weather pattern integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Crop rotation optimization
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img
                src={aiAgricultureImage}
                alt="AI agriculture technology illustration"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-primary-foreground">
              Ready to Optimize Your Harvest?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Get started with our AI-powered crop recommendations and transform your farming practices today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onSectionChange('recommend')}
              className="px-8 py-4 text-lg rounded-full hover:shadow-glow transition-all duration-300"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;