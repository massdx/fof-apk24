import Image from "next/image";
import { parteners } from "@/lib/parteners";
import { sponsors } from "@/lib/sponsors";
import Heading from "@/components/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const  Parteners = () => {
    return <>
    <div className="flex gap-10 items-end justify-center ">
        {parteners.map((p, index ) => <Image className="w-32 h-auto object-contain" key={index} height={100} width={100} alt="" src={p.url} data-aos="zoom-in"  data-aos-delay={100 * index }/> )}
    </div>
    </>
}


const  Sponsors = () => {
    return <section className="min-h-screen flex items-center w-11/12 md:w-9/12 mx-auto ">
        <div className="w-full">
          <Heading>
            <h6  className=" md:text-center section-title " data-aos="fade-up">Les <span className="text-yellow-500 ">sponsors</span> <br/> du africa product keynote</h6>
          </Heading>
          <div data-aos="fade-in" className="grid grid-cols-5 my-10 place-items-center  md:my-20 ">
          {sponsors.map((s, index ) => <Image className=" md:w-32 h-auto object-contain" key={index} height={100} width={100} alt={s.name} src={s.url}  data-aos="zoom-in"  data-aos-delay={100 * index }/> )}
          </div>
          <div data-aos="fade-down" data-aos-detaly="100" className="flex md:items-center w-full gap-5 md:flex-row flex-col  mt-10  justify-center">
                <Button className="bg-yellow-500 ">
                    <Link href={"#"} passHref>
                      Devenir sponsor
                    </Link>
                </Button>
            </div>
        </div>
    </section>
}
export {Parteners , Sponsors} ;