import React, { useState } from 'react';

const CityInput = ({ onSubmit, loading }) => {
    const [value, setValue] = useState("Berlin");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value.trim());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Введите название города"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Загрузка ..." : "Показать погоду"}
            </button>
        </form>
    );
};

export default CityInput;
