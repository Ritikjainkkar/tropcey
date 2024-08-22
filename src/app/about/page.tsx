import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className="about-wrap ">
      {/* First Section */}
      <div className="about md:pt-0 pt-[120px] bg-[url('/images/about/about-bg.jpg')] lg:min-h-screen gap-14 bg-cover flex lg:gap-4 justify-between items-center flex-col lg:flex-row py-10 lg:py-0">
        <div className="about-left basis-1/2 justify-center items-center flex">
          <img
            src="/images/about/Aboutus1-05.png"
            alt="about image"
            width={500}
            height={500}
            className={`${styles.aboutImg}`}
          />
        </div>
        <div className="about-right basis-1/2">
          <h1
            className={`text-9xl mb-3 text-center font-brokeline text-white font-bold ${styles.aboutTitle}`}
          >
            ABOUT US
          </h1>
          <p
            className={`text-white text-justify tracking-wider font-dDin px-[150px] ${styles.aboutText}`}
          >
            Embark on a journey with our wholesome coconut products, where each
            tender coconut harvested whispers tales of tropical paradise. From
            the sun-kissed palms to the nourishing elixir within, every step of
            our process is a celebration of health and vitality. Savor the pure
            essence of coconuts, meticulously crafted into a symphony of flavors
            that dance on your palate.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="about-second-sec lg:min-h-screen bg-[url('/images/about/about-green-bg1.jpg')] lg:bg-[url('/images/about/about-green-bg.jpg')] bg-cover bg-no-repeat flex lg:gap-4 md:gap-[150px] justify-between items-center flex-col lg:flex-row py-10 lg:py-0">
        {/* Left */}
        <div className="about-sec-left basis-1/2 flex justify-center items-center">
          <p
            className={`text-white font-dDin tracking-wider text-justify px-[100px] ${styles.aboutSecLeftText}`}
          >
            Embark on a journey with our wholesome coconut products, where each
            tender coconut harvested whispers tales of tropical paradise. From
            the sun-kissed palms to the nourishing elixir within, every step of
            our process is a celebration of health and vitality. Savor the pure
            essence of coconuts, meticulously crafted into a symphony of flavors
            that dance on your palate. Embark on a journey with our wholesome
            coconut products, where each tender coconut harvested whispers tales
            of tropical paradise. From the sun-kissed palms to the nourishing
            elixir within, every step of our process is a celebration of health
            and vitality. Savor the pure essence of coconuts, meticulously
            crafted into a symphony of flavors that dance on your palate.Embark
            on a journey with our wholesome coconut products, where each tender
            coconut harvested whispers tales of tropical paradise. From the
            sun-kissed palms to the nourishing elixir within, every step of our
            process is a celebration of health and vitality. Savor the pure
            essence of coconuts, meticulously crafted into a symphony of flavors
            that dance on.
          </p>
        </div>

        {/* Right */}
        <div className="about-sec-right basis-1/2">
          <img
            src="/images/about/about-island.png"
            alt="about image"
            width={500}
            height={500}
            className={`${styles.aboutIslandImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
