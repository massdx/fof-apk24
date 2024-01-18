import Image from "next/image"
import { Button } from "./ui/button";
import { Ghost, TwitterIcon } from "lucide-react";

const SpeakerCard = ({ title , name , agency, profil , delay = 100 } : { title: string , name: string , agency: string ,  profil: string , delay?: number }) => {
    return <div className="" data-aos="zoom-in" data-aos-delay={delay}>
        <div className="w-fit group flex items-center justify-center flex-col relative">

            <div className="relative">
                <div className={` w-40  h-40 md:w-[12rem] md:h-[12rem] bg-gray-500 group-hover:scale-105 duration-300 rounded-full overflow-hidden  `}>
                    <Image src={profil} alt="" height={300} width={300} />

                </div>
                <Button className="absolute bottom-0 right-5 group-hover:text-white group-hover:bg-primary text-blue-500 duration-200 bg-white rounded-full " variant={"ghost"} size={"icon"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 25 25" fill="currentColor">
                        <path d="M19.0039 2.34375H22.4512L14.9219 10.9473L23.7793 22.6562H16.8457L11.4111 15.5566L5.2002 22.6562H1.74805L9.7998 13.4521L1.30859 2.34375H8.41797L13.3252 8.83301L19.0039 2.34375ZM17.793 20.5957H19.7022L7.37793 4.29688H5.32715L17.793 20.5957Z" fill="currentColor" />
                    </svg>
                </Button>
            </div>


            <div className="flex flex-col gap-0 items-center justify-center mt-5 ">

                <span className="text-lg font-medium text-center line-clamp-1  " >{name}</span>
                <span className="md:text-lg text-center line-clamp-1 ">{title}</span>
                <span className=" md:text-md text-sm   text-primary font-semibold group-hover:text-primary duration-200">{agency}</span>

                
            </div>
        </div>
    </div>
}

export default SpeakerCard;