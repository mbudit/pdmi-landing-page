import React from "react";
import Image from "next/image";
import Link from "next/link";

import fbIcon from "@/app/assets/facebook-2.png";
import twIcon from "@/app/assets/twitter-2.png";
import ytIcon from "@/app/assets/youtube-2.png";
import logoPdmi2 from "@/app/assets/logo-pdmi-2.png";

export default function Footer() {
  return (
    <footer id="contact" className="w-full text-white relative">
      {/* ─── Main Footer Content ─── */}
      <div className="w-full bg-[#1E2538] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ─── Column 1: Brand & About (6 columns) ─── */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-16">
            <div className="relative w-64 h-16 sm:w-[22rem] sm:h-24 mb-8">
              <Image
                src={logoPdmi2}
                alt="PDMI Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <h3 className="text-xl sm:text-2xl text-white mb-6">
              Your Health is Our Priority
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* ─── Column 2: Important Links (3 columns) ─── */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xl text-white mb-8">Important Links</h3>
            <ul className="flex flex-col gap-5">
              {[
                { label: "Support Center", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms and Conditions", href: "#" },
                { label: "Site Map", href: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white transition-colors">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-sm sm:text-base font-light">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 3: Contact Us (3 columns) ─── */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xl text-white mb-8">Contact Us</h3>
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm sm:text-base font-light">123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm sm:text-base font-light">123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm sm:text-base font-light">
                  pdmi_info@gmail.com
                </span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex transition-transform hover:scale-110 opacity-75 hover:opacity-100">
                <Image src={fbIcon} alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className="flex transition-transform hover:scale-110 opacity-75 hover:opacity-100">
                <Image src={twIcon} alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="flex transition-transform hover:scale-110 opacity-75 hover:opacity-100">
                <Image src={ytIcon} alt="YouTube" width={24} height={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Copyright Bar ─── */}
      <div className="w-full bg-[#161C2A] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-start">
          <p className="text-xs sm:text-sm text-gray-300 font-light tracking-wide">
            Copyright PDMI
          </p>
        </div>
      </div>
    </footer>
  );
}
