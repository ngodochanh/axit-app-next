import Image from 'next/image';
import Button from './ui/Button';

function Feature() {
  return (
    <div className="bg-whiteSecond">
      <div className="max-w-[1111px] mx-auto s_layout md:pt-[143px] md:pb-[117px] md:flex md:px-[22px] xl:px-0">
        <div className="space-y-0.5 h-fit rounded sm:flex sm:justify-between sm:gap-[22px] md:p-[2px] md:bg-[#c7c7c7] md:block">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <div
                key={index}
                className={` font-bold text-[15px] text-center leading-[112px] rounded sm:flex-1 md:w-[112px] md:h-[112px]  ${
                  index + 1 == 1 ? 'bg-primary' : 'bg-title'
                }  `}
              >
                TAB {index + 1}
              </div>
            ))}
        </div>

        <div className="mt-[25px] sm:mt-[45px] md:p-0 md:mt-0 md:ml-[100px] lg:mx-[80px] xl:mr-[100px] ">
          <h3 className="text_title mb-[30px] sm:mb-[52px] lg:text-left">Tabs with soft transitioning effect.</h3>

          <p className="text_describe mb-[20px] sm:mb-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <p className="text_describe mb-[20px] sm:mb-[52px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
          </p>

          <Button title="Download" variant="bg-primary rounded w-[121px] h-[46px] block mx-auto md:mx-0" />
        </div>

        <Image
          className="h-fit my-auto hidden lg:block"
          src="/Images/feature1.png"
          alt="Feature 1"
          width={320}
          height={253}
        />
      </div>
    </div>
  );
}

export default Feature;
