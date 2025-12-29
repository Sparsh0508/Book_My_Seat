import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchLocationData = async (lat, lon) => {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
                );
                const data = await response.json();
                const userLocation = data?.address?.state;
                setLocation(userLocation);
                setLocation(data);
            } catch (err) {
                setError("Failed to fetch location data");
            } finally {
                setLoading(false);
            }
        }
        // fetch location data
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            fetchLocationData(latitude, longitude);
        }, (error) => {
            setError("Unable To retrieve your location");
            setLoading(false);
        });
    } , []);

    return (
        <LocationContext.Provider value={{location,loading,error}}>
            { children }
        </LocationContext.Provider>
    )
}

export const useLocation = () => useContext(LocationContext);