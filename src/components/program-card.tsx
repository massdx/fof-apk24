"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "./heading";
import { ClockIcon } from "lucide-react";
import { ProgramType, ProgramDataType } from "@/lib/program";

const ProgramCard = ({ program , showAll , delay = 100 }: { delay?: number, showAll: boolean, program: ProgramType }) => {

    const handleType = (p: ProgramDataType) => {
        switch (p.type) {
            case 'annonce':
                return "red-600";
            case 'workshop':
                return "green-600";
            case 'keynote':
                return "black";


        }
    }
    return program.content.slice(0, showAll ? program.content.length:  6 ).map((p, index) => <div key={index} data-aos="zoom-in" data-aos-delay={delay * index}>
        <Card className="shadow-none  relative  group h-full hover:scale-95 hover:shadow-2xl hover:shadow-gray-200 duration-200 " >
            <CardHeader className=" mb-10 ">
                {
                    p.type == "keynote" && <div className={`uppercase tracking-wider font-semibold   py-2 px-4 rounded-md self-start inline-block text-sm bg-black/20 `}>
                        {p.type}
                    </div>
                }
                {
                    p.type == "annonce" && <div className={`uppercase tracking-wider font-semibold   py-2 px-4 rounded-md self-start inline-block text-sm bg-primary/20  text-red-600 `}>
                        {p.type}
                    </div>
                }
                {
                    p.type == "workshop" && <div className={`uppercase tracking-wider font-semibold   py-2 px-4 rounded-md self-start inline-block text-sm bg-green-600/10 text-green-600`}>
                        {p.type}
                    </div>
                }
                <CardTitle>
                    <div className="mt-3 inline-block text-xl  leading-snug"> {p.title} </div>
                </CardTitle>
                {p.intervenant && <CardTitle>
                    <div className="mt-3 inline-block text-lg  leading-snug line-clamp-1"> <span className="uppercase">Intervenant</span> : <span className="text-primary">{p.intervenant}</span> </div>
                </CardTitle>}

            </CardHeader>
            <CardContent className="pb-0 absolute bottom-0 w-full ">

                <CardFooter className="px-0 my-5  relative   bottom-0 pt-5 pb-0 font-semibold uppercase">
                    <div className="absolute bottom-0">
                        <Heading>
                            <span className="flex  items-end gap-3 "><ClockIcon className="text-primary" /> {p.debut} - {p.fin} </span>
                        </Heading>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    </div>)


}

export default ProgramCard; 