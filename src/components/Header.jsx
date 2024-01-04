import React from 'react';
import logoImg from '../assets/images/logo.svg';

export default function Header() {
  return (
    <section className='w-full h-[12rem] flex justify-between items-center px-[4rem] mb-[9rem]'>
        <img src= {logoImg} alt ="Logo" />
        <button className='font-header w-[8.4rem] h-[2.5rem] font-light rounded-[2rem] border border-primary-pink shadow-lg cursor-pointer hover:bg-primary-light-pink'>Try it Free</button>
    </section>
  )
}
