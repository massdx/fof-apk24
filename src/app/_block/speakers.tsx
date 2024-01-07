import Heading from "@/components/heading";
import SpeakerCard from "@/components/speaker-card";
import { Button } from "@/components/ui/button";
import { AppRoute } from "@/lib/app-route";
import Link from "next/link";

const Speakers = () => {
  return (
    <section  id="speakers" className=" media-size flex items-center  py-20 md:py-32 ">
      <div className="w-full" data-aos="fade-up"  data-aos-delay="100">
        <Heading>
          <h2 className="section-title md:text-center">
            Nos <span className="  "> Speakers </span>
          </h2>
        </Heading>
        <p className="max-w-4xl  md:mx-auto md:text-center leading-relaxed text-gray-800 my-10">
        La sélection des speakers est en cours, et nous avons hâte de partager avec vous la liste exceptionnelle d'acteur du secteur du produit.
        <br />
       <span className="font-semibold"> Restez connectés !</span>
        </p>
        {/*  <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full  gap-6 gap-y-10  place-items-center place-content-center my-20 ">
                <SpeakerCard delay={100} />
                <SpeakerCard delay={200} />
                <SpeakerCard delay={300} />
                <SpeakerCard delay={400} />
            </div>*/}
        <div
          className="flex flex-wrap md:items-center w-full gap-5 flex-row  mt-10  md:justify-center"
        >
         {/**<Button className="" variant={"secondary"}>
            <Link href={AppRoute.formualireSpeaker} passHref>
            Postulez maintenant!
            </Link>
          </Button>*/} 
          {/* 
                <Button variant={"secondary"} className=" ">
                    <Link href={"#"} passHref>
                        Voir plus...
                    </Link>
                </Button>*/}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
