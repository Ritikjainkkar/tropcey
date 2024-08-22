"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import SideBarNavigation from '@/components/SideBarNavigation';
import { data } from '@/data/pages';
import Link from 'next/link';
import React from 'react'
import { useEffect, useRef } from 'react';

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
      localStorage.setItem('lastUrl', '/treacle')
      localStorage.setItem('lastPage', 'treacle')
    }
  }, []);

  const treacle = data?.treacle;

  return (
    <div 
      ref={AnimRef}
      style={{ transform: 'translate(0, 0) scale(1)', filter: 'blur(30px)', opacity: 0.8  }} 
      className="animated-element"
    >
      <Background leftSrc={treacle.background.left} RightSrc={treacle.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={treacle.imgUri} width={treacle.mainImage.sizeW}/>
        <RightTextBox details={treacle}/>
        <Link href="/?back=true">
          <img 
            src="/Icons/close.svg" 
            alt="Close" 
            width={40}
            className="absolute top-4 right-4 cursor-pointer z-20" 
            onClick={() => console.log('Close button clicked')} 
          />
        </Link>
        <SideBarNavigation searchParams={undefined} />
      </div>
    </div>
  )
}

export default Page