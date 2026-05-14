"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const route = useRouter();

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleSearchActive = () => {
    setSearchActive(!searchActive);
  };

  const pathname = usePathname();

  return (
    <div>
      {/* Search Overlay */}
      {searchActive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
          onClick={toggleSearchActive}
        >
          <div
            className="w-[90%] md:w-[60%] lg:w-[45%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={toggleSearchActive}
              className="absolute -top-10 right-0 text-gray-600 hover:text-black transition-colors"
            >
              <img
                src="/images/navbar/close.png"
                width={32}
                height={32}
                alt="close"
                className={`${styles.closeIcon} w-7 h-7`}
              />
            </button>

            {/* Search box */}
            <div
              className="flex items-center rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Search icon inside input */}
              <div className="pl-5 pr-2 flex items-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="flex-1 py-4 pr-4 text-lg bg-transparent outline-none text-gray-700 placeholder-gray-400 font-franklinBook"
              />

              <button
                className="bg-[#215519] text-white px-6 py-4 text-base font-franklinBook hover:bg-[#1a4314] transition-colors"
                onClick={toggleSearchActive}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nav Link */}
      <div
        className={`${styles.navLink} ${
          active ? "active" : "hidden"
        } min-h-screen flex justify-center items-center fixed top-0 w-full left-0`}
      >
        <ul className="flex flex-col gap-4 justify-center items-center">
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline hover:text-[#FFFFFF] font-bold text-6xl"
              href="/about"
            >
              ABOUT US
            </Link>
          </li>
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline hover:text-[#FFFFFF] font-bold text-6xl"
              href="/products"
            >
              PRODUCTS
            </Link>
          </li>
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline hover:text-[#FFFFFF] font-bold text-6xl"
              href="/our-values"
            >
              OUR VALUES
            </Link>
          </li>
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline hover:text-[#FFFFFF] font-bold text-6xl"
              href="/contact"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* Navigation Wrap */}
      <div
        className={`${styles.navigationWrap} absolute w-full z-20 top-0 flex justify-between gap-2 items-center py-2 px-4 md:px-14`}
      >
        {/* Left */}
        <div className={`${styles.navLeft} relative`}>
          {pathname !== "/" && (
            <Link href="/?back=true" className="cursor-pointer">
              <img
                src="/images/back icon-01-01.png"
                alt="Close"
                className="absolute top-0"
                width={80}
              />
            </Link>
          )}
          <Link href="/">
            <img
              src="/images/navbar/logo-black.png"
              width={90}
              height={90}
              className={pathname == "/" ? "" : "ml-[75px]"}
              alt="logo"
            />
          </Link>
        </div>

        {/* Right */}
        <div className={`${styles.navRight}`}>
          <div className="flex gap-2 justify-center items-center">
            {/* Search icon button */}
            <img
              src="/images/navbar/search-icon.png"
              width={40}
              height={40}
              alt="search"
              onClick={toggleSearchActive}
              className="cursor-pointer [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.35))] md:w-[35px] w-[30px]"
            />

            {/* Burger and Close buttons */}
            <div className="relative flex gap-2">
              {!active && (
                <img
                  src="/images/navbar/burger.png"
                  width={70}
                  height={70}
                  alt="burger"
                  onClick={toggleActive}
                  className="cursor-pointer [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.35))] md:w-[60px] w-[50px]"
                />
              )}
              {active && (
                <img
                  src="/images/navbar/close.png"
                  width={35}
                  height={35}
                  alt="close"
                  onClick={toggleActive}
                  className={`${styles.closeIcon} md:w-[35px] w-[30px]`}
                />
              )}
              {active && (
                <img
                  src="/images/navbar/angle-burger.png"
                  width={40}
                  height={40}
                  alt="angle-burger"
                  onClick={toggleActive}
                  className="cursor-pointer md:w-[40px] w-[30px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
