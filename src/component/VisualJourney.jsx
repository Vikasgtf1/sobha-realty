import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CommonHeading from "../utils/CommonHeading";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

const cardsData = [
  {
    id: 1,
    title: "Card One",
    content:
      "This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "1.jpg",
    alt: "card-one",
  },
  {
    id: 2,
    title: "Card Two",
    content:
      "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    alt: "card-two",
  },
  {
    id: 3,
    title: "Card Three",
    content:
      "This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://assets.codepen.io/210284/flower-7.jpg",
    alt: "card-three",
  },
  {
    id: 4,
    title: "Card Four",
    content:
      "This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://assets.codepen.io/210284/flower-6.jpg",
    alt: "card-four",
  },
  {
    id: 5,
    title: "Card Four",
    content:
      "This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://assets.codepen.io/210284/flower-6.jpg",
    alt: "card-four",
  },
  {
    id: 6,
    title: "Card Four",
    content:
      "This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://assets.codepen.io/210284/flower-6.jpg",
    alt: "card-four",
  },
];

export default function VisualJourney() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Prepare slides for yet-another-react-lightbox
  const lightboxSlides = cardsData.map((card) => ({
    src: "assets/images/journey/" + card.id + ".jpg",
    alt: card.alt,
    title: card.title,
  }));
  return (
    <section
      id="gallery"
      className="py-16 px-6 xl:py-[100px] text-center bg-[#000] relative no-repeat bg-contain"
    >
      <img
        src="/assets/images/pattern.png"
        className="absolute top-0 h-full w-full object-cover opacity-20 left-0"
        alt="pattern"
      />

      <CommonHeading heading="Visual Journey" className="text-white" />
      <div className="flex mt-[-20px] justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
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

      <p className="text-white my-[50px] font-merchant tracking-[1px] font-light max-w-4xl mx-auto leading-relaxed text-lg">
        Step into the world of seamless retail and modern workspaces—where every
        corner tells a story. From design to detail, explore the spaces built
        for experience and excellence.
      </p>

      <main className="xl:w-4/5 xl:mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={card.id}>
              <div className="card-item text-center h-[400px] overflow-hidden relative">
                <picture
                  onClick={() => {
                    setIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <source
                    media="(min-width: 769px)"
                    srcSet={`assets/images/journey/${card.id}.jpg`}
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet={`assets/images/journey/mobile/${card.id}.webp`}
                  />
                  <img
                    src={`assets/images/journey/${card.id}.jpg`} // fallback
                    alt={card.alt}
                    className="h-full w-full object-cover block rounded-lg"
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="z-[999999]">
          {" "}
          {isOpen && (
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              slides={lightboxSlides}
              index={index}
              on={{ view: ({ index: newIndex }) => setIndex(newIndex) }}
            />
          )}
        </div>
      </main>
    </section>
  );
}
