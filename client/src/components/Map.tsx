import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import LocationFinder from './hook-map';
import useMap from './use-map';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

function Map() {
  const { position, setPosition } = useMap();

  if (!position) {
    return <p>Buscando localização...</p>;
  }

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={position} zoom={15} style={{ height: '500px', width: '800px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <LocationFinder onLocationFound={(lat, lng) => setPosition([lat, lng])} />

        <Marker position={position}>
          <Popup>Você está aqui!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
