import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import EnquiryForm from "../common/EnquiryForm";

const Aboutus = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();
  return (
    <section
      id="aboutus"
      className="bg-gray-50 pb-16 xl:py-16 relative px-4 sm:px-6 lg:px-8"
    >
      <div className="overlay_gradient absolute top-[0]   w-[100%] left-[0]">
        <img
          src="assets/images/about_pattern.png"
          className="w-[100%]"
          alt="pattern image"
        />
      </div>
      <div class="absolute top-[0] w-[100%] h-[100%] left-[0] bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.20)_48.08%,#FFF_100%)]"></div>
      <div className="max-w-7xl relative z-[1]  mx-auto">
        {/* Header */}
        <div className="text-center mb-12 xl:mb-16">
          <CommonHeading heading={"About Project"} />
        </div>

        {/* Description */}
        <div className="text-center mb-12 xl:mb-16">
          <p className="text-black  my-[50px] font-merchant  font-light max-w-4xl mx-auto tracking-[1px] leading-relaxed text-lg">
            Project offers an interesting mix of work, leisure, fine dining,
            entertainment and interactive spaces with smooth connectivity,
            extravagant services, excellent framework, eco-friendly construction
            honored with Pre-Certified Platinum Rating by IGBC.
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
            <div className=" xl:p-6 space-y-8  tracking-[0.4px]">
              <p className="text-[#202020] text-[15px] font-[400] tracking-[1px] xl:font-[100] font-helvetica  xl:text-[12px] leading-[24px]">
                Grandthum continuously pursues to provide enlarged spaces
                according to the lifestyle demand. We give commitment on our
                project to make sure that you have an enhancing experience and
                to achieve that we have joined hands with leading experts in the
                field of architecture, landscaping, design, solar energy,
                construction and quality control.We strive to be your go-to name
                for every CRE aspirations you nurture.
              </p>

              {/* <p className="text-[#202020] font-helvetica text-[12px] leading-relaxed pb-4"> */}
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard. */}
              {/* </p> */}

              <button
                onClick={openForm}
                className="bg-black cursor-pointer text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default Aboutus;
