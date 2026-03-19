import React from 'react';
import '../styles/background.css'

export default function Background({leftSrc, RightSrc} : any) {
  
  return (
    <div className="">
      <div className="background-container">
        <img loading="lazy" className='left-bg' src={leftSrc}/>
        <img loading="lazy" className='right-bg' src={RightSrc} />
      </div>
    </div>
  );
}
