import { Counter } from "@/components/counter";
import Heading from "@/components/heading";
import TimeCounter from "@/components/time";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="min-h-screen   flex items-center relative bg-[url(/assets/img/background.jpg)]   md:bg-right-top  bg-[50%] md:bg-contain  bg-no-repeat ">
            <div className="md:w-9/12 w-11/12 mx-auto relative md:mt-0 pt-16 ">
                <div className="md:w-8/12 md:flex  gap-8 ">
                    <div data-aos="fade-left" className="flex md:gap-0 mb-5 md:mb-0 gap-2 md:flex-col w-fit border border-black  self-start  py-3 md:py-5 px-2 items-center justify-center rounded-2xl">
                        <span className="date-container border-b-[1px] border-gray-300 ">
                            05
                        </span>
                        <span className="date-container">
                            06
                        </span>
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
                                <span className="font-semibold">#</span>PRESENTE
                            </span>
                        </div>
                        <Image
                        data-aos="zoom-in" data-aos-delay="600"
                            height={120}
                            width={120}
                            alt="moi"
                            className="absolute hidden md:block  lg:-right-20 lg:top-56"
                            src={"/assets/motifs/moi.png"}
                        />
                         <Image
                          data-aos="zoom-in" data-aos-delay="800"
                                    className="absolute hidden md:block z-30  lg:right-5 lg:top-18"
                                    height={120}
                                    width={120}
                                    alt="moi"
                                    src={"/assets/motifs/vous.png"}
                                />
                        <Heading>
                            <h1 className="text-5xl overflow-hidden pb-2 md:text-[6.4rem] relative font-bold leading-[91.1%] tracking-tighter ">
                                <div>
                                    <span data-aos="fade-up"> Africa </span>
                                </div>
                                <div className="flex">
                                    <div data-aos="fade-up" data-aos-delay="50" className="text-primary pr-1"> Product </div>
                                    <div data-aos="fade-up" data-aos-delay="100"> Keynote </div>
                                </div>
                                
                               
                            </h1>
                        </Heading>
                        <p data-aos="fade-up" data-aos-delay="200" className=" text-md md:text-lg my-5  md:my-10 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Accusantium alias dignissimos minus consequuntur atque fuga, dolor
                            expedita animi suscipit iure vitae, sequi at, voluptatem in! Dolor
                            soluta culpa error non.
                        </p>
                        <div className="flex  md:flex-row flex-col gap-5">
                           <div data-aos="fade-up" data-aos-delay="300" className=" ">
                           <Button className=" w-full md:w-fit ">
                                <Link href={"#"} passHref>
                                    s'inscrire
                                </Link>
                            </Button>
                           </div>
                          <div data-aos="fade-up" data-aos-delay="400">
                          <Button variant={"secondary"} className="w-full md:w-fit">
                                <Link href={"#"} passHref>
                                    En savoir plus
                                </Link>
                            </Button>
                          </div>
                        </div>
                      <Counter  target={'2024-01-19T07:59:59'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
