import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './home';
import { Services } from './services';
import { About } from './About';
import { Contact } from './Contact';
import { Gallery } from './Gallery';
import { Admissions } from './Admissions';
import { NotFound } from './NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;