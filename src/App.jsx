import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Saved from './pages/Saved';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/saved" element={<Saved />} />
            </Routes>
        </Router>
    );
}

export default App;
