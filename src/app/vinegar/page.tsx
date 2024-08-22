"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import SideBarNavigation from '@/components/SideBarNavigation';
import { data } from '@/data/pages';
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
      localStorage.setItem('lastUrl', '/vinegar')
      localStorage.setItem('lastPage', 'vinegar')
    }
  }, []);

  const vinegar = data?.vinegar;

  return (
    <div className='relative'>
      <Background leftSrc={vinegar.background.left} RightSrc={vinegar.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={vinegar.imgUri} width={vinegar.mainImage.sizeW}/>
        <RightTextBox details={vinegar}/>
      </div>
      <SideBarNavigation searchParams={undefined} />
    </div>
  )
}

export default Page