import { useState } from 'react';
import { Property, sampleProperties } from '../models/Property';
import { PropertyCard } from '../components/PropertyCard';
import { SearchBar } from '../components/SearchBar';
import { Sidebar } from '../components/Sidebar';

export function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState<Property[]>(sampleProperties);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = sampleProperties.filter(property =>
      property.title.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filtered);
  };

  const handleInvest = (property: Property) => {
    console.log(`Investing in property: ${property.title}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      
      <div className="flex-1">
        <header className="bg-gray-800 text-white py-4 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <span className="sr-only">Profile</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={handleSearch} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onInvest={handleInvest}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}