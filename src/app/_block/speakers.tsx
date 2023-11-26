import Heading from "@/components/heading"
import SpeakerCard from "@/components/speaker-card"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Speakers = () => {
    return <section className="md:w-9/12 w-11/12 mx-auto flex items-center md:py-20 py-14  lg:min-h-screen ">
        <div className="w-full ">
            <Heading>
                <h2 className="section-title md:text-center">Nos <span className="text-primary  "> Intervenants </span></h2>
            </Heading>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full  gap-6 gap-y-10  place-items-center place-content-center my-20 ">
                <SpeakerCard delay={100} />
                <SpeakerCard delay={200} />
                <SpeakerCard delay={300} />
                <SpeakerCard delay={400} />
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex md:items-center w-full gap-5   md:flex-row flex-col  mt-10  justify-center">
                <Button className=" ">
                    <Link href={"#"} passHref>
                        Devenir speaker
                    </Link>
                </Button>
                <Button variant={"secondary"} className=" ">
                    <Link href={"#"} passHref>
                        Voir plus...
                    </Link>
                </Button>

            </div>
        </div>
    </section>
}

export default Speakers;