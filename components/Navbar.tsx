'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '../constants';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const handleCLick = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // * Chuyển đối tượng event.target thành Element
      const targetElement = event.target as Element;
      // Kiểm tra xem click có nằm trong phạm vi của menu hay không
      if (navbar && !targetElement.closest('.js-navbar-menu')) {
        setNavbar(false);
      }
    };

    // * Thêm event listener cho sự kiện click trên cả trang
    document.addEventListener('click', handleOutsideClick);

    // * Cleanup: Loại bỏ event listener khi component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [navbar]);

  return (
    <div className="js-navbar-menu w-full bg-black">
      <nav className="flex justify-between px-[10px] py-[22px] sm:p-[22px] max-w-[1146px] mx-auto relative">
        <Link href="/" className="my-auto">
          <Image
            src="/Images/Logo.png"
            alt="Logo"
            width={79}
            height={27}
            className="w-[67px] sm:w-[79px] sm:h-[27px]"
          />
        </Link>

        <ul
          className={`sm:flex sm:w-fit sm:static items-center gap-x-[50px] text-center text-desc ${
            navbar ? 'absolute top-full left-0 w-full bg-black animate-slideDown z-10' : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="cursor-pointer block py-2 sm:py-0">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden cursor-pointer" onClick={handleCLick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
