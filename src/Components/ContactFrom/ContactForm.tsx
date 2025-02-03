import Sectionheading from "../Sectionheading/Sectionheading";

export default function ContactForm() {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-10 justify-center py-16 px-5 bg-white">
      <div className="max-w-lg text-center">
        {/* Title & Description */}

        <Sectionheading
          style={"xl:justify-start"}
          heading={
            <span className="text-center xl:text-left w-full block ">
              Contact Us For Further Information
            </span>
          }
        />
        <p className="text-center  xl:text-left text-sm sm:text-base">
          We’d love to hear from you and answer any questions you have.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[54px] shadow-lg p-6 sm:p-8 mt-8 w-full h-[513px] max-w-[728px] border border-border border-[#9B9B9B]">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-border border-[#9B9B9B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email Field */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-border border-[#9B9B9B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Subject Field */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-border border-[#9B9B9B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Message Field */}
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-3 border border-border border-[#9B9B9B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF5350] text-white rounded-[76px] font-semibold hover:bg-red-600 transition duration-300 text-3xl border-b-[#D81511] border-b-4 px-6 py-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
