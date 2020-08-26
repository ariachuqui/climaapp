import React from "react";
import { useFetch } from "../hooks/useFetch";

export const ClimaInfo = ({ state }) => {
    const { ciudad, pais } = state;

    const { data, loading, error } = useFetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
            ciudad
        )},${encodeURI(ciudad.toLowerCase())},${encodeURI(
            pais.toLowerCase()
        )}&appid=14102c28fea70f99dd24594471ee595b`
    );

    const handleError = () => {
        if (error) {
            return <p className="error">CIUDAD NO ENCONTRADA</p>;
        } else {
            const { temp, temp_max, temp_min } = !!data && data.main;
            return (
                <div className="clima-container">
                    <p>El clima en {ciudad} es:</p>
                    <p className="temperatura">{parseInt(temp - 273.15)} ºc</p>
                    <p>Temperatura Máxima: {parseInt(temp_max - 273.15)}ºc</p>
                    <p>Temperatura Minima: {parseInt(temp_min - 273.15)} ºc</p>
                </div>
            );
        }
    };

    return (
        <>
            {loading ? (
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            ) : (
                handleError()
            )}
        </>
    );
};
