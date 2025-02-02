import React from "react";
import Sectionheading from "../Sectionheading/Sectionheading";

export default function OurProcess() {
  return (
    <div className="w-full">
      <div className="py-3">
        <Sectionheading heading="Our Process" />
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  );
}

function Circle() {
  return (
    <div className="w-[90vw] h-[90vw] sm:w-[442px] sm:h-[442px] rounded-full relative bg-[#36A4DD] flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="text-center px-8 space-y-5">
          <h1 className="text-[5vw] sm:text-3xl text-[#FFFF00] font-semibold">Free Trial Class</h1>
          <p className="text-[4vw] sm:text-2xl text-white">
            Your child will undergo a FREE Trial Class/ Placement Test to assess
            their appropriate level for our programs.
          </p>
        </div>
      </div>
      <div
        style={{
          borderTopRightRadius: "9999px",
          borderTopLeftRadius: "9999px",
        }}
        className="absolute top-3  w-full h-1/2 bg-[#36A4DD] border-t-[6px] 
    "
      ></div>
      <div
        style={{
          borderBottomRightRadius: "9999px",
          borderBottomLeftRadius: "9999px",
        }}
        className="absolute bottom-3  w-full h-1/2 bg-[#36A4DD] border-b-[6px] 
    "
      ></div>
    </div>
  );
}
