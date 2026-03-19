"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const spread_darkChocolate = data?.spread_darkChocolate;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={spread_darkChocolate.backgroundImage.left} RightSrc={spread_darkChocolate.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spread_darkChocolate.imgUri} width={spread_darkChocolate.mainImage.sizeW}/>
        <RightTextBox details={spread_darkChocolate} isspread_darkChocolate={true}/>
      </div>
    </div>
  )
}

export default Page