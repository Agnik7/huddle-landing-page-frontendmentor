import React from 'react';

export default function InfoCardOdd({title,desc, imgSrc}) {
  return (
    <div className='w-full max-w-[90rem] flex justify-center pl-[8rem] pb-[2.5rem]'>
      <div className='w-1/2 flex flex-col justify-center mt-[4rem]'>
          <h2 className='font-header font-bold text-[2.5rem]'>{title}</h2>
          <p className='max-w-[32.5rem]'>{desc}</p>
      </div>
      <div className='w-1/2 mt-[4.3rem] mx-[1.5rem]'>
        <img src={imgSrc} alt="Info Img" className='w-4/5' />
      </div>
    </div>
  )
}
