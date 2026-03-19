"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const spread_whiteChocolate = data?.spread_whiteChocolate;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={spread_whiteChocolate.backgroundImage.left} RightSrc={spread_whiteChocolate.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spread_whiteChocolate.imgUri} width={spread_whiteChocolate.mainImage.sizeW}/>
        <RightTextBox details={spread_whiteChocolate} isspread_whiteChocolate={true}/>
      </div>
    </div>
  )
}

export default Page