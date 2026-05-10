import React from "react";
import DynamicTable from "./DynamicTable";
import ProductDetails from "./ProductDetails";
import ProductRecommendation from "./ProductRecommendation";
import SideBarNavigation from "./SideBarNavigation";
import { GiCheckMark } from "react-icons/gi";

export default function RightTextBox({ details, isFull, isSpread }: any) {
  return (
    <div className="w-[80%] lg:w-[55%] flex flex-col justify-center lg:pr-[128px] relative mx-auto">
      <div className="lg:max-w-[75%] mx-auto">
        {/* DESCRIPTION SECTION */}
        {details?.description && (
          <div>
            <p
              style={{
                whiteSpace: "pre-wrap",
                color: details.description.color,
              }}
              className={`text-justify mb-2 mx-auto font-franklinGothic text-[18px] leading-[25px]`}
            >
              {details.description.text}
            </p>

            {/* INGREDIENTS 2 */}
            {details?.ingrediants2 && (
              <div className="flex  w-full">
                <div className="flex flex-col mb-2">
                  {details.ingrediants2.map((ingre: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 font-franklinHeavy font-semibold text-sm md:text-base mt-2"
                      style={{ color: ingre.color }}
                    >
                      <GiCheckMark
                        style={{ stroke: "currentColor", strokeWidth: "50" }}
                      />
                      <span>{ingre.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TEXT 2 */}
            {details.description.text2 && (
              <p
                style={{
                  whiteSpace: "pre-wrap",
                  color: details.description.color,
                }}
                className="text-justify mb-2 mx-auto font-franklinGothic text-[18px] leading-[25px]"
              >
                {details.description.text2}
              </p>
            )}

            {/* SECTION TITLE */}
            <p
              style={{ color: details.description.color }}
              className="mb-2 font-franklinGothic text-[18px] tracking-wide"
            >
              {details.description.sectionTitle}
            </p>

            {/* BULLETS */}
            {details.description.bulletPoints && (
              <ul className="space-y-2">
                {details.description.bulletPoints.map(
                  (point: string, index: number) => (
                    <li
                      key={index}
                      className="flex  justify-center gap-2 font-franklinGothic text-[18px]"
                    >
                      <span className="text-xl leading-none">●</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ),
                )}
              </ul>
            )}

            {/* FOOTER */}
            <p
              style={{ color: details.description.color }}
              className="mt-2 font-franklinGothic"
            >
              {details.description.footerText}
            </p>
          </div>
        )}

        {/* BRAND IMAGE */}
        {details?.brandImg && (
          <div className="flex justify-center items-center">
            <img src={details.brandImg} alt="logo" className="my-2" />
          </div>
        )}

        {/* INGREDIENTS */}
        <div className="md:text-center text-left lg:max-w-[80%]">
          {details?.ingrediants?.map((ingre: any, index: number) => (
            <p
              key={index}
              className="font-franklinHeavy flex font-semibold items-center gap-2 lg:text-[18px] md:text-base mt-2"
              style={{ color: ingre.color }}
            >
              <GiCheckMark
                style={{ stroke: "currentColor", strokeWidth: "50" }}
              />
              <span>{ingre.text}</span>
            </p>
          ))}
        </div>
      </div>

      {/* PRODUCT NAME */}
      {details?.itemDetails && (
        <p
          className="mx-auto lg:mx-0 px-16 my-4 text-white rounded-md text-center text-2xl w-fit font-berkShire"
          style={{ backgroundColor: details.nameBgColor }}
        >
          {details.name}
        </p>
      )}

      {/* ADVICE */}
      {details?.advice && (
        <p
          className="mx-auto lg:mx-0 lg:px-8 px-5 py-2 my-4 text-white rounded-lg text-center lg:text-2xl md:text-lg text-base w-fit font-berkShire"
          style={{
            backgroundColor: details.advice.bgColor,
            fontFamily: `var(--font-${details.advice.font})`,
          }}
        >
          {details.advice.text}
        </p>
      )}

      {/* ================= FIXED TWO-COLUMN SECTION ================= */}
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-10 mt-4 mx-auto lg:mx-0">
        {/* LEFT SIDE - TIMELINE */}
        <div className="relative flex-1">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-white/60"></div>

          {details?.itemDetails?.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative flex items-start ${
                index < details.itemDetails.length - 1 ? "mb-2" : ""
              }`}
            >
              <div className="absolute left-4 -translate-x-1/2 mt-1.5 w-5 h-5 bg-white rounded-full z-10"></div>

              <div className="ml-8">
                <h3 className="text-[22px] font-bold font-franklinHeavy">
                  {item.title}
                </h3>

                <p className="text-[16px] mt-[-5px] font-franklinBook leading-relaxed opacity-90">
                  : {item.subTitle}
                </p>

                {item.subTitle2 && (
                  <p className="text-[16px] mt-[-5px] font-franklinBook leading-relaxed opacity-90">
                    : {item.subTitle2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - NUTRITION CHART */}
        <div className="flex-1 flex items-start justify-center">
          <img
            src={details.nutritionChart}
            alt="chart"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
      {/* ============================================================= */}

      <div className="z-100">
        <SideBarNavigation />
      </div>
    </div>
  );
}
