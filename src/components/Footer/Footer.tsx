import React from "react";

const Footer = () => {
  return (
    <section className="relative w-full flex flex-col bg-[#ffffff] mx-auto">
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
              href="https://www.facebook.com/tropcey"
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
              href="https://www.instagram.com/tropcey/"
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
              href="https://x.com/tropcey"
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
              href="https://www.linkedin.com/company/tropcey/"
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
  );
};

export default Footer;
