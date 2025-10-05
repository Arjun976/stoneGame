import React from 'react';

const Card = ({ 
  src, 
  alt = 'Image', 
  className
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="h-md w-md object-cover"
      />
    </div>
  );
};

export default Card;