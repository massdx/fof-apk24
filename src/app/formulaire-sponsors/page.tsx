"use client"
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import Navbar from "@/components/nav-bar";
import Script from "next/script";
import { useState , useEffect} from "react";

export default function FormulaireSponsor() {
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
        <div data-aos="fade-up" className=" bg-[url(/assets/img/bg2.jpg)] bg-[70%] md:bg-right mb-5 bg-cover bg-no-repeat py-20">
          <div className="w-11/12 md:w-9/12 mx-auto  ">
            <Heading>
              <h1 className="section-title md:text-center">
            
                Sponsorisez les événements autour <br />
                du <span className="text-primary">produit en Afrique</span>
              </h1>
            </Heading>
            <p className=" md:w-3/6 md:my-8 my-5  mx-auto md:text-center">
            En tant que leader technologique en Afrique, devenez partenaire stratégique de l'Africa Product Keynote #APK2024. Cette occasion unique positionnera votre entreprise au cœur de l'innovation africaine.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-dalay="100" className=" w-11/12 md:w-10/12 lg:w-5/12 mx-auto  ">
          <div className="bg-white shadow-md -translate-y-20  h-fit w-full rounded-lg p-3 ">
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
              data-tally-src="https://tally.so/embed/3yJq1d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Africa Product Keynote Sponsorship Form __"
            ></iframe>

          
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
