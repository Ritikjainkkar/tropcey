import React from "react";

const ProductDetails = ({
  labels,
  life,
  storage,
  ingredient,
  labelFooter,
}: any) => {
  const getFirstString = (str: string) => {
    let final = "";
    const strArr = str.split(" ");
    for (let i = 0; i < strArr.length - 1; i++) {
      final = i === 0 ? final + strArr[i] : final + " " + strArr[i];
    }
    return final;
  };

  return (
    <div className="p-4 w-full pb-5">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-center items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            {labels.map((label: any, index: number) => (
              <div
                key={index}
                className="bg-[#0a2847] w-[72px] h-[72px] md:w-[92px] md:h-[92px] rounded-full flex justify-center items-center"
              >
                <div className="bg-white w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-full flex justify-center items-center text-center">
                  <div className="bg-[#0a2847] w-[56px] h-[56px] md:w-[76px] md:h-[76px] rounded-full flex justify-center items-center font-black overflow">
                    {label.length < 8 ? (
                      label
                    ) : (
                      <div className="flex-col justify-center items-center text-center flex">
                        {label === "NO PRESERVATIVE" ? (
                          <>
                            <p className="text-[10px] md:text-[12px] text-center flex justify-center">
                              No
                            </p>
                            <p className="text-[6px] md:text-[8px] text-center flex justify-center">
                              PRESERVATIVE
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-[6px] md:text-[8px] text-center flex justify-center">
                              {getFirstString(label)}
                            </p>
                            <p className="text-[10px] md:text-[12px] text-center flex justify-center">
                              {label.split(" ")[label.split(" ").length - 1]}
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {labelFooter ? (
            <div>
              <h6 className="bg-white text-black py-2 px-4 mt-3 rounded-full text-[10px] md:text-[12px] text-center">
                <b>Note-</b>
                {labelFooter}
              </h6>
            </div>
          ) : null}
        </div>
        <div className="text-center md:text-left md:ml-10 mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <div className="text-xs md:text-sm text-black mb-1">
            <h4>
              <strong className="text-black font-black">Shelf Life</strong>
            </h4>
            <h5>{life}</h5>
          </div>
          <div className="text-xs md:text-sm text-black mb-1">
            <h4>
              <strong className="text-black font-black">Storage</strong>
            </h4>
            <h5>{storage}</h5>
          </div>
          <div className="text-xs md:text-sm text-black mb-1">
            <h4>
              <strong className="text-black font-black">Ingredient</strong>
            </h4>
            <h5>{ingredient}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
