import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const flour = data?.flour;

  return (
    <div>
      <Background leftSrc={flour.background.left} RightSrc={flour.background.right} />
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={flour.imgUri} />
        <RightTextBox details={flour}/>
      </div>
    </div>
  )
}

export default page