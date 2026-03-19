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
      localStorage.setItem('lastUrl', '/coconut-chocolate-spread')
      localStorage.setItem('lastPage', 'coconut-chocolate-spread')
    }
  }, []);

  const spreadData = data?.coconut_chocolate_spread;

  return (
    <div ref={AnimRef} className='relative overflow-hidden'>
      <Background leftSrc={spreadData.backgroundImage.left} RightSrc={spreadData.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spreadData.imgUri} width={spreadData.mainImage.sizeW}/>
        <RightTextBox details={spreadData}/>
      </div>
    </div>
  )
}

export default Page
