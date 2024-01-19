"use client";
import { Counter } from "@/components/counter";
import Heading from "@/components/heading";
import Navbar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";

export default function Merci() {
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => fire(), []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      particleCount: 2,
      spread: 60,
      angle: 60,
      origin: { x: 0 },
    });

    makeShot(0.35, {
      particleCount: 2,
      spread: 100,
      angle: 120,
      origin: { x: 1 },
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <>
   
      <Navbar />
      <ReactCanvasConfetti
      className="z-50"
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      <section className="lg:min-h-screen  md:py-20 ld:py-0 bg-[url(/assets/img/background.jpg)]   md:bg-right-top  bg-[50%] md:bg-contain  bg-no-repeat  ">
        <div className="sizing mx-auto relative md:mt-0 pt-20 md:pt-32 ">
          <div className="md:w-11/12 lg:w-8/12 md:flex  gap-8 ">
            <div data-aos="fade-up" className="relative ">
              <div data-aos="fade-in" className="">
                <span className="tracking-wider mb-2 inline-block md:text-xl">
                  <span className="font-semibold">#</span>MERCI
                </span>
              </div>

              <Heading>
                <h1 className="text-[2.7rem]  sm:text-4xl pb-2 md:text-5xl  lg:text-[5rem] relative font-bold leading-[91.1%] tracking-tighter ">
                  Inscription <span className="text-primary ">reussie</span>
                </h1>
              </Heading>
              <p className=" md:w-5/6 md:my-8 my-5   ">
                En tant que leader technologique en Afrique, devenez partenaire
                stratégique de l'Africa Product Keynote #APK2024. Cette occasion
                unique positionnera votre entreprise au cœur de l'innovation
                africaine.
              </p>
              <div className="flex my-10 gap-2 md:gap-5 ">
                <Button variant={"secondary"} className="">
                  <Link href={"/"} passHref>
                    Revenir à l'accueil
                  </Link>
                </Button>
                <Button className="">
                  <Link href={"/"} passHref>
                    Le programme
                  </Link>
                </Button>
              </div>
              <Counter target={"2024-01-19T07:59:59"} />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="  md:bg-right mb-5 bg-cover bg-no-repeat py-20"
        >
          <div className="w-11/12 md:w-9/12 mx-auto  "></div>
        </div>
      </section>
    </>
  );
}
