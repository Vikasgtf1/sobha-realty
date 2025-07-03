import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* RERA Information */}
        <div className="text-center mb-4 xl:mb-8">
          <h3 className="text-lg font-merchant font-light mb-4 tracking-wider">
            RERA NUMBER: XXXXXXXXXXXXXX
          </h3>
          <p className="text-sm font-helvetica mb-[25px] text-gray-400">
            RERA Website: Https://Up-Rera.In
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 1428 2"
            fill="none"
          >
            <path
              d="M0 1L1428 0.999875"
              stroke="url(#paint0_linear_5024_365)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5024_365"
                x1="4.37114e-08"
                y1="1.5"
                x2="1428"
                y2="1.49988"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.509615" stop-color="white" stop-opacity="0.5" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Disclaimer Text */}
        <div className="mb-2">
          <p className="text-[12px] xl:text-xs font-helvetica leading-[20px] font-[200] text-gray-400 leading-relaxed text-center max-w-6xl mx-auto">
            This is only for information purposes and does not constitute any
            offer or contract, customers are advised to have their independent
            evaluation, artistic impression as shown is a pictorial
            conceptualization and indicative and artist point may differ, the
            use is subject to the terms of licensing applicable and agreement
            for sale, all information, contents, plans, specifications are
            subject to change as may be decided by the promoter or directed by
            any competent authority, subject to applicable laws and
            availability, all furniture, fittings and specifications shown
            herein in it for pictionary is courtsey touch/interior by or
            reference purpose only and do not form part of the standard
            specifications/amenities/services to be provided in the
            units/project it is subject to changes the provision of social
            infrastructure and other amenities will be as per approved plans.
          </p>
        </div>

        {/* Copyright Information */}
        <div className=" font-helvetica  pt-6">
          <p className="text-[12px] leading-[20px] xl:text-xs text-gray-400 text-center">
            Disclaimer & Privacy Policy | Copyright ©DN Kingsland 2025. All
            Rights Reserved | Crafted By GTF Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
