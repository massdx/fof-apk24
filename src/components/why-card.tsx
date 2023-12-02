import { ReactNode } from "react"
import Heading from "./heading"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const WhyCard = ({ children, title, description , delay = 100 }: { children: ReactNode, title: string, description: string , delay: number }) => {
    return <div  data-aos="zoom-in"  data-aos-delay={delay}>
        <Card  className="hover:shadow-2xl w-full h-full  cursor-pointer group hover:shadow-gray-200  hover:scale-95 duration-300 rounded-3xl ">
            <CardHeader>
                {children}
            </CardHeader>
            <div className="px-5">
                <CardTitle>
                    <Heading >
                        <span className="text-2xl group-hover:text-primary duration-200">  {title} </span>
                    </Heading>
                </CardTitle>
                <CardDescription className="my-4 text-md text-gray-600 leading-relaxed">
                    {description}
                </CardDescription>
            </div>
        </Card>
    </div>
}

export default WhyCard; 