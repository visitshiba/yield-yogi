import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { CropInputs, SOIL_CATEGORIES } from '@/types/crop';
import { getRecommendations, getCropDetails } from '@/utils/cropRecommendation';
import { featureImportance } from '@/data/cropData';
import { useToast } from '@/hooks/use-toast';

interface RecommendationPageProps {
  onSectionChange: (section: string) => void;
}

const RecommendationPage = ({ onSectionChange }: RecommendationPageProps) => {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<CropInputs>({
    N: 0,
    P: 0,
    K: 0,
    temperature: 0,
    rainfall: 0,
    ph: 7,
    soil_type: ''
  });
  
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof CropInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSoilChange = (value: string) => {
    setInputs(prev => ({ ...prev, soil_type: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputs.soil_type) {
      toast({
        title: "Missing Information",
        description: "Please select a soil type.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = getRecommendations(inputs);
      setRecommendations(results);
      setShowResults(true);
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete! 🌾",
        description: `Found ${results.length} crop recommendations for your conditions.`,
      });
    }, 2000);
  };

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case 'Excellent': return 'bg-success text-success-foreground';
      case 'Good': return 'bg-primary text-primary-foreground';
      case 'Moderate': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          AI Crop Recommendation System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enter your soil and environmental conditions to get personalized crop recommendations 
          powered by machine learning algorithms.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2">🧪</span>
                Soil & Environmental Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="nitrogen">Nitrogen (N) - mg/kg</Label>
                    <Input
                      id="nitrogen"
                      type="number"
                      min="0"
                      max="200"
                      placeholder="e.g., 90"
                      value={inputs.N || ''}
                      onChange={(e) => handleInputChange('N', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phosphorus">Phosphorus (P) - mg/kg</Label>
                    <Input
                      id="phosphorus"
                      type="number"
                      min="0"
                      max="200"
                      placeholder="e.g., 42"
                      value={inputs.P || ''}
                      onChange={(e) => handleInputChange('P', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="potassium">Potassium (K) - mg/kg</Label>
                    <Input
                      id="potassium"
                      type="number"
                      min="0"
                      max="300"
                      placeholder="e.g., 43"
                      value={inputs.K || ''}
                      onChange={(e) => handleInputChange('K', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="temperature">Temperature - °C</Label>
                    <Input
                      id="temperature"
                      type="number"
                      min="-10"
                      max="50"
                      step="0.1"
                      placeholder="e.g., 27.5"
                      value={inputs.temperature || ''}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rainfall">Rainfall - mm</Label>
                    <Input
                      id="rainfall"
                      type="number"
                      min="0"
                      max="500"
                      placeholder="e.g., 200"
                      value={inputs.rainfall || ''}
                      onChange={(e) => handleInputChange('rainfall', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="ph">pH Level</Label>
                    <Input
                      id="ph"
                      type="number"
                      min="0"
                      max="14"
                      step="0.1"
                      placeholder="e.g., 6.5"
                      value={inputs.ph || ''}
                      onChange={(e) => handleInputChange('ph', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="soil">Soil Type</Label>
                    <Select onValueChange={handleSoilChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        {SOIL_CATEGORIES.map((soil) => (
                          <SelectItem key={soil} value={soil}>
                            {soil.replace('_', ' ').toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Get Recommendations'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          {showResults && recommendations.length > 0 ? (
            <div className="space-y-6">
              {/* Feature Importance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Model Feature Importance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {featureImportance.map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-2xl mb-1">{feature.icon}</div>
                        <div className="font-semibold text-sm">{feature.feature}</div>
                        <div className="text-primary font-bold">
                          {(feature.importance * 100).toFixed(1)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Recommended Crops for Your Conditions
                </h3>
                
                {recommendations.map((crop, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{crop.icon}</div>
                          <div>
                            <h4 className="text-xl font-semibold capitalize text-foreground">
                              {crop.crop}
                            </h4>
                            <p className="text-muted-foreground">
                              Confidence: {crop.confidence}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right space-y-2">
                          <Badge className={getSuitabilityColor(crop.suitability)}>
                            {crop.suitability === 'Excellent' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {crop.suitability === 'Good' && <TrendingUp className="w-3 h-3 mr-1" />}
                            {crop.suitability === 'Moderate' && <AlertCircle className="w-3 h-3 mr-1" />}
                            {crop.suitability}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            Rank #{index + 1}
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Ideal Conditions:</strong>
                          <div className="mt-2 space-y-1 text-muted-foreground">
                            {(() => {
                              const details = getCropDetails(crop.crop as any);
                              return (
                                <>
                                  <div>• N: {details.ideal.N} mg/kg</div>
                                  <div>• P: {details.ideal.P} mg/kg</div>
                                  <div>• K: {details.ideal.K} mg/kg</div>
                                </>
                              );
                            })()}
                          </div>
                        </div>
                        <div>
                          <strong>Environmental:</strong>
                          <div className="mt-2 space-y-1 text-muted-foreground">
                            {(() => {
                              const details = getCropDetails(crop.crop as any);
                              return (
                                <>
                                  <div>• Temp: {details.ideal.temp}°C</div>
                                  <div>• Rain: {details.ideal.rain}mm</div>
                                  <div>• pH: {details.ideal.ph}</div>
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : !showResults ? (
            <Card className="h-96 flex items-center justify-center">
              <CardContent className="text-center">
                <div className="text-6xl mb-4">🌾</div>
                <h3 className="text-xl font-semibold mb-2">Ready to Analyze Your Soil</h3>
                <p className="text-muted-foreground">
                  Fill in your soil and environmental data to get AI-powered crop recommendations.
                </p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;