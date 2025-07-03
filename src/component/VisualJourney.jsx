import CommonHeading from "../utils/CommonHeading";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const cardsData = [
  {
    id: 1,
    title: "Card One",
    content:
      "This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    alt: "card-one",
  },
  {
    id: 2,
    title: "Card Two",
    content:
      "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    alt: "card two",
  },
  {
    id: 3,
    title: "Card Three",
    content:
      "This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    alt: "card three",
  },
  {
    id: 4,
    title: "Card Four",
    content:
      "This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    alt: "card four",
  },
];

export default function VisualJourney() {
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let cards = gsap.utils.toArray(".card-item");

    if (cards.length === 0) return;

    let stickDistance = 0;
    let topOffset = window.innerWidth > 1200 ? 540 : 600;

    let firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    cards.forEach((card, index) => {
      var scale = 1 - (cards.length - index) * 0.04;

      let scaleDown = gsap.to(card, {
        scale: scale,
        "transform-origin": '"50% ' + (lastCardST.start - stickDistance) + '"',
      });

      ScrollTrigger.create({
        trigger: card,
        start:
          window.innerHeight < 600
            ? "center center+=30px"
            : "center center-=50px",
        end: () => lastCardST.start + stickDistance + 50,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="py-16 px-6 xl:py-[100px] text-center bg-[#000] relative no-[repeat] bg-[contain]">
      <img
        src="/assets/images/pattern.png"
        className="absolute top-[0] h-[100%] w-[100%] object-cover opacity-[0.4] left-[0]"
        alt="pattern"
      />

      <CommonHeading heading={"Visual Journey"} className={"text-white"} />
      <div className="flex mt-[-20px] justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="439"
          height="2"
          viewBox="0 0 439 2"
          fill="none"
        >
          <path d="M0 1H439" stroke="url(#paint0_linear_3627_1103)" />
          <defs>
            <linearGradient
              id="paint0_linear_3627_1103"
              x1="0"
              y1="1.5"
              x2="439"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.485577" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="text-white my-[50px] font-merchant tracking-[1px] font-[100] max-w-4xl mx-auto leading-relaxed text-lg">
        Step into a world where every frame captures the essence of beauty and
        innovation. Each scene is thoughtfully designed to reflect elegance,
        purpose, and style. Experience a visual journey where luxury meets
        visionary design.
      </p>

      <main className="xl:w-4/5 xl:mx-auto">
        <ul ref={cardsRef} className="list-none text-center relative cards">
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <li
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="card-item"
            >
              <img
                src={"assets/images/journey/" + card + ".jpg"}
                alt={index}
                className="card-content items-stretch w-full md:h-[400px] h-[280px] object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
