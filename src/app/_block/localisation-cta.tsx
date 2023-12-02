import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { AppRoute } from "@/lib/app-route";
import { HomeIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export function LocalisationCta() {
  return (
    <section className=" w-12/12 md:w-9/12 mx-auto   flex items-center py-10 md:py-32">
      <div className="bg-[url(/assets/img/bg3.jpg)]  w-full h-full bg-[45%] mb-5 bg-cover bg-no-repeat py-20">
        <div  data-aos="fade-up"  data-aos-delay="100" className="w-11/12  mx-auto md:w-full md:mx-0 md:p-5 ">
          <Heading>
            <div className="section-title">
              Rencontrons-nous <br /> tous sur le site
            </div>
          </Heading>
          <div className="space-y-5  my-10 ">
            <Link href={"tel:+22891844075"} className="group block">
              <div className="flex items-center gap-5">
                <span className="w-10 h-10  md:w-14 md:h-14 bg-gray-200 rounded-full flex justify-center items-center">
                  <PhoneCallIcon className="text-black h-4 w-4 md:h-6 md:w-6" />
                </span>
                <Heading>
                  <span className="md:text-xl font-semibold ">
                  +228 91844075 / 97051306
                  </span>
                </Heading>
              </div>
            </Link>
            <Link href={"mailto:foflome@gmail.com"} className="group block ">
              <div className="flex items-center gap-5 ">
                <span className="w-10 h-10  md:w-14 md:h-14 bg-gray-200 rounded-full flex justify-center items-center">
                  <HomeIcon className="text-black h-4 w-4 md:h-6 md:w-6" />
                </span>
                <Heading>
                  <span className="md:text-xl group-hover:text-primary  font-semibold ">
                  foflome@gmail.com
                  </span>
                </Heading>
              </div>
            </Link>
            <Link href={AppRoute.mapLink} target="_blank" className="group block ">
              <div className="flex items-center gap-5 ">
                <span className="w-10 h-10  md:w-14 md:h-14 bg-gray-200 rounded-full flex justify-center items-center">
                  <HomeIcon className="text-black h-4 w-4 md:h-6 md:w-6" />
                </span>
                <Heading>
                  <span className="md:text-xl group-hover:text-primary  font-semibold ">
                   Energie génération
                  </span>
                </Heading>
              </div>
            </Link>
          </div>
          <div>
            <Button  className="">
              <Link href={"inscription"} passHref>
               Je m'inscris maintenant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
