import React from 'react';
import Card from '../components/Card'; 

function Home() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-8 border">
        <div className='border'>
        <Card 
          src="/assets/image1.jpg" // Ensure images exist in public/assets/
          alt="First image description"
        />
        </div>
        <div className="text-4xl font-bold text-gray-800">vs</div>
        <Card 
          src="/assets/image2.jpg" 
          alt="Second image description"
        />
      </div>
    </div>
  );
}

export default Home;