"use client"
"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
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
      localStorage.setItem('lastUrl', '/sugar')
      localStorage.setItem('lastPage', 'sugar')
    }
  }, []);

  const chip = data?.sugar;

  return (
    <div ref={AnimRef}>
      <Background leftSrc={chip.backgroundImage.left} RightSrc={chip.backgroundImage.right} />
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={chip.imgUri} brandingSubtitle={chip.brandingSubtitle} width={350}/>
        <RightTextBox details={chip}/>
      </div>
      
    </div>
  )
}

export default Page