import React from "react";
import Swal from "sweetalert2";

const PricingCard = ({ pricing, memberShip = "monthly" }) => {
  const { name, pricing: price, features } = pricing;

  //   destructure price
  const { annual, monthly, setup_fee } = price;

  const displayPrice = memberShip === "monthly" ? monthly : annual;
  const displayLabel = memberShip === "monthly" ? "mo" : "yr";

  const savings =
    memberShip === "yearly" ?
      Math.floor(((monthly * 12 - annual) / (monthly * 12)) * 100)
    : 0;

  const checkCard = () => {
    Swal.fire({
      title: "Congratulations! 🎉",
      html: `You've selected <strong class="text-yellow-500 text-xl">${name}</strong> plan!`,
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#eab308",
      background: "white",
      // timer: 2000,
      showConfirmButton: true,
    });
  }
  
  return (
    <div className="hover:-translate-y-[2px]  cursor-pointer transition-all duration-300 hover:scale-[1.01]">
      <div
        className={`card p-2 rounded-lg flex flex-col h-full ${name === "Pro Elite" ? "scale-105 border-2 animate-fade-down border-yellow-400" : " shadow-sm"} ${name === "Starter Pulse" ? "right-to-left" : "left-to-right"}`}
      >
        <div className="card-body flex flex-col h-full">
          {name === "Pro Elite" && (
            <span className="badge badge-xs badge-warning">Most Popular</span>
          )}

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{name}</h2>
              <div className="">
                <span className="text-xl">${displayPrice} </span>
                <span className="text-md text-gray-500">{displayLabel}</span>
                {memberShip === "yearly" && savings > 0 && (
                  <div className="font-bold text-xs text-green-700">
                    Saving {savings}%
                  </div>
                )}
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {features.map((i, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-clamp-1">{i}</span>
                </li>
              ))}
            </ul>
            <h1 className="text-right mt-2 font-bold text-xl text-red-500">
              Setup Fee ${setup_fee}
            </h1>
          </div>
          <div className="mt-6">
            <button
              onClick={checkCard}
              className={`w-full py-2 animate-pulse-once focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-md font-semibold transition ${
                name === "Pro Elite" ?
                  "bg-yellow-500 hover:bg-yellow-600 text-stone-900"
                : "bg-gray-800 hover:bg-gray-900 text-white"
              }`}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
