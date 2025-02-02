import React from "react";
import Sectionheading from "../Sectionheading/Sectionheading";

export default function WhyUs() {
  return (
    <>
      <div className="py-4">
      <Sectionheading heading={"Why us"} />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center flex-wrap gap-3 p-5">
        <Card bgColor={"#36A4DD"} secBgColor={"#118ECF"} />
        <Card bgColor={"#FE5D37"} secBgColor={"#EF4821"} />
        <Card bgColor={"#ECAA12"} secBgColor={"#CE930B"} />
      </div>
    </>
  );
}

function Card({
  bgColor,
  secBgColor,
}: {
  bgColor: string;
  secBgColor: string;
}) {
  return (
    <div
      className="w-full max-w-[439px] h-[601px] rounded-[41px]"
      style={{ backgroundColor: secBgColor }} // ✅ Use inline style for secBgColor
    >
      <div
        className="w-full rounded-[41px] px-5 py-10 text-white h-[585px]"
        style={{ backgroundColor: bgColor }} // ✅ Use inline style for bgColor
      >
        <div className="w-full h-full flex flex-col gap-3">
          <div className="w-full text-center">Icon</div>
          <div className="w-full text-center font-bold">
            <h2 className="text-3xl">Customized learning Plans</h2>
          </div>
          <div className="w-full">
            <p className="text-3xl text-center">
              We recognize that every student has a unique learning style. By
              providing a customized academic plan along with weekly feedback
              from teachers, we can support your child's success both in the
              classroom and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
