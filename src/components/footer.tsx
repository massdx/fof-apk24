"use client"
import Image from "next/image"
import Links from "@/lib/links"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import Heading from "./heading";
const Footer = () => {
    const pathname = usePathname();
    return <footer className="bg-gray-100  pt-8  pb-4 ">
        <div className=" w-11/12 md:w-9/12 mx-auto  md:py-4">
            <div className="sm:flex items-center  sm:items-center sm:justify-between">
                <div className="flex flex-col  gap-6 w-full">
                    <div className="flex flex-wrap  items-end gap-10 ">
                        <Link href={"#"} passHref className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Heading>
                                <div data-aos="fade-up" className="text-3xl font-bold leading-[91.1%] tracking-tighter ">
                                    <div>
                                        <span> Africa </span>
                                    </div>
                                    <span className="text-primary"> Product </span>
                                    <span> Keynote </span>
                                </div>
                            </Heading>
                        </Link>
                        <div data-aos="fade-up"  >
                            <Link passHref href={""} className="hover:text-primary  mx-4 " >
                                foflome@gmail.com
                            </Link>
                            <Link passHref href={""} className="hover:text-primary  mx-4 " >
                                +228 91844075 / 97051306
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <ul className="flex flex-wrap items-center mb-6 text-sm  text-gray-500 sm:mb-0 dark:text-gray-400">
                            {Links.map((l, index) => <li key={index}>
                                <Link data-aos="fade-left" href={l.link} passHref className={` ${pathname == l.link
                                    ? "active font-semibold "
                                    : "   p-2"
                                    }  link  me-4 md:me-6`} >{l.name}</Link>
                            </li>)}
                        </ul>
                        <div className="flex  gap-5 " data-aos="fade-right" data-aos-delay="100">
                            <Link href={"https://www.linkedin.com/company/friend-of-figma-lom%C3%A9"} className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                                    <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z" /></svg>
                            </Link>
                            <Link href={"https://friends.figma.com/lome-togo/"} className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </Link>
                            <Link href={"https://t.me/fof_lome"} className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary " viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                            </Link>
                            <Link href={"https://chat.whatsapp.com/GlmwdRlQTJPKY0Hqb7MjBg"} className="bg-white rounded-full w-10 h-10 flex items-center justify-center" passHref>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5  text-black hover:text-primary" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div className=" ">
            <hr className="my-6 border-gray-300 sm:mx-auto lg:mt-4" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href={"#"} passHref className="hover:underline">APK</Link>. Tous droit reservés.</span>
        </div>
    </footer>
}

export default Footer;