import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layout/MainLayout';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="*" element={<MainLayout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
