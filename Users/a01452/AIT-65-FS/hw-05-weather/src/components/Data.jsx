import React, { useState } from "react";
import Weather from "./Weather.jsx";
import Joke from "./Joke.jsx";

const API_KEY = "a5bb405c7e018222b6b78d9f7eb57c2a"; // вставь сюда ключ OpenWeatherMap

const Data = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(`${data.setup} — ${data.punchline}`);
        } catch {
            setJoke("😅 Couldn't load a joke...");
        }
    };

    const fetchWeather = async () => {
        try {
            if (!city) return;
            setError("");
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            setWeather(data);

            // 🎉 Обновляем шутку вместе с погодой
            fetchJoke();
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") fetchWeather();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        padding: "15px 15px",
                        borderRadius: "30px 0 0 30px",
                        border: "1px solid #ccc",
                        width: "250px",
                        outline: "none"
                    }}
                />
                <button
                    onClick={fetchWeather}
                    style={{
                        padding: "5px 10px 5px 5px",
                        border: "1px solid #ccc",
                        borderRadius: "0 30px 30px 0",
                        backgroundColor: "#007bff",
                        color: "white",
                        fontSize: "30px",
                        cursor: "pointer"
                    }}
                >
                    🔍
                </button>
            </div>

            {/* ⚠️ Error */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* 🌤️ Weather card */}
            <Weather weather={weather} />

            <hr style={{ margin: "30px 0" }} />

            {/* 😂 Random Joke */}
            <Joke joke={joke} fetchJoke={fetchJoke} />
        </div>
    );
};

export default Data;
