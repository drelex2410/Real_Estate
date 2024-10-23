import { Property } from '../models/Property';
import { formatCurrency } from '../utils/formatters';
import { PropertyCarousel } from './PropertyCarousel';

interface PropertyCardProps {
  property: Property;
  onInvest: (property: Property) => void;
}

export function PropertyCard({ property, onInvest }: PropertyCardProps) {
  const progressPercentage = Math.round((property.currentInvestment / property.targetInvestment) * 100);

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <PropertyCarousel images={property.images} />
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{property.title}</h3>
        <p className="text-gray-400">{property.location}</p>
        
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-semibold text-white">
            {formatCurrency(property.price)}
          </span>
          <span className="text-purple-400">
            Min: {formatCurrency(property.minInvestment)}
          </span>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Investment Progress</span>
            <span className="text-purple-400">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-purple-500 rounded-full h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => onInvest(property)}
          className="w-full mt-4 bg-purple-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-600 transition-colors"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
}