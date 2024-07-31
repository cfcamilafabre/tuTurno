import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapComponent.module.css'
const MapComponent = () => {
  return (
    <>
    <div className={styles.titlesContainer}>
    <h4>UBICACIÓN</h4>
    <h3 className={styles.title}>Dónde encontrarnos</h3>
    </div>
    <div className={styles.mapsContainer}>
    <MapContainer center={[-37.3287, -59.1369]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-37.3287, -59.1369]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    </>
  );
};

export default MapComponent;