import Heading from "@/components/heading";
import ProgramCard from "@/components/program-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon, DownloadIcon, TimerIcon, WatchIcon } from "lucide-react";
import Link from "next/link";
import { programData } from "@/lib/program-data";
import { useState } from "react";
import { program as p } from "@/lib/program";
const Program = () => {
    const [program, setProgram] = useState(p);
    const [showAllProgram, setShowAllProgram] = useState(false);

    const handleClick = (programs: any) => {
        if(!programs.active) {
            const updatedProgram = program.map((i: any) => {

                if (i.id === programs.id) {
                    return { ...i, active: !i.active };
                }
                i.active = false;
                return i;
            });
            console.log("hello");
            setProgram(updatedProgram);
        }
       
    };

    
    return <section id="programme" className="py-14 md:py-20 lg:min-h-screen flex programss-center bg-[#FDFBFC]">

        <div className="w-11/12 md:w-9/12 mx-auto">
            <Heading>
                <h5 data-aos="fade-up" className="section-title md:text-center">Ce qu’il y aura au <br /> <span className="text-primary">programme</span></h5>
            </Heading>
      <div className="border-b flex gap-5 items-end md:justify-center  mt-14 ">
      {program.map((item, key) => {
                    return <Button onClick={() => handleClick(item)} key={key} className={` ${item.active ? " btn-primary border-b-2   border-b-primary " : ""} flex flex-col h-fit py-2 m-0 hover:bg-secondary  bg-transparent rounded-none `}>
                        <div className="uppercase  text-sm md:text-lg block line-clamp-4 ">{item.title}</div>
                        <div className="font-bold  md:text-xl  ">{item.date} </div>
                    </Button>
                })}
      </div>

            <div className=" my-10 md:my-16 grid grid-col-1   md:grid-cols-2   lg:grid-cols-3  gap-10 place-programss-start ">              
                {program.map((p, index) => p.active ? <ProgramCard program={p} key={index} showAll={showAllProgram} /> : "")}
             
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="flex md:programss-center w-full gap-5   md:flex-row flex-col  mt-10  justify-center">
                {!showAllProgram &&     <Button onClick={() => setShowAllProgram(true)} className=" ">
                   
                        Tout le programme
                   
                </Button> }
            
                <Button variant={"secondary"} className=" ">
                    <Link href={"/assets/Programme-APK-2024.pdf"} target="_blank" className="flex gap-2" passHref>
                       Télécharger  
                       <DownloadIcon className="w-6 h-6 animate-bounce" />
                    </Link>
                </Button>

            </div>
        </div>
    </section>
}

export default Program; 