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
    <div className="p-4 w-full">
      <div className="w-full flex justify-center items-center px-10">
        <div>
          <div className="flex space-x-4 justify-center items-center">
            {labels.map((label: any, index: number) => (
              <div
                key={index}
                className="bg-[#0a2847] w-[92px] h-[92px] rounded-full flex justify-center items-center"
              >
                <div className="bg-white w-[84px] h-[84px] rounded-full flex justify-center items-center text-center flex">
                  <div className="bg-[#0a2847] w-[76px] h-[76px] rounded-full flex justify-center items-center font-black overflow">
                    {label.length < 8 ? (
                      label
                    ) : (
                      <div className="flex-col justify-center items-center text-center flex">
                        {label === "NO PRESERVATIVE" ? (
                          <>
                            <p className="text-[12px] text-center flex justify-center">
                              No
                            </p>
                            <p className="text-[8px] text-center flex justify-center">
                              PRESERVATIVE
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-[8px] text-center flex justify-center">
                              {getFirstString(label)}
                            </p>
                            <p className="text-[12px] text-center flex justify-center">
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
              <h6 className="bg-white text-black py-2 px-5 mt-3 rounded-full text-[12px] text-center">
                {" "}
                <b>Note-</b>
                {labelFooter}
              </h6>
            </div>
          ) : null}
        </div>
        <div className="text-left ml-10">
          <div className="text-sm text-black text-left mb-1">
            <h4>
              <strong className="text-black font-black text-label">
                Shelf Life
              </strong>
            </h4>{" "}
            <h5 className="text-life">{life}</h5>
          </div>
          <div className="text-sm text-black text-left mb-1">
            <h4>
              <strong className="text-black font-black text-label">
                Storage
              </strong>
            </h4>{" "}
            <h5 className="text-life">{storage}</h5>
          </div>
          <div className="text-sm text-black text-left mb-1">
            <h4>
              <strong className="text-black font-black text-label">
                Ingredient
              </strong>
            </h4>{" "}
            <h5 className="text-life">{ingredient}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
