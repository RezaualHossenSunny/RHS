import React from "react";
import { FaFire } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  const percentage = 90;

  const JS = 55;
  const Reacet = 55;
  const git = 75;
  const backend = 50;

  return (
    <div id="skill">
      <div className="max-w-container mx-auto py-4 md:py-28">
        <div className="flex justify-center ">
          <h1 className="text-center font-inter text-4xl font-bold leading-9 ml-5 md:ml-0">
            Skills{" "}
          </h1>
          <FaFire className="text-4xl mt-1 ml-4 md:ml-2  text-orange-400" />
        </div>
        <div className="w-[200px] h-[3px] bg-gray-500 mx-auto mt-2 rounded-xl"></div>

        {/* content */}
        <div className="py-8 mt-12 md:mt-32 justify-center ml-[50px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="w-[120px] md:w-1/5 sm:ml-[72px] md:ml-0">
            <CircularProgressbar
              className=" w-[80px] md:w-[150px]"
              value={percentage}
              text={`${percentage}%`}
            />
            
            <h1 className="ml-2 md:ml-[30px] font-inter text-sm md:text-xl font-bold leading-9 w-[100px] mt-2 ">
              Html CSS
            </h1>
          </div>

          <div className="w-[120px] md:w-1/5 sm:ml-[72px] md:ml-0">
            <CircularProgressbar
              className="w-[80px] md:w-[150px]"
              value={JS}
              text={`${JS}%`}
            />
            
            <h1 className="ml-2 md:ml-[25px] font-inter text-sm md:text-xl font-bold leading-9 mt-2 ">
              JavaScript
            </h1>
          </div>
          <div className="w-[120px] md:w-1/5 sm:ml-[72px] md:ml-0">
            <CircularProgressbar
              className="w-[80px] md:w-[150px]"
              value={Reacet}
              text={`${Reacet}%`}
            />
            
            <h1 className="ml-5 md:ml-[40px] font-inter text-sm md:text-xl font-bold leading-9 ">
            React
            </h1>
          </div>
          <div className="w-[120px] md:w-1/5 sm:ml-[72px] md:ml-0">
            <CircularProgressbar
              className="w-[80px] md:w-[150px]"
              value={git}
              text={`${git}%`}
            />
            
            <h1 className="ml-1 md:ml-[20px] font-inter text-sm md:text-xl font-bold leading-9 w-[100px] mt-2 ">
              Git GitHub
            </h1>
          </div>
          <div className="w-[120px] md:w-1/5 ml-0 sm:ml-16 md:ml-0">
            <CircularProgressbar
              className="w-[80px] md:w-[150px]"
              value={backend}
              text={`${backend}%`}
            />
            
            <h1 className="ml-3 md:ml-[30px] font-inter text-sm md:text-xl font-bold leading-9 mt-2">
              Backend
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
