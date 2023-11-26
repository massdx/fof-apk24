import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";

const About = () => {
    return <section className="min-h-screen flex items-center w-11/12 md:w-9/12 mx-auto ">
        <div className="md:grid md:grid-cols-2 w-full ">
            <div className="md:w-10/12">
            <div data-aos="fade-right"  data-aos-delay="100"  className=" self-auto flex gap-2 items-center  border border-black  py-2 px-4 rounded-xl w-fit mb-5   ">
                    <Button variant={"ghost"} size={"icon"} className="    bg-green-500 rounded-full ">
                        <MapPinIcon className="text-white " />
                    </Button>
                    <div className="leading-tight text-sm "> Lieux 
                        <Link href={""} className="text-green-500 block font-semibold text-lg ">Energie Génération </Link>
                    </div>
                </div>
                <Heading>
                    <h2 data-aos="fade-up" className="section-title">1 ère <span className="text-primary "> Conférence </span>autour  du produit au Togo</h2>
                </Heading>
                <p  data-aos="fade-up"  data-aos-delay="50" className=" my-5 md:my-10 ">
                    Travaillez ensemble en temps réel et offrez aux designers de nouvelles façons de créer. Maintenez l'efficacité des workflows grâce à des outils qui donnent à chaque équipe une visibilité sur l'ensemble du processus.
                </p>
              
                <div data-aos="fade-down"  data-aos-delay="100"  className="flex  md:flex-row flex-col gap-5">
                    <Button className=" ">
                        <Link href={"#"} passHref>
                            s'inscrire
                        </Link>
                    </Button>
                    <Button variant={"secondary"} className="">
                        <Link href={"#"} passHref>
                            Le programme
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex items-center  flex-col p-6 md:p-0 ">
               
                <div className="w-full h-full  flex items-center justify-center">
                    <div data-aos="zoom-in" className="bg-blue-500  h-[15rem] md:h-[17rem] w-[10rem] md:w-[13rem] text-white flex flex-col px-4 items-center justify-center rounded-3xl shadow-2xl">
                        <div className="flex flex-col w-full  text-center font-bold border-b pb-2 border-white">
                            <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">  05 </span>
                            <span className="text-3xl ">JANV</span>
                        </div>
                        <div className="text-lg md:text-xl font-semibold">
                            conferences <br />& workshop
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="100">
                    <div  className="bg-white  translate-y-14 md:translate-y-28 -ml-5  md:-ml-10 h-[15rem] md:h-[17rem] w-[10rem] md:w-[13rem]   flex flex-col px-4    items-center justify-center rounded-3xl shadow-2xl">
                        <div className="flex flex-col w-full  text-center font-bold border-b pb-2 border-black">
                            <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">  06 </span>
                            <span className="text-3xl ">JANV</span>
                        </div>
                        <div className="text-lg md:text-xl font-semibold">
                            conferences <br />& workshop
                        </div>
                    </div>
                    </div>
                 
                </div>

            </div>

        </div>

    </section>
}

export default About;