import React from "react";
import styles from "./our-values.module.css";

const OurValues = () => {
  return (
    <div className="value-wrapper">
      {/* First Section */}
      <div
        className={`${styles.first} md:pt-0 pt-[100px] bg-[url('/images/our-values/value-bg.jpg')] lg:min-h-screen min-h-container lg:py-0 py-8 bg-cover flex gap-4 flex-col lg:flex-row`}
      >
        {/* left */}
        <div className="basis-1/2 flex justify-center items-center">
          <img
            src="/images/our-values/value-coconut.png"
            alt="Our Values"
            width={800}
            height={800}
            className={`${styles.firstImg} mt-[100px] ml-[100px]`}
          />
        </div>
        {/* right */}
        <div className="basis-1/2 flex justify-center lg:items-baseline items-center flex-col">
          <h1 className="text-4xl font-brokeline font-400 md:text-7xl lg:text-7xl lg:mb-4 mt-4 lg:mt-0 text-[#215519]">
            OUR VALUES
          </h1>
          <p className="text-[20px] tracking-wider font-dDin text-[#215519] mt-4 lg:mt-0">
            Health Benifits
          </p>
          <p className="text-[20px] tracking-wider font-dDin text-[#215519]">
            Community Involvement
          </p>
          <p className="text-[20px] tracking-wider font-dDin text-[#215519]">
            Environmentally Friendly
          </p>
          <p className="text-[20px] tracking-wider font-dDin text-[#215519]">
            Sustainability
          </p>
          <p className="text-[20px] tracking-wider font-dDin text-[#215519]">
            Tropical Identity
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="second bg-[url('/images/our-values/value-green-bg1.jpg')] lg:bg-[url('/images/our-values/value-green-bg.jpg')] min-h-screen bg-cover bg-no-repeat">
        <div className="value-container bg-[url('/images/our-values/value-second-bg.png')] min-h-screen bg-cover bg-no-repeat flex lg:gap-4 md:gap-16 gap-4 lg:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="basis-2/3 order-2 lg:order-1 flex flex-col justify-center items-center md:px-16 px-4 ">
            <h1 className="md:text-5xl font-brokeline text-4xl mb-4 text-white ">
              Health Benifits
            </h1>
            <p className="text-white tracking-wider font-dDin text-1xl text-justify lg:px-14 px-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
            </p>
          </div>

          {/* right */}
          <div className="basis-1/3 flex order-1 lg:order-2 lg:justify-normal justify-center items-center">
            <img
              src={"/images/our-values/heart.png"}
              alt="heart"
              width={300}
              height={300}
              className={`${styles.secondImg}`}
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="third lg:bg-[url('/images/our-values/third-white-bg.jpg')] bg-[url('/images/our-values/third-white-bg-mb.jpg')] min-h-screen bg-cover bg-no-repeat">
        <div className="value-container bg-[url('/images/our-values/value-second-bg.png')] min-h-screen bg-cover bg-no-repeat flex gap-4 lg:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="basis-1/3 flex lg:justify-end justify-center items-center">
            <img
              src={"/images/our-values/commynity.png"}
              alt="heart"
              width={300}
              height={300}
              className={`${styles.thirdImg}`}
            />
          </div>

          {/* right */}

          <div className="basis-2/3 flex flex-col justify-center items-center md:px-16 px-4">
            <h1 className="lg:text-5xl md:text-5xl text-2xl lg:mt-0 mt-5 mb-4 text-[#215519] font-brokeline">
              Community Involvement
            </h1>
            <p className="text-[#215519] tracking-wider lg:px-14 px-4 font-dDin text-1xl text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="second bg-[url('/images/our-values/value-green-bg1.jpg')] lg:bg-[url('/images/our-values/value-green-bg.jpg')] min-h-screen bg-cover bg-no-repeat">
        <div className="value-container bg-[url('/images/our-values/value-second-bg.png')] min-h-screen bg-cover bg-no-repeat flex gap-4 lg:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="basis-2/3 flex order-2 lg:order-1 flex-col justify-center items-center md:px-14 px-4">
            <h1 className="lg:text-5xl md:text-5xl text-2xl mb-4 text-white font-brokeline">
              Environmentally Friendly
            </h1>
            <p className="text-white tracking-wider font-dDin lg:px-14 px-4  text-1xl text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
            </p>
          </div>

          {/* right */}
          <div className="basis-1/3 flex order-1 lg:order-2 lg:justify-normal justify-center items-center">
            <img
              src={"/images/our-values/environment.png"}
              alt="heart"
              width={300}
              height={300}
              className={`lg:mt-0 mt-5 ${styles.fifthImg}`}
            />
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="third lg:bg-[url('/images/our-values/third-white-bg.jpg')] bg-[url('/images/our-values/third-white-bg-mb.jpg')] min-h-screen bg-cover bg-no-repeat">
        <div className="value-container bg-[url('/images/our-values/value-second-bg.png')] min-h-screen bg-cover bg-no-repeat flex gap-4 lg:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="basis-1/3 flex lg:justify-end justify-center items-center">
            <img
              src={"/images/our-values/sustain.png"}
              alt="heart"
              width={300}
              height={300}
              className={`${styles.thirdImg}`}
            />
          </div>

          {/* right */}

          <div className="basis-2/3 flex flex-col justify-center items-center md:px-16 px-4">
            <h1 className="lg:text-5xl md:text-5xl text-2xl lg:mt-0 mt-5 mb-4 text-[#215519] font-brokeline">
              Sustainability
            </h1>
            <p className="text-[#215519] tracking-wider lg:px-14 px-4 font-dDin text-1xl text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
            </p>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="second bg-[url('/images/our-values/value-green-bg1.jpg')] lg:bg-[url('/images/our-values/value-green-bg.jpg')] min-h-screen bg-cover bg-no-repeat">
        <div className="value-container bg-[url('/images/our-values/value-second-bg.png')] min-h-screen bg-cover bg-no-repeat flex gap-4 lg:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="basis-2/3 flex order-2 lg:order-1 flex-col justify-center items-center md:px-16 px-4">
            <h1 className="lg:text-5xl md:text-5xl text-2xl mb-4 text-white font-brokeline">
              Tropical Identity
            </h1>
            <p className="text-white tracking-wider lg:px-14 px-4 font-dDin text-1xl text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
            </p>
          </div>

          {/* right */}
          <div className="basis-1/3 flex order-1 lg:order-2 lg:justify-normal justify-center items-center">
            <img
              src={"/images/our-values/tropical.png"}
              alt="heart"
              width={300}
              height={300}
              className={`${styles.sixthImg} lg:mt-0 mt-5`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
