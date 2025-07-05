import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import EnquiryForm from "../common/EnquiryForm";

const LocationMap = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const highlights = [
    "Unmatched Connectivity: Situated at the intersection of FNG and Noida–Greater Noida Expressways, with quick access to DND Flyway, Delhi, and Yamuna Expressway.",
    "Seamless Commute: Direct metro access via Sector 142 Aqua Line station, with upcoming metro extensions enhancing regional mobility.",
    "Air Travel Convenience: Close proximity to Jewar Airport and just 35 km from IGI Airport—perfect for business and international travel.",
    "Thriving Business Neighborhood: Surrounded by leading global corporates like Microsoft, EY, KPMG, Infosys, and Genpact.",
  ];
  return (
    <section
      id="map"
      className="relative  text-black overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* <div className="overlay_gradient absolute top-[0] z-[-99]  w-[100%] left-[0]">
        <img
          src="/assets/images/about_pattern.png"
          className="w-[100%]  opacity-[0.64] z-[-99]"
          alt="pattern image"
        />
      </div> */}
      <div className="mb-8 md:mb-16 ">
        <CommonHeading className="text-black" heading={"Location Map"} />
      </div>
      <div className="flex flex-col  flex-wrap md:flex-row justify-between items-center">
        {/* Left - Image */}
        <div className="md:basis-[60%]">
          <img
            src="assets/images/location-map.png"
            alt="location"
            className="rounded-[10px] w-full h-[200px] xl:mb-0 mb-[35px] xl:h-[450px] object-contain"
          />
        </div>
        {/* Right - List and Button */}
        <div className="md:basis-[36%] flex flex-col gap-[10px] h-full">
          {/* List */}
          <h2 className="text-[18px] font-[200] tracking-[1.5px]">
            Strategically Connected : Key Locations Around Your Future
            Investment
          </h2>
          <ul className="space-y-4 my-[20px]">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2  text-[#202020] font-[100] font-helvetica text-[12px] leading-relaxed"
              >
                <svg
                  className="w-[20px] h-[20px] text-white-500 flex-shrink-0 mt-[1px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="flex-1  xl:text-[12px] xl:font-[100] text-[15px] font-[400] font-helvetica tracking-[1px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={openForm}
            className="bg-black cursor-pointer w-fit border border-white text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] transition-colors duration-300"
          >
            View Location Map
          </button>
        </div>
      </div>{" "}
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default LocationMap;
