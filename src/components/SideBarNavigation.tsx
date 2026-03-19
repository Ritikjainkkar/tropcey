"use client";

import React, { useState } from "react";
import { products } from "../data/pages";

export default function SideBarNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const radiusX = 150; // Radius of the ellipse along the X-axis
  const radiusY = 70; // Radius of the ellipse along the Y-axis
  const center = 150; // Center of the ellipse (since width and height of sidebar are 300px)

  // Define the elliptical arc segment
  const startAngle = Math.PI / 4; // Start at 45 degrees
  const endAngle = (3 * Math.PI) / 4; // End at 135 degrees
  const angleIncrement = (endAngle - startAngle) / (products.length - 1); // Calculate the increment per product

  return (
    <div>
      <div
        className={`absolute right-[5px] top-1/2 transform -translate-y-1/2 cursor-pointer z-[5] ${
          isExpanded ? "bg-transparent" : "bg-black p-2 rounded-full"
        }`}
        onClick={toggleSidebar}
      >
        <img
          src="/images/singl-sidebar-icon.png"
          alt="Toggle Sidebar"
          width={isExpanded ? 40 : 30}
          height={isExpanded ? 40 : 30}
          className={isExpanded ? "" : "shadow-lg"}
        />
      </div>

      {/* Expanded Sidebar with Elliptical Arc Layout */}
      {isExpanded && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] rounded-full flex items-center justify-center mt-5">
          <div className="relative w-full h-full">
            <div
              className="absolute top-[-235px] left-[170px] w-[700px] h-[800px] z-0"
              style={{
                border: "50px solid white", // 20px wide white strip
                borderRadius: "50%", // Make it a circle
                opacity: 0.5,
                zIndex: 0,
              }}
            />
            {products.map((product, index) => {
              const angle = startAngle + index * angleIncrement; // Calculate the angle for each product
              const x = center + Math.cos(angle) * radiusX; // Calculate the x position based on the elliptical radius
              const y = center + Math.sin(angle) * radiusY; // Calculate the y position based on the elliptical radius
              var extray = 0;

              if (Math.ceil(products.length / 2) > index) {
                extray = -(Math.ceil(products.length / 2) - index) * 10;
              } else {
                extray = -(index - Math.ceil(products.length / 2)) * 15;
              }

              return (
                <a
                  key={product.name}
                  href={product.href}
                  className="absolute"
                  style={{
                    top: `${x - index * 40 + 150}px`, // Adjust so the center of the item is at the calculated position
                    right: `${y - 155 + extray}px`, // Same as above
                  }}
                >
                  <div className="flex flex-row items-center space-y-2 transform transition-transform duration-300 hover:scale-110">
                    <span className="bg-black text-white py-1 px-2 rounded-full text-xs w-[135px]">
                      {product.name}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      width={product.width}
                      height={product.height}
                      className="rounded-full hover:scale-125 transition-transform duration-100"
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
