import Image from 'next/image';

function OurProcess() {
  return (
    <div className="s_layout  md:max-w-[1118px] md:mx-auto md:pt-[108px] md:pb-[100px] xl:px-0">
      <div className="mb-[50px] sm:mb-[81px]">
        <h2 className="text-[#212121] line text-center text-4xl after:bg-primary after:bottom-[-27px] mb-[50px] md:after:translate-x-[-50%]">
          WHY THIS IS AWESOME
        </h2>

        <p className="text_describe sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex flex-wrap gap-7 justify-between sm:gap-[22px] md:flex-nowrap">
        <div className='sm:w-[calc(50%-11px)] lg:w-fit'>
          <div className="w-[70px] h-[70px] round mx-auto mb-[18px] ms:mb-[29px]">
            <Image src="/Images/our-process-bulb.png" alt="buld" width={19} height={28} className="round_child" />
          </div>
          <h3 className="text_title mb-[18px] ms:mb-[25px]">Thoughtful Design</h3>

          <p className="text_describe md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.
          </p>
        </div>

        <div className='sm:w-[calc(50%-11px)] lg:w-fit'>
          <div className="w-[70px] h-[70px] round mx-auto  mb-[18px] ms:mb-[29px]">
            <Image src="/Images/our-process-keyboard.png" alt="buld" width={35} height={21} className="round_child" />
          </div>

          <h3 className="text_title mb-[18px] ms:mb-[25px]">Well Crafted</h3>

          <p className="text_describe md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.
          </p>
        </div>

        <div className='sm:w-[calc(50%-11px)] lg:w-fit'>
          <div className="w-[70px] h-[70px] round mx-auto mb-[18px] ms:mb-[29px]">
            <Image src="/Images/our-process-thunder.png" alt="buld" width={17} height={31} className="round_child" />
          </div>
          <h3 className="text_title mb-[18px] ms:mb-[25px]">Easy to Customize</h3>

          <p className="text_describe md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
