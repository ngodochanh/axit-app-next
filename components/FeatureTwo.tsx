import Image from 'next/image';

function FeatureTwo() {
  return (
    <div className="s_layout md:pt-[108px] md:pb-[106px] md:flex md:items-center md:justify-between xl:justify-start xl:items-start  xl:ml-[116px] xl:px-0">
      <Image
        src="/Images/feature2.png"
        alt="Feature 2"
        width={525}
        height={375}
        className="hidden md:block md:w-[381px] h-fit lg:w-[525px]"
      />

      <div className="xl:ml-[155px]">
        <h3 className="text_title line  after:bg-primary after:bottom-[-26px] md:after:left-0 md:text-left">
          Sub list section
        </h3>

        <p className="text_describe mt-[51px] mb-[20px]  md:max-w-[433px] md:mb-[49px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit amet lacus accumsan et viverra justo commodo.
        </p>

        <div className="flex gap-[22px] mb-[20px] md:mb-[42px]">
          <div className="round w-[40px] h-[40px]">
            <Image src="/Images/feature2_icon1.png" alt="icon" width={18} height={14} className="round_child" />
          </div>

          <div className="flex-1">
            <h4 className="text-black font-semibold pb-[2px]">Title</h4>
            <p className="text_describe md:max-w-[369px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            </p>
          </div>
        </div>

        <div className="flex gap-[22px]">
          <div className="round w-[40px] h-[40px]">
            <Image src="/Images/feature2_icon2.png" alt="icon" width={18} height={14} className="round_child" />
          </div>

          <div className="flex-1">
            <h4 className="text-black font-semibold pb-[2px]">Title</h4>
            <p className="text_describe md:max-w-[369px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureTwo;
