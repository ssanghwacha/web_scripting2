// src/pages/Detail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams(); // URL에서 :id 가져오기
    const [show, setShow] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => setShow(data))
            .catch((err) => console.error('Detail API Error:', err));
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

    if (!show) return <p>Loading...</p>;

    return (
        <div>
            <h2>{show.name}</h2>
            {show.image && <img src={show.image.original} alt={show.name} />}
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>

            <button onClick={handleSave}>⭐ Save to Favorites</button>
            <button onClick={() => navigate(-1)}>⬅ Back</button>
        </div>
    );
};

export default Detail;
