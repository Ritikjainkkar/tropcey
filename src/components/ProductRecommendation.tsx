"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ProductRecommendation({ imgUrls, isFull }: any) {
  const router = useRouter();

  const onClickHandler = (img: any) => {
    console.log(img);
    if (img.click) {
      router.push(img.click);
    }
  };

  if (isFull) {
    return (
      <div>
        <div className="h-[220px]"></div>
        <div className="flex justify-around items-center w-[100vw] bottom-0 left-0 absolute left-[50px] transform -translate-x-1/2 ">
          {imgUrls?.map((img: any, index: number) => (
            <img
              src={img.url}
              onClick={() => onClickHandler(img)}
              key={index}
              alt="Product"
              loading="lazy"
              className="w-[80px] tr md:w-[100px] h-auto cursor-grab"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-5 items-center w-full md:w-[100%]">
      {imgUrls?.map((img: any, index: number) => (
        <img
          src={img.url}
          onClick={() => onClickHandler(img)}
          key={index}
          alt="Product"
          loading="lazy"
          className="w-[80px] md:w-[100px] h-auto cursor-grab transform transition duration-1000 hover:scale-125"
        />
      ))}
    </div>
  );
}
