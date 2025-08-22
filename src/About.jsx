import './About.css';
import { FaGraduationCap, FaUsers, FaAward, FaBook } from 'react-icons/fa';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);
    
    // State for counter values
    const [studentsCount, setStudentsCount] = useState(0);
    const [awardsCount, setAwardsCount] = useState(0);
    const [programsCount, setProgramsCount] = useState(0);
    const [acceptanceRate, setAcceptanceRate] = useState(0);

    useEffect(() => {
        // Intersection Observer to detect when stats section is in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Start counters when section is visible
                    if (isVisible) {
                        animateCounter(200, setStudentsCount, 200);
                        animateCounter(15, setAwardsCount, 2500);
                        animateCounter(5, setProgramsCount, 200);
                        animateCounter(98, setAcceptanceRate, 180);
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [isVisible]);

    // Function to animate counters
    const animateCounter = (target, setCounter, duration) => {
        let start = 0;
        const increment = target / (duration / 20);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCounter(target);
                clearInterval(timer);
            } else {
                setCounter(Math.ceil(start));
            }
        }, 20);
    };

    return (
        <div className="about-container">
            
            <section className="about-hero">
                <div className="hero-overlay">
                    <h1>About St. Peters Maweni Girls</h1>
                    <p>Nurturing excellence since 2024</p>
                </div>
            </section>

            
            <section className="mission-section">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        To provide a transformative educational experience that empowers young women 
                        through academic excellence, character development, and leadership training, 
                        preparing them to make meaningful contributions to society.
                    </p>
                </div>
                <div className="mission-image"></div>
            </section>

            
            <section className="history-section">
                <div className="section-header">
                    <MdOutlineHistoryEdu className="section-icon" />
                    <h2>Our History</h2>
                </div>
                <div className="history-content">
                    <p>
                        Founded in 2024 by the Sisters of St. Peter, our school began with just 30 students 
                        in a small building. Today, we stand as a premier institution with over 200 students 
                        and a reputation for academic excellence and holistic development.
                    </p>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">2024</div>
                            <div className="timeline-desc">School founded with 50 students</div>
                        </div>
                 
                    
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section" ref={statsRef}>
                <div className="stat-card">
                    <FaGraduationCap className="stat-icon" />
                    <h3>{acceptanceRate}%</h3>
                    <p>University Acceptance Rate</p>
                </div>
                <div className="stat-card">
                    <FaUsers className="stat-icon" />
                    <h3>{studentsCount}+</h3>
                    <p>Current Students</p>
                </div>
                <div className="stat-card">
                    <FaAward className="stat-icon" />
                    <h3>{awardsCount}+</h3>
                    <p>National Awards</p>
                </div>
                <div className="stat-card">
                    <FaBook className="stat-icon" />
                    <h3>{programsCount}+</h3>
                    <p>Academic Programs</p>
                </div>
            </section>

           
            <section className="values-section">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Excellence</h3>
                        <p>We strive for the highest standards in all we do, fostering a culture of continuous improvement.</p>
                    </div>
                    <div className="value-card">
                        <h3>Integrity</h3>
                        <p>We uphold honesty, fairness, and ethical behavior in all aspects of school life.</p>
                    </div>
                    <div className="value-card">
                        <h3>Community</h3>
                        <p>We build a supportive, inclusive environment where every member feels valued.</p>
                    </div>
                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>We embrace creativity and new ideas to prepare students for a changing world.</p>
                    </div>
                </div>
            </section>

            
            <section className="staff-section">
                <h2>Meet Our Leadership</h2>
                <div className="staff-grid">
                    <div className="staff-card">
                        <div className="staff-image principal"></div>
                        <h3>Mrs Milka Oyier</h3>
                        <p>Principal</p>
                        <p className="staff-bio">With 25 years in education, Sr. Mary has led our school since 2010.</p>
                    </div>
                    <div className="staff-card">
                        <div className="staff-image deputy"></div>
                        <h3>Mr.Paul Orwa</h3>
                        <p>Deputy Principal</p>
                        <p className="staff-bio">Specialist in curriculum development and student welfare.</p>
                    </div>
                    <div className="staff-card">
                        <div className="staff-image academic"></div>
                        <h3>Mr. Caleb Odhiambo</h3>
                        <p>Academic Dean</p>
                        <p className="staff-bio">Leads our award-winning academic programs.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
