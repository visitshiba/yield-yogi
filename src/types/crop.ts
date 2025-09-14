export interface CropInputs {
  N: number;
  P: number;
  K: number;
  temperature: number;
  rainfall: number;
  ph: number;
  soil_type: string;
}

export interface CropRecommendation {
  crop: string;
  confidence: string;
  suitability: 'Excellent' | 'Good' | 'Moderate';
  icon: string;
  similarity: number;
}

export interface IdealConditions {
  N: number;
  P: number;
  K: number;
  temp: number;
  rain: number;
  ph: number;
  soil: string;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  icon: string;
}

export const SOIL_CATEGORIES = [
  'clay', 'clay_loam', 'loam', 'sandy_loam', 
  'sandy', 'well_drained', 'volcanic'
] as const;

export const CROPS = [
  'rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
  'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
  'banana', 'mango', 'grapes', 'watermelon', 'muskmelon',
  'apple', 'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee'
] as const;

export type CropType = typeof CROPS[number];
export type SoilType = typeof SOIL_CATEGORIES[number];