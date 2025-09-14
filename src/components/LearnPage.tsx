import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Lightbulb, TrendingUp, Users, ArrowRight } from 'lucide-react';
import farmingEducationImage from '@/assets/farming-education.jpg';

interface LearnPageProps {
  onSectionChange: (section: string) => void;
}

const LearnPage = ({ onSectionChange }: LearnPageProps) => {
  const cropGuides = [
    {
      crop: "Rice 🌾",
      difficulty: "Easy",
      season: "Kharif",
      tips: ["Requires flooded fields", "pH 5.5-7.0 optimal", "High nitrogen needs"],
      yield: "4-6 tons/hectare"
    },
    {
      crop: "Maize 🌽", 
      difficulty: "Medium",
      season: "Kharif/Rabi",
      tips: ["Well-drained soil", "Consistent moisture", "Rich in organic matter"],
      yield: "8-12 tons/hectare"
    },
    {
      crop: "Cotton ☁️",
      difficulty: "Hard", 
      season: "Kharif",
      tips: ["Black cotton soil", "200+ frost-free days", "Pest management critical"],
      yield: "1.5-2.5 tons/hectare"
    }
  ];

  const soilTips = [
    {
      title: "Soil Testing",
      icon: "🧪",
      description: "Test soil every 2-3 years for pH, nutrients, and organic matter content."
    },
    {
      title: "Nutrient Management", 
      icon: "🌱",
      description: "Balance NPK ratios based on crop requirements and soil test results."
    },
    {
      title: "Organic Matter",
      icon: "🍂", 
      description: "Maintain 3-4% organic matter through compost, crop residues, and cover crops."
    },
    {
      title: "Water Management",
      icon: "💧",
      description: "Implement efficient irrigation and drainage systems for optimal moisture."
    }
  ];

  const aiBasics = [
    {
      title: "Machine Learning in Agriculture",
      description: "How AI algorithms analyze vast datasets to predict optimal crop selections",
      complexity: "Beginner"
    },
    {
      title: "Data Collection for Farming",
      description: "Understanding what data points matter most for agricultural AI systems", 
      complexity: "Intermediate"
    },
    {
      title: "Precision Agriculture",
      description: "Using AI for targeted interventions in farming practices",
      complexity: "Advanced"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Agricultural Knowledge Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enhance your farming expertise with our comprehensive guides, 
          best practices, and AI-powered insights.
        </p>
      </div>

      <Tabs defaultValue="crops" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="crops" className="flex items-center">
            <span className="mr-2">🌾</span>
            Crop Guides
          </TabsTrigger>
          <TabsTrigger value="soil" className="flex items-center">
            <span className="mr-2">🌱</span>
            Soil Health
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center">
            <span className="mr-2">🤖</span>
            AI Basics
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center">
            <span className="mr-2">📚</span>
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="crops" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cropGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{guide.crop}</span>
                    <Badge variant={guide.difficulty === 'Easy' ? 'default' : 
                                  guide.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                      {guide.difficulty}
                    </Badge>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Season: {guide.season} | Yield: {guide.yield}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Tips:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {guide.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Pro Tip
            </h3>
            <p className="text-muted-foreground">
              Crop rotation is essential for maintaining soil health. Rotate between nitrogen-fixing 
              legumes and nutrient-demanding cereals to naturally maintain soil fertility.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="soil" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Soil Health Fundamentals</h3>
              
              <div className="grid gap-4">
                {soilTips.map((tip, index) => (
                  <Card key={index} className="p-4 hover:shadow-soft transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{tip.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src={farmingEducationImage}
                alt="Educational farming practices"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>

          <Card className="p-6 bg-success/5 border-success/20">
            <h4 className="font-semibold text-success mb-3 flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              Soil pH Quick Guide
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-background rounded">
                <div className="font-bold text-destructive">4.5-5.5</div>
                <div>Very Acidic</div>
              </div>
              <div className="text-center p-3 bg-background rounded">
                <div className="font-bold text-warning">5.6-6.5</div>
                <div>Acidic</div>
              </div>
              <div className="text-center p-3 bg-background rounded">
                <div className="font-bold text-success">6.6-7.3</div>
                <div>Neutral (Ideal)</div>
              </div>
              <div className="text-center p-3 bg-background rounded">
                <div className="font-bold text-primary">7.4-8.5</div>
                <div>Alkaline</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <div className="grid gap-6">
            {aiBasics.map((topic, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h4 className="text-xl font-semibold text-foreground">{topic.title}</h4>
                      <Badge variant="outline">{topic.complexity}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-1 h-4 w-4" />
                    5-10 min read
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 gradient-bg">
            <h3 className="text-xl font-semibold text-primary-foreground mb-3 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              How Our AI Works
            </h3>
            <p className="text-primary-foreground/90 mb-4">
              Our recommendation system uses machine learning algorithms trained on thousands of 
              agricultural datasets, considering soil composition, weather patterns, and crop performance 
              to provide personalized recommendations.
            </p>
            <Button
              variant="secondary"
              onClick={() => onSectionChange('recommend')}
            >
              Try AI Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center">
                  <span className="mr-2">📖</span>
                  Crop Database
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive information on 22+ crops with ideal growing conditions.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Browse Database
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center">
                  <span className="mr-2">🌡️</span>
                  Weather Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how weather data influences our AI recommendations.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center">
                  <span className="mr-2">🤝</span>
                  Expert Network
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with agricultural experts and other farmers in your region.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Join Network
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearnPage;