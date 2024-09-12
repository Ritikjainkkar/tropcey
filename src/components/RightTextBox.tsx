import React from "react";
import DynamicTable from "./DynamicTable";
import ProductDetails from "./ProductDetails";
import ProductRecommendation from "./ProductRecommendation";
import SideBarNavigation from "./SideBarNavigation";

export default function RightTextBox({ details, isFull, isSpread }: any) {
  return (
    <div className="mt-8 w-full lg:w-[55%] flex flex-col justify-center items-center pr-4 lg:pr-[128px] relative">
      <h1 className="text-2xl md:text-4xl font-bold text-black mb-1">
        {details.title}
      </h1>
      {details?.subTitle ? (
        <h2 className="text-lg md:text-xl font-bold text-black mb-2">
          {details.subTitle}
        </h2>
      ) : null}
      {isSpread ? (
        <div className="bg-[#f0f5ff] p-2 rounded-xl mb-1 w-full md:w-[250px]">
          <h2 className="text-xs md:text-base font-bold text-[#2a406b] text-center">
            {details?.subTitleSupport}
          </h2>
        </div>
      ) : null}
      {details?.description ? (
        <h3 className="text-xs md:text-sm text-center text-black font-semibold mb-2">
          {details.description}
        </h3>
      ) : null}
      {/* <DynamicTable headers={details.table.header} rows={details.table.row} /> */}
      <p className="py-2 md:px-10 px-4 my-4 text-[#042638] bg-white">
        Availabe packing size - 100g stand up pouch
      </p>
      <ProductDetails
        labels={details.label}
        life={details.life}
        storage={details.storage}
        ingredient={details.ingredient}
        labelFooter={details?.labelFooter}
      />
      <ProductRecommendation
        imgUrls={details?.recommendations}
        isFull={isFull}
      />
      <SideBarNavigation />
      {/* <div  className="absolute top-[-75px] right-[100px] cursor-pointer z-100" >
        <Link href="/?back=true" className='z-100 cursor-pointer'>
          <img 
            src="/images/Close Icon/Black icons (1)-02/new icons (1)-03.png" 
            alt="Close" 
            width={80}
            className='z-100'
            onClick={() => console.log('Close button clicked')} 
          />
        </Link>
      </div> */}
    </div>
  );
}
