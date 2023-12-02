"use client";
import { useEffect, useState } from "react";
import Heading from "./heading";
import BarLoader from "react-spinners/BarLoader";

const LoadingPage = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const colors = [
    "text-primary",
    "text-green-500",
    "text-yellow-600",
    "text-blue-500",
  ];
  const [activeColor, setActiveColor] = useState("text-primary");
  useEffect(() => {
    setLoaded(true);
    console.log(loaded);
    setInterval(() => {
      setActiveColor(colors[Math.floor(Math.random() * 3) + 1]);
    }, 100);
    setTimeout(() => {
      setLoaded(true);
    }, 8000);
  }, []);

  return (
    <div
      className={`${
        !loaded ? "h-screen" : "h-0"
      }  fixed top-0 duration-500 flex items-center w-full bg-white  z-[500] justify-center`}
    >
      {!loaded && (
        <div>
          <div className="flex flex-col gap-5  items-center justify-center">
            <Heading>
              <h1 className="text-2xl font-bold leading-[91.1%] tracking-tighter ">
                <div className="text-center">
                  <span> Africa </span>
                </div>
                <div className="flex items-center">
                  <div className={` ${activeColor} pr-1`}>Product</div>
                  <div>Keynote</div>
                </div>
              </h1>
            </Heading>
            <BarLoader color="#d63636" height={3} speedMultiplier={3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
