import React from "react";
import Sectionheading from "../Sectionheading/Sectionheading";
import SKY from "../../Assests/Vector.png";
export default function Gallery() {
  return (
    <>
      <div className="py-4">
        <Sectionheading heading={"Gallery"} />
      </div>
      <div className="w-full flex justify-center 2xl:h-[1200px] bg-[#EFF8FD] p-5 py-5">
        <div className="xl:w-[1200px] h-full flex gap-3">
          <div className="flex-1 flex flex-col justify-between h-full gap-3">
            <div className="h-1/2">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full w-[423px]"
                />
              </figure>
            </div>
            <div className="h-1/2">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full"
                />
              </figure>
            </div>
          </div>
          <div className="flex-1 h-full gap-3 flex flex-col ">
            <div className="h-1/5">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full w-full"
                />
              </figure>
            </div>
            <div className="h-2/5">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full"
                />
              </figure>
            </div>
            <div className="h-2/5">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full"
                />
              </figure>
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col gap-3">
            <div className="h-3/5">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full w-[423px]"
                />
              </figure>
            </div>
            <div className="h-2/5">
              <figure className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="object-cover object-center rounded-2xl h-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <figure>
          <img src={SKY} className="w-full h-[300px]" alt="" />
        </figure>
      </div>
    </>
  );
}
