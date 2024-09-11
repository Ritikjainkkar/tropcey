"use client"
"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
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
      localStorage.setItem('lastUrl', '/treacle')
      localStorage.setItem('lastPage', 'oil')
    }
  }, []);

  const coil_cinnamon = data?.coil_cinnamon;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={coil_cinnamon.background.left} RightSrc={coil_cinnamon.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={coil_cinnamon.imgUri} width={coil_cinnamon.mainImage.sizeW}/>
        <RightTextBox details={coil_cinnamon} isFull={true}/>
      </div>
    </div>
  )
}

export default Page