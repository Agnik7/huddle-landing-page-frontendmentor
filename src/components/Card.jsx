import React from 'react';


export default function Card({type,title,content}) {
  return (
    <div className='card w-[17.5rem] h-[14.3rem] py-[2.4rem] flex flex-col'>
        <h2 className='font-body font-bold mb-[0.5rem] text-[6rem]'>{title}</h2>
        <p className='text-[1.5rem] text-[#4b4a4a]'>{content}</p>
    </div>
  )
}
