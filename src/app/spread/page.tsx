"use client"
"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data, order } from '@/data/pages';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  const AnimRef = useRef<any>(null);

  useEffect(() => {
    if (AnimRef.current) {
      setTimeout(() => {
        AnimRef.current.classList.add('to-normal-position');
      }, 10);   
    }
    if(typeof window !== 'undefined') {
      localStorage.setItem('lastUrl', '/spread')
      localStorage.setItem('lastPage', 'spread')
    }
  }, []);

  const spread = data?.spread;

  return (
    <div ref={AnimRef} className='relative overflow-hidden'>
      <Background leftSrc={spread.backgroundImage.left} RightSrc={spread.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spread.imgUri} width={spread.mainImage.sizeW}/>
        <RightTextBox details={spread}/>
      </div>
      
    </div>
  )
}

export default Page