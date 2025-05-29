import {useState, useEffect} from 'react';

const useMap = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const {latitude, longitude} = pos.coords;
                console.log('Localização inicial:', latitude, longitude);
                setPosition([latitude, longitude]);
            },
            err => {
                console.log(err);
                setPosition([-7.2306, -35.8811]);
            }
        );
    }, []);

    return {
        position,
        setPosition
    };
};

export default useMap;
