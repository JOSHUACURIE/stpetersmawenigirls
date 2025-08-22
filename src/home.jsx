import './home.css';
import { useEffect, useRef } from 'react';

export const Home = () => {
    const featureCardsRef = useRef([]);
    const infoCardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        // Observe feature cards
        featureCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        // Observe info cards
        infoCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            featureCardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
            infoCardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to St. Peters Maweni Girls</h1>
                    <p className="hero-text">Where future leaders are nurtured and paragons are grown</p>
                    <button className="cta-button">Explore Our School</button>
                </div>
            </section>

            <section className="features-section">
                <h2 className="section-title">Let Us Take You on a Tour</h2>
                
                <div className="feature-card" ref={el => featureCardsRef.current[0] = el}>
                    <div className="feature-image lab-image"></div>
                    <div className="feature-content">
                        <h3>State-of-the-Art Science Laboratory</h3>
                        <p>Our modern laboratory is equipped with the latest technology, providing students with hands-on experience in scientific exploration. It's a space where curiosity meets innovation and future scientists are born.</p>
                        <button className="learn-more-btn">Explore Lab</button>
                    </div>
                </div>

                <div className="feature-card reverse-layout" ref={el => featureCardsRef.current[1] = el}>
                    <div className="feature-image library-image"></div>
                    <div className="feature-content">
                        <h3>Expansive Knowledge Library</h3>
                        <p>Our extensive library houses thousands of books, digital resources, and quiet study areas. It's designed to foster a love for reading and provide resources for academic excellence.</p>
                        <button className="learn-more-btn">Visit Library</button>
                    </div>
                </div>

                <div className="feature-card" ref={el => featureCardsRef.current[2] = el}>
                    <div className="feature-image sports-image"></div>
                    <div className="feature-content">
                        <h3>Olympic-Sized Sports Complex</h3>
                        <p>Our sports facilities include a track field, basketball courts, tennis courts, and a swimming pool. We believe in nurturing both the mind and body for holistic development.</p>
                        <button className="learn-more-btn">View Facilities</button>
                    </div>
                </div>
                
                <div className="feature-card reverse-layout" ref={el => featureCardsRef.current[3] = el}>
                    <div className="feature-image arts-image"></div>
                    <div className="feature-content">
                        <h3>Creative Arts Center</h3>
                        <p>Our arts department includes music rooms, dance studios, theater facilities, and visual arts spaces. We encourage creative expression and artistic development.</p>
                        <button className="learn-more-btn">Discover Arts</button>
                    </div>
                </div>
                
                <div className="feature-card" ref={el => featureCardsRef.current[4] = el}>
                    <div className="feature-image tech-image"></div>
                    <div className="feature-content">
                        <h3>Technology Innovation Hub</h3>
                        <p>Our computer labs and technology center are equipped with the latest hardware and software, preparing students for the digital future with coding, robotics, and AI programs.</p>
                        <button className="learn-more-btn">Tech Programs</button>
                    </div>
                </div>
            </section>

            <section className="quick-info">
                <div className="info-card" ref={el => infoCardsRef.current[0] = el}>
                    <h3>2000+</h3>
                    <p>Students Enrolled</p>
                </div>
                <div className="info-card" ref={el => infoCardsRef.current[1] = el}>
                    <h3>50+</h3>
                    <p>Qualified Teachers</p>
                </div>
                <div className="info-card" ref={el => infoCardsRef.current[2] = el}>
                    <h3>25+</h3>
                    <p>Years of Excellence</p>
                </div>
                <div className="info-card" ref={el => infoCardsRef.current[3] = el}>
                    <h3>98%</h3>
                    <p>University Acceptance</p>
                </div>
            </section>

            <section className="testimonial-section">
                <h2 className="section-title">What Parents & Students Say</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"St. Peters Maweni Girls has transformed my daughter into a confident, articulate young woman ready to take on the world."</p>
                        </div>
                        <div className="testimonial-author">
                            <h4>Mrs. Wanjiku</h4>
                            <p>Parent of Grade 11 Student</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"The teachers here don't just teach; they inspire. I've discovered passions I never knew I had."</p>
                        </div>
                        <div className="testimonial-author">
                            <h4>Grace Mwende</h4>
                            <p>Grade 10 Student</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"The facilities are world-class, but it's the caring environment that makes this school special."</p>
                        </div>
                        <div className="testimonial-author">
                            <h4>Dr. Kamau</h4>
                            <p>School Board Member</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-overlay">
                    <h2>Ready to Join Our Community?</h2>
                    <p>Applications for the 2024-2025 academic year are now being accepted</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary">Apply Now</button>
                        <button className="cta-button secondary">Schedule a Tour</button>
                    </div>
                </div>
            </section>
        </div>
    );
}