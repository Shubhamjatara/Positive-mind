import React from "react";

export default function MakingLeaningAdventure() {
  return (
    <>
      <div className="w-full flex flex-col h-[350px] sm:h-[40vw] 2xl:h-[650px] bg-[url('https://plus.unsplash.com/premium_photo-1690479510451-d928ab95eb63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div>
          <div className="w-full h-full flex flex-col  items-center gap-4 py-[3em]">
            <div>
              <h1 className="capitalize font-semibold text-center text-sky-600 stroke-white 
              text-3xl
              sm:text-[4vw]
              xl:text-5xl
              ">
                making of Learning Adventure
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#ff5350]  dark:hover:bg-red-700 dark:focus:ring-red-900
              border-b-2 border-red-700
              "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-end">
          <span className="bg-[#ff5350] px-3 py-1 capitalize h-fit text-sm text-white font-semibold">
            enquire Now
          </span>
        </div>
      </div>
    </>
  );
}
