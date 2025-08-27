import React from "react";

const Weather = ({ weather }) => {
    if (!weather) return <p className="infoWeath">Enter a city and press the button.</p>;

    const { name, sys, weather: weatherInfo, main, wind } = weather;
    const icon = weatherInfo?.[0]?.icon;
    const description = weatherInfo?.[0]?.description ?? "—";

    return (
        <div
            style={{
                background: "#235d9c",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                maxWidth: "350px",
                margin: "0 auto"
            }}
        >
            <h3>
                {name}{sys?.country ? `, ${sys.country}` : ""}
            </h3>
            <p style={{ fontSize: "18px", margin: "10px 0" }}>
                {description}{" "}
                {icon && (
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={description}
                        style={{ verticalAlign: "middle" }}
                    />
                )}
            </p>
            <p><b>🌡 Temp:</b> {Math.round(main?.temp)}°C</p>
            <p><b>💨 Wind:</b> {wind?.speed} m/s</p>
            <p><b>💧 Humidity:</b> {main?.humidity}%</p>
        </div>
    );
};

export default Weather;
