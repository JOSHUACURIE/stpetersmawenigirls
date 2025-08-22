import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
    return (
        <div className="contact-container">
            
            <section className="contact-hero">
                <div className="hero-overlay">
                    <h1>Contact St. Peters Maweni Girls</h1>
                    <p>We'd love to hear from you</p>
                </div>
            </section>

            
            <section className="contact-info-section">
                <div className="contact-info-container">
                    <div className="contact-info-card">
                        <FaMapMarkerAlt className="contact-icon" />
                        <h3>Our Location</h3>
                        <p>Suna Migori</p>
                        <p>Maweni, P.O. Box 941</p>
                        <p>Migori, Kenya</p>
                    </div>

                    <div className="contact-info-card">
                        <FaPhone className="contact-icon" />
                        <h3>Phone Numbers</h3>
                        <p>Main Office: +254 265 33646</p>
                        <p>Admissions: +254 265 33646</p>
                        <p>+254 265 33646</p>
                    </div>

                    <div className="contact-info-card">
                        <FaEnvelope className="contact-icon" />
                        <h3>Email Addresses</h3>
                        <p>General: stpetersmawenigirls@gmail.com</p>
                        <p>Admissions: stpetersmawenigirls@gmail.com</p>
                        <p>Support: stpetersmawenigirls@gmail.com</p>
                    </div>

                    <div className="contact-info-card">
                        <FaClock className="contact-icon" />
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                        <p>Saturday: 8:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="contact-main-section">
                <div className="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your full name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email address" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" required>
                                <option value="">Select a subject</option>
                                <option value="admissions">Admissions Inquiry</option>
                                <option value="academics">Academic Programs</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                <div className="map-container">
                    <h2>Find Us on the Map</h2>
                    <div className="map-embed">
                        
                        <iframe 
                            title="School Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854476476489!2d36.8212143147539!3d-1.265635599074892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sUniversity%20of%20Nairobi!5e0!3m2!1sen!2ske!4v1623861487727!5m2!1sen!2ske"
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="social-media-section">
                <h2>Connect With Us</h2>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </section>

            <section className="emergency-contact">
                <div className="emergency-content">
                    <h2>Emergency Contact</h2>
                    <p>For urgent matters outside working hours, please call:</p>
                    <p className="emergency-number">+254 757284998</p>
                </div>
            </section>
        </div>
    );
};