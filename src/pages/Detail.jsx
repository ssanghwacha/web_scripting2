import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchShow = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await res.json();
                setShow(data);
            } catch (err) {
                console.error('Detail API Error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchShow();
    }, [id]);

    const handleSave = () => {
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

    if (loading) return <p>Loading...</p>;
    if (!show) return <p>No data found.</p>;

    return (
        <div className="detail-container">
            <h2>{show.name}</h2>
            {show.image && <img src={show.image.original} alt={show.name} />}
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <button onClick={handleSave}>⭐ Save to Favorites</button>
            <button onClick={() => navigate(-1)}>⬅ Back</button>
        </div>
    );
};

export default Detail;
