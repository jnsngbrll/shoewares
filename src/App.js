import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
