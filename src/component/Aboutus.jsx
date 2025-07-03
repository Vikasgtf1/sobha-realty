import CommonHeading from "../utils/CommonHeading";

const Aboutus = () => {
  return (
    <section className="bg-gray-50 py-16 relative px-4 sm:px-6 lg:px-8">
      <div className="overlay_gradient absolute top-[0]   w-[100%] left-[0]">
        <img
          src="/assets/images/about_pattern.png"
          className="w-[100%]"
          alt="pattern image"
        />
        <div className=""></div>
      </div>
      <div class="absolute top-[0] w-[100%] h-[100%] left-[0] bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.20)_48.08%,#FFF_100%)]"></div>
      <div className="max-w-7xl relative z-[1]  mx-auto">
        {/* Header */}
        <div className="text-center mb-12 xl:mb-16">
          <CommonHeading heading={"About Group 108"} />
        </div>

        {/* Description */}
        <div className="text-center mb-12 xl:mb-16">
          <p className="text-[#000] font-merchant tracking-[1px] font-[100] max-w-4xl mx-auto leading-relaxed text-[14px] xl:text-lg">
            Group 108 specializes in crafting real estate properties that cater
            to individuals who prioritize exquisite design, exceptional
            artistry, and the most luxurious features. At the heart of Group 108
            is the belief that every project should embody principles of
            wholeness, transparency, and trust.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Side - Title and Image */}
          <div className="flex-1 flex flex-col-reverse lg:flex-col lg:flex-row items-start gap-8">
            {/* Title */}
            <div className="lg:w-2/3 xl:self-center  xl:mt-[220px]">
              <h3 className="lg:text-[30px] text-[22px] font-light text-gray-900 leading-tight">
                Inspired by
                <br />
                Ambition, Built on
                <br />
                Trust
              </h3>
            </div>

            {/* Image */}
            <div className="lg:w-2/3  xl:h-[550px]">
              <div className="relative h-full overflow-hidden">
                <img
                  src="assets/images/aboutus.png"
                  alt="Modern interior with stone wall and contemporary lighting"
                  className="w-full rounded-[20px] lg:h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content Card */}
          <div className="lg:w-100  self-center ">
            <div className=" xl:p-6 space-y-4  tracking-[0.4px]">
              <p className="text-[#202020] font-[100] font-helvetica  text-[12px] leading-relaxed">
                With a legacy spanning over three decades in the real estate
                sector, our management team has been the driving force behind
                some of the most notable projects. The expertise is further
                exemplified in the ongoing development of Group 108 Sector 108
                West, a testament to our unwavering commitment to excellence.
              </p>

              {/* <p className="text-[#202020] font-helvetica text-[12px] leading-relaxed pb-4"> */}
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard. */}
              {/* </p> */}

              <button className="bg-black text-white px-4 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
