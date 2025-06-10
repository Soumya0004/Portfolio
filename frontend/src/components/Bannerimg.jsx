import React from 'react';
import img from '../assets/mirror.gif';

const Bannerimg = () => {
  return (
    <div className="relative w-full h-60 sm:h-72 md:h-96 lg:h-[25rem] xl:h-[25em] overflow-hidden">
      {/* Background image with responsive styling */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      {/* Overlay or content container (if needed) */}
      <div className="relative z-10 w-full h-full md:h-[15rem] bg-transparent">
        {/* You can add any content here, like a heading or button */}
      </div>
    </div>
  );
};

export default Bannerimg;
