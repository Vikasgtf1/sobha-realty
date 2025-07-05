import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div className="bg-[#f9fbf4] flex items-center justify-center py-[80px]">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-6 flex items-center justify-center text-2xl">
            <img
              loading="lazy"
              decoding="async"
              src="assets/images/grandthum-black.png"
              className="w-[200px]"
              alt="grandthum logo"
            />
          </div>
          <h1 className="xl:text-[18px] text-[16px] font-[300] tracking-[1.5px] font-merchant mb-4">
            Thank you!
          </h1>
          <p className="text-[14px] tracking-[1.5px] leading-relaxed mb-6 font-helvetica px-[30px]">
            Thank you for submitting your details.
            <br />
            Our professional shall get in touch with you within two working
            hours. Stay with us.
          </p>
          <Link
            to={"/grandthum/"} // Changed href to to
            className="inline-block bg-[#3265A6] text-[#fff] relative py-[8px] px-[20px]"
          >
            Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
