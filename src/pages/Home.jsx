// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchShows = async () => {
        if (!query.trim()) return; // 검색어가 없으면 함수 종료

        try {
            const res = await fetch(
                `https://api.tvmaze.com/search/shows?q=${query}`
            );
            const data = await res.json();
            setResults(data);
        } catch (err) {
            console.error('API Error:', err);
        }
    };

    return (
        <div>
            <h1>TV Show Search</h1>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a TV show"
            />
            <button onClick={searchShows}>Search</button>

            <ul>
                {results.map((item) => (
                    <li key={item.show.id}>
                        <h3>{item.show.name}</h3>
                        {item.show.image && (
                            <img
                                src={item.show.image.medium}
                                alt={item.show.name}
                            />
                        )}
                        <Link to={`/detail/${item.show.id}`}>More Info</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
