import React from 'react';
import { useSelector } from 'react-redux';
import { dataStore } from "../../../features/dataSlice"; // Make sure to import your dataSlice
import { useLocation } from 'react-router-dom';
import { property } from '../../../data/dummyData';

export const DetailList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // Get the value of 'id'

  const selectedProperty = (property.filter((row) => row.id == id))[0];

  return (
    <div>
      <center><h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '70px' }}>
        See the Detailed Information
      </h1>
      </center>

      <div  key={selectedProperty.id} style={{float : 'left', fontSize: '16px', color: '#555', lineHeight: '1.6', marginLeft : '600px', marginTop : '100px', textAlign : "left", fontSize : '20px' }}>
        <p><strong>Property Name:</strong> {selectedProperty.name || 'Unknown'}</p>
        <p><strong>Location:</strong> {selectedProperty.location}</p>
        <p><strong>Price:</strong> ${selectedProperty.price}</p>
        <p><strong>Size:</strong> {selectedProperty.dimensions}</p>
        <p><strong>Bedrooms:</strong> {selectedProperty.number_of_beds}</p>
        <p><strong>Bathrooms:</strong> {selectedProperty.number_of_bathrooms}</p>
        {/* Add more fields here as necessary */}
      </div>

      <div style={{float : 'right'}}>
      <img
          src={selectedProperty.image || ''}
          alt={selectedProperty.name || 'Property Image'}
          style={{ width: '420px', maxHeight: '850px', objectFit: 'cover', marginBottom: '10px', marginRight : '500px', marginTop : '70px' }}
        />
      </div>
    </div>
    
  );
};
