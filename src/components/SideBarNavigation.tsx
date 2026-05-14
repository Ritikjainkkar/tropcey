"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { products } from "../data/page";
import Link from "next/link";

export default function SideBarNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const drawer = (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Floating Toggle Icon */}
      <div className="fixed right-4 top-[50vh] -translate-y-1/2 z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Open menu"
        >
          <img
            src="/Icons/label-icon.png"
            alt="Open Menu"
            width={55}
            height={55}
            className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px]"
          />
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Drawer */}
          <div
            className="absolute top-0 right-0 h-full w-full  sm:w-[500px] bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-start p-4 sm:p-6 absolute  left-0">
              <button
                onClick={() => setIsOpen(false)}
                className="group transition-all duration-300 rounded-full p-2 hover:bg-white/20"
                aria-label="Close menu"
              >
                <img
                  src="/images/navbar/close.png"
                  alt="Close"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:rotate-90 transition-all"
                />
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center mb-10 px-4 mt-20">
              <Link href="/">
                <img
                  src="/images/navbar/logo-black.png"
                  alt="Logo"
                  className="h-16 sm:h-24 w-auto object-contain "
                />
              </Link>
            </div>

            {/* Products List */}
            <div className="flex flex-col gap-4 sm:gap-6 px-8 sm:px-12 overflow-y-auto pb-10 flex-1 no-scrollbar">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 sm:gap-6 hover:translate-x-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl group-hover:bg-white/30 transition-colors border border-white/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-white drop-shadow-sm">
                    {product.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  return mounted ? createPortal(drawer, document.body) : null;
}
