import { CropType, CropInputs, CropRecommendation } from '@/types/crop';
import { idealConditions, cropIcons, CROPS } from '@/data/cropData';

const normalize = (val: number, idealVal: number, range: number): number => 
  Math.max(0, 1 - Math.abs(val - idealVal) / range);

export const calculateSimilarity = (cropName: CropType, userInputs: CropInputs): number => {
  const ideal = idealConditions[cropName];
  let score = 0;
  const maxScore = 7;

  score += normalize(userInputs.N, ideal.N, 50);
  score += normalize(userInputs.P, ideal.P, 40);
  score += normalize(userInputs.K, ideal.K, 40);
  score += normalize(userInputs.temperature, ideal.temp, 15);
  score += normalize(userInputs.rainfall, ideal.rain, 100);
  score += normalize(userInputs.ph, ideal.ph, 2);
  if (userInputs.soil_type === ideal.soil) score += 1;

  return score / maxScore;
};

export const getRecommendations = (inputs: CropInputs): CropRecommendation[] => {
  const similarities = CROPS.map(crop => ({
    crop,
    similarity: calculateSimilarity(crop, inputs),
    icon: cropIcons[crop]
  }));

  const sorted = [...similarities].sort((a, b) => b.similarity - a.similarity);
  
  return sorted.slice(0, 5).map(item => ({
    crop: item.crop,
    confidence: `${(item.similarity * 100).toFixed(1)}%`,
    suitability: item.similarity > 0.7 ? 'Excellent' : 
                 item.similarity > 0.5 ? 'Good' : 'Moderate',
    icon: item.icon,
    similarity: item.similarity
  }));
};

export const getCropDetails = (cropName: CropType) => {
  return {
    ideal: idealConditions[cropName],
    icon: cropIcons[cropName]
  };
};