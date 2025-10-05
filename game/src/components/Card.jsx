import React from 'react';

const Card = ({ 
  src, 
  alt = 'Image', 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

export default Card;