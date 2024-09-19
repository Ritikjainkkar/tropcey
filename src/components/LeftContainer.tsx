import React from "react";

export default function LeftContainer({
  imgSrc,
  brandingSubtitle,
  width,
}: any) {
  return (
    <div className="h-full w-full md:w-[40%] flex flex-col justify-center items-center p-4">
      <img
        src="/images/home/Green Chips-tail.png"
        width={"150px"}
        height={"100px"}
        alt=""
        className="tail-image lg:mt-[100px] md:mt-[150px] mt-[100px]"
      />
      <img
        src={imgSrc}
        alt="Product image"
        width={"250px"}
        className={`h-auto max-w-[220px] chip-img mt-[-10px] mb-8 md:mb-[64px] md:max-w-[450px]`}
      />
      {brandingSubtitle ? (
        <div className="bg-[#0a2847] h-[50px] rounded-lg w-[100%] md:w-[300px] flex justify-center items-center lg:mt-[-45px]">
          <span className="bg-[#0a2847] border-white h-[40px] w-[90%] md:w-[280px] border-[1px] rounded-lg font-black text-center flex justify-center items-center">
            {brandingSubtitle}
          </span>
        </div>
      ) : null}
    </div>
  );
}
