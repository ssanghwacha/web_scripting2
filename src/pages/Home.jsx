// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // 스타일 파일을 만들어서 임포트 (예시)

const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchShows = async () => {
        if (!query.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(
                `https://api.tvmaze.com/search/shows?q=${query}`
            );
            const data = await res.json();
            setResults(data);
        } catch (err) {
            console.error('API Error:', err);
            // 에러 메시지를 사용자에게 표시할 수도 있음
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-container">
            <h1>TV Show Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a TV show"
            />
            <button onClick={searchShows}>Search</button>

            {loading ? (
                <div className="spinner">Loading...</div>
            ) : (
                <ul className="results-list">
                    {results.map((item) => (
                        <li key={item.show.id} className="result-item">
                            <h3>{item.show.name}</h3>
                            {item.show.image && (
                                <img
                                    src={item.show.image.medium}
                                    alt={item.show.name}
                                />
                            )}
                            <Link to={`/detail/${item.show.id}`}>
                                More Info
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
