import React from "react";
import DynamicTable from "./DynamicTable";
import ProductDetails from "./ProductDetails";
import ProductRecommendation from "./ProductRecommendation";
import SideBarNavigation from "./SideBarNavigation";
import { GiCheckMark } from "react-icons/gi";

export default function RightTextBox({ details, isFull, isSpread }: any) {
  return (
    <div className="mt-8 w-[80%] lg:w-[55%] flex flex-col justify-center pr-4 lg:pr-[128px] relative">
      {details?.description && (
        <div className="max-w-[100%] lg:max-w-[80%] mx-auto">
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className={`text-center text-${details.description.color} mb-2 max-w-[100%] lg:max-w-[90%] mx-auto font-franklinGothic`}
          >
            {details.description.text}
          </p>
          <p
            className={`text-${details.description.color} mb-2 max-w-[100%] lg:max-w-[90%]  font-franklinGothic`}
          >
            {details.description.sectionTitle}
          </p>
          {details.description.bulletPoints && (
            <ul className="space-y-2">
              {details.description.bulletPoints.map(
                (point: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-xl leading-none">●</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ),
              )}
            </ul>
          )}
          <p
            className={`text-${details.description.color} mt-2 max-w-[100%] lg:max-w-[90%]  font-franklinGothic`}
          >
            {details.description.footerText}
          </p>
        </div>
      )}
      {details?.brandImg && (
        <img
          src={details.brandImg}
          alt="logo"
          width={500}
          className="max-w-150 mx-auto my-2"
        />
      )}
      <div className="md:text-center text-left mx-auto">
        {details?.ingrediants?.map((ingre: any, index: number) => (
          <p
            key={index}
            className={` font-franklinHeavy flex font-semibold items-center gap-2 text-sm md:text-base mt-2`}
            style={{ color: ingre.color }}
          >
            <GiCheckMark /> <span>{ingre.text}</span>
          </p>
        ))}
      </div>
      {details?.itemDetails && (
        <p
          className={`py mx-auto lg:mx-0 px-16 my-4 text-white  rounded-lg text-center text-2xl w-fit font-berkShire`}
          style={{ backgroundColor: details.nameBgColor }}
        >
          {details.name}
        </p>
      )}
      {details?.advice && (
        <p
          className={`py mx-auto lg:mx-0 px-16 my-4 text-white  rounded-lg text-center text-2xl w-fit font-berkShire`}
          style={{
            backgroundColor: details.advice.bgColor,
            fontFamily: `var(--font-${details.advice.font})`,
          }}
        >
          {details.advice.text}
        </p>
      )}

      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-10 mt-4 mx-auto lg:mx-0">
        <div className="relative flex-1">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-white/60"></div>

          {details?.itemDetails?.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative flex items-start ${index < details.itemDetails.length - 1 ? "mb-2" : ""}`}
            >
              <div className="absolute left-4 -translate-x-1/2 mt-1.5 w-5 h-5 bg-white rounded-full z-10"></div>
              <div className="ml-12">
                <h3 className="text-2xl font-bold mb-2 font-franklinHeavy">
                  {item.title}
                </h3>
                <p className="text-sm font-franklinBook leading-relaxed opacity-90">
                  : {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto lg:mx-0 flex-1">
          <img
            src={details.nutritionChart}
            alt="chart"
            width={200}
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>

      <div className="z-100">
        <SideBarNavigation />
      </div>
      {/* <div  className="absolute top-[-75px] right-[100px] cursor-pointer z-100" >
        <Link href="/?back=true" className='z-100 cursor-pointer'>
          <img loading="lazy" 
            src="/images/Close Icon/Black icons (1)-02/new icons (1)-03.png" 
            alt="Close" 
            width={80}
            className='z-100'
            onClick={() => console.log('Close button clicked')} 
          />
        </Link>
      </div> */}
    </div>
  );
}
