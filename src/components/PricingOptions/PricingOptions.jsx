import React, { use, useState } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  const dataPricing = pricingData.gym_membership_options;
 
  const [memberShip, setMemberShip] = useState("monthly");

  return (
    <div className="py-10 px-5  lg:w-[1200px]  mx-auto">
      <div className="">
        <h1 className="text-center animate-fade-up text-3xl lg:text-6xl font-bold text-black/80 mb-5">
          Our MemberShip
        </h1>
        <div className="flex gap-4 justify-center my-4 w-fit mx-auto px-4 py-2 rounded-lg">
          <button
            onClick={() => setMemberShip("monthly")}
            className={`px-4 py-2 right-to-left rounded-lg
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 font-semibold transition ${
                memberShip === "monthly" ?
                  "bg-yellow-500 text-stone-900"
                : "bg-gray-200 text-stone-600 hover:bg-yellow-300"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setMemberShip("yearly")}
            className={`px-4 py-2 left-to-right rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 font-semibold transition ${
              memberShip === "yearly" ?
                "bg-yellow-500 text-stone-900"
              : "bg-gray-200 text-stone-600 hover:bg-yellow-300"
            }`}
          >
            Yearly <span className="text-xs">(Save 15%)</span>
          </button>
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto">
        {dataPricing.map((pricing) => (
          <PricingCard
            key={pricing.id}
            pricing={pricing}
            memberShip={memberShip}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
