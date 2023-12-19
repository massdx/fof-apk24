"use client";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import Navbar from "@/components/nav-bar";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function FormulaireSpeakers() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.id = "tally-js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (typeof (window as any).Tally !== "undefined") {
        // @TS-ignore
        (window as any).Tally.loadEmbeds();
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <section className="lg:min-h-screen  md:py-20 ld:py-0 ">
        <div
          data-aos="fade-up"
          className=" bg-[url(/assets/img/bg4.jpg)] bg-[45%] md:bg-right mb-5 bg-cover bg-no-repeat py-20"
        >
          <div className="w-11/12 md:w-9/12 mx-auto  ">
            <Heading>
              <h1 className="section-title md:text-center">
                Venez pitcher votre experience <br />à l'
                <span className="text-primary">Africa Product Keynote </span>
              </h1>
            </Heading>
            <p className=" md:w-3/6 md:my-8 my-5  mx-auto md:text-center">
              Prêt à faire partie d'une expérience transformative ? Opportunité
              passionnante pour la mise en valeur de votre produit à Africa
              Product Keynote #APK2024 ! Pour comprendre plus en détail le
              contour du projet, suivez
              <Link href={"https://www.figma.com/file/Zx4zyJwDHfPN1FtVO5zZ3k/Africa-Product-Keynote-%23APK-2024-%E2%80%94--Exemple-de-Submission?type=whiteboard&node-id=0-1&t=HJey3qROrjQcPoXe-0"} target="_blank" passHref className="text-primary font-semibold"> ce lien</Link>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-dalay="100"
          className=" w-11/12 md:w-6/12 lg:w-5/12 mx-auto  "
        >
          <div className="bg-white shadow-md -translate-y-20 h-fit  w-full rounded-lg p-3 ">
            {isLoading && (
              <div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="my-3">
                  <div className="h-3 my-3 rounded-lg w-6/12 bg-gray-200 animate-pulse"></div>
                  <div className="h-10 rounded-lg w-full bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            )}

            <iframe
              className={`${
                isLoading ? "opacity-0" : "opacity-100 animate-in fade-in-10"
              } `}
              data-tally-src="https://tally.so/embed/wABq8N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="
Formulaire d’Appel aux Speakers__
"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
