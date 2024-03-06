import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
