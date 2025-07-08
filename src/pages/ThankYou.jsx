import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const ThankYou = ({BackUrl}) => {
  return (
    <>
      <Helmet>
        {/* Google Ads Global Site Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17299787626"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17299787626');
          `}
        </script>

        {/* Google Ads Conversion Tracking */}
        <script>
          {`
            gtag('event', 'conversion', {'send_to': 'AW-17299787626/4gCsCNqAyesaEOqel7lA'});
          `}
        </script>

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BX6B7WRMBX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BX6B7WRMBX');
          `}
        </script>
      </Helmet>
    <div>
       <div className="h-[100vh] flex items-center justify-center">
        <div className="thank_you_sec  flex-col  flex place-items-center justify-center text-center h-[calc(100vh-300px)]">
          <h1 className="cinzel text-[40px] font-[300!important] text-[#000] mb-[30px]">
            Thank you
          </h1>
          <p className="tracking-[normal]">
            Thank you for submitting your details.
          </p>
          <p className="tracking-[normal]">
            Our professional shall get in touch with you within two working
            hours. Stay with us.
          </p>
          <Link
            className="bg-[#000] cursor-pointer text-[14px] md:text-[20px] text-white py-[12px] px-[20px] sm:px-[55px] tracking-[1px] mt-[30px] xxl:mt-[50px]"
            to={BackUrl || "/"}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ThankYou
