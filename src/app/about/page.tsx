import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about-wrap">
      {/* ========== FIRST SECTION - GREEN BG ========== */}
      <div className="relative bg-[url('/images/about-bg-img.png')] bg-cover bg-right bg-no-repeat min-h-[300px] overflow-hidden lg:pt-16 pt-40 pb-7">
        <div className="relative z-10 w-full max-w-[90%] mx-auto px-2 lg:px-2 xl:px-4">
          <div className="flex flex-col lg:flex-row  gap-2 lg:gap-2">
            {/* Title Section with Vertical Line - 4/12 */}
            <div className="w-full lg:w-3/12 flex items-center justify-center lg:justify-center">
              <div className="flex items-center justify-center gap-4 lg:gap-4">
                <div>
                  <h2 className="text-[#8cc63f] text-5xl sm:text-6xl font-franklinHeavy lg:text-7xl font-extrabold tracking-wide leading-none">
                    ABOUT
                  </h2>
                  <h1 className="text-white text-8xl sm:text-9xl font-franklinHeavy lg:text-[10rem] font-extrabold leading-none -mt-2 lg:-mt-4">
                    US
                  </h1>
                </div>
                <div className="w-2 h-48 lg:h-96 bg-white hidden lg:block" />
              </div>
            </div>

            {/* Paragraphs - 6/12 */}
            <div className="w-full lg:w-6/12 space-y-6 font-franklinBook text-white/90 text-base lg:text-lg leading-relaxed text-justify">
              <p>
                Promoting the natural richness of Sri Lankan coconut heritage to
                the global market, Tropcey offers a diverse range of edible
                coconut products of the highest quality and nutritional value,
                by incorporating modern, efficient, and sustainable production
                practices into traditional Sri Lankan culinary and agricultural
                practices. Tropcey products have been developed to perfection
                allowing them to be used in various recipes used around the
                world. The uniqueness of flavour and the customer convenience
                make them a perfect fit to the global market. Adding more value
                to our customers, most of our products are certified as 100%
                organic.
              </p>
              <p>
                In order to ensure that our products are safe and hygienic while
                ensuring the consistency, purity and product excellence; strict
                quality control standards are maintained throughout the entire
                production process. Continuous close collaboration with the
                local farming communities ensures sustainable sourcing while
                empowering local livelihoods. Our focus is not only on
                manufacturing and branding; it drives towards building long-term
                relationships with our customers and partners involved in the
                whole business process. With a strong dedication towards
                quality, sustainability, and customer satisfaction, the main aim
                is to make meaningful and impactful economic and social
                contributions through a sustainable production process and
                through a responsible marketing process.
              </p>
            </div>

            {/* Image - 2/12 (to make total 12/12) */}
            <div className="w-full lg:w-3/12 flex-shrink-0 flex justify-center lg:justify-end items-end">
              <img
                src="/images/about-us-img-1.png"
                alt="coconut"
                className="object-cover w-full max-w-[500px]  h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECOND SECTION - CERTIFICATIONS ========== */}
      <div className="bg-white py-16 max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-[#156b54] font-franklinHeavy text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center  mb-8 ">
          OUR CERTIFICATIONS
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center md:px-24 px-4">
          {/* Left - Certification List */}
          <div className="w-full">
            <p className="text-black text-lg font-dDin sm:text-xl font-bold mb-6 text-center lg:text-left">
              Tropcey and Tropcey Products have obtained:
            </p>

            <ul className="space-y max-w-lg lg:max-w-none font-dDin">
              <li className="flex items-start gap-2">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  GMP - Good Manufacturing Practices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  HACCP - Hazard Analysis and Critical Control Point
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  ISO 22000:2018
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  EU Organic
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  USDA / NOP Organic
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[black] text-xl mt-0.5 flex-shrink-0">
                  ●
                </span>
                <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Vegan certification
                </span>
              </li>
            </ul>
          </div>

          {/* Right - Certification Badges */}
          <div className="w-full flex justify-center">
            <img
              src="/images/about-us-img-2.png"
              alt="Certification Badges"
              className="w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
