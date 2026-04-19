import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrap mx-auto">
      {/* Contact Form */}
      <section
        className="relative w-full min-h-screen flex items-center lg:pt-16 md:pt-10 pt-14"
        style={{ backgroundColor: "#0e5c38" }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-screen  max-w-[1440px] mx-auto">
          <div className="flex-none lg:w-[40%] flex flex-col items-center justify-center py-16 px-8 gap-6">
            <div className="w-28 h-28  flex items-center justify-center ">
              <img
                src="/images/contact-phone.png"
                alt="Contact Icon"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* CONTACT US text */}
            <div className="text-center leading-none">
              <p
                className="text-4xl font-extrabold uppercase tracking-widest font-franklinHeavy"
                style={{ color: "#8cc63f" }}
              >
                CONTACT
              </p>
              <p className="text-9xl mt-[-30px] font-extrabold uppercase text-white leading-tight font-franklinHeavy">
                US
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden lg:block flex-none w-[5px] self-stretch my-12"
            style={{ backgroundColor: "#8cc63f" }}
          />

          {/* Right: Form Card */}
          <div className="flex-1 flex items-center justify-center py-10 px-6 lg:px-12">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 lg:p-10">
              {/* Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Number */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Your Contact Number{" "}
                  <span className="font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Company */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Your Company Name{" "}
                  <span className="font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Inquiry */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Inquiry Category{" "}
                  <span className="font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="inquiryCategory"
                  placeholder="Inquiry"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  className="block text-sm font-bold mb-1 font-franklin"
                  style={{ color: "#0e5c38" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none placeholder-[#8aad6a] font-franklinBook"
                  style={{
                    backgroundColor: "#e8f5e0",
                    color: "#0e5c38",
                    border: "none",
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  className="px-12 py-3 rounded-full text-white text-sm font-extrabold uppercase tracking-widest transition-opacity hover:opacity-90 active:scale-95 font-franklinHeavy"
                  style={{ backgroundColor: "#8cc63f" }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Company Info + Products ── */}
      <section className="relative w-full flex flex-col bg-[#202020] mx-auto">
        {/* Bottom info strip */}
        <div className="w-full flex flex-col lg:flex-row items-stretch max-w-[1440px] mx-auto">
          {/* Left: Logo + Company details */}
          <div className="flex-none lg:w-[45%] flex flex-col items-center justify-center py-12 px-8 gap-4">
            {/* Logo placeholder */}
            <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
              {/* Replace with your logo */}
              <img
                src="/images/contact-tropcey.png"
                alt="Tropcey Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Company Names */}
            <div className="text-center">
              <p
                className="text-xs font-bold tracking-widest uppercase font-franklin"
                style={{ color: "#0e5c38" }}
              >
                TROPCEY HOLDINGS (PRIVATE) LIMITED
              </p>
              <p
                className="text-xs font-bold tracking-widest uppercase font-franklin"
                style={{ color: "#0e5c38" }}
              >
                TROPCEY VENTURES (PRIVATE) LIMITED
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <p
                className="text-sm font-semibold font-franklinHeavy"
                style={{ color: "#0e5c38" }}
              >
                Porapola, Talwita, Kurunegala,
              </p>
              <p
                className="text-sm font-semibold font-franklinHeavy"
                style={{ color: "#0e5c38" }}
              >
                Sri Lanka.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-1">
              <a
                href="mailto:info@tropcey.com"
                className="flex items-center gap-2 text-xs"
                style={{ color: "#0e5c38" }}
              >
                <img
                  src="/images/social-email.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <p className="text-[#0e5c38] font-bold">info@tropcey.com</p>
              </a>

              <a
                href="https://www.tropcey.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs"
              >
                <img
                  src="/images/social-web.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <p className="text-[#0e5c38] font-bold">www.tropcey.com</p>
              </a>

              <a
                href="tel:+94112857101"
                className="flex items-center gap-2 text-xs"
              >
                <img
                  src="/images/social-call.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <p className="text-[#0e5c38] font-bold">+94 112 857 101</p>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Facebook */}
              <a
                target="_blank"
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src="/images/social-fb.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src="/images/social-instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>

              {/* X (Twitter) */}
              <a
                target="_blank"
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src="/images/social-x.png"
                  alt="X (Twitter)"
                  width={40}
                  height={40}
                />
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src="/images/social-linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden lg:block flex-none w-[5px] self-stretch my-10"
            style={{ backgroundColor: "#1a3a28" }}
          />

          {/* Right: Products image placeholder */}
          <div className="flex-1 flex items-center justify-center py-8 px-6 lg:px-10">
            {/* Replace with your products image */}
            <img
              src="/images/contact-product.png"
              alt="Tropcey Products"
              className="max-w-full max-h-72 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
