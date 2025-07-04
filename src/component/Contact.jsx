import React, { useState } from "react";
import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import EnquiryForm from "../common/EnquiryForm";

const Contact = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    authorize: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const { handleSubmit, loading, error, response } = useFormSubmit();

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name can only contain letters and spaces";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address";
        return "";

      case "contact":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(value.trim()))
          return "Please enter a valid phone number (10-15 digits)";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 1) return "Message must be at least 1 character";
        if (value.trim().length > 500) return "Message must not exceed 500 characters";
        return "";

      case "authorize":
        if (!value) return "You must authorize us to contact you";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      contact: true,
      message: true,
      authorize: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await handleSubmit(formData);
      // Reset form on successful submission
      if (result?.success) {
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          authorize: true,
        });
        setErrors({});
        setTouched({});
      }
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
      authorize: true,
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="text-center mb-16 relative">
          <div className="text-center mb-12 ">
            <CommonHeading heading={"About Group 108"} />
          </div>

          <img
            src="/assets/images/about-developer-patter.svg"
            className="text-center z-[-9] left-[35%] object-cover scale-[2.5] w-[250px] absolute top-[-71px] h-[200px]"
            alt="pattern"
          />
          {/* </div> */}

          <div className="flex justify-center items-center">
            <img
              src="logo-header-black.png"
              className="h-[80px] object-contain"
              alt="white logo"
            />
          </div>

          <h3 className="font-merchant text-[17px] xl:text-[20px] tracking-[1px] mt-12 xl:mt-16 mb-[20px] xl:mb-[40px] font-light text-gray-800 ">
            One Of The Fastest-Growing Real Estate
          </h3>

          <p className="leading-[24px] xl:leading-[30px] font-helvetica font-[500] text-[13.5px] max-w-4xl mx-auto  mb-8">
            Group 108 specializes in crafting real estate properties that cater
            to individuals who prioritize exquisite design, exceptional
            artistry, and the most luxurious features. At the heart of Group 108
            is the belief that every project should embody principles of
            wholeness, transparency, and trust. With a legacy spanning over
            three decades in the real estate sector, our management team has
            been the driving force behind some of the most notable projects. The
            expertise is further exemplified in the ongoing development of Group
            108 Sector 108 West, a testament to our unwavering commitment to
            excellence.
          </p>

          <button
            onClick={openForm}
            className="z-[9999] cursor-pointer bg-black text-white px-4 py-2 xl:px-8 xl:py-4 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300"
          >
            View Details
          </button>

          <div
            className="absolute z-[-1] bottom-[-123px]
    opacity-[0.2] w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="504"
              viewBox="0 0 1728 504"
              fill="none"
            >
              <path
                d="M1727.53 557.518H1589.95V505.145H1531.99V357.234H1463.35V269.075H1394.7V181.74L1307.75 128.348V331.239H1269.15V255.345H1262.73L1257.79 228.459H1249.99V225.312H1238.55V215.873H1216.24V225.312H1204.8V228.459H1197.01L1192.06 255.345H1185.64V439.549H1112.88V269.075H1090V174.113L1019.07 156.95L992.757 174.113V520.781H974.54V448.269L940.593 435.41V428.735L974.54 442.127V425.196L940.593 412.336V405.662L974.54 419.054V402.122L940.593 389.263V382.589L974.54 395.981V379.049L940.593 366.19V359.516L974.54 372.908V355.976L940.593 343.117V336.443L974.54 349.835V332.903L940.593 320.044V313.37L974.54 326.762V309.83L940.593 296.971V290.297L974.54 303.688V286.757L940.593 273.898V267.224L974.54 280.615V263.684L940.593 250.825V244.151L974.54 257.542V240.611L940.593 227.752V221.077L974.54 234.469V217.538L940.593 204.678V198.004L974.54 211.396V194.464L940.593 181.605V174.931L974.54 188.323V171.391L940.593 158.532V151.858L974.54 165.249V148.318L940.593 135.459V128.785L974.54 142.176V125.245L940.593 112.386V105.712L974.54 119.104V102.172L940.593 89.3126V82.6384L974.54 96.0304V79.0986L940.593 66.2394V59.5652L974.54 72.9572V60.5699L964.468 56.639V36.3941L947.567 29.7984V21.7053L896.029 1.5918L844.491 21.7053V29.7984L827.59 36.3941V56.639L817.518 60.5699V73.3241L852.395 59.5652V66.2394L817.518 79.4511V96.3969L852.395 82.6384V89.3126L817.518 102.524V119.47L852.395 105.712V112.386L817.518 125.597V142.543L852.395 128.785V135.459L817.518 148.671V165.616L852.395 151.858V158.532L817.518 171.743V188.69L852.395 174.931V181.605L817.518 194.816V211.763L852.395 198.004V204.678L817.518 217.89V234.836L852.395 221.077V227.752L817.518 240.963V257.909L852.395 244.151V250.825L817.518 264.036V280.982L852.395 267.224V273.898L817.518 287.109V304.055L852.395 290.297V296.971L817.518 310.182V327.129L852.395 313.37V320.044L817.518 333.256V350.202L852.395 336.443V343.117L817.518 356.329V373.275L852.395 359.516V366.19L817.518 379.402V396.348L852.395 382.589V389.263L817.518 402.475V419.421L852.395 405.662V412.336L817.518 425.548V442.494L852.395 428.735V435.41L817.518 448.621V505.145H789.115V174.113L744.646 162.93L697.591 174.113V279.555H673.184V215.806L650.104 205.615L543.358 215.806V234.112L651.624 224.823V237.027L543.358 246.316V256.995L651.624 247.705V259.909L543.358 269.199V279.877L651.624 270.588V282.792L543.358 292.081V302.76L651.624 293.47V305.674L543.358 314.964V325.642L651.624 316.353V328.556L543.358 337.846V348.525L651.624 339.235V351.439L543.358 360.729V371.407L651.624 362.117V374.321L543.358 383.611V394.289L651.624 385V397.204L543.358 406.493V417.172L651.624 407.883V420.086L543.358 429.376V440.054L651.624 430.765V442.969L543.358 452.258V462.937L651.624 453.647V465.851L543.358 475.141V485.819L651.624 476.53V488.734L543.358 498.023V525.897H514.542V274.795L488.165 266.142L457.339 274.795V348.019H432.885V166.962H418.012V147.512H401.233V133.782H393.254L385.979 46.8291L378.703 133.782H370.724V147.512H353.945V166.962H339.072V439.549H319.453V296.152L206.573 331.239V386.696H156.533V483.795H102.472V557.518H0.46875"
                stroke="url(#paint0_linear_4616_87)"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4616_87"
                  x1="864"
                  y1="1.5918"
                  x2="864"
                  y2="557.518"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EFEFEF" />
                  <stop offset="0.490385" stop-color="#9C9C9C" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex justify-center !font-merchant flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="flex-1 lg:max-w-md">
            <div className="mb-8">
              <p className="tracking-[1.5px] text-sm font-light mb-2">
                WE'D LOVE TO
              </p>
              <h2 className="text-3xl xl:text-4xl mt-[20px] font-light text-black relative">
                Hear From You
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="518"
                  className="mt-[8px]"
                  height="2"
                  viewBox="0 0 518 2"
                  fill="none"
                >
                  <path
                    d="M0.5 1H517.5"
                    stroke="url(#paint0_linear_5024_332)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5024_332"
                      x1="0.5"
                      y1="1.5"
                      x2="517.5"
                      y2="1.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h2>
            </div>

            <div className="space-y-6 !text-[#333] mt-[60px]">
              <div>
                <p className="tracking-[1px] text-[14px] xl:text-[17px] mb-1 ">
                  Starting Price
                </p>
                <p className="text-xl xl:text-2xl  font-light text-black">
                  ₹61.47 Lakhs* Onwards
                </p>
              </div>

              <div className="flex mt-[50px] flex-col space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="421"
                  height="2"
                  viewBox="0 0 421 2"
                  fill="none"
                >
                  <path
                    d="M0.5 1H420.5"
                    stroke="url(#paint0_linear_5024_337)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5024_337"
                      x1="0.5"
                      y1="1.5"
                      x2="420.5"
                      y2="1.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-[50px]">
                  <p className="tracking-[1px]  text-[14px] xl:text-[17px]  mb-1">
                    Call Now
                  </p>
                  <a  href="tel:+91 7700-007-700" className="text-xl xl:text-2xl  font-light text-black">
                    7700-007-700
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 lg:max-w-lg ">
            <div className="bg-white border  bg-[url(assets/images/form-patter.png)] border-black rounded-[12px] p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-6 z-[99]">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                  />
                    {errors.name && touched.name && (
                  <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                  />
                  {errors.email && touched.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
                </div>

                <div>
                  <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                    className="w-full px-4 py-3 border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                  />
                  {errors.contact && touched.contact && (
                  <p className="text-red-600 text-xs mt-1">{errors.contact}</p>
                )}
                </div>

                <div>
                  <textarea
                    name="message"
                  placeholder="Your Message"
                    rows="4"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  />
                   {errors.message && touched.message && (
                  <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                  type="checkbox"
                  id="authorize"
                  name="authorize"
                  checked={formData.authorize}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                    className="mt-1 w-4 h-4 text-black border-black rounded-[8px] focus:ring-black"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-[#333] font-helvetica leading-relaxed"
                  >
                    I hereby consent to Grandthum & its authorized partners
                    contacting me via Call/SMS/Email/WhatsApp. This will
                    override the DND/NDNC settings. T&C Apply.
                  </label>
                </div>
          {errors.authorize && touched.authorize && (
                <p className="text-red-600 text-xs mt-1">{errors.authorize}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-black cursor-pointer text-white px-4 py-2 xl:px-6 xl:py-3 text-xs xl:text-[14px] xl:tracking-[2px] font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Now"}
              </button>
            </form>
              </div>
            </div>
          </div>
      </div>{" "}
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default Contact;
