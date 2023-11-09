import Image from 'next/image';
import Button from './ui/Button';

function Header() {
  return (
    <header className="bg-slider-bg bg-no-repeat bg-cover bg-center-top s:relative s:p-[40%] lg:p-[25%] xl:p-[22.86%]">
      <div className="s:absolute s:top-[50%] s:left-0 s:right-0 s:translate-y-[-50%] sm:left-[22px] sm:right-[22px] md:flex md:justify-between md:gap-x-[60px]  xl:translate-y-[0] xl:gap-x-[300px] xl:left-[149px] xl:top-[111px] xl:max-w-[1102px]">
        <div className="flex-1 hidden md:block">
          <Image
            src="/Images/Logo-header.png"
            alt="Logo"
            width={175}
            height={60}
            className="md:w-[151px] lg:w-[175] lg:h-[60]"
          />

          <h1 className="font-myriad-pro mt-[21px] text-[28px] leading-tight line after:bottom-[-33px] after:left-2 after:bg-white  lg:text-[36px]">
            MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES
          </h1>

          <p className="mt-[68px] text_describe font-myriad-pro-light  text-base lg:w-[423px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra justo commodo.
          </p>

          <Button title="Download" variant="btn_line mt-[42px] ml-0.5" />
        </div>

        <form className="bg-white rounded overflow-hidden md:w-[300px] md:mt-[15px] md:h-fit lg:w-[360px] lg:mt-[30px]">
          <h1 className="text-title bg-whiteSecond font-bold h-[54px] w-full text-center text-xl leading-[54px]">
            Try Your <span className="text-primary ">FREE</span> Trial Today
          </h1>

          <div className="pt-[37px] pb-[47px] px-[10px] text-desc space-y-8 sm:px-[25px] lg:px-[37px]">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-[13px] h-[31px] text-sm border-x-2 border-b-2  border-x-[#fbfbfb]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-[13px] h-[31px] text-sm border-x-2 border-b-2 border-b-[#d6d6d6] border-x-[#fbfbfb]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-[13px] h-[31px] text-sm border-x-2 border-b-2 border-b-[#d6d6d6] border-x-[#fbfbfb]"
            />
          </div>                                  
          <Button
            title="Get Started"
            variant=" w-full bg-primarySecond text-center font-semibold h-[54px]"
          />
        </form>     
      </div>
    </header>
  );
}

export default Header;
