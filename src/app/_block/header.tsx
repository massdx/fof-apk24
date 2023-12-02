import { Counter } from "@/components/counter";
import Heading from "@/components/heading";
import TimeCounter from "@/components/time";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="min-h-screen   flex items-center relative bg-[url(/assets/img/background.jpg)]   md:bg-right-top  bg-[50%] md:bg-contain  bg-no-repeat ">
      <div className="sizing mx-auto relative md:mt-0 pt-16 ">
        <div className="md:w-11/12 lg:w-8/12 md:flex  gap-8 ">
          <div
            data-aos="fade-left"
            className="flex md:gap-0 mb-5 md:mb-0 gap-2 md:flex-col w-fit border border-black  self-start  py-3 md:py-5 px-2 items-center justify-center rounded-2xl"
          >
            <span className="date-container pr-2 md:pr-0 border-r-[1px] border-gray-300 ">
              05
            </span>
            <span className="date-container">06</span>
            <span className="w-4 h-[1px] rounded-full md:hidden bg-black"></span>
            <span className="date-container md:pt-2 border-none md:text-3xl border-gray-900">
              JANV
            </span>
            <span className="date-container border-none  md:text-3xl  md:-mt-2">
              2023
            </span>
          </div>
          <div className="relative ">
            <div data-aos="fade-in" className="">
              <span className="tracking-wider mb-2 inline-block md:text-2xl">
                <span className="font-semibold">#</span>APk2024
              </span>
            </div>
            <Image
              data-aos="zoom-in"
              data-aos-delay="600"
              height={120}
              width={120}
              alt="moi"
              className="absolute hidden lg:block md:right-10 md:bottom-10  lg:-right-20 lg:top-56"
              src={"/assets/motifs/moi.png"}
            />
            <Image
              data-aos="zoom-in"
              data-aos-delay="800"
              className="absolute hidden lg:block z-30 md:right-10 lg:right-5 lg:top-18"
              height={120}
              width={120}
              alt="moi"
              src={"/assets/motifs/vous.png"}
            />
            <Heading>
              <h1 className="text-5xl overflow-hidden pb-2 md:text-6xl  lg:text-[6.4rem] relative font-bold leading-[91.1%] tracking-tighter ">
                <div>
                  <span data-aos="fade-up"> Africa </span>
                </div>
                <div className="flex">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    className="text-primary pr-1"
                  >
                  
                    Product
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                
                    Keynote
                  </div>
                </div>
              </h1>
            </Heading>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-md md:text-xl my-5  md:my-8 "
            >
             L'évolution dynamique de l'écosystème des solutions numériques nous permet aujourd'hui d'affirmer avec confiance, l'émergence de produits africains, conçus par et pour les Africains, tout en portant fièrement nos empreintes culturelles.Cependant, le défi réside dans la découverte de ces produits.

            </p>
            <div     data-aos="fade-up"
              data-aos-delay="300" className="flex my-10  gap-5">
            
                <Button className="  ">
                  <Link href={"#inscription"} passHref>
                    Inscription
                  </Link>
                </Button>
           
             
                <Button variant={"secondary"} className="">
                  <Link href={"#apropos"} passHref>
                    En savoir plus
                  </Link>
                </Button>
             
            </div>
            <Counter target={"2024-01-19T07:59:59"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
