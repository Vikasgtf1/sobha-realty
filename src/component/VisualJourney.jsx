import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CommonHeading from '../utils/CommonHeading'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function VisualJourney() {
    useEffect(() => {
        const cards = gsap.utils.toArray(".stack_card .card_item");
        
        if (cards.length === 0) return;  
        let stickDistance = 0;
        let lastCardST = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: "bottom center"
        });
        cards.forEach((card, index) => {
            var scale = 1 - (cards.length - index) * 0.06;
            let scaleDown = gsap.to(card, {
                scale: scale,
                transformOrigin: `50% ${stickDistance}`,
                boxShadow: "unset",
                duration: 1, 
                onUpdate: () => {
                    document.querySelectorAll(".card_item").forEach((itm) => itm.classList.remove("card-active"));
                    card.classList.add("card-active");
                }
            });
            
            ScrollTrigger.create({
                trigger: card,
                start: `top 100px`,
                end: () => lastCardST.start + stickDistance,
                pin: true,
                pinSpacing: false,
                ease: "ease-in",  
                duration: 1, 
                animation: scaleDown,
                toggleActions: "restart none none reverse", 
            });
        });
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); 
    return (
        <section className='py-[80px] text-center bg-[#000] relative  no-[repeat] bg-[contain]'>
            <img src='/assets/images/pattern.png' className='absolute top-[0] h-[100%] object-cover opacity-[0.4]' alt='pattern'/>

            <CommonHeading/>
            <div className='w-[60%] m-[auto]'>
                <p>Step into a world where every frame captures the essence of beauty and innovation. Each scene is thoughtfully designed to reflect elegance, purpose, and style. Experience a visual journey where luxury meets visionary design.</p>
            </div>
            <div className='stack_card max-w-[1100px] m-[auto] mt-[30px]'>
                <div className='card_item mb-[30px] rounded-[30px] h-[400px] bg-[url("./assets/images/card_banner.jpg")]'>
                </div>
                <div className='card_item mb-[30px] rounded-[30px] h-[400px] bg-[url("./assets/images/card_banner.jpg")]'>
                </div>
                <div className='card_item mb-[30px] rounded-[30px] h-[400px] bg-[url("./assets/images/card_banner.jpg")]'>
                </div>
                <div className='card_item mb-[30px] rounded-[30px] h-[400px] bg-[url("./assets/images/card_banner.jpg")]'>
                </div>
            </div>
        </section>
    )
}