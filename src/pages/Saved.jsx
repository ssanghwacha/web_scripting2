import React, { useEffect, useState } from 'react';
import './Saved.css';

const Saved = () => {
    const [savedList, setSavedList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('savedShows')) || [];
        setSavedList(data);
    }, []);

    const handleRemove = (id) => {
        const updated = savedList.filter((item) => item.id !== id);
        setSavedList(updated);
        localStorage.setItem('savedShows', JSON.stringify(updated));
    };

    return (
        <div className="saved-container">
            {' '}
            <h2>My Saved Shows</h2>
            <ul className="saved-list">
                {' '}
                {savedList.map((item) => (
                    <li key={item.id} className="saved-item">
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <button onClick={() => handleRemove(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Saved;
