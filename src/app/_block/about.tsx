import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { lieux } from "@/contents/contents";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="apropos"
      className="lg:min-h-screen py-20 lg:py-0 flex items-center media-size"
    >
      <div className="md:grid md:grid-cols-2 w-full ">
        <div className="" data-aos="fade-up" data-aos-delay="100">
          <Link href={"https://escen.university/"} target="_blank">
            <div className=" max-w-md self-auto flex gap-4 items-center  border border-black  py-2 px-4 rounded-xl w-fit mb-5   ">
              <div>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className=" w-10 h-10    bg-primary rounded-full "
                >
                  <MapPinIcon className="text-white " />
                </Button>
              </div>
              <div className="leading-tight text-sm ">
                Lieu
                <Link
                  href={""}
                  className="text-primary block font-medium text-lg"
                >
                  {lieux}
                </Link>
              </div>
            </div>
          </Link>

          <Heading>
            <h2 className="section-title">
              1 ère <span className="y "> Conférence </span>autour du produit en
              Afrique
            </h2>
          </Heading>
          <p data-aos-delay="50" className=" my-5 md:my-10 ">
          l'Africa Product Keynote (APK) explore le thème de  <span className="font-semibold">l’Accessibilité</span> du 19 au 20 janvier 2024. Destiné aux passionnés de produits, cet événement réunira des professionnels du marketing, du design et du produit pour des ateliers de design, des keynotes inspirantes et des présentations de produits africain.
          </p>

          <div className="flex my-10 md:mb-0  gap-5">
            <Button className=" ">
              <Link href={"#inscription"} passHref>
                s'inscrire
              </Link>
            </Button>
            <Button variant={"secondary"} className="">
              <Link href={"#"} passHref>
                Le programme
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex relative items-center  flex-col p-6 md:p-0 ">
          <div className="w-full h-full relative  flex items-center justify-center">
            <div
              data-aos="zoom-in"
              className="bg-blue-500  h-[15rem] md:h-[17rem] w-[10rem] md:w-[13rem] text-white flex flex-col px-4 items-center justify-center rounded-3xl shadow-2xl"
            >
              <div className="flex flex-col w-full  text-center font-bold border-b pb-2 border-white">
                <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">
                  {" "}
                  19{" "}
                </span>
                <span className="text-3xl ">JAN</span>
              </div>
              <div className="text-lg md:text-xl text-center font-semibold">
                Keynote <br />& Workshop
              </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="100">
              <div className="bg-white  translate-y-14 md:translate-y-28 -ml-5  md:-ml-10 h-[15rem] md:h-[17rem] w-[10rem] md:w-[13rem]   flex flex-col px-4    items-center justify-center rounded-3xl shadow-2xl">
                <div className="flex flex-col w-full  text-center font-bold border-b pb-2 border-black">
                  <span className="text-6xl  md:text-[5rem] tracking-tighter leading-tight">
                    {" "}
                    20{" "}
                  </span>
                  <span className="text-3xl ">JAN</span>
                </div>
                <div className="text-lg md:text-xl text-center font-semibold">
                  Keynote <br />& Workshop
                </div>
              </div>
            </div>
            <Image
              data-aos="zoom-in"
              data-aos-delay="800"
              className="absolute hidden   md:block  md:-bottom-24 md:right-28 lg:block z-30 "
              height={110}
              width={110}
              alt="moi"
              src={"/assets/motifs/vous2.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
