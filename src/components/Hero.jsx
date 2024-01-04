import React from 'react';
import screenImg from "../assets/images/screen-mockups.svg";
import Card from './Card';
export default function Hero() {
  return (
    <section className='w-full px-[2rem] flex flex-wrap justify-center'>
        <h1 className='text-[2rem] xxxs:text-[3rem] font-header font-bold text-center mb-[1.3rem]'>Build The Community Your Fans Will Love</h1>
        <p className='font-body max-w-[38rem] mb-[3rem] text-[1.3rem] text-center'>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <div className='w-full grid place-items-center mb-[7rem]'>
            <button className='bg-primary-pink w-full sm:w-[25rem] h-[5rem] text-[1.2rem] font-semibold font-body rounded-full text-neutral-pale-blue shadow-lg hover:bg-primary-light-pink'>Get Started For Free</button>
        </div>
        <img src={screenImg} alt="Screen Mockups" className='w-full max-w-[64.5rem] mb-[7.4rem]' />
        <div className='w-full max-w-[54.5rem] px-[1rem] md:px-0 flex flex-col items-center md:flex-row justify-between md:mb-[7rem]'>
            <Card type="community" title="1.4k+" content="Communities Formed" />
            <Card type="message" title="2.7m+" content="Messages Sent" />
        </div>
    </section>
  )
}
