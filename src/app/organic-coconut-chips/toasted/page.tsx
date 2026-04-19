"use client";
import Background from "@/components/Background";
import LeftContainer from "@/components/LeftContainer";
import RightTextBox from "@/components/RightTextBox";
import { data } from "@/data/pages";
import React, { useEffect, useRef } from "react";

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
      localStorage.setItem("lastUrl", "/organic-coconut-chips/toasted");
      localStorage.setItem("lastPage", "organic-coconut-chips/toasted");
    }
  }, []);

  const chip = data?.sweetToastedChips;

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
      <div className="relative bg-baked-chips-bg-left bg-baked-chips-bg-right text-white flex flex-col lg:flex-row justify-between min-h-[100vh] w-[100%] items-center z-10 pb-5 bg-[url('/images/background/sweet-chips-bg.png')] bg-cover bg-center">
        <LeftContainer
          imgSrc={chip.imgUri}
          brandingSubtitle={chip.brandingSubtitle}
          width={350}
          title={chip.title}
          details={chip}
        />
        <RightTextBox details={chip} isFull={false} />
      </div>
    </div>
  );
};

export default Page;
