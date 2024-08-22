import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className="bg-[url('/images/contact/ContactusPages-07.png')]  bg-cover bg-no-repeat pt-[100px]">
      {/* top section */}
      <div className="flex gap-4 justify-center items-center flex-col lg:flex-row min-h-screen">
        {/* left */}
        <div className="basis-1/2">
          <img
            src="/images/contact/contact-iland.png"
            alt="Iland"
            width={600}
            height={600}
            className={`${styles.contactImg}`}
          />
        </div>
        {/* right */}
        <div className="basis-1/2">
          <h1 className="text-4xl font-brokeline md:text-7xl lg:text-7xl text-[#215519] text-bold mt-8">
            CONTACT US
          </h1>

          <div className="md:w-[400px] w-[300px] lg:w-[80%] my-5 flex flex-col justify-center align-baseline">
            <div className="mb-5">
              <input
                type="text"
                id="name"
                className="bg-[#C3D8AA] tracking-wider font-dDin border-none w-full p-2.5 focus-visible:outline-none  placeholder-[#215519]"
                placeholder="Name"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                id="subject"
                className="bg-[#C3D8AA] tracking-wider font-dDin border-none w-full p-2.5 focus-visible:outline-none placeholder-[#215519]"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-[#C3D8AA] tracking-wider font-dDin border-none w-full p-2.5 focus-visible:outline-none placeholder-[#215519]"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-5">
              <textarea
                className="resize tracking-wider font-dDin focus-visible:outline-none placeholder-[#215519] border-none w-full p-2.5 bg-[#C3D8AA] "
                placeholder="Type your message here..."
                rows={5}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="min-h-screen  flex gap-4 py-5 flex-col lg:flex-row">
        {/* Left section */}
        <div className="flex justify-center items-center basis-1/2">
          <img
            src="/images/contact/contact-mic.png"
            alt="Map"
            width={400}
            height={400}
            className={`${styles.contactMic}`}
          />
        </div>
        <span className="bg-[#215519] w-2"></span>
        {/* Right section */}
        <div className="basis-1/2 px-10">
          <h1 className="text-4xl tracking-wider font-dDin lg:text-4xl text-[#215519] text-bold mt-8">
            How can we help?
          </h1>
          <div>
            <div className="flex gap-2 items-baseline mt-3">
              <input
                type="radio"
                name="radio"
                className={`${styles.radio}`}
                defaultChecked
              />
              <p className="font-dDin tracking-wider text-[#215519]">
                Packaging Concern <br /> I have a container (bottle/carton/can)
                that has an issue.
              </p>
            </div>

            <div className="flex gap-2 items-baseline mt-3">
              <input type="radio" name="radio" className={`${styles.radio}`} />
              <p className="font-dDin tracking-wider text-[#215519]">
                Product Concern <br />
                The drink inside my container has an issue.
              </p>
            </div>

            <div className="flex gap-2 items-baseline mt-3">
              <input type="radio" name="radio" className={`${styles.radio}`} />
              <p className="font-dDin tracking-wider text-[#215519]">
                Compliment/Comment <br />I don&apos;t have a comment about a
                specific container, but I&apos;d like to share my overall
                experience with your products.
              </p>
            </div>

            <div className="flex gap-2 items-baseline mt-3">
              <input type="radio" name="radio" className={`${styles.radio}`} />
              <p className="font-dDin tracking-wider text-[#215519]">
                Questions <br />I have a question about your products, brands,
                or company
              </p>
            </div>

            <div className="flex gap-2 items-baseline mt-3">
              <input type="radio" name="radio" className={`${styles.radio}`} />
              <p className="font-dDin tracking-wider text-[#215519]">
                Coupon/Merchandise Request
              </p>
            </div>

            <div className="flex gap-2 items-baseline mt-3">
              <input type="radio" name="radio" className={`${styles.radio}`} />
              <p className="font-dDin tracking-wider text-[#215519]">
                Sponsorship/Donation
              </p>
            </div>

            <button
              type="submit"
              className="text-white bg-[#215519] hover:bg-[#C3D8AA] focus:ring-4 focus:outline-none  focus-visible:outline-none focus-within:outline-none w-full sm:w-auto px-14 py-2.5 text-center transform duration-300 mt-4 rounded-full font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
