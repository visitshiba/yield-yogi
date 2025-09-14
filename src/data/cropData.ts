import { CropType, IdealConditions, FeatureImportance, CROPS } from '@/types/crop';

export { CROPS } from '@/types/crop';

export const idealConditions: Record<CropType, IdealConditions> = {
  rice: { N: 90, P: 42, K: 43, temp: 27, rain: 200, ph: 5.8, soil: 'clay_loam' },
  maize: { N: 95, P: 40, K: 40, temp: 23, rain: 80, ph: 6.2, soil: 'loam' },
  chickpea: { N: 40, P: 67, K: 56, temp: 21, rain: 65, ph: 6.3, soil: 'loam' },
  kidneybeans: { N: 20, P: 67, K: 20, temp: 20, rain: 180, ph: 5.6, soil: 'loam' },
  pigeonpeas: { N: 21, P: 67, K: 48, temp: 27, rain: 101, ph: 7.0, soil: 'clay_loam' },
  mothbeans: { N: 23, P: 48, K: 50, temp: 28, rain: 50, ph: 6.8, soil: 'sandy_loam' },
  mungbean: { N: 21, P: 46, K: 74, temp: 28, rain: 85, ph: 6.2, soil: 'loam' },
  blackgram: { N: 38, P: 67, K: 72, temp: 30, rain: 65, ph: 7.0, soil: 'clay_loam' },
  lentil: { N: 19, P: 69, K: 69, temp: 24, rain: 65, ph: 6.8, soil: 'loam' },
  pomegranate: { N: 19, P: 133, K: 203, temp: 21, rain: 127, ph: 6.5, soil: 'sandy_loam' },
  banana: { N: 100, P: 75, K: 50, temp: 27, rain: 100, ph: 6.0, soil: 'clay_loam' },
  mango: { N: 19, P: 133, K: 203, temp: 27, rain: 99, ph: 5.7, soil: 'sandy_loam' },
  grapes: { N: 23, P: 132, K: 200, temp: 23, rain: 95, ph: 6.0, soil: 'sandy_loam' },
  watermelon: { N: 100, P: 74, K: 50, temp: 26, rain: 87, ph: 6.0, soil: 'sandy' },
  muskmelon: { N: 100, P: 74, K: 50, temp: 28, rain: 90, ph: 6.0, soil: 'sandy' },
  apple: { N: 20, P: 133, K: 203, temp: 22, rain: 155, ph: 5.8, soil: 'loam' },
  orange: { N: 20, P: 133, K: 203, temp: 22, rain: 102, ph: 7.0, soil: 'clay_loam' },
  papaya: { N: 50, P: 56, K: 60, temp: 25, rain: 144, ph: 6.0, soil: 'loam' },
  coconut: { N: 22, P: 100, K: 120, temp: 27, rain: 150, ph: 5.5, soil: 'sandy_loam' },
  cotton: { N: 118, P: 46, K: 26, temp: 24, rain: 65, ph: 8.0, soil: 'clay_loam' },
  jute: { N: 79, P: 42, K: 44, temp: 25, rain: 180, ph: 6.5, soil: 'clay_loam' },
  coffee: { N: 101, P: 28, K: 30, temp: 23, rain: 180, ph: 6.0, soil: 'volcanic' }
};

export const cropIcons: Record<CropType, string> = {
  rice: '🌾', maize: '🌽', chickpea: '🌱', kidneybeans: '🫘', pigeonpeas: '🟤',
  mothbeans: '🤎', mungbean: '🟢', blackgram: '⚫', lentil: '🔸', pomegranate: '🟥',
  banana: '🍌', mango: '🥭', grapes: '🍇', watermelon: '🍉', muskmelon: '🍈',
  apple: '🍎', orange: '🍊', papaya: '🧡', coconut: '🥥', cotton: '☁️', jute: '🪵', coffee: '☕'
};

export const featureImportance: FeatureImportance[] = [
  { feature: 'N', importance: 0.18, icon: '🧪' },
  { feature: 'P', importance: 0.15, icon: '🔬' },
  { feature: 'K', importance: 0.16, icon: '⚗️' },
  { feature: 'Temperature', importance: 0.20, icon: '🌡️' },
  { feature: 'Rainfall', importance: 0.17, icon: '🌧️' },
  { feature: 'pH', importance: 0.14, icon: '📊' }
];