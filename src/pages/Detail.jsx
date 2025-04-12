// src/pages/Detail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    // URL에서 :id 받아오기
    const { id } = useParams();

    // 받아온 쇼 데이터 저장할 state
    const [show, setShow] = useState(null);

    // 뒤로 가기 등 네비게이션용
    const navigate = useNavigate();

    // 컴포넌트가 마운트되거나 id가 바뀔 때마다
    // TVmaze API로 쇼 정보 요청
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched show data:', data);
                setShow(data);
            })
            .catch((err) => console.error('Detail API Error:', err));
    }, [id]);

    // 저장(즐겨찾기) 버튼을 누르면 localStorage에 저장하는 함수
    const handleSave = () => {
        // localStorage에서 'savedShows' 가져옴 (없으면 빈 배열)
        const saved = JSON.parse(localStorage.getItem('savedShows')) || [];

        // 이미 존재하는지 확인
        const exists = saved.find((item) => item.id === show.id);
        if (!exists) {
            // 존재하지 않으면 추가
            saved.push({
                id: show.id,
                name: show.name,
                image: show.image?.medium, // or .original
            });
            localStorage.setItem('savedShows', JSON.stringify(saved));
            alert('Saved!');
        } else {
            alert('Already saved!');
        }
    };

    // 아직 데이터를 못 받아온 경우 로딩 상태
    if (!show) return <p>Loading...</p>;

    return (
        <div>
            {/* 쇼 이름 */}
            <h2>{show.name}</h2>

            {/* 쇼 이미지가 있는 경우 표시 */}
            {show.image && <img src={show.image.original} alt={show.name} />}

            {/* 쇼 요약(summary)를 HTML 형태로 출력 */}
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>

            <button onClick={handleSave}>⭐ Save to Favorites</button>
            <button onClick={() => navigate(-1)}>⬅ Back</button>
        </div>
    );
};

export default Detail;
