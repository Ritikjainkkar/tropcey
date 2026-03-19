"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React, { useEffect, useRef } from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const AnimRef = useRef<any>(null);

  useEffect(() => {
    if (AnimRef.current) {
      setTimeout(() => {
        AnimRef.current.classList.add('to-normal-position');
      }, 10);
    }
    if(typeof window !== 'undefined') {
      localStorage.setItem('lastUrl', '/infused-virgin-coconut-oil')
      localStorage.setItem('lastPage', 'infused-virgin-coconut-oil')
    }
  }, []);

  const oilData = data?.infused_virgin_coconut_oil;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={oilData.background.left} RightSrc={oilData.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={oilData.imgUri} width={oilData.mainImage.sizeW}/>
        <RightTextBox details={oilData} isFull={true}/>
      </div>
    </div>
  )
}

export default Page
