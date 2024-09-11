"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const coil_ginger = data?.coil_ginger;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={coil_ginger.background.left} RightSrc={coil_ginger.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={coil_ginger.imgUri} width={coil_ginger.mainImage.sizeW}/>
        <RightTextBox details={coil_ginger} isFull={true}/>
      </div>
    </div>
  )
}

export default Page