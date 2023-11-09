import Image from 'next/image';

function FeatureThree() {
  return (
    <div className="bg-whiteSecond s_layout md:pb-[104px] md:pt-[90px] md:flex md:justify-between xl:px-0 xl:justify-start">
      <div className=" xl:ml-[152px] xl:mr-[178px] lg:mt-[15px]">
        <h3 className="text_title line mb-[52px] after:bg-primary after:bottom-[-26px] md:after:left-0 md:text-left">
          Standard Picture Section
        </h3>

        <p className="text_describe mb-[20px] md:max-w-[473px] md:text-left md:mb-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        <p className="text_describe md:max-w-[478px] md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        </p>
      </div>

      <Image src="/Images/feature3.png" alt="Featur" width={525} height={375} className="hidden md:block h-fit md:w-[381px] lg:w-[525px]" />
    </div>
  );
}

export default FeatureThree;
