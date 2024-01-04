import React from 'react';
import InfoCardOdd from './InfoCardOdd';
import InfoCardEven from './InfoCardEven';
import topDesktop from '../assets/images/bg-section-top-desktop-1.svg';
import topMobile from '../assets/images/bg-section-top-mobile-1.svg';
import bottomDesktop from '../assets/images/bg-section-bottom-desktop-1.svg';
import bottomMobile from '../assets/images/bg-section-bottom-mobile-1.svg';
import infoImg1 from '../assets/images/illustration-grow-together.svg';
import infoImg2 from '../assets/images/illustration-flowing-conversation.svg';
import infoImg3 from '../assets/images/illustration-your-users.svg';
export default function Mid() {
  return (
    <section className='w-full'>
        <img src={topDesktop} alt="Background Pattern" className='w-full hidden md:block' />
        <img src={topMobile} alt="Background Pattern" className='w-full block md:hidden mt-[7rem]'/>
        <div className='w-full bg-neutral-pale-blue flex justify-center flex-wrap'>
            <InfoCardOdd title="Grow Together" desc="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." imgSrc={infoImg1}/>
        </div>
        <img src={bottomDesktop} alt="Background Pattern" className='w-full hidden md:block' />
        <img src={bottomMobile} alt="Background Pattern" className='w-full block md:hidden'/>
        <InfoCardEven title="Flowing Conversations" desc="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." imgSrc={infoImg2} />
        <img src={topDesktop} alt="Background Pattern" className='w-full hidden md:block' />
        <img src={topMobile} alt="Background Pattern" className='w-full block md:hidden'/>
        <div className='w-full bg-neutral-pale-blue flex justify-center flex-wrap'>
            <InfoCardOdd title="Your Users" desc="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." imgSrc={infoImg3}/>
        </div>
        <img src={bottomDesktop} alt="Background Pattern" className='w-full hidden md:block' />
        <img src={bottomMobile} alt="Background Pattern" className='w-full block md:hidden'/>
    </section>
  )
}
