"use client"
import Image from "next/image";
import { parteners } from "@/lib/parteners";
import { sponsors } from "@/lib/sponsors";
import Heading from "@/components/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppRoute } from "@/lib/app-route";
import { useEffect } from "react";
const  Parteners = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", "true");

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = scrollerInner ? Array.from(scrollerInner.children) : [];

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner?.appendChild(duplicatedItem);
    });
  });
}

    },[])
    return <div className="scroller " data-speed="very-low">
    <div className=" items-end scroller__inner  "  >
        {parteners.map((p, index ) => <Image className="w-32 h-auto " key={index} height={100} width={100} alt="" src={p.url} data-aos="zoom-in"  data-aos-delay={100 * index }/> )}
        {parteners.map((p, index ) => <Image className="w-32 h-auto " key={index} height={100} width={100} alt="" src={p.url} data-aos="zoom-in"  data-aos-delay={100 * index }/> )}
    </div>
    </div>
}


const  Sponsors = () => {
    return <section  data-aos="fade-up"  data-aos-delay="100" id="sponsors" className=" py-20 lg:min-h-screen bg-[#FDFBFC]  flex items-center ">
        <div className=" sizing mx-auto">
          <Heading>
            <h6  className=" md:text-center section-title " data-aos="fade-up">Les <span className="text-yellow-500 ">sponsors</span> <br/> du africa product keynote</h6>
          </Heading>
          <div data-aos="fade-in" className="grid grid-cols-5 my-10 place-items-center  md:my-20 ">
          {sponsors.map((s, index ) => <Image className=" md:w-32 h-auto object-contain" key={index} height={100} width={100} alt={s.name} src={s.url}  data-aos="zoom-in"  data-aos-delay={100 * index }/> )}
          </div>
          <div data-aos="fade-up" data-aos-detaly="100" className="flex md:items-center w-full gap-5   mt-10  md:justify-center">
                <Button className="bg-yellow-500 ">
                    <Link href={AppRoute.formualireSponsor} passHref>
                      Devenir sponsor
                    </Link>
                </Button>
            </div>
        </div>
    </section>
}
export {Parteners , Sponsors} ;