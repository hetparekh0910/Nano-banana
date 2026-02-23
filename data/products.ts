export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: {
    price: string;
    unit: string;
    processingParams: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
}

export const products: Product[] = [
  {
    id: 'mango',
    name: 'Cream Mango',
    subName: 'Pure sunshine.',
    price: '₹120',
    description: 'Rich in Vitamin C - No preservatives - 100% fruit',
    folderPath: '/images/mango',
    themeColor: '#FFB74D',
    gradient: 'linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)',
    features: ['Rich in Vitamin C', 'No preservatives', '100% fruit'],
    stats: [
      { label: 'Sugar', val: '0g' },
      { label: 'Water', val: '0%' },
      { label: 'Pulp', val: '100%' },
    ],
    section1: { title: 'Cream Mango.', subtitle: 'Pure sunshine.' },
    section2: {
      title: 'Bursting with fresh mango.',
      subtitle: 'Hand-picked Alphonso mangoes, perfectly ripened under the summer sun.',
    },
    section3: {
      title: 'Vitamin-packed refreshment.',
      subtitle: 'A natural energy boost that revitalizes your body and mind instantly.',
    },
    section4: { title: 'Made from fruit, not concentrate.', subtitle: '' },
    detailsSection: {
      title: 'The King of Fruits',
      description:
        'Our Cream Mango juice uses only the finest Ratnagiri Alphonso mangoes. Known for their rich sweetness and vibrant color, these mangoes are cold-pressed within hours of harvest to preserve every drop of nutrient-rich goodness. It\'s not just juice; it\'s a liquid gold experience.',
      imageAlt: 'Mango Details',
    },
    freshnessSection: {
      title: 'Farm to Bottle',
      description:
        'We believe in absolute transparency. From the orchard to the bottle, our process is designed to minimize oxidation and maximize flavor. HPP (High Pressure Processing) ensures that our juice stays safe and fresh without any heat treatment, keeping the vital enzymes and vitamins intact.',
    },
    buyNowSection: {
      price: '₹120',
      unit: 'per 300ml bottle',
      processingParams: ['Cold Pressed', 'Never Heated', 'HPP Treated'],
      deliveryPromise:
        'Next-day delivery available in metro cities. Chilled packaging ensures peak freshness.',
      returnPolicy:
        '100% Satisfaction Guarantee. Not happy? We\'ll replace it, no questions asked.',
    },
  },
  {
    id: 'orange',
    name: 'Fresh Orange',
    subName: 'Citrus perfection.',
    price: '₹130',
    description: 'Immunity Boost - Valencia Oranges - Pure Juice',
    folderPath: '/images/chocolate',
    themeColor: '#FF9500',
    gradient: 'linear-gradient(135deg, #FF9500 0%, #FF7500 100%)',
    features: ['Immunity Boost', 'Valencia Oranges', 'Pure Juice'],
    stats: [
      { label: 'Vitamin C', val: '200mg' },
      { label: 'Natural', val: '100%' },
      { label: 'Calories', val: '60kcal' },
    ],
    section1: { title: 'Fresh Orange.', subtitle: 'Citrus perfection.' },
    section2: {
      title: 'Sunshine in a bottle.',
      subtitle: 'Hand-squeezed Valencia oranges delivering pure citrus bliss.',
    },
    section3: {
      title: 'Vitamin C powerhouse.',
      subtitle: '200mg of natural immunity boost in every sip.',
    },
    section4: { title: 'Made from fruit, not concentrate.', subtitle: '' },
    detailsSection: {
      title: 'Golden Citrus Magic',
      description:
        'We work exclusively with Valencia oranges at peak ripeness. Our slow-squeeze hydraulic press extracts every drop without generating heat, preserving the delicate volatile oils that give oranges their distinctive aroma and taste. This is sunshine in its purest form—no concentrate, no added water, no compromise.',
      imageAlt: 'Orange Details',
    },
    freshnessSection: {
      title: 'Peak Ripeness Guarantee',
      description:
        'Our oranges are selected at the exact moment of peak ripeness—when vitamin C and natural sugars hit their perfect balance. Pressed within 4 hours of harvest, the juice is immediately HPP treated and bottled at 2°C. The result is a taste that captures the essence of summer, preserved without heat.',
    },
    buyNowSection: {
      price: '₹130',
      unit: 'per 300ml bottle',
      processingParams: ['Cold Pressed', 'Peak Ripeness', 'No Additives'],
      deliveryPromise:
        'Fresh-pressed oranges delivered within 48 hours. Taste the difference that speed makes.',
      returnPolicy: 'Not satisfied? Full refund or replacement, guaranteed.',
    },
  },
  {
    id: 'pomegranate',
    name: 'Ruby Pomegranate',
    subName: 'Antioxidant powerhouse.',
    price: '₹150',
    description: 'Heart Healthy - Cold Pressed - Immunity Booster',
    folderPath: '/images/pomegranate',
    themeColor: '#E57373',
    gradient: 'linear-gradient(135deg, #E57373 0%, #C62828 100%)',
    features: ['Heart Healthy', 'Cold Pressed', 'Immunity Booster'],
    stats: [
      { label: 'Additives', val: '0%' },
      { label: 'Vitamins', val: 'A,C,K' },
      { label: 'Purity', val: '100%' },
    ],
    section1: { title: 'Ruby Pomegranate.', subtitle: 'Nature\'s jewel.' },
    section2: {
      title: 'Explosion of flavor.',
      subtitle: 'Freshly pressed pomegranate arils delivering a tart and sweet sensation.',
    },
    section3: {
      title: 'Heart healthy goodness.',
      subtitle: 'Packed with powerful antioxidants to protect and rejuvenate.',
    },
    section4: { title: 'Pure juice, pure life.', subtitle: '' },
    detailsSection: {
      title: 'The Ruby Elixir',
      description:
        'Each bottle contains the juice of over 1 kg of premium pomegranates. We use a gentle pressing method to extract the juice from the arils without crushing the bitter pith. This results in a sweet, complex flavor profile that is unmatched by commercial concentrates.',
      imageAlt: 'Pomegranate Details',
    },
    freshnessSection: {
      title: 'Potent Preservation',
      description:
        'Pomegranate juice is highly sensitive to light and air. Our bottling line is designed to shield the juice from oxidation at every step. We bottle immediately after pressing to lock in the vibrant color and the potent punicalagins—unique antioxidants found only in pomegranate.',
    },
    buyNowSection: {
      price: '₹150',
      unit: 'per 300ml bottle',
      processingParams: ['Cold Pressed', 'Oxidation Shield', 'No Additives'],
      deliveryPromise:
        'Direct from the pressery to your doorstep. Guaranteed fresh upon arrival.',
      returnPolicy: 'Damaged in transit? Instant replacement available.',
    },
  },
];
