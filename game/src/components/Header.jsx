import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-2xl font-bold">Stone Paper Scissor</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200">
        Rules
      </button>
    </header>
  );
};

export default Header;