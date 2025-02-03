import React from "react";
import Ball from "../../Assests/ball.png";
export default function HearFromOurProducts() {
  return (
    <>
      <div className="w-full text-center py-4">
        <h1 className="capitalize font-semibold text-[#005F9E] sm:text-[50px]">
          hear from our parents!
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center p-5 gap-16 xl:gap-3">
        <div>
          <figure>
            <img
              src="https://s3-alpha-sig.figma.com/img/6e86/bed8/bb7009a92049e33510eab316cd0bbc6b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aTDsxT6i-f3D3i-ONgRhvOtv09CoxrHMKI0zZnSYKsFDK0ji2B3CZ10ql4f8i3WpqXLz8Cowo6XQKcb0lXMLKDRDn9vDUtnswJjtjrE0FDj09qOeVAbkVynEmzhR4d40Nk-wnC01X~bYfl2fBf7CfiGFt8J82gS-Hm6u9U6AO80WAEVhQNvxyfsoJYwVvESrAbK6013zZ2qaAordoGO1I-Rhq-1ZYUfR-CClDXw0jNVOwjhoGl256VWtr3EyvKuIDHkEnMwdjzRhiqX60CFuWQJrvDgOvpcX0Pq7HhvDdyLS35OgL3nDVQwMlR2igtkk~gBM7gY0PPysEGI3kGZN9g__"
              className="object-center object-cover w-full h-auto rounded-[65px] xl:w-[540px] xl:h-[439px]"
              alt="img"
            />
          </figure>
        </div>

        <div className="bg-[#36A4DD] text-[3.8vw] rounded-xl text-white h-fit sm:text-[29px] xl:text-[25px]  py-5 px-10 flex items-center xl:h-[411px] xl:w-[722px]  w-full  relative">
          {/* decorative elements */}
          <div className="hidden lg:block absolute top-0 right-40 w-20 h-20
          -translate-y-1/2 translate-x-1/2 z-10
          ">
            <img src={Ball} alt="Candy Cane" />
          </div>
          <p>
            My daughter has been going here for math tutoring since she was 5
            yrs old, she is now 9. She started out with basic math tutoring
            using an abacus, advanced to mental math calculation without abacus,
            and now she is doing pre-algebra. She has gained confidence, speed,
            and accuracy from this program, and it shows through her grades in
            school. Teachers are very nice, supportive, and flexible. I'd
            defintely recommend this program! Thank you Ms. Sarmita and Ms.
            Shree! Anh Pham
          </p>
        </div>
      </div>
    </>
  );
}
