import React from "react";
import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "/public/assets/navbar/menu_logo.svg";
import FacebookLogo from "/public/assets/footer/facebook.svg";
import InstagramLogo from "/public/assets/footer/instagram.svg";
import YoutubeLogo from "/public/assets/footer/youtube.svg";

const Footer = () => {
  return (
    <footer className=" relative w-full bg-gradient-to-r from-[#2F2F2F] via-[#252525] to-[#1c1c1c] text-white px-6 lg:px-20  pb-8 shadow-inner">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-gray-700 pb-8">
        {/* Logo + Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src={CompanyLogo} width={160} height={120} alt="Company Logo" />
          <hr className="w-32 h-[2px] bg-[#008EF4] border-none my-4" />
          <h1 className="text-lg font-semibold">DZ Real Estate</h1>
          <p className="text-sm text-gray-400">NIF: 0000000000</p>
          <p className="text-sm text-gray-400">RC: 23A0000000</p>
          <p className="text-sm text-gray-400 mt-2">16000 Algiers, Algeria</p>
          <p className="text-sm text-gray-400">Didouche Mourad Street, Building 12</p>
        </div>

        {/* Contact + Links */}
        <div className="flex flex-col sm:flex-row gap-12 text-center sm:text-left">
          {/* Contact */}
          <div>
            <h1 className="uppercase font-bold text-xl tracking-wide">Quick Contact</h1>
            <p className="text-slate-400 text-sm mt-4">Call us:</p>
            <h2 className="text-lg hover:text-[#008EF4] transition-colors cursor-pointer">
              +213 21 00 00 00
            </h2>
            <p className="text-slate-400 text-sm mt-4">Write to us:</p>
            <h2 className="text-lg hover:text-[#008EF4] transition-colors cursor-pointer">
              contact@dzrealestate.dz
            </h2>
          </div>

          {/* Links + Socials */}
          <div>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="hover:text-[#008EF4] transition-colors">
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008EF4] transition-colors">
                  Properties for Rent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008EF4] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start items-center mt-4 gap-4">
              <Link href="https://facebook.com" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={FacebookLogo} alt="Facebook Logo" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={InstagramLogo} alt="Instagram Logo" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={YoutubeLogo} alt="Youtube Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} DZ Real Estate. All rights reserved. | Based in Algiers, Algeria
      </div>
    </footer>
  );
};

export default Footer;
