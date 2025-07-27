import { use, useState } from "react";

export function GamePage() {
  const dice = [
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078801/dice_01_z9kijz.png",
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078802/dice_2_ldeyuo.png",
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078802/dice_3_dbi76a.png",
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078802/dice_4_wxh32q.png",
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078801/dice_5_skymyp.png",
    "https://res.cloudinary.com/dzbwdfbgf/image/upload/v1753078802/dice_6_ckzfqx.png",
  ];
  let [currentDice, setCurrentDice] = useState(dice[0]);

  let [totalScore, setTotalScore] = useState(0);

  let [selectedNumber, setSelectedNumber] = useState(0);

  let [error, setError] = useState("");

  let selectNumberFun = (event) => {
    const convertedValue = Number(event.target.innerText);
    setSelectedNumber(convertedValue);
    setError("");
  };

  return (
    <>
      <div className=" w-full h-screen p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-[80px]">{totalScore}</p>
            <p className="font-semibold text-[20px]">Total Score</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-[20px] text-[#FF0C0C]">{error}</p>
            <div className="flex gap-3">
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                1
              </button>
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 2
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                2
              </button>
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 3
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                3
              </button>
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 4
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                4
              </button>
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 5
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                5
              </button>
              <button
                className={`w-[70px] h-[70px] border-1 text-[24px] font-semibold cursor-pointer ${
                  selectedNumber === 6
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={selectNumberFun}
              >
                6
              </button>
            </div>
            <p className="font-semibold text-[20px]">Select Number</p>
          </div>
        </div>
        <div className="flex items-center justify-between"></div>
        <div className=" flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="cursor-pointer "
              src={currentDice}
              alt="Loading..."
              onClick={() => {
                if (selectedNumber > 0) {
                  let randomValue = Math.floor(Math.random() * dice.length);
                  let diceValue = randomValue + 1;
                  setCurrentDice(dice[randomValue]);

                  if (diceValue === selectedNumber) {
                    setTotalScore((prev) => prev + diceValue);
                  } else {
                    setTotalScore((prev) => prev - 2);
                  }
                } else {
                  setError("You have not selected any number");
                }
              }}
            />
            <p className="text-[18px] font-semibold">Click on Dice to roll</p>
            <button
              className="bg-white text-black border-1 outline-none py-[10px] px-[18px]  rounded-[5px] cursor-pointer hover:bg-black hover:text-white hover:border-1 hover:outline-none transition-all duration-300 ease-in-out"
              onClick={() => {
                setTotalScore(0);
                setSelectedNumber(0);
                setError("");
              }}
            >
              Reset Score
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
