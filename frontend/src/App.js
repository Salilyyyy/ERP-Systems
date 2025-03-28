import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout'; 
import Dashboard from './pages/dashboard/dashboard'; 

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;