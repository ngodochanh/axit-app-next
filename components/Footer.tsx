import Image from "next/image"

function Footer() {
  return (
    <div className="h-[81px] bg-black flex flex-col items-center justify-center">
      <Image src='/Images/icon-social.png' alt='Icon Social' width={265} height={25}/>
      <p className="text-xs text-[#808080] mt-[10px]">&#169; 2021 Axure Themes</p>
    </div>
  )
}

export default Footer