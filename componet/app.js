import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const App = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <header>
        <h1>My React Landing Page</h1>
      </header>
      <main>
        <p>Welcome to my awesome landing page!</p>
        <LoadScript
          googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
        >
          <MapContainer>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </MapContainer>
        </LoadScript>
      </main>
    </div>
  );
};

export default App;