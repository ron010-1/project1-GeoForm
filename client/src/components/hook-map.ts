import {useMapEvents} from 'react-leaflet';

export default function LocationFinder({onLocationFound}: {onLocationFound: (lat: number, lng: number) => void}) {
    useMapEvents({
        click: e => {
            e.target.locate();
        },
        locationfound: e => {
            onLocationFound(e.latlng.lat, e.latlng.lng);
        }
    });

    return null;
};

