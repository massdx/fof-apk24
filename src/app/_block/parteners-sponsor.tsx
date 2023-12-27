"use client"
import Image from "next/image";
import { parteners } from "@/lib/parteners";
import { sponsors } from "@/lib/sponsors";
import Heading from "@/components/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppRoute } from "@/lib/app-route";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

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
    return <section className="md:w-6/12 w-11/12 lg:w-5/12 mx-auto "  >
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination , Autoplay]}
        className="mySwiper"
      >
         {parteners.map((p, index) => (
          <SwiperSlide key={index} className=" mt-5  mb-14 flex items-center h-full  justify-center">
            <Image
              className="w-auto h-8 md:h-10 mx-auto "
              key={index}
              height={200}
              width={200}
              alt={p.name}
              src={p.url}
              data-aos="zoom-in"
              data-aos-delay={100 * index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    <div className=" items-end scroller__inner  "  >
      
    </div>
    </section>
}


const  Sponsors = () => {
    return <section  data-aos="fade-up"  data-aos-delay="100" id="sponsors" className=" py-14 md:py-20 lg:py-36  bg-[#FDFBFC]  flex items-center ">
        <div className=" sizing mx-auto">
          <Heading>
            <h6  className=" md:text-center section-title " data-aos="fade-up">Ils partagent notre histoire.</h6>
          </Heading>
          <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination , Autoplay]}
        className="mySwipe  my-10  md:my-20 place-items-center  items-center "
      >
         {sponsors.map((p, index) => (
          <SwiperSlide key={index} className=" mb-14   ">
            <Image
              className="w-28 h-28  object-contain mx-auto "
              key={index}
              height={300}
              width={300}
              alt={p.name}
              src={p.url}
              data-aos="zoom-in"
              data-aos-delay={100 * index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
          <div data-aos="fade-up" data-aos-detaly="100" className="flex md:items-center w-full gap-5   mt-10  md:justify-center">
                <Button className="">
                    <Link href={AppRoute.formulaireSponsor} passHref>
                      Devenir sponsor
                    </Link>
                </Button>
            </div>
        </div>
    </section>
}
export {Parteners , Sponsors} ;