import React from 'react';
import { useSelector } from 'react-redux';
import { dataStore } from "../../../features/dataSlice"; // Make sure to import your dataSlice

export const DetailList = () => {
  const { selectedProperty } = useSelector(dataStore); // Access the selectedProperty

  if (!selectedProperty) {
    return <p>No property selected.</p>; // Fallback message if no property is selected
  }

  return (
    <div style={{ marginTop: 60, marginLeft: 60, padding: '20px', position: 'relative', zIndex: 100 }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        See the Detailed Information
      </h1>

      <div key={selectedProperty.id} style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', marginBottom: '10px' }}>
        <img
          src={selectedProperty.imageUrl || ''}
          alt={selectedProperty.name || 'Property Image'}
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '10px' }}
        />
        <p><strong>Property Name:</strong> {selectedProperty.name || 'Unknown'}</p>
        <p><strong>Location:</strong> {selectedProperty.location}</p>
        <p><strong>Price:</strong> ${selectedProperty.price}</p>
        <p><strong>Size:</strong> {selectedProperty.dimensions}</p>
        <p><strong>Bedrooms:</strong> {selectedProperty.number_of_beds}</p>
        <p><strong>Bathrooms:</strong> {selectedProperty.number_of_bathrooms}</p>
        {/* Add more fields here as necessary */}
      </div>
    </div>
  );
};
