import React from "react";

export default function CommonHeading({
  heading,
  className,
  headingInCenter = true,
}) {
  return (
    <div
      className={`mb-4 flex justify-center flex-col ${
        headingInCenter ? "items-center" : "items-start"
      }`}
    >
      <h2
        className={`tracking-[2px] mb-[12px] text-[17px] font-[200] font-merchant text-black-900 relative inline-block ${className}`}
      >
        {heading}
      </h2>
      {headingInCenter ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="2"
          viewBox="0 0 439 2"
          fill="none"
        >
          <path d="M0 1H439" stroke="url(#paint0_linear_5024_97)" />
          <defs>
            <linearGradient
              id="paint0_linear_5024_97"
              x1="0"
              y1="1.5"
              x2="439"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0" />
              <stop offset="0.485577" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="258"
          height="2"
          viewBox="0 0 258 2"
          fill="none"
        >
          <path d="M0 1H258" stroke="url(#paint0_linear_3627_934)" />
          <defs>
            <linearGradient
              id="paint0_linear_3627_934"
              x1="0"
              y1="1.5"
              x2="258"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.485577" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}
