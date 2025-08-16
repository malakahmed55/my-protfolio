import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Achievements2023 from './achievements/2023.jsx';
import Achievements2024 from './achievements/2024.jsx';
import Achievements2025 from './achievements/2025.jsx';

function App() {
  return (
    <Router>
      {/* شريط التنقل */}
      <nav>
        <Link to="/"></Link>
        <Link to="/achievements/2023"></Link>
        <Link to="/achievements/2024"></Link>
        <Link to="/achievements/2025"></Link>
      </nav>

      {/* الصفحات */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements/2023" element={<Achievements2023 />} />
        <Route path="/achievements/2024" element={<Achievements2024 />} />
        <Route path="/achievements/2025" element={<Achievements2025 />} />
      </Routes>
    </Router>
  );
}

export default App;
