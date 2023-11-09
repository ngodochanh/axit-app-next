import React from 'react';
import Button from './ui/Button';

function Contact() {
  return (
    <div className="s_layout mx-auto  md:max-w-[1123px] md:pt-[108px] md:pb-[80px] xl:px-0">
      <div>
        <h2 className="font-myriad-pro text-black mb-[47px] text-center text-[28px] line after:bottom-[-18px] after:translate-x-[-50%] after:bg-primary  lg:text-[36px]">
          CONTACT US
        </h2>

        <p className="text-base text-center text-[#ccc8c1] n mb-[33px] font-myriad-pro-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <form action="" className="">
        <div className="text-desc flex flex-col mb-[42px] gap-[30px] sm:flex-row md:gap-[67px] ">
          <div className="space-y-[30px] sm:flex-1">
            <input type="text" placeholder="Name" className="border-b-2 border-b-desc w-full h-[31px] px-[14px]" />
            <input type="email" placeholder="Email" className="border-b-2 border-b-desc w-full h-[31px] px-[14px]" />
            <input type="text" placeholder="Subject" className="border-b-2 border-b-desc w-full h-[31px] px-[14px]" />
          </div>

          <textarea
            placeholder="Message"
            className="resize-none border-b-2 border-b-desc px-[14px] pt-[1px] h-20 sm:h-auto sm:flex-1"
          ></textarea>
        </div>

        <Button title="Send Message" variant=" rounded block mx-auto w-[148px] h-[46px] bg-primarySecond" />
      </form>
    </div>
  );
}

export default Contact;
