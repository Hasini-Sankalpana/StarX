import React, { useState, useEffect } from 'react';

function Gallery() {
  const [query, setQuery] = useState(''); 
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(12); 
 
  const fetchImages = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image`
      );
      const data = await response.json();
      if (data.collection && data.collection.items) {
        setImages(data.collection.items);
      } else {
        setImages([]);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchImages();
  }, [query]);

 
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setVisibleCount(12); 
  };

  // Show more images
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); 
  };

  return (
    <div className="gallery-container py-10 px-5 md:px-20 sm:px-14 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-white text-4xl font-bold text-center pt-10 pb-10 mb-10 uppercase font-roboto tracking-wide">
        <span className='font-lemon font-extralight text-purple-600'>StarX</span> Gallery
      </h2>


      <div className="search-bar mb-10">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="bg-[#2d0c3f] text-white px-4 py-2 rounded-lg shadow-lg"
          placeholder="Search for space images..."
        />
      </div>

 
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {images.slice(0, visibleCount).map((item, index) => {
          const imageUrl = item.links[0]?.href;
          const title = item.data[0]?.title || 'No Title'; 
          return (
            <div key={index} className="gallery-item">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              )}
              <div className="text-white text-center mt-2">{title}</div>
            </div>
          );
        })}
      </div>

     
      {visibleCount < images.length && (
        <button
          onClick={handleShowMore}
          className="bg-purple-600 text-white px-4 py-2 mt-5 rounded"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Gallery;