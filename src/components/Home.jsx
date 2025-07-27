import { useNavigate } from "react-router-dom";
import diceImage from "../assests/home_dice.png";
import { useState } from "react";

export function Home() {
  const navigate = useNavigate();

  let [isHidden, setIsHidden] = useState(false);

  return (
    <div className=" w-full h-screen flex items-center justify-center gap-5  ">
      <img src={diceImage} alt="Loading..." />
      <div className=" flex flex-col items-center justify-center gap-5">
        <h1 className="text-[80px] font-bold">DICE GAME</h1>
        <div className="flex  items-center justify-between  w-full">
          <button
            className="bg-white text-black border-1 outline-none py-[8px] px-[10px]  rounded-[5px] cursor-pointer hover:bg-black hover:text-white hover:border-1  hover:outline-none transition-all duration-300 ease-in-out"
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            Show Rules
          </button>
          <button
            className="bg-black text-white border-1 outline-none py-[10px] px-[18px]  rounded-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-1  hover:outline-none transition-all duration-300 ease-in-out"
            onClick={() => {
              navigate("/gamepage");
            }}
          >
            Play Now
          </button>
        </div>
        <div
          className={`${
            isHidden
              ? "flex flex-col bg-[#FBF1F1] p-[20px]i gap-2 rounded-md "
              : "hidden"
          }`}
        >
          <h2 className="font-semibold">How to play dice game</h2>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>If it is not equal 2 will be minus from total score</p>
        </div>
      </div>
    </div>
  );
}
