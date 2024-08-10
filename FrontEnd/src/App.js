import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WomenPage from './Pages/WomenPage/WomenPage';
import ItemPage from './Pages/ItemPage/ItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
