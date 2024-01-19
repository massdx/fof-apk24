import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { lieux } from "@/contents/contents";
import { AppRoute } from "@/lib/app-route";
import { HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export function LocalisationCta() {
  return (
    <section id="localisation" className=" w-11/12 lg:w-9/12 mx-auto   flex items-center py-10 md:py-32">
      <div className="  w-full h-full bg-[45%] grid gap-5 lg:grid-cols-2 mb-5 bg-cover bg-no-repeat py-20">
        <div  data-aos="fade-up"  data-aos-delay="100" className="w-11/12   mx-auto md:w-full md:mx-0 md:p-5 ">
          <Heading>
            <div className="section-title">
              Rencontrons-nous <br /> tous sur le site
            </div>
          </Heading>
          <div className="space-y-5 flex flex-col  max-w-xl  my-10 ">
            <Link href={"tel:+22891844075"} className="group w-fit  ">
              <div className=" items-center gap-5 inline-flex ">
                <span className="w-10 h-10  md:w-12 md:h-12  group-hover:bg-primary duration-200 bg-gray-200 rounded-full flex justify-center items-center">
                  <PhoneCallIcon className="text-black h-4 w-4 md:h-5 md:w-5" />
                </span>
                <Heading>
                  <span className="md:text-xl   group-hover:text-primary  font-medium duration-200  ">
                  +228 91844075 / 97051306
                  </span>
                </Heading>
              </div>
            </Link>
            <Link href={"mailto:foflome@gmail.com"} className="group w-fit ">
              <div className="flex items-center gap-5 ">
                <span className="w-10 h-10  md:w-12 md:h-12 group-hover:bg-primary duration-200 bg-gray-200 rounded-full flex justify-center items-center">
                  <MailIcon className="text-black h-4 w-4 md:h-5 md:w-5" />
                </span>
                <Heading>
                  <span className="md:text-xl group-hover:text-primary duration-200  font-medium ">
                  foflome@gmail.com
                  </span>
                </Heading>
              </div>
            </Link>
            <Link href={AppRoute.mapLink} target="_blank" className="group w-fit ">
              <div className="flex items-center gap-5 ">
                <span className="w-10 h-10  md:w-12 md:h-12  group-hover:bg-primary duration-200 bg-gray-200 rounded-full flex justify-center items-center">
                  <HomeIcon className="text-black h-4 w-4 md:h-5 md:w-5" />
                </span>
                <Heading>
                  <Link href={"https://escen.university/"} target="_blank" className="md:text-xl group-hover:text-primary   duration-200    font-medium  ">
                  {lieux}
                  </Link>
                </Heading>
              </div>
            </Link>
          </div>
          <div>
            <Button  className="">
              <Link href={"#inscription"} passHref>
               Je m'inscris maintenant
              </Link>
            </Button>
          </div>
        </div>
        <div  data-aos="fade-up"  data-aos-delay="200" className="w-full flex  items-center justify-center h-full  ">
        <iframe className="border w-11/12 lg:w-10/12 h-[350px] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.749215903197!2d1.2095151822582428!3d6.151688223827726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e36b2ec6d733%3A0x5000858675986a88!2sESCEN%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20Commerce%20et%20d&#39;%C3%89conomie%20Num%C3%A9rique!5e0!3m2!1sfr!2stg!4v1703402295617!5m2!1sfr!2stg"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
