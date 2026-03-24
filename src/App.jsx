import { Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import { ToastBar } from "react-hot-toast";
import ChartCard from "./components/ChartCard/ChartCard";
import GymChart from "./components/ChartCard/GymChart";

// load data form public folder
const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="">

        <Suspense
          fallback={
            <p className="text-center text-5xl font-bold text-neutral-400">
              Loading...
            </p>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <GymChart></GymChart>
        <ChartCard></ChartCard>
      </main>
    </>
  );
}

export default App;
