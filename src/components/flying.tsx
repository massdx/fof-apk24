import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Heading from "./heading";
import { useLenis } from "@studio-freight/react-lenis";

export function Flying() {
    const dateDepartStr = "2024-01-19T07:59:59";
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const isScrolling = () => {
      setScrolled(window.scrollY > 400 ? true : false);
    };
    const lenisInstance = useLenis();

    const [joursRestants, setJoursRestants] = useState(0);
    const toggleNavBar = () => {
        setToggle(!toggle);
      };

      function scrollTo({ target }: { target: string }) {
        if (lenisInstance) {
          lenisInstance.scrollTo(target);
        }
      }
    useEffect(() => {
        const dateDepart: any = new Date(dateDepartStr);
        const dateActuelle: any = new Date();
        const difference = dateDepart - dateActuelle;
        const joursRestants = Math.ceil(difference / (1000 * 60 * 60 * 24)); // Convertir la différence en jours
        setJoursRestants(joursRestants);

        window.addEventListener("scroll", isScrolling);
    }, []);


    return scrolled &&  <section onDragStart={toggleNavBar}   data-aos="fade-up" className={` ${toggle && "hidden"} bottom-0 md:bottom-3 border-lg px-4 py-3 md:rounded-lg  backdrop-blur-sm shadow-lg  w-12/12 lg:w-[35rem] bg-black/80 text-white mx-auto z-50 fixed  left-0 right-0`}>
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-5  ">
            <span onClick={toggleNavBar} className="w-10 h-1 cursor-pointer rounded-full absolute top-2  left-0 right-0 mx-auto bg-gray-600"></span>
        <Heading>
              <h1 className="text-2xl font-bold leading-[91.1%] tracking-tighter ">
                <div className="text-left">
                  <span> Africa </span>
                </div>
                <div className="flex items-center">
                  <div className={` text-primary pr-1`}>Product</div>
                  <div>Keynote</div>
                </div>
              </h1>
            </Heading>
           <div className="animate-jump animate-once animate-duration-500 animate-ease-in-out animate-delay-200">
           <Button onClick={() => scrollTo({target: "#programme"})}  data-aos="fade-up" data-aos-delay="100">
              Le progamme 😎
          </Button>
           </div>
          

        </div>
    </section>


}