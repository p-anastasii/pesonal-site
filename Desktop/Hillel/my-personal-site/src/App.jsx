import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import TodoPage from './pages/Todo.jsx';
import SwapiPage from './pages/Swapi.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/swapi" element={<SwapiPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;