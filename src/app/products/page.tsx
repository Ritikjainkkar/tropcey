"use client";
import Footer from "@/components/Footer/Footer";
import { productData } from "@/data/pages";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setSidebarOpen(false);
    router.push(href);
  };

  return (
    <div className="bg-[#ffffff] overflow-hidden bg-[url('/images/all-products-bg.png')] bg-no-repeat bg-cover bg-center">
      {/* Toggle Button - mobile/tablet only */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`lg:hidden fixed top-[90px] left-4 z-40 bg-[#0d5c42] text-[#8cc63f] rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 ${
          sidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open categories"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Backdrop overlay - mobile/tablet only */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="products-page-wrap max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar */}
        <div
          className={`
            fixed lg:relative top-0 left-0 h-full lg:h-auto z-50 lg:z-auto
            w-[350px] lg:w-[340px] xl:w-[400px]
            bg-[#0d5c42]
            lg:rounded-r-[60px]
            flex-shrink-0
            flex flex-col items-start justify-center
            pt-16 lg:pt-0 pb-5 px-5
            overflow-y-auto
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          {/* Close button - mobile/tablet only */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-white w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Green vertical line */}
          <div className="w-1 bg-[#8cc63f] absolute left-4 md:left-6 top-10 bottom-10" />

          <ul className="space-y-4 md:space-y-5 ml-6 md:ml-8 w-full">
            <li>
              <button
                onClick={() => handleNavClick("/organic-virgin-coconut-oil")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Virgin Coconut Oil
              </button>
            </li>

            <li className="relative group">
              <button
                // onClick={() => handleNavClick("/infused-virgin-coconut-oil")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed flex items-center gap-1 text-left"
              >
                Infused Virgin Coconut Oil (Bottles)
                <span className="text-xs">▼</span>
              </button>
              <div className="hidden group-hover:block absolute left-4 top-full mt-[-5px] bg-white/70 backdrop-blur-sm rounded-lg p-3 min-w-[200px] z-50">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() =>
                        handleNavClick("/infused-virgin-coconut-oil")
                      }
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Chilli Flavours
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavClick("/infused-virgin-coconut-oil/ginger")
                      }
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Ginger Flavours
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavClick("/infused-virgin-coconut-oil/garlic")
                      }
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Garlic Flavours
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavClick("/infused-virgin-coconut-oil/pepper")
                      }
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Black Pepper
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-milk")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Milk
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-puree")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Puree
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-desiccated-coconut")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Desiccated Coconut
              </button>
            </li>

            <li className="relative group">
              <button
                // onClick={() => handleNavClick("/organic-coconut-chips")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed flex items-center gap-1 text-left"
              >
                Organic Coconut Chips
                <span className="text-xs">▼</span>
              </button>
              <div className="hidden group-hover:block absolute left-4 top-full mt-[-5px] bg-white/70 backdrop-blur-sm rounded-lg p-3 min-w-[180px] z-50">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("/organic-coconut-chips")}
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Sweet Chips
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavClick("/organic-coconut-chips/toasted")
                      }
                      className="text-[#0d5c42] font-franklinBook hover:text-[#8cc63f] text-sm flex items-center gap-2 w-full text-left"
                    >
                      <span>▸</span> Toasted Chips
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/coconut-chocolate-spread")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Coconut Chocolate Spread
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-flour")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Flour
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-syrup")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Syrup
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-sugar")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Sugar
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick("/organic-coconut-water-vinegar")}
                className="text-[#8cc63f] hover:text-white font-franklinBook transition-colors text-sm md:text-base lg:text-lg font-medium leading-relaxed text-left"
              >
                Organic Coconut Water Vinegar
              </button>
            </li>
          </ul>
        </div>
        {/* End Left Sidebar */}

        {/* Right Content */}
        <div className="flex-1 px-6 md:px-8 xl:px-16 lg:pt-[100px] md:pt-[200px] pt-[200px] pb-10">
          <div className="relative z-10">
            <div className="flex flex-wrap justify-center gap-5 lg:gap-8 mb-12">
              {productData.map((product: any) => (
                <div
                  key={product.id}
                  className="w-[calc(50%-0.75rem)] md:w-[calc(30%-0.875rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center group"
                >
                  <Link
                    href={product.href}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-full aspect-square flex items-center justify-center mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-[180px] md:max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-full max-w-[160px] md:max-w-[200px] h-[10px] bg-[#156b54]" />
                    <h3 className="text-[#156b54] text-xs md:text-sm lg:text-base text-center mt-3 font-franklin">
                      {product.name}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Right Content */}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
