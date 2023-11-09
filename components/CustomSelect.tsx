import Image from 'next/image';
import Button from './ui/Button';

function CustomSelect() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image src="/Images/custom-select.png" alt="Custom Select" width={1742} height={325} className="max-w-none" />

      <div className="absolute top-[59px] left-0 right-0 bottom-0  px-[10px] sm:px-[22px] xl:px-2">
        <h2 className="font-myriad-pro mb-[47px] text-center text-[28px] line after:bottom-[-18px] after:translate-x-[-50%] after:bg-white  lg:text-[36px]">
          STYLISH AXURE DESIGN
        </h2>

        <p className="text-base text-center text-[#ccc8c1] mb-[33px] font-myriad-pro-light ">
          Use the sections you need, remove the ones you don&apos;t. Create gorgeous prototypes faster than ever!
        </p>

        <Button title='Download' variant='btn_line block mx-auto'/>
      </div>
    </div>
  );
}

export default CustomSelect;
