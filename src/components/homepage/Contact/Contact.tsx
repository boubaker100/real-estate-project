import React from "react";
import ImagesBackgroundContactSection from "./isMobile/ImagesBackgroundContactSection";

const ContactSection = () => {
  return (
    <div  id="contact"
     className="w-screen h-screen relative sm:mt-[35%] xl:mt-[10%] imageBackground">

      <ImagesBackgroundContactSection />

  
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10 flex items-center justify-center">
        <div className="CustomBg pb-10 w-5/6 sm:w-3/4 md:w-1/2 h-6/6 xl:h-5/6 rounded-3xl flex flex-col items-center">
          
         
          <h1 className="text-white text-3xl my-6 sm:my-10 text-center font-bold">
            Get in Touch With Us
          </h1>

          <div className="flex flex-col xl:flex-row w-full items-center">
            {/* نص تعريفي */}
            <p className="w-5/6 xl:w-1/3 mx-auto xl:mx-0 xl:ms-10 xl:me-6 text-white text-base sm:text-base mb-4 xl:mb-0 leading-relaxed text-center xl:text-left">
              Have questions about our services or want to discuss a custom project?  
              Fill out the form and our team will respond within 24 hours.
            </p>

            {/* نموذج الاتصال */}
            <form
              action="#"
              className="flex flex-col gap-6 sm:gap-10 items-center w-2/3 mt-4 lg:mt-14"
            >
              <input
                type="text"
                placeholder="Your Email"
                className="inputStyles p-2 text-lg w-full sm:w-5/6 xl:w-5/6 mx-auto text-white mt-4 xl:mt-0"
              />

              <textarea
                placeholder="Your Message"
                className="inputStyles p-3 text-lg w-full sm:w-5/6 xl:w-5/6 mx-auto h-[200px] text-white"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className=" bg-[#003861] hover:bg-[#00558f] transition-colors text-white uppercase rounded-full p-2 cursor-pointer w-2/3 sm:w-1/3 xl:self-start xl:ms-12"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
