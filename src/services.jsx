import './Services.css';
import { FaFlask, FaBook, FaLaptop, FaMusic, FaRunning, FaGraduationCap } from 'react-icons/fa';

export const Services = () => {
    const services = [
        {
            icon: <FaFlask className="service-icon" />,
            title: "Science Program",
            description: "Our state-of-the-art science program with fully equipped laboratories fosters innovation and critical thinking.",
            features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Robotics Club"]
        },
        {
            icon: <FaBook className="service-icon" />,
            title: "Academic Excellence",
            description: "Comprehensive curriculum designed to challenge and inspire students to achieve their full potential.",
            features: ["STEM Focus", "Literature Program", "Advanced Placement", "Research Projects"]
        },
        {
            icon: <FaLaptop className="service-icon" />,
            title: "Technology Integration",
            description: "Cutting-edge technology in every classroom to prepare students for the digital future.",
            features: ["Computer Labs", "Coding Classes", "Digital Literacy", "1:1 Device Program"]
        },
        {
            icon: <FaMusic className="service-icon" />,
            title: "Arts & Culture",
            description: "Vibrant arts programs that nurture creativity and self-expression.",
            features: ["Music Academy", "Drama Club", "Visual Arts", "Cultural Events"]
        },
        {
            icon: <FaRunning className="service-icon" />,
            title: "Sports & Wellness",
            description: "Excellent athletic facilities and programs to promote physical health and teamwork.",
            features: ["Swimming Pool", "Track & Field", "Basketball", "Yoga & Mindfulness"]
        },
        {
            icon: <FaGraduationCap className="service-icon" />,
            title: "College Preparation",
            description: "Comprehensive guidance to help students navigate their path to higher education.",
            features: ["SAT Prep", "College Counseling", "Scholarship Assistance", "University Tours"]
        }
    ];

    return (
        <div className="services-container">
            <section className="services-hero">
                <div className="hero-overlay">
                    <h1>Our Educational Services</h1>
                    <p>Discover the comprehensive programs that make St. Peters Maweni Girls a center of excellence</p>
                </div>
            </section>

            <section className="services-intro">
                <h2>Shaping Future Leaders</h2>
                <p className="intro-text">
                    At St. Peters Maweni Girls, we offer a holistic education that combines academic rigor with 
                    character development. Our diverse programs are designed to uncover and nurture each student's 
                    unique talents and prepare them for success in an ever-changing world.
                </p>
            </section>

            <section className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="icon-container">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button className="service-btn">Learn More</button>
                    </div>
                ))}
            </section>

            <section className="admission-banner">
                <div className="banner-content">
                    <h2>Ready to Join Our Community?</h2>
                    <p>Applications for the 2024-2025 academic year are now open</p>
                    <div className="button-group">
                        <button className="primary-btn">Apply Now</button>
                        <button className="secondary-btn">Schedule a Tour</button>
                    </div>
                </div>
            </section>
        </div>
    );
};