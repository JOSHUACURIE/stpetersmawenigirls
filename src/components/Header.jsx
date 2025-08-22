import './header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
            <div className='header'>
                <div className="logo-container">
                    {/* Use Link for the logo as well */}
                    <Link to="/" className="school-name" onClick={handleLinkClick}>
                        St Peters Maweni Girls
                    </Link>
                </div>

                <button 
                    className={`mobile-menu-button ${menuOpen ? 'active' : ''}`} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
                    <ul className='nav-links'>
                        {/* Replace <a> tags with <Link> components */}
                        <li><Link to="/" className="nav-link" onClick={handleLinkClick}>HOME</Link></li>
                        <li><Link to="/services" className="nav-link" onClick={handleLinkClick}>SERVICES</Link></li>
                        <li><Link to="/gallery" className="nav-link" onClick={handleLinkClick}>GALLERY</Link></li>
                        <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>CONTACT US</Link></li>
                        <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
