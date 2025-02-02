import React from "react";
import Sectionheading from "../Sectionheading/Sectionheading";

export default function OurResult() {
  return (
    <div className="w-full">
      <div className="py-4">
        <Sectionheading heading={"Our Results"} />
      </div>

      <div className="w-full flex flex-row gap-3 p-5 justify-center flex-wrap">
        <ResultCardNum bgColor="#2F90D6" num={90} />
        <ResultCardTitle bgColor="#1E79A8" des="Comprehensive Programs"/>
        <ResultCardNum bgColor="#2F90D6" num={90} />
      </div>
    </div>
  );
}

function ResultCardNum({ bgColor, num }: { bgColor: string; num: number }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-[100vw]  sm:w-[446px] sm:h-[428px] rounded-3xl text-white flex flex-col px-5 py-5"
    >
      <div className="w-full h-1/2 text-[40vw] sm:text-[180px] flex justify-center items-center opacity-80 font-semibold">
        {num}
      </div>
      <div className="w-full h-1/2 text-center flex items-center justify-center flex-col text-[5vw] sm:text-[24px] opacity-80">
        <p>
          Nine out of ten families report that their children outperform peers
          in Math and English on both report cards and tests after joining us.
        </p>
      </div>
    </div>
  );
}

function ResultCardTitle({ bgColor, des }: { bgColor: string; des: string }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-[100vw]  sm:w-[446px] sm:h-[428px] rounded-3xl text-white flex flex-col px-5 py-5"
    >
      <div className="w-full h-1/2 text-[10vw] sm:text-[56px] flex justify-center items-center opacity-80 font-semibold text-center">
        {des}
      </div>
      <div className="w-full h-1/2 text-center flex items-center justify-center flex-col text-[5vw] sm:text-[24px] opacity-80">
        <p>
          Nine out of ten families report that their children outperform peers
          in Math and English on both report cards and tests after joining us.
        </p>
      </div>
    </div>
  );
}
