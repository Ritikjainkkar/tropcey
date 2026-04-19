import React from "react";

export default function LeftContainer({
  imgSrc,
  brandingSubtitle,
  width,
  title,
  details,
}: any) {
  return (
    <div className="h-full w-full md:w-[50%] flex flex-col justify-center items-center p-4 mt-[150px] lg:mt-0 relative">
      {title?.map((item: any, index: number) => (
        <h2
          key={index}
          className={`font-bold  text-center uppercase`}
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
        className="w-[5px] h-64 absolute top-0 right-[10px] transform -translate-x-1/2 hidden lg:block"
        style={{ backgroundColor: details?.verticalLine?.color }}
      />
      {details?.titleLabel && (
        <p
          className={`py mx-auto lg:mx-0 px-10 my-2 text-white   text-center text-2xl w-fit font-berkShire`}
          style={{
            backgroundColor: details.titleLabel.bgColor,
            whiteSpace: "pre-wrap",
          }}
        >
          {details.titleLabel.text}
        </p>
      )}

      {details?.afterTitle && (
        <h2
          className={` text-center uppercase`}
          style={{
            color: details.afterTitle.color,
            fontSize: details.afterTitle.size,
            lineHeight: 1,
            fontFamily: `var(--font-${details.afterTitle.font})`,
          }}
        >
          {details.afterTitle.text}
        </h2>
      )}
      <div className="flex gap-2 flex-col lg:flex-row justify-center items-center mt-4">
        <div>
          <img
            src={imgSrc}
            alt="Product image"
            width={"350px"}
            className={`h-auto max-w-[100%] w-[100%] chip-img  mb-8 md:mb-[64px] md:max-w-[450px]`}
          />
        </div>
        {details?.recommendations && (
          <div className="flex lg:flex-col flex-row gap-2 justify-center items-center mb-5 lg:mb-0">
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
        <div className="h-[50px] rounded-lg w-[100%] flex justify-center items-center mt-0 lg:mt-[-45px]">
          <span
            className="text-4xl font-impact capitalize text-center"
            style={{ color: brandingSubtitle.color }}
          >
            {brandingSubtitle.text}
          </span>
        </div>
      ) : null}
    </div>
  );
}
