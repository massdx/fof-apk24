"use client";
import Image from "next/image";
import Links from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon,
} from "lucide-react";
import Heading from "./heading";
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer id="contact" className="bg-gray-100  pt-8  pb-4 ">
      <div className=" w-11/12 md:w-9/12 mx-auto  md:pt-8">
        <div className="sm:flex items-center  sm:items-center sm:justify-between">
          <div data-aos="fade-up" className="flex flex-col   gap-6 w-full">
            <div className="flex flex-wrap  items-end gap-5 md:gap-10 ">
              <div className="flex lg:w-3/6 flex-col gap-4  items-start  sm:mb-0  rtl:space-x-reverse">
                <Heading>
                  <div className="text-3xl font-bold leading-[91.1%] tracking-tighter ">
                    <div>
                      <span> Africa </span>
                    </div>
                    <span className="text-primary"> Product </span>
                    <span> Keynote </span>
                  </div>
                </Heading>
                <div className="">
                  <Heading>
                    <span className="font-semibold text-xl   ">
                      19 au 20 Janvier 2024
                    </span>
                  </Heading>
                  <div>
                    1 ère rencontre autour du produit en Afrique, une initiative
                    de Friends of Figma Lomé, Togo.
                  </div>

                  <div className="flex flex-wrap items-end gap-5 mt-5 ">
                    <Link
                      passHref
                      href={"mailto:foflome@gmail.com"}
                      className=" group hover:text-primary font-semibold text-lg flex gap-2 items-center    "
                    >
                      <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                        <MailIcon className="text-black w-6 h-6 md:h-5 md:w-5 group-hover:text-primary" />
                      </span>
                      <Heading>foflome@gmail.com</Heading>
                    </Link>
                    <Link
                      passHref
                      href={"tel:91844075"}
                      className=" group hover:text-primary font-semibold flex gap-2 items-center "
                    >
                      <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                        <PhoneCallIcon className="text-black w-6 h-6 md:h-5 md:w-5 group-hover:text-primary" />
                      </span>

                      <Heading>+228 91844075 - 97051306</Heading>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-5    gap-5 justify-between items-center">
              <ul className="flex flex-wrap gap-5 self-start items-center mb-6   text-gray-500 sm:mb-0 dark:text-gray-400">
                {Links.map((link, key) => {
                  if (!link.deseable)
                    return (
                      <li key={link.name} className=" ">
                        <Link
                          passHref
                          href={`${link.link}`}
                          key={key}
                          className={` ${
                            pathname == link.link
                              ? "active font-semibold "
                              : "   "
                          }  link`}
                        >
                          <span data-aos-delay={key * 100}>{link.name}</span>
                        </Link>
                      </li>
                    );
                })}
              </ul>
              <div
                className="flex  gap-5 "
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Link
                  href={"https://bento.me/foflome"}
                  target="_blank"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                  passHref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6   text-black hover:text-primary"
                    viewBox="0 0 3476 3174"
                    fill="currentColor"
                  >
                    <path d="M0 1360.33C0 1323.25 7.3865 1286.18 22.1595 1250.55C55.9057 1169.44 145.847 1099.05 325.585 958.278L1224.42 254.968C1404.17 114.19 1494.1 43.8006 1597.66 17.4409C1688.91 -5.73242 1787.09 -5.73242 1878.34 17.4409C1981.9 43.9454 2071.83 114.19 2251.58 254.968L3150.41 958.278C3330.16 1099.05 3420.09 1169.44 3453.85 1250.55C3468.62 1286.18 3476 1323.25 3476 1360.33V1813.66C3476 1850.74 3468.62 1887.81 3453.85 1923.44C3420.09 2004.55 3330.16 2074.94 3150.41 2215.58L2251.58 2919.03C2071.83 3059.8 1981.9 3130.05 1878.34 3156.55C1787.09 3179.73 1688.91 3179.73 1597.66 3156.55C1494.1 3130.05 1404.17 3059.8 1224.42 2919.03L325.585 2215.58C145.847 2075.09 55.9057 2004.55 22.1595 1923.44C7.59643 1888.67 0.065002 1851.36 0 1813.66V1360.33ZM1352.74 891.365L1481.22 991.88C1571.01 1062.12 1615.9 1097.31 1667.9 1110.64C1713.52 1122.22 1762.48 1122.22 1808.1 1110.64C1859.95 1097.31 1904.85 1062.12 1994.93 991.88L2123.26 891.365C2213.05 820.976 2257.95 785.782 2274.89 745.228C2282.23 727.855 2286 709.192 2286 690.337C2286 671.482 2282.23 652.817 2274.89 635.445C2258.09 594.891 2213.05 559.697 2123.26 489.453L1994.78 388.938C1904.99 318.549 1860.1 283.355 1808.1 270.175C1762.09 258.599 1713.91 258.599 1667.9 270.175C1616.05 283.355 1571.15 318.549 1481.07 388.938L1352.74 489.453C1262.95 559.697 1218.05 594.891 1201.11 635.445C1193.77 652.817 1190 671.482 1190 690.337C1190 709.192 1193.77 727.855 1201.11 745.228C1217.91 785.782 1262.95 820.976 1352.74 891.365ZM2208.71 1561.22L2337.17 1661.73C2426.97 1732.12 2472.02 1767.31 2524.02 1780.5C2569.49 1792.08 2618.59 1792.08 2664.22 1780.5C2716.07 1767.31 2760.96 1732.12 2850.76 1661.73L2979.22 1561.22C3069.02 1490.97 3114.07 1455.78 3130.87 1415.23C3138.18 1397.85 3141.96 1379.19 3141.96 1360.33C3141.96 1341.48 3138.18 1322.81 3130.87 1305.44C3114.07 1264.89 3069.16 1229.69 2979.22 1159.3L2850.76 1058.79C2760.96 988.548 2716.07 953.354 2664.22 940.029C2618.15 928.429 2569.92 928.429 2523.87 940.029C2472.02 953.354 2427.12 988.548 2337.17 1058.79L2208.86 1159.3C2118.91 1229.69 2074.01 1264.89 2057.21 1305.44C2049.88 1322.81 2046.11 1341.48 2046.11 1360.33C2046.11 1379.19 2049.88 1397.86 2057.21 1415.23C2074.01 1455.78 2118.91 1490.97 2208.86 1561.22H2208.71ZM496.778 1561.22L1481.22 2331.73C1571.01 2402.12 1615.9 2437.17 1667.9 2450.5C1713.52 2462.08 1762.48 2462.08 1808.1 2450.5C1859.95 2437.17 1904.85 2402.12 1994.93 2331.73L2123.26 2231.22C2213.05 2160.83 2257.95 2125.63 2274.89 2085.08C2282.24 2067.71 2286.01 2049.04 2286.01 2030.19C2286.01 2011.34 2282.24 1992.67 2274.89 1975.29C2258.09 1934.74 2213.05 1899.55 2123.26 1829.3L1138.82 1058.79C1049.03 988.548 1003.98 953.354 951.99 940.029C905.973 928.453 857.807 928.453 811.791 940.029C759.941 953.354 715.042 988.548 625.246 1058.79L496.778 1159.3C406.982 1229.69 361.939 1264.89 345.138 1305.44C337.808 1322.81 334.032 1341.48 334.032 1360.33C334.032 1379.19 337.808 1397.86 345.138 1415.23C361.939 1455.78 406.837 1490.97 496.778 1561.22Z" />
                  </svg>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/friend-of-figma-lom%C3%A9"
                  }
                  target="_blank"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                  passHref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5  text-black hover:text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                  </svg>
                </Link>
                <Link
                  href={"https://friends.figma.com/lome-togo/"}
                  target="_blank"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                  passHref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5  text-black hover:text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </Link>
                <Link
                  href={"https://t.me/fof_lome"}
                  target="_blank"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                  passHref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5  text-black hover:text-primary "
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </Link>
                <Link
                  href={"https://chat.whatsapp.com/GlmwdRlQTJPKY0Hqb7MjBg"}
                  target="_blank"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                  passHref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5  text-black hover:text-primary"
                    viewBox="0 0 16 16"
                  >
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
        <span className="block w-11/12 mx-auto  text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <Link href={"#"} passHref className="hover:underline">
            APK
          </Link>
          . Tous droits reservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
