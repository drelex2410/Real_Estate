export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  expectedRentalIncome: number;
  projectedAppreciation: number;
  minInvestment: number;
  currentInvestment: number;
  targetInvestment: number;
  investorCount: number;
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Luxury 2-bedroom apartment in prime location',
    price: 500000,
    location: 'Downtown, City',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800'
    ],
    expectedRentalIncome: 2500,
    projectedAppreciation: 5.5,
    minInvestment: 10000,
    currentInvestment: 250000,
    targetInvestment: 500000,
    investorCount: 12
  },
  {
    id: '2',
    title: 'Commercial Complex',
    description: 'High-yield commercial property',
    price: 1200000,
    location: 'Business District',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
    ],
    expectedRentalIncome: 8000,
    projectedAppreciation: 7.2,
    minInvestment: 25000,
    currentInvestment: 600000,
    targetInvestment: 1200000,
    investorCount: 18
  },
  {
    id: '3',
    title: 'Luxury Villa Complex',
    description: 'Exclusive gated community with premium amenities',
    price: 2500000,
    location: 'Suburban Elite',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
    ],
    expectedRentalIncome: 12000,
    projectedAppreciation: 8.5,
    minInvestment: 50000,
    currentInvestment: 1500000,
    targetInvestment: 2500000,
    investorCount: 25
  }
];