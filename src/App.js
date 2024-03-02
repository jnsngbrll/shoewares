import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
