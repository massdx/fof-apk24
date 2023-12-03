"use client"
import Image from "next/image"
import Links from "@/lib/links"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import Heading from "./heading";
const Footer = () => {
    const pathname = usePathname();
    return <footer id="contact" className="bg-gray-100  pt-8  pb-4 ">
        <div className=" w-11/12 md:w-9/12 mx-auto  md:pt-8">
            <div className="sm:flex items-center  sm:items-center sm:justify-between">
                <div className="flex flex-col   gap-6 w-full">
                    <div data-aos="fade-up" className="flex flex-wrap  items-end gap-5 md:gap-10 ">
                        <div className="flex lg:w-2/6 flex-col  items-start mb-4 sm:mb-0  rtl:space-x-reverse">
                            <Heading>
                                <div  className="text-3xl font-bold leading-[91.1%] tracking-tighter ">
                                    <div>
                                        <span> Africa </span>
                                    </div>
                                    <span className="text-primary"> Product </span>
                                    <span> Keynote </span>
                                </div>
                            </Heading>
                            <div className="mt-5">
                          <Heading>
                          <span className="font-semibold text-xl   "> 19 au 20 Janvier 2024</span>
                          </Heading>
                            <div >
                            1 ère rencontre autour du produit en Afrique, une initiative de Friends of Figma Lomé, Togo.
                            </div>
                            </div>
                        </div>
                        <div className="flex items-end flex-wrap gap-5 ">
                            <Link passHref href={""} className="hover:text-primary font-semibold text-lg   md:mx-4 " >
                             <Heading>
                             foflome@gmail.com
                             </Heading>
                            </Link>
                            <Link passHref href={""} className="hover:text-primary font-semibold  " >
                               <Heading>
                               +228 91844075 - 97051306
                               </Heading>
                               
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-5    gap-5 justify-between items-center">
                        <ul data-aos="fade-up"  className="flex flex-wrap gap-5 self-start items-center mb-6   text-gray-500 sm:mb-0 dark:text-gray-400">
                        {Links.map((link, key) => {
                                    if (!link.deseable)
                                        return (
                                            <li key={link.name} className=" ">
                                                <Link
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
                        </ul>
                        <div className="flex  gap-5 " data-aos="fade-right" data-aos-delay="100">
                        <Link href={"https://bento.me/foflome"} target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </Link>
                            <Link href={"https://www.linkedin.com/company/friend-of-figma-lom%C3%A9"} target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                            <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" className="w-5 h-5  text-black hover:text-primary"  viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg>
                            </Link>
                            <Link href={"https://friends.figma.com/lome-togo/"} target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </Link>
                            <Link href={"https://t.me/fof_lome"} target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary " viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                            </Link>
                            <Link href={"https://chat.whatsapp.com/GlmwdRlQTJPKY0Hqb7MjBg"} target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div className="">
            <hr className="my-6 border-gray-300 sm:mx-auto lg:mt-4" />
            <span className="block w-11/12 mx-auto  text-gray-500 text-center dark:text-gray-400">© 2023 <Link href={"#"} passHref className="hover:underline">APK</Link>. Tous droit reservés.</span>
        </div>
    </footer>
}

export default Footer;