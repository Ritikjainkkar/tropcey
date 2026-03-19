"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const coil_redchili = data?.coil_redchili;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={coil_redchili.background.left} RightSrc={coil_redchili.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={coil_redchili.imgUri} width={coil_redchili.mainImage.sizeW}/>
        <RightTextBox details={coil_redchili} isFull={true}/>
      </div>
    </div>
  )
}

export default Page