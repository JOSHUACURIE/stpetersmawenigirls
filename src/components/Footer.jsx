import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            
            <div className="footer-content">
                <div className="footer-sections">
                    <div className="footer-info">
                        <h3>St. Peters Maweni Girls</h3>
                        <p>Excellence in Education Since 2024</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>123 Education Road, Maweni, Kenya</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <span>+254 712 345 678</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>info@stpetersmaweni.ac.ke</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/academics">Academics</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                            <li><a href="/news">News & Events</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/portal">Student Portal</a></li>
                            <li><a href="/parents">Parent Resources</a></li>
                            <li><a href="/library">Library</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest news and updates</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} St. Peters Maweni Girls. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                            <a href="/sitemap">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="scroll-to-top">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
                    ↑
                </button>
            </div>
        </footer>
    );
};