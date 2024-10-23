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

export class PropertyModel {
  static sampleProperties: Property[] = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      description: 'Luxury 2-bedroom apartment in prime location',
      price: 500000,
      location: 'Downtown, City',
      images: ['~/assets/property1.jpg'],
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
      images: ['~/assets/property2.jpg'],
      expectedRentalIncome: 8000,
      projectedAppreciation: 7.2,
      minInvestment: 25000,
      currentInvestment: 600000,
      targetInvestment: 1200000,
      investorCount: 18
    }
  ];
}