import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { lieux } from "@/contents/contents";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";

const About = () => {
    return <section id="apropos" className="lg:min-h-screen py-20 lg:py-0 flex items-center w-11/12 md:w-9/12 mx-auto ">
        <div className="md:grid md:grid-cols-2 w-full ">
            <div className="md:w-10/12" data-aos="fade-up"  data-aos-delay="100">
            <div    className=" self-auto flex gap-2 items-center  border border-black  py-2 px-4 rounded-xl w-fit mb-5   ">
                    <Button variant={"ghost"} size={"icon"} className="    bg-blue-500 rounded-full ">
                        <MapPinIcon className="text-white " />
                    </Button>
                    <div className="leading-tight text-sm "> Lieu
                        <Link href={""} className="text-blue-500 block font-semibold text-lg ">{ lieux }</Link>
                    </div>
                </div>
                <Heading>
                    <h2 className="section-title">1 ère <span className="text-primary "> Conférence </span>autour  du produit au Togo</h2>
                </Heading>
                <p    data-aos-delay="50" className=" my-5 md:my-10 ">
                Placée sous le sous thème de  <span className="font-semibold">l’Accessibilité</span>, cette conférence autour du Produit se veut construire un pont entre les responsables produits, la cibles et le besoin de cette dernière.
                </p>
              
                <div className="flex my-10 md:mb-0  gap-5">
                    <Button className=" ">
                        <Link href={"#inscription"} passHref>
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
                            <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">  19 </span>
                            <span className="text-3xl ">JAN</span>
                        </div>
                        <div className="text-lg md:text-xl text-center font-semibold">
                        Keynote <br />& workshop
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="100">
                    <div  className="bg-white  translate-y-14 md:translate-y-28 -ml-5  md:-ml-10 h-[15rem] md:h-[17rem] w-[10rem] md:w-[13rem]   flex flex-col px-4    items-center justify-center rounded-3xl shadow-2xl">
                        <div className="flex flex-col w-full  text-center font-bold border-b pb-2 border-black">
                            <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">  20 </span>
                            <span className="text-3xl ">JAN</span>
                        </div>
                        <div className="text-lg md:text-xl text-center font-semibold">
                        Keynote <br />& workshop
                        </div>
                    </div>
                    </div>
                 
                </div>

            </div>

        </div>

    </section>
}

export default About;