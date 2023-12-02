import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "./heading";
import { ClockIcon } from "lucide-react";

const ProgramCard = ({ type, title, description, time, delay = 100 }: { type: string, title: string, description: string, time: string, delay: number }) => {
    return <div data-aos="zoom-in" data-aos-delay={delay}>
        <Card className="shadow-none relative  group h-full hover:scale-95 hover:shadow-2xl hover:shadow-gray-200 duration-200 " >
            <CardHeader className="">
                <div className="uppercase tracking-wider font-semibold bg-green-100 text-green-600 py-2 px-4 rounded-md self-start inline-block text-sm  ">
                    {type}
                </div>
                <CardTitle>
                    <div className="mt-3 inline-block  leading-snug"> {title} </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
                <CardDescription className="text-md text-ellipsis overflow-hidden line-clamp-3">
                    {description}
                </CardDescription>
                <CardFooter className="px-0 border-t my-5  pt-5 pb-0 font-semibold uppercase">
                    <Heading>
                        <span className="flex  items-end gap-3 "><ClockIcon className="text-primary" /> {time} </span>
                    </Heading>
                </CardFooter>
            </CardContent>
        </Card>
    </div>


}

export default ProgramCard; 