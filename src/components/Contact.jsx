import React from 'react'

export default function Contact({imgSrc,content}) {
  return (
    <div className='mb-[1rem] flex gap-[1.1rem] items-center'>
        <img src={imgSrc} alt="Icon" />
        <p className="mb-[0.1rem] text-[0.88rem]">{content}</p>
    </div>
  )
}
