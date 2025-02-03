import { faBook,faClock,faPhone,faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features() {
    const icon:any = [faBook,faHotel,faClock,faPhone]
  return (
    <div className="w-full py-24 flex justify-center px-5 overflow-hidden text-white">
      <div className="bg-[#158AC7] rounded-2xl w-full xl:max-w-7xl shadow-lg">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 gap-4">
          {icon.map((icon:any, index: number) => (
            <div
              key={index} // ✅ Added missing key prop
              className={`flex flex-col items-center justify-between gap-3 border-white py-6 
                ${index !== 3 ? "border-b-2 md:border-b-0 md:border-r-2" : ""}`}
            >
              {/* Icon */}
              <span className="text-5xl sm:text-[8vw] md:text-[5vw] ">
                <FontAwesomeIcon icon={icon} />
              </span>

              {/* Feature Title */}
              <span className="font-semibold text-base sm:text-base">Class Sessions</span>

              {/* Feature Description */}
              <span className="text-sm md:text-base text-center">
                Sunday - Monday <br />
                8:00 AM - 12:00 PM
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
