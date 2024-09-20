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
      {/* Nav Link */}
      <div
        className={`${styles.navLink} ${
          active ? "active" : "hidden"
        } min-h-screen flex justify-center items-center fixed top-0 w-full  left-0`}
      >
        <ul className="flex flex-col gap-4  justify-center items-center">
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline  hover:text-[#FFFFFF] font-bold text-6xl"
              href="/about"
            >
              ABOUT US
            </Link>
          </li>
          <li onClick={toggleActive}>
            <Link
              className="text-[#215519] tracking-wider font-brokeline hover:text-[#FFFFFF] font-bold text-6xl"
              href="/"
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
        className={`${styles.navigationWrap} absolute  w-full z-20 top-0 flex justify-between gap-2 items-center py-5 px-4 md:px-14 `}
      >
        {/* Left */}
        <div className={`${styles.navLeft}`}>
          <Link href="/">
            <img
              src="/images/navbar/logo-shadow.png"
              width={100}
              height={100}
              className={pathname == "/" ? "" : "ml-[120px]"}
              alt="logo"
            />
            {pathname !== "/" && (
              <Link href="/?back=true" className="cursor-pointer">
                <img
                  src="/images/back icon-01-01.png"
                  alt="Close"
                  className="absolute top-0"
                  width={120}
                  onClick={() => console.log("Close button clicked")}
                />
              </Link>
            )}
          </Link>
        </div>
        {/* Right */}
        <div className={`${styles.navRight}`}>
          <div className="flex gap-2 justify-center items-center ">
            {/* Search input */}
            <form className="md:w-full mx-auto">
              <div className="relative flex gap-2 justify-center items-center">
                <input
                  type="text"
                  id="default-search"
                  className={`${styles.defaultSearch} ${
                    searchActive ? "active" : "hidden"
                  }  block md:w-[50%] w-[60%] fixed top-[40px] md:right-[195px] right-[150px]  p-4 ps-10 text-right  text-xl text-white border border-none  bg-[#AAC887]  outline-none placeholder-white`}
                  placeholder="Type and Hit Enter"
                  required
                />
                {!searchActive && (
                  <img
                    src="/images/navbar/search-icon.png"
                    width={40}
                    height={40}
                    alt="search"
                    onClick={toggleSearchActive}
                    className="cursor-pointer "
                  />
                )}
                {searchActive && (
                  <img
                    src="/images/navbar/close.png"
                    width={40}
                    height={40}
                    alt="search"
                    onClick={toggleSearchActive}
                    className={`${styles.closeIcon}`}
                  />
                )}
              </div>
            </form>

            {/* Burger and Close buttons */}
            <div className="relative flex gap-2">
              {!active && (
                <img
                  src="/images/navbar/burger.png"
                  width={70}
                  height={70}
                  alt="burger"
                  onClick={toggleActive}
                  className="cursor-pointer"
                />
              )}
              {active && (
                <img
                  src="/images/navbar/close.png"
                  width={40}
                  height={40}
                  alt="close"
                  onClick={toggleActive}
                  className={`${styles.closeIcon}`}
                />
              )}
              {active && (
                <img
                  src="/images/navbar/angle-burger.png"
                  width={40}
                  height={40}
                  alt="angle-burger"
                  onClick={toggleActive}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* extra */}
    </div>
  );
};

export default Navigation;
