"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import Links from "@/lib/links";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { AppRoute } from "@/lib/app-route";
const Navbar = () => {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const isScrolling = () => {
        setIsSticky(window.scrollY > 100 ? true : false);
        if (isMobile && toggle) {
            setToggle(false);
        }
    };

    const toggleNavBar = () => {
        setToggle(!toggle);
    };

    const checkMobileOrTablet = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 1300);
    };

    useEffect(() => {
        checkMobileOrTablet();
        window.addEventListener("scroll", isScrolling);
        window.addEventListener("load", isScrolling);

        return () => {
            window.removeEventListener("scroll", isScrolling);
            window.removeEventListener("load", isScrolling);
        };
    }, []);
    return (
        
            <nav className="animate-in fade-in-10  ">
                <div
                    className={` ${isSticky ? "bg-white/70 backdrop-blur-lg  border-gray-200 " : "border-transparent"} ${toggle
                            ? "h-screen bg-white/80 backdrop-blur-lg  duration-300 transition-all  "
                            : "h-[4.5rem] duration-300 transition-all "
                        }  ${isMobile ? "fixed top-0  block" : "hidden "
                        } overflow-hidden   w-full   z-50 duration-300 border-b`}
                >
                    <div className="w-11/12 mx-auto ">
                        <div className="flex flex-row justify-between items-center  p-4">
                            <Image
                                className="-ml-5"
                                src="/assets/apk.svg"
                                width={45}
                                height={45}
                                alt="APK 2024"
                            />
                            <button
                                data-aos="fade-right"
                                className={`  px-2 py-1 bg-primary rounded-lg shadow-lg`}
                                onClick={toggleNavBar}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className="flex gap-10 h-screen flex-col  items-start justify-start mt-10 ">
                                {Links.map((link, key) => {
                                    if (!link.deseable)
                                        return (
                                            <li key={link.name} className=" ">
                                                <Link
                                                    onClick={() => toggleNavBar()}
                                                    passHref
                                                    href={`${link.link}`}
                                                    key={key}
                                                    className={` ${pathname == link.link
                                                            ? "active font-semibold "
                                                            : "   "
                                                        }  link`}
                                                >
                                                    <span data-aos="fade-up" data-aos-delay={key * 100}>
                                                        {link.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                })}
                                <li>
                                <Button>
                                <Link href={`${AppRoute.inscription}`} passHref>
                                    S'inscrire
                                </Link>
                            </Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div
                    className={` ${isSticky ? "bg-white/80 backdrop-blur-lg  py-1  border-gray-200 " : "border-transparent"}   ${isMobile ? "hidden" : "fixed block top-0"
                        }   h-fit w-full  z-50 duration-300 border-b `}
                >
                    <div className="flex h-20 w-10/12 mx-auto items-center  justify-between z-20 ">
                        <div className="flex items-center justify-center gap-10">
                            <Image
                                className="-ml-5"
                                src="/assets/apk.svg"
                                width={50}
                                height={50}
                                alt="APK 2024"
                            />
                            <ul className="flex gap-8 ">
                                {Links.map((link, key) => {
                                    if (!link.deseable)
                                        return (
                                            <li key={link.name} className=" ">
                                                <Link
                                                    onClick={() => toggleNavBar()}
                                                    passHref
                                                    href={`${link.link}`}
                                                    key={key}
                                                    className={` ${pathname == link.link
                                                            ? "active font-semibold "
                                                            : "   p-2"
                                                        }  link`}
                                                >
                                                    <span data-aos="fade-up" data-aos-delay={key * 100}>
                                                        {link.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                })}
                            </ul>
                        </div>
                        <div className="text-white   w-fit">
                            <Button>
                                <Link href={`${AppRoute.inscription}`} passHref>
                                    S'inscrire
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;
