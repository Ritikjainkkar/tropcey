import React, { useState } from 'react';
import { products } from '../data/pages';

export default function SideBarNavigation({ searchParams }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const radiusX = 150; // Radius of the ellipse along the X-axis
  const radiusY = 50;  // Radius of the ellipse along the Y-axis
  const center = 150;  // Center of the ellipse (since width and height of sidebar are 300px)

  // Define the elliptical arc segment
  const startAngle = Math.PI / 4; // Start at 45 degrees
  const endAngle = 3 * Math.PI / 4; // End at 135 degrees
  const angleIncrement = (endAngle - startAngle) / (products.length - 1); // Calculate the increment per product

  return (
    <div>
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
          isExpanded ? 'bg-transparent' : 'bg-black p-2 rounded-full'
        }`}
        onClick={toggleSidebar}
      >
        <img
          src="/images/sidebar.png"
          alt="Toggle Sidebar"
          width={isExpanded ? 40 : 30}
          height={isExpanded ? 40 : 30}
          className={isExpanded ? '' : 'shadow-lg'}
        />
      </div>

      {/* Expanded Sidebar with Elliptical Arc Layout */}
      {isExpanded && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] rounded-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {products.map((product, index) => {
              const angle = startAngle + index * angleIncrement; // Calculate the angle for each product
              const x = center + Math.cos(angle) * radiusX; // Calculate the x position based on the elliptical radius
              const y = center + Math.sin(angle) * radiusY; // Calculate the y position based on the elliptical radius
              var extray = 0;

              if(Math.ceil(products.length / 2) > index ) {
                extray = - (Math.ceil(products.length / 2) - index) * 10;
              } else {
                extray = - (index - Math.ceil(products.length / 2)) * 10;
              }

              return (
                <a
                  key={product.name}
                  href={product.href}
                  className="absolute"
                  style={{
                    top: `${x - (index * 40) + 150}px`, // Adjust so the center of the item is at the calculated position
                    right: `${y - 135 + extray}px`, // Same as above
                  }}
                >
                  <div className="flex flex-row items-center space-y-2 mb-5">
                    <span className="bg-black text-white py-1 px-2 rounded-full text-xs w-[135px]">
                      {product.name}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-full shadow-md"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
