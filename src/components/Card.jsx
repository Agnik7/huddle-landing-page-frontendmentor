import React from 'react';


export default function Card({title,content}) {
  return (
    <div className='card w-full xxs:w-[17.5rem] mb-[5rem]  py-[2.4rem] flex flex-col items-center md:items-stretch'>
        <h2 className='font-body font-bold mb-[0.5rem] text-[2rem] xxms:text-[4rem] md:text-[6rem]'>{title}</h2>
        <p className='text-[1rem] xxms:text-[1.3rem] md:text-[1.5rem] text-[#4b4a4a]'>{content}</p>
    </div>
  )
}
