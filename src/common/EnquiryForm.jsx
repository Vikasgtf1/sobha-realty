import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useFormSubmit } from "../hooks/useFormSubmit";

const EnquiryForm = ({ isOpen, onClose }) => {
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
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name can only contain letters and spaces";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim()))
          return "Please enter a valid email address";
        return "";

      case "contact":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(value.trim()))
          return "Please enter a valid phone number (10-15 digits)";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 1)
          return "Message must be at least 1 character";
        if (value.trim().length > 500)
          return "Message must not exceed 500 characters";
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
    isOpen && (
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
        className="fixed inset-0 z-[999999999] bg-opacity-80 flex items-center justify-center p-4"
      >
        <div className="xl:!max-w-[40%] xl:p-[30px] text-white relative text-center tracking-[1.5px] uppercase">
          {response && (
            <div
              className={`mb-4 p-3 rounded ${
                response.success
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {response.message}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 rounded bg-red-600 text-white">
              {error}
            </div>
          )}

          <div className="bg-white border relative bg-[url(/assets/images/form-patter.png)] border-black rounded-[12px] p-[20px] shadow-sm">
            <div className="text-center mb-[20px]">
              <img
                loading="lazy"
                decoding="async"
                src="logo-black.webp"
                className="h-[49px] m-[auto] mb-[0px]"
                alt="group 108"
              />
            </div>
            <form onSubmit={onSubmit} className="space-y-3 xl:space-y-6 z-[99]">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className="w-full text-[14px] py-[12px] px-[14px] xl:px-4 xl:py-[8px] border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                />
                {errors.name && touched.name && (
                  <p className="text-start mt-[4px] text-red-600 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className="w-full text-[14px] py-[12px] px-[14px] xl:px-4 xl:py-[8px] border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                />
                {errors.email && touched.email && (
                  <p className="text-start mt-[4px] text-red-600 text-xs mt-1">
                    {errors.email}
                  </p>
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
                  className="w-full text-[14px] py-[12px] px-[14px] xl:px-4 xl:py-[8px] border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors"
                />
                {errors.contact && touched.contact && (
                  <p className="text-start mt-[4px] text-red-600 text-xs mt-1">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="2"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className="w-full text-[14px] py-[12px] px-[14px] xl:px-4 xl:py-[8px] border border-black rounded-[8px] text-black bg-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
                />
                {errors.message && touched.message && (
                  <p className="text-start mt-[4px] text-red-600 text-xs mt-1">
                    {errors.message}
                  </p>
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
                  htmlFor="authorize"
                  className="text-[9px] text-[#333] font-helvetica leading-relaxed"
                >
                  I hereby consent to Grooup 108 & its authorized partners
                  contacting me via Call/SMS/Email/WhatsApp. This will override
                  the DND/NDNC settings. T&C Apply.
                </label>
              </div>
              {errors.authorize && touched.authorize && (
                <p className="text-start mt-[4px] text-red-600 text-xs mt-1">
                  {errors.authorize}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-black cursor-pointer text-white px-4 py-2 xl:px-6 xl:py-3 text-xs xl:text-[14px] xl:tracking-[2px] font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Now"}
              </button>
            </form>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 cursor-pointer !text-black text-xl hover:text-gray-300"
            >
              <RxCross1 />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EnquiryForm;
