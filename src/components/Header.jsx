import React from 'react';
import logoImg from '../assets/images/logo.svg';

export default function Header() {
  return (
    <section className='w-full h-[12rem] flex justify-between items-center px-[0.5rem] sm:px-[4rem] mb-[9rem]'>
        <img src= {logoImg} alt ="Logo" className='w-[5rem] xxxs:w-[10rem] sm:w-auto sm:h-auto' />
        <button className='font-header text-[0.8rem] xxxs:text-[1rem] w-[6rem] xxxs:w-[8.4rem] xxxs:h-[2.5rem] font-light rounded-[2rem] border border-primary-pink shadow-lg cursor-pointer hover:bg-primary-light-pink'>Try it Free</button>
    </section>
  )
}
