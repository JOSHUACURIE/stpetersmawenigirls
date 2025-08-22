import './header.css';
import { useState, useEffect } from 'react';

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
                    {/* Add your logo image here if needed */}
                    {/* <img src="/path/to/logo.png" alt="School Logo" className="school-logo" /> */}
                    <h1 className='school-name'>St Peters Maweni Girls</h1>
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
                        <li><a href="/" className="nav-link" onClick={handleLinkClick}>HOME</a></li>
                        <li><a href="/services" className="nav-link" onClick={handleLinkClick}>SERVICES</a></li>
                        <li><a href="/gallery" className="nav-link" onClick={handleLinkClick}>GALLERY</a></li>
                        <li><a href="/contact" className="nav-link" onClick={handleLinkClick}>CONTACT US</a></li>
                        <li><a href="/about" className="nav-link" onClick={handleLinkClick}>ABOUT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};