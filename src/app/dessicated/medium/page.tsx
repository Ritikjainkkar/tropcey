"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React, { useEffect, useRef } from 'react'

const Page: React.FC<{ searchParams: { [key: string]: string } }> = ({ searchParams }) => {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const AnimRef = useRef<any>(null);

  useEffect(() => {
    if (AnimRef.current) {
      setTimeout(() => {
        AnimRef.current.classList.add('to-normal-position');
      }, 10); 
    }
    if(typeof window !== 'undefined') {
      localStorage.setItem('lastUrl', '/treacle')
      localStorage.setItem('lastPage', '⁠dessicated')
    }
  }, []);

  const chip = data?.meddessicated;

  return (
    <div
    ref={AnimRef}
      style={{ transform: 'translate(0, 0) scale(1)', filter: 'blur(30px)', opacity: 0.8  }} 
      className="animated-element"
      >
      <Background leftSrc={chip.background.left} RightSrc={chip.background.right} />
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={chip.imgUri} brandingSubtitle={chip.brandingSubtitle} width={350}/>
        <RightTextBox details={chip}/>
      </div>
    </div>
  )
}

export default Page