import React from "react";

export default function LeftContainer({
  brandingSubtitle,
  title,
  details,
}: any) {
  return (
    <>
      <style>{`
      .branding-gap {
        margin-top: ${brandingSubtitle?.gapTopMobile};
      }
      @media (min-width: 768px) {
        .branding-gap {
          margin-top: ${brandingSubtitle?.gapTopMd};
        }
      }
      @media (min-width: 1224px) {
        .pure-img{
        margin: ${details?.imgUri.margin};
        }
        .milk-img{
        margin: ${details?.imgUri.margin};
      }
      @media (min-width: 1024px) {
        .branding-gap {
          margin-top: ${brandingSubtitle?.gapTopLg};
        }
      }
    `}</style>

      <div className="h-full w-full lg:w-[50%] w-100% flex flex-col mt-[65px] md:mt-[75px] lg:mt-0 relative">
        {title?.map((item: any, index: number) => (
          <h2
            key={index}
            className={`font-bold  text-center uppercase hidden md:block z-10`}
            style={{
              color: item.color,
              fontSize: item.size,
              lineHeight: 1,
              fontFamily: `var(--font-${item.font})`,
            }}
          >
            {item.text}
          </h2>
        ))}
        {details.titleMb?.map((item: any, index: number) => (
          <h2
            key={index}
            className={`font-bold  text-center uppercase md:hidden`}
            style={{
              color: item.color,
              fontSize: item.size,
              lineHeight: 1,
              fontFamily: `var(--font-${item.font})`,
            }}
          >
            {item.text}
          </h2>
        ))}
        <div
          className="w-[6px] h-64 absolute top-2 right-[10px] transform -translate-x-1/2 hidden lg:block "
          style={{ backgroundColor: details?.verticalLine?.color }}
        />
        {details?.titleLabel && details?.titleLabel && (
          <div className="justify-center items-center hidden md:flex">
            <p
              className={`py mx-auto lg:mx-0 lg:my-0 text-white text-center text-[18px] w-fit font-auromiya`}
              style={{
                backgroundColor: details.titleLabel.bgColor,
                paddingLeft: details.titleLabel.px,
                paddingRight: details.titleLabel.px,
                whiteSpace: "pre-wrap",
              }}
            >
              {details.titleLabel.text}
            </p>
          </div>
        )}

        {details?.titleLabel2 && details?.titleLabel2 && (
          <div className="flex justify-center items-center md:hidden">
            <p
              className={`py mx-auto lg:mx-0 lg:my-0 text-white text-center  w-fit font-auromiya`}
              style={{
                backgroundColor: details.titleLabel2.bgColor,
                paddingLeft: details.titleLabel2.px,
                paddingRight: details.titleLabel2.px,
                whiteSpace: "pre-wrap",
                fontSize: details.titleLabel2.size,
              }}
            >
              {details.titleLabel2.text}
            </p>
          </div>
        )}

        {details?.afterTitle && (
          <h2
            className={` text-center uppercase mt-2 hidden md:block`}
            style={{
              color: details.afterTitle.color,
              fontSize: details.afterTitle.size,
              lineHeight: 1,
              fontFamily: `var(--font-${details.afterTitle.font})`,
              fontWeight: details.afterTitle.weight,
            }}
          >
            {details.afterTitle.text}
          </h2>
        )}
        {details?.afterTitle2 && (
          <h2
            className={` text-center uppercase mt-2 md:hidden`}
            style={{
              color: details.afterTitle2.color,
              fontSize: details.afterTitle2.size,
              lineHeight: 1,
              fontFamily: `var(--font-${details.afterTitle2.font})`,
              fontWeight: details.afterTitle2.weight,
            }}
          >
            {details.afterTitle2.text}
          </h2>
        )}
        <div className="flex gap-2 flex-col lg:flex-row justify-center items-center lg:mt-2 md:mt-14 mt-14">
          <div>
            <img
              src={details?.imgUri.link}
              alt="Product image"
              style={{ width: details.imgUri.width }}
              className="h-auto max-w-full chip-img mb-2 hidden lg:block pure-img milk-img"
            />
            <img
              src={details?.imgUri2.link}
              alt="Product image"
              style={{ width: details.imgUri2.width }}
              className="h-auto max-w-full chip-img mb-2 lg:hidden md:block hidden"
            />
            <img
              src={details?.imgUri3.link}
              alt="Product image"
              style={{ width: details.imgUri3.width }}
              className="h-auto max-w-full chip-img mb-2 md:hidden"
            />
          </div>
          {details?.recommendations && (
            <div className="flex lg:flex-col flex-row gap-[5px] justify-center items-center mb-5 lg:mb-0">
              {details.recommendations.map((img: any, index: number) => (
                <a href={img.click} key={index}>
                  <span className="flex justify-center items-center flex-col lg:flex-row gap-2">
                    <img
                      src={img.url}
                      alt="Product image"
                      className="h-auto max-w-full w-[var(--w-sm)] lg:w-[var(--w-lg)] hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                      style={
                        {
                          "--w-sm": img.sizeMd,
                          "--w-lg": img.sizeLg,
                        } as React.CSSProperties
                      }
                    />
                    {img?.name && (
                      <p
                        className="font-bold text-center"
                        style={{ color: img.color }}
                      >
                        {img.name}
                      </p>
                    )}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
        {brandingSubtitle ? (
          <div
            className={`branding-gap lg:pt-0 pt-[50px] md:mb-7 mb-7 lg:mb-0  rounded-lg w-[100%] flex justify-center items-center`}
          >
            <span
              className="lg:text-[40px] md:text-[45px] text-2xl font-impact capitalize text-center lg:leading-[55px] md:leading-[45px] leading-[30px] px-[10px]"
              style={{ color: brandingSubtitle.color }}
            >
              {brandingSubtitle.text}
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
}
