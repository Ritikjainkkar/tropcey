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
        <div className="flex gap-4 justify-center items-center w-[100vw] bottom-0 left-0 absolute">
          {imgUrls?.map((img: any, index: number) => (
            <img
              src={img.url}
              onClick={() => onClickHandler(img)}
              key={index}
              alt="Product"
              loading="lazy"
              className="w-[100px] h-auto cursor-grab"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex md:gap-4 gap-2 justify-center items-center w-[100%] ">
      {imgUrls?.map((img: any, index: number) => (
        <img
          src={img.url}
          onClick={() => onClickHandler(img)}
          key={index}
          alt="Product"
          loading="lazy"
          className="w-[100px] h-auto cursor-grab"
        />
      ))}
    </div>
  );
}
