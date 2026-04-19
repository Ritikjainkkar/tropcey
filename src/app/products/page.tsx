import { productData } from "@/data/pages";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="bg-[#202020] overflow-hidden bg-[url('/images/all-products-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="products-page-wrap max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Categories */}
        <div className="w-full lg:w-[400px] xl:w-[400px] bg-[#0d5c42] rounded-b-[60px] lg:rounded-r-[60px] lg:rounded-b-none p-8 lg:p-5 flex-shrink-0 relative flex flex-col items-start justify-center pt-40 lg:pt-0">
          <div className="w-1 lg:h-[600px] h-[400px] bg-[#8cc63f] absolute left-4 lg:left-6  my-5" />
          <ul className="space-y-5 lg:space-y-6 ml-6 lg:ml-8">
            <li>
              <a
                href="/organic-virgin-coconut-oil"
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-base lg:text-lg font-medium leading-relaxed"
              >
                Organic Virgin Coconut Oil
              </a>
            </li>

            {/* Dropdown - Infused Virgin Coconut Oil */}
            <li className="relative group">
              <button className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed flex items-center gap-2 cursor-pointer">
                <a
                  href="/infused-virgin-coconut-oil"
                  className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-base lg:text-lg font-medium leading-relaxed"
                >
                  Infused Virgin Coconut Oil (Bottles){" "}
                  <span className="text-xs">▼</span>
                </a>
              </button>
              <div className="hidden group-hover:block absolute left-4 top-full mt-[-5px] bg-white/70 backdrop-blur-sm rounded-lg p-3 min-w-[200px] z-50">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/infused-virgin-coconut-oil"
                      className="text-[#0d5c42] font-franklinBook hover:text-white text-sm flex items-center gap-2"
                    >
                      <span className="text-[#0d5c42]">▸</span> Chilli Flavours
                    </a>
                  </li>
                  <li>
                    <a
                      href="/infused-virgin-coconut-oil/ginger"
                      className="text-[#0d5c42] hover:text-white text-sm flex items-center gap-2 font-franklinBook"
                    >
                      <span className="text-[#0d5c42]">▸</span> Ginger Flavours
                    </a>
                  </li>
                  <li>
                    <a
                      href="/infused-virgin-coconut-oil/garlic"
                      className="text-[#0d5c42] hover:text-white text-sm flex items-center gap-2 font-franklinBook"
                    >
                      <span className="text-[#0d5c42]">▸</span> Garlic Flavours
                    </a>
                  </li>
                  <li>
                    <a
                      href="/infused-virgin-coconut-oil/pepper"
                      className="text-[#0d5c42] hover:text-white text-sm flex items-center gap-2 font-franklinBook"
                    >
                      <span className="text-[#0d5c42]">▸</span> Black Pepper
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="/organic-coconut-milk"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Milk
              </a>
            </li>

            <li>
              <a
                href="/organic-coconut-puree"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Puree
              </a>
            </li>

            <li>
              <a
                href="/organic-desiccated-coconut"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Desiccated Coconut
              </a>
            </li>

            {/* Dropdown - Organic Coconut Chips */}
            <li className="relative group">
              <button className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed flex items-center gap-2 cursor-pointer">
                <a
                  href="/organic-coconut-chips"
                  className="text-[#8cc63f] font-franklinBook hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed"
                >
                  Organic Coconut Chips <span className="text-xs">▼</span>
                </a>
              </button>
              <div className="hidden mt-[-5px] group-hover:block absolute left-4 top-full bg-white/70 backdrop-blur-sm rounded-lg p-3 min-w-[180px] z-50">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/organic-coconut-chips/toasted"
                      className="text-[#0d5c42] hover:text-white text-sm flex items-center gap-2 font-franklinBook"
                    >
                      <span className="text-[#0d5c42]">▸</span> Toasted Chips
                    </a>
                  </li>
                  <li>
                    <a
                      href="/organic-coconut-chips"
                      className="text-[#0d5c42] hover:text-white text-sm flex items-center gap-2 font-franklinBook"
                    >
                      <span className="text-[#0d5c42]">▸</span> Sweet Chips
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="/coconut-chocolate-spread"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Coconut Chocolate Spread
              </a>
            </li>

            <li>
              <a
                href="/organic-coconut-flour"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Flour
              </a>
            </li>

            <li>
              <a
                href="/organic-coconut-syrup"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Syrup
              </a>
            </li>

            <li>
              <a
                href="/organic-coconut-sugar"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Sugar
              </a>
            </li>

            <li>
              <a
                href="/organic-coconut-water-vinegar"
                className="text-[#8cc63f] hover:text-white transition-colors text-base lg:text-lg font-medium leading-relaxed font-franklinBook"
              >
                Organic Coconut Water Vinegar
              </a>
            </li>
          </ul>
        </div>

        {/* Right Content - Product Grid */}
        <div className="flex-1 p-8 lg:p-12 xl:p-16 ">
          {/* Background Pattern */}
          <div className="relative">
            <div className="relative z-10">
              {/* Row 1 - 4 items */}
              <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mb-12 lg:mb-10">
                {productData.map((product: any) => (
                  <div
                    // Calculate width: (100% / columns) - (total gap space / columns)
                    className="w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.875rem)] flex flex-col items-center group"
                    key={product.id}
                  >
                    <Link
                      href={`${product.href}`}
                      className="flex flex-col items-center w-full"
                    >
                      <div className="w-full aspect-square flex items-center justify-center mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-[200px] lg:max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Added max-w to prevent overflow on smaller screens */}
                      <div className="w-full max-w-[200px] h-[10px] bg-[#156b54]" />
                      <h3 className="text-[#156b54] text-sm lg:text-base  text-center mt-3 font-franklin">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
