"use client";
import Background from "@/components/Background";
import LeftContainer from "@/components/LeftContainer";
import RightTextBox from "@/components/RightTextBox";
import SideBarNavigation from "@/components/SideBarNavigation";
import { data } from "@/data/page";
import React, { useEffect, useRef } from "react";
import SideBarNavigationWeb from "@/components/SideBarNavigationWeb";

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({
  searchParams,
}) => {
  const hash = searchParams;

  const AnimRef = useRef<any>(null);

  useEffect(() => {
    if (AnimRef.current) {
      setTimeout(() => {
        AnimRef.current.classList.add("to-normal-position");
      }, 10);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("lastUrl", "/infused-virgin-coconut-oil");
      localStorage.setItem("lastPage", "infused-virgin-coconut-oil");
    }
  }, []);

  const oil = data?.infused_virgin_coconut_oil;

  return (
    <div
      ref={AnimRef}
      style={{
        transform: "translate(0, 0) scale(1)",
        filter: "blur(30px)",
        opacity: 0.8,
      }}
      className="animated-element"
    >
      {/* <Background
        leftSrc={chip.background.left}
        RightSrc={chip.background.right}
      /> */}
      <div className="relative bg-baked-chips-bg-left bg-baked-chips-bg-right text-white flex flex-col lg:flex-row items-start min-h-[100vh] w-full z-10 pb-5 lg:pt-[100px] pt-[40px] lg:bg-[url('/images/background/infused-virgin-oil-bg.jpg')] bg-[url('/images/background/infused-mb-bg.png')] bg-cover bg-center">
        <LeftContainer
          imgSrc={oil.imgUri}
          brandingSubtitle={oil.brandingSubtitle}
          width={350}
          title={oil.title}
          details={oil}
        />
        <RightTextBox details={oil} isFull={false} />
      </div>

      <div className="z-100">
        <SideBarNavigation />
        <SideBarNavigationWeb />
      </div>
    </div>
  );
};

export default Page;
