// src/pages/Saved.jsx
import { useEffect, useState } from 'react';

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
        <div>
            <h2>My Saved Shows</h2>
            {savedList.length === 0 ? (
                <p>No saved shows yet.</p>
            ) : (
                <ul>
                    {savedList.map((item) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            {item.image && (
                                <img src={item.image} alt={item.name} />
                            )}
                            <br />
                            <button onClick={() => handleRemove(item.id)}>
                                🗑 Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Saved;
