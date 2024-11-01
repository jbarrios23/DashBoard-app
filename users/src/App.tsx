
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersModule from './pages/UsersModule';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/users" element={<UsersModule />} />
    </Routes>
  </Router>
  );
}

export default App;
