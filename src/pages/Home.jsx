import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [query, setQuery] = useState('a');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        searchShows();
    }, []);

    const handleSaveFromHome = (show) => {
        const saved = JSON.parse(localStorage.getItem('savedShows')) || [];
        const exists = saved.find((item) => item.id === show.id);

        if (!exists) {
            saved.push({
                id: show.id,
                name: show.name,
                image: show.image?.medium,
            });
            localStorage.setItem('savedShows', JSON.stringify(saved));
            alert('Saved!');
        } else {
            alert('Already saved!');
        }
    };

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
                            <img
                                src={
                                    item.show.image
                                        ? item.show.image.medium
                                        : ''
                                }
                                alt={item.show.name}
                            />
                            <h3>{item.show.name}</h3>
                            <div className="card-footer">
                                <Link
                                    to={`/detail/${item.show.id}`}
                                    className="more-info"
                                >
                                    More Info
                                </Link>
                                <button
                                    onClick={() =>
                                        handleSaveFromHome(item.show)
                                    }
                                    className="heart-button"
                                >
                                    ♥
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
