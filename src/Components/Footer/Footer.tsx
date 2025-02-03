import React from "react";
import Logo from "../../Assests/logo.png";
import Candy from "../../Assests/candy.png";
import Ball from "../../Assests/ball.png";
import Background from "../../Assests/Vector 1.png";
import "./style.css";
export default function Footer() {
  return (
    <footer
      className="relative text-[#1D3557] pt-20 pb-5
     bg-contain bg-no-repeat
    "
    >
      {/* Wavy Background */}
      {/*  <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-20 md:h-32"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#D1ECFF"
            d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      <div className="custom-shape-divider-bottom-1738584650">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 xl:gap-8">
          {/* Left Section - Logo & Description */}
          <div className="col-span-1 flex flex-col items-center text-center  md:text-left">
            <img
              src={Logo}
              alt="Positive Minds Academy"
              className="w-52 h-52"
            />
            <p className="mt-4 text-sm md:text-base py-8 lg:py-0">
              Nurture brilliant minds with the transformative power of
              mathematics and language arts.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 xl:gap-8 text-center md:text-left px-4 md:px-0">
            <div className="flex flex-col justify-start md:justify-end">
              <h3 className="font-semibold text-lg">Positive Minds</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    News & Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start md:justify-end">
              <h3 className="font-semibold text-lg">Support</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#005F9E]">
                    Parent Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start md:justify-end">
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute top-10 right-10 w-20 h-20">
          <img src={Ball} alt="Ball" />
        </div>
        <div className="hidden lg:block absolute top-5 right-40 w-20 h-20">
          <img src={Candy} alt="Candy Cane" />
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-300 pt-4">
          © 2024 Positive Minds Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
