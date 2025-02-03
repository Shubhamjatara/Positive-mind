import React from "react";

export default function Sectionheading({
  heading,
  style,
}: {
  heading: any;
  style?: string;
}) {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full flex justify-center py-4">
        {/* <div className="flex-1 hidden xl:block"></div> */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <span
            className="block  text-[#005F9E] 
          font-semibold text-[1.4em] md:text-[2.5em] xl:text-[50px]
          "
          >
            {heading}
          </span>
          <div className={`w-full flex justify-center ${style} `}>
            <div className="flex items-center w-4/5 sm:w-[384px]">
              <div className="w-full border border-[#d81511] rounded-md"></div>
              <div className="w-fit">
                <div className="flex gap-1">
                  <span className="block w-4 h-4 rounded-full bg-[#d81511]"></span>
                  <span className="block w-4 h-4 rounded-full bg-[#d81511]"></span>
                  <span className="block w-4 h-4 rounded-full bg-[#d81511]"></span>
                </div>
              </div>
              <div className="w-full border border-[#d81511] rounded-md"></div>
            </div>
          </div>
          {/* <div className="flex-1 hidden xl:block"></div> */}
        </div>
      </div>
    </div>
  );
}
