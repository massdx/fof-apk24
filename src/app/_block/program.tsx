import Heading from "@/components/heading";
import ProgramCard from "@/components/program-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon, TimerIcon, WatchIcon } from "lucide-react";
import Link from "next/link";
import { programData } from "@/lib/program-data";
const Program = () => {
    return <section className="py-14 md:py-20 lg:min-h-screen flex items-center bg-[#FDFBFC]">

        <div className="w-11/12 md:w-9/12 mx-auto">
            <Heading>
                <h5 data-aos="fade-up"  className="section-title md:text-center">Ce qu’il y aura au <br /> <span className="text-green-500 ">programme</span></h5>
            </Heading>
            <div className=" my-10 md:my-20 grid grid-col-1  md:grid-cols-3 lg:grid-cols-4  gap-10 place-items-start ">
                {programData.map((p, index) => (
                    <ProgramCard key={index} {...p} delay={index * 100} />
                ))}
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="flex md:items-center w-full gap-5   md:flex-row flex-col  mt-10  justify-center">
                <Button className=" ">
                    <Link href={"#"} passHref>
                        Tous le programme
                    </Link>
                </Button>
                <Button variant={"secondary"} className=" ">
                    <Link href={"#"} passHref>
                        Soummetre un panel
                    </Link>
                </Button>

            </div>
        </div>
    </section>
}

export default Program; 