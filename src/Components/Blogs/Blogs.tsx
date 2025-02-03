import Sectionheading from "../Sectionheading/Sectionheading";
import Card1 from "../../Assests/card1.png";
export default function Blogs() {
  const des1 =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words....";
  const des2 =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterat";
  return (
    <div className="w-full">
      <div className="py-4">
        <Sectionheading heading={"Our Latest Blogs"} />
      </div>

      <div className="w-full p-5 flex justify-center gap-3  flex-wrap flex-row items-center">
        <BlogCard imageSrc={Card1} des={des1} />
        <BlogCard imageSrc={Card1} des={des2} />
        <BlogCard imageSrc={Card1} des={des1} />
      </div>
    </div>
  );
}

function BlogCard({ imageSrc, des }: { imageSrc: string; des: string }) {
  return (
    <div className="w-full sm:max-w-md xl:max-w-xl 2xl:h-[633px] 2xl:w-[423px] h-auto rounded-3xl overflow-hidden border bg-white transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-full sm:h-[220px] md:h-[250px]xl:h-[257px]">
        <figure className="w-full h-full">
          <img
            src={imageSrc}
            className="object-center object-cover w-full h-full"
          />
        </figure>
      </div>
      <div className="w-full space-y-3">
        {/* Blog Content */}
        <div className="p-4 h-auto space-y-3 2xl:space-y-8 2xl:pt-7">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 xl:h-14">
            Things to Consider Before Starting a Mobile App-Based Startup
          </h3>
          <p className="text-sm md:text-lg text-gray-600 mt-2  md:h-[112px]">
            {des}
          </p>
        </div>
        {/* Read More Button */}
        <div className="w-full p-4">
          <button className="font-semibold text-blue-800 hover:underline 2xl:py-3">
            Read More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t flex flex-wrap gap-3 2xl:gap-5 justify-center items-center text-sm md:text-lg px-2 py-5">
        <span className="block">August 26, 2024</span>
        <span className="block">No Comments</span>
      </div>
    </div>
  );
}
