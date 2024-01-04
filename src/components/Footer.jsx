import React from 'react'
import footerTopDesk from '../assets/images/bg-footer-top-desktop.svg';
import footerTopMobile from '../assets/images/bg-footer-top-mobile.svg';
import footerLogo from '../assets/images/logo-footer.svg';
import phone from '../assets/images/icon-phone.svg';
import mail from '../assets/images/icon-email.svg';
import Contact from './Contact';
import { Facebook,Instagram, Twitter } from 'lucide-react';
export default function Footer() {
  return (
    <section className='w-full'>
        <img src={footerTopDesk} alt="Background Pattern" className='w-full hidden sm:block' />
        <img src={footerTopMobile} alt="Background Pattern" className='w-full block sm:hidden'/>
        <footer className='w-full px-[2rem] sm:px-[7.5rem] flex justify-center bg-neutral-dark-cyan text-neutral-pale-blue'>
            <div className='w-full max-w-[75rem] flex flex-col-reverse md:flex-row gap-[7rem] justify-between mt-[7.5rem]'>
                <div className='w-full md:w-1/2'>
                    <img src={footerLogo} alt="Footer Logo" className='w-[15rem] mb-[1.3rem]' />
                    <p className='w-full md:max-w-[19rem] mb-[1.5rem] text-[0.9rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                        vestibulum a, ultrices quis sem.
                    </p>
                    <Contact imgSrc={phone} content="Phone: +1-543-123-4567" />
                    <Contact imgSrc={mail} content="example@huddle.com" />
                    <div className='flex mt-[5rem] gap-[1.2rem] mb-[5rem]'>
                        <Facebook className='w-[2rem] h-[2rem] text-neutral-pale-blue cursor-pointer hover:text-primary-light-pink'/>
                        <Instagram className='w-[2rem] h-[2rem] text-neutral-pale-blue cursor-pointer hover:text-primary-light-pink'/>
                        <Twitter className='w-[2rem] h-[2rem] text-neutral-pale-blue cursor-pointer hover:text-primary-light-pink'/>
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:pl-[5rem]'>
                    <div className='w-full'>
                        <h2 className='mb-[1rem] font-body font-bold text-[1.8rem]'>NEWSLETTER</h2>
                        <p className="w-full md:max-w-[22rem] mb-[2.5rem]">
                            To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
                            send you spam or pass on your email address
                        </p>
                        <div className='w-full max-w-[32.5rem] flex flex-col md:flex-row gap-[2.5rem] justify-between'>
                            <input type="email" name="email" placeholder='email' className='w-full md:max-w-[20rem] min-w-[5rem] h-[3rem] px-[1rem] rounded-md border-none outline-none text-neutral-dark-cyan' />
                            <div className='w-full md:w-[10rem] min-w-[6.3rem] flex justify-end'>
                                <button className='bg-primary-pink w-full h-[3rem] cursor-pointer font-body font-bold rounded-md text-neutral-pale-blue hover:bg-primary-light-pink'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}
