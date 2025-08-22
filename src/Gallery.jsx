import './Gallery.css';
import { useState } from 'react';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample gallery images (replace with your actual images)
const galleryImages = [
  { id: 1, category: 'academics', src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Students in science lab' },
  { id: 2, category: 'sports', src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Basketball team' },
  { id: 3, category: 'events', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Graduation ceremony' },
  { id: 4, category: 'academics', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Classroom discussion' },
  { id: 5, category: 'arts', src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Art exhibition' },
  { id: 6, category: 'sports', src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Swimming competition' },
  { id: 7, category: 'events', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Cultural day' },
  { id: 8, category: 'campus', src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'School building' },
  { id: 9, category: 'academics', src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Computer class' },
  { id: 10, category: 'arts', src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Music performance' },
  { id: 11, category: 'campus', src: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'School library' },
  { id: 12, category: 'events', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Prize giving day' },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay">
          <h1>School Gallery</h1>
          <p>Explore life at St. Peters Maweni Girls</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="gallery-header">
          <h2>Our Moments</h2>
          <p>Browse through our collection of memorable moments and activities</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className="gallery-item"
              onClick={() => openLightbox(img, index)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="image-overlay">
                <FaSearch className="search-icon" />
                <span className="category-badge">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox">
            <div className="lightbox-content">
              <button className="close-btn" onClick={closeLightbox}>
                <FaTimes />
              </button>
              <button className="nav-btn prev" onClick={() => navigate('prev')}>
                <FaChevronLeft />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button className="nav-btn next" onClick={() => navigate('next')}>
                <FaChevronRight />
              </button>
              <div className="image-info">
                <p>{selectedImage.alt}</p>
                <span>{currentIndex + 1} / {filteredImages.length}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};