import { useEffect, useState } from "react";
import { Phone, Menu } from "lucide-react";
import SideMenu from "../component/SideMenu";
import Footer from "../component/Footer";
import { NavLink } from "react-router-dom";
const Disclaimer = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} /> */}
      <header
        className={`flex-wrap flex fixed w-full top-[0] left-[0] z-[99999] justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px] transition-all duration-300 bg-[#3265A6]`}
      >
        {" "}
        <NavLink to="/grandthum/">
          <div className="header-element">
            <img
              src="logo-header.png"
              alt="logo"
              className="h-[35px] object-contain xl:h-[46px] xl:w-full"
            />
          </div>
        </NavLink>
        <div className="flex items-center  gap-6">
          <a href="tel:+91 7700-007-700">
            {" "}
            <button className="header-element cursor-pointer flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              <p className="border-[0.5px] border-solid rounded-[50%] p-[7px] border-[#fff]">
                <Phone className="block md:hidden" size={12} /> {/* Mobile */}
                <Phone className="hidden md:block sm:hidden" size={15} />
              </p>
              <span className="text-[14px] xl:text-sm font-light tracking-[2px]">
                Call Now
              </span>
            </button>
          </a>
          {/* <button
            onClick={() => setShowMenu(true)}
            className="  header-element cursor-pointer text-white hover:text-gray-200 transition-colors"
          >
            <Menu className="block md:hidden" size={18} /> 
            <Menu className="hidden md:block sm:hidden" size={24} />
          </button> */}
        </div>
        {/* {!isScrolled && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 1428 2"
            fill="none"
            className="basis-[100%] mt-[17px]"
          >
            <path d="M0 1L1428 1" stroke="white" strokeOpacity="0.3" />
          </svg>
        )} */}
      </header>
      <section>
        <div className="lg:p-[100px] px-[15px] py-[35px]">
          <h1 className="font-merchant xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] text-center mb-[30px]">
            Disclaimer & Privacy Policy
          </h1>

          <h3 className=" xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] mb-[10px]">
            Disclaimer
          </h3>
          <p className="mb-[30px] font-helvetica font-[200] leading-[24px] text-[14px]">
            This website is only for the purpose of providing information
            regarding real estate projects in different regions. By accessing
            this website, the viewer confirms that the information including
            brochures and marketing collaterals on this website is solely for
            informational purposes and the viewer has not relied on this
            information for making any booking/purchase in any project of the
            company. Nothing on this website constitutes advertising, marketing,
            booking, selling or an offer for sale, or invitation to purchase a
            unit in any project by the company. The company is not liable for
            any consequence of any action taken by the viewer relying on such
            material/ information on this website. Please also note that the
            company has not verified the information and the compliances of the
            projects. Further, the company has not checked the RERA (Real Estate
            Regulation Act 2016) registration status of the real estate projects
            listed herein. The company does not make any representation in
            regards to the compliances done against these projects. You should
            make yourself aware about the RERA registration status of the listed
            real estate projects before purchasing property. This site is for
            information purpose only and should not be treated as the official
            website.
          </p>

          <h3 className=" xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] mb-[10px]">
            Privacy Policy
          </h3>
          <p className="mb-[30px] font-helvetica font-[200] leading-[24px] text-[14px]">
            In our endeavor and commitment of protecting your personal
            information, we have designed this comprehensive privacy policy.
            This is to keep your interests and information safe on our website.
          </p>

          <h3 className=" xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] mb-[10px]">
            Updation of privacy policy
          </h3>
          <p className="mb-[30px] font-helvetica font-[200] leading-[24px] text-[14px]">
            This privacy policy is subject to undergo change and review without
            any prior notice or approval. So to keep yourself updated on the
            changes introduced, please keep visiting and reviewing the terms and
            conditions of this privacy policy.
          </p>

          <h3 className=" xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] mb-[10px]">
            User information
          </h3>
          <p className="mb-[30px] font-helvetica font-[200] leading-[24px] text-[14px]">
            By using our website, you agree to abide by the rules laid out by us
            and consent to collection and use of all such information that you
            may furnish to, or through, our website. In some cases, while you
            visit our website, you may not need to provide any personal
            information. But in certain instances, we must have your personal
            information in order for us to grant you access to some of the links
            or sites. Such links/ pages may ask for your name, e-mail address,
            phone number etc. The information furnished by you is used to
            provide relevant products and services and to acknowledge receipt of
            your communication or to send out information and updates to you.
            You have option of requesting removal from our mailing list. We do
            not give away your personal information to any third party.
          </p>

          <h3 className=" xl:text-[20px] font-[200] tracking-[1.5px] text-[16px] mb-[10px]">
            {" "}
            Security
          </h3>
          <p className="mb-[30px] font-helvetica font-[200] leading-[24px] text-[14px]">
            To ensure security while transferring sensitive information, all the
            ongoing transmissions between client and server are encrypted using
            advanced and standard protocols. We also practice restricted access
            by employees and hold them to high levels of confidentiality. Use of
            cookies We may use cookies for security, session continuity, and
            customization purposes. In case of a user opting to reject a cookie,
            he/ she may not be able to gain access to some of the limited
            services or use some features of the site. In case of any queries or
            suggestions regarding privacy statement or your dealings with this
            web site, please contact:
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Disclaimer;
