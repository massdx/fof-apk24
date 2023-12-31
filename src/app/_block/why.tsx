import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import WhyCard from "@/components/why-card";
import Link from "next/link";

const Why = () => {
  return (
    <section className="  bg-[#FDFBFC]    md:min-h-screen flex items-center">
      <div className="media-size">
        <Heading>
          <h3
            data-aos="fade-up"
            className="section-title  mx-auto md:text-center mb-5 my-14"
          >
            Pourquoi <span className="">ne pas rater </span> <br /> cet{" "}
            <span className=""> évènement</span> ?
          </h3>
        </Heading>
        <p   data-aos="fade-up" className="md:text-center md:text-lg  mb-14 ">
          Les{" "}
          <span className="font-medium text-primary ">
            4+1 principales raisons{" "}
          </span>
          pour lesquelles votre entreprise et vous deviez participer à{" "}
          <span className="font-semibold text-primary">#APK2024</span>
        </p>
        <div className="  mx-auto  gap-10 items-stretch place-items-center flex  flex-wrap  md:grid md:grid-cols-2 lg:grid-cols-4 ">
          <WhyCard
            delay={100}
            title="Favoriser le changement"
            description="Rencontrez les leaders de l'industrie à Africa Product Keynote pour nouer des liens significatifs."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0  100  100"
              fill="none"
              className=" w-16 h-16 md:w-24 md:h-24"
            >
              <path
                d="M68.1878 72.0375L69.6664 74.9947C69.868 75.4064 70.4057 75.8012 70.8594 75.8768L73.5394 76.3221C75.2532 76.6078 75.6565 77.8511 74.4215 79.0777L72.338 81.1612C71.9852 81.5141 71.7919 82.1946 71.9011 82.6819L72.4976 85.2611C72.9681 87.3026 71.8843 88.0923 70.0781 87.0253L67.5661 85.5383C67.1124 85.2695 66.3647 85.2695 65.9026 85.5383L63.3907 87.0253C61.5928 88.0923 60.5006 87.2942 60.9711 85.2611L61.5676 82.6819C61.6768 82.1946 61.4836 81.5141 61.1307 81.1612L59.0472 79.0777C57.8206 77.8511 58.2155 76.6078 59.9293 76.3221L62.6093 75.8768C63.0546 75.8012 63.5923 75.4064 63.7939 74.9947L65.2725 72.0375C66.0791 70.4328 67.3897 70.4328 68.1878 72.0375Z"
                stroke="#FF5A5A"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50.6668 45.2923C50.2502 45.2506 49.7502 45.2506 49.2918 45.2923C39.3752 44.959 31.5002 36.834 31.5002 26.834C31.4585 16.6257 39.7502 8.33398 49.9585 8.33398C60.1668 8.33398 68.4585 16.6257 68.4585 26.834C68.4585 36.834 60.5418 44.959 50.6668 45.2923Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M49.957 90.8753C42.3737 90.8753 34.832 88.9587 29.082 85.1253C18.9987 78.3753 18.9987 67.3753 29.082 60.667C40.5404 53.0003 59.332 53.0003 70.7904 60.667"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </WhyCard>
          <WhyCard
            delay={200}
            title="Être avant-gardiste"
            description="Plongez dans l'avenir de la gestion des produits et obtenez un avantage concurrentiel en comprenant desormais les tendances de demain."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              className="w-16 h-16 md:w-24 md:h-24"
            >
              <path
                d="M84.2208 19.5146C83.756 16.8946 82.7515 14.3998 81.2712 12.1887C79.7908 9.97759 77.867 8.09839 75.6217 6.6704C73.3764 5.24241 70.8587 4.29682 68.2286 3.89366C65.5984 3.49051 62.9131 3.63858 60.3431 4.32849C57.7732 5.0184 55.3748 6.23508 53.3001 7.90129C51.2255 9.5675 49.5199 11.6468 48.2917 14.0073C47.0634 16.3678 46.3393 18.9579 46.1654 21.6131C45.9914 24.2683 46.3714 26.9307 47.2813 29.4312L41.5437 40.0562L40.6938 41.5437L27.3417 65.8042C26.6238 67.0514 26.4073 68.525 26.7362 69.926C27.065 71.327 27.9146 72.5504 29.1125 73.3479L29.5729 73.6312L27.2708 75.3667L26.6333 75.8271C24.7208 77.2437 23.4458 78.0937 21.7458 77.8458C20.907 77.669 20.1329 77.2649 19.5083 76.6777C18.8837 76.0906 18.4325 75.343 18.2042 74.5167C17.2028 71.0682 16.7721 67.4792 16.9292 63.8917V63.75C16.9996 62.509 16.7876 61.2682 16.3091 60.121C15.8306 58.9738 15.0981 57.9502 14.1667 57.1271C13.0472 56.4302 11.7901 55.984 10.4818 55.8189C9.17352 55.6538 7.84501 55.7739 6.5875 56.1708C5.71368 56.358 4.82455 56.4647 3.93125 56.4896C3.93125 56.2417 3.4 54.6479 6.90625 46.8208C7.01896 46.607 7.08668 46.3723 7.10524 46.1313C7.12381 45.8902 7.09282 45.6479 7.0142 45.4193C6.93558 45.1907 6.81099 44.9807 6.6481 44.802C6.48521 44.6234 6.28747 44.48 6.06706 44.3807C5.84666 44.2814 5.60825 44.2283 5.36654 44.2246C5.12482 44.221 4.88491 44.2668 4.66159 44.3594C4.43827 44.4519 4.23627 44.5892 4.06803 44.7628C3.89978 44.9364 3.76887 45.1426 3.68334 45.3687C0.389588 53.125 -0.283329 56.6667 1.275 58.6146C2.83334 60.5625 5.17084 60.0312 7.33125 59.6771C9.49167 59.3229 11.0854 59.0396 12.0771 59.8542C12.9479 60.9569 13.3658 62.35 13.2458 63.75V64.175C13.0896 68.1147 13.5924 72.0529 14.7333 75.8271C15.1736 77.2871 16.0201 78.5919 17.174 79.5889C18.3279 80.586 19.7415 81.2344 21.25 81.4583H22.3125C24.6994 81.2857 26.9582 80.3123 28.7229 78.6958L29.325 78.2354C30.4583 77.4208 31.5208 76.5708 32.6188 75.7208C33.8394 76.5279 35.3223 76.8381 36.7641 76.5879C38.2059 76.3378 39.4976 75.5461 40.375 74.375L57.7292 52.6292L58.8625 51.2479L66.3 41.9333C69.1732 41.8058 71.9815 41.0366 74.5187 39.6822C77.0559 38.3278 79.2577 36.4226 80.9625 34.1062C82.4398 32.0085 83.4882 29.6395 84.0474 27.1355C84.6065 24.6314 84.6655 22.0415 84.2208 19.5146ZM37.5771 72.3562C37.2584 72.7877 36.7836 73.0774 36.2542 73.1635C35.7247 73.2495 35.1826 73.125 34.7438 72.8167L31.2021 70.3729C30.7561 70.0697 30.4422 69.6083 30.3238 69.0821C30.2054 68.556 30.2915 68.0046 30.5646 67.5396L43.1729 44.5187C44.7782 46.0308 46.508 47.4051 48.3437 48.6271C50.1932 49.8403 52.1353 50.9061 54.1521 51.8146L37.5771 72.3562ZM56.3125 48.9458C54.1684 48.0629 52.1162 46.9716 50.1854 45.6875C48.2594 44.4075 46.4676 42.9362 44.8375 41.2958L49.5833 32.7958C52.9785 36.8116 57.433 39.7935 62.4396 41.4021L56.3125 48.9458ZM78.4833 31.5917C78.3662 31.8003 78.236 32.0014 78.0937 32.1937C76.6512 34.1517 74.7751 35.7492 72.6124 36.8613C70.4496 37.9734 68.0588 38.5699 65.6271 38.6042C59.6071 37.3099 54.3032 33.7781 50.7875 28.7229C49.8401 26.3571 49.4805 23.7969 49.7396 21.2617C49.9987 18.7265 50.8687 16.2919 52.275 14.1667C54.8791 18.9949 58.6851 23.0693 63.325 25.9958C67.8097 29.1447 73.0305 31.0842 78.4833 31.6271V31.5917ZM80.1479 28.05C74.7991 27.892 69.6243 26.1135 65.3083 22.95C60.7204 20.1673 57.0885 16.0536 54.8958 11.1562C57.4962 8.82962 60.7952 7.43173 64.2756 7.18176C67.756 6.93179 71.2209 7.84387 74.1271 9.77499C75.8767 10.9701 77.3635 12.5103 78.4963 14.3008C79.6291 16.0914 80.384 18.0946 80.7146 20.1875C81.2007 22.8372 81.0057 25.5671 80.1479 28.1208V28.05Z"
                fill="#FF5A5A"
              />
            </svg>
          </WhyCard>
          <WhyCard
            delay={300}
            title="Se connecter et stimuler le secteur"
            description="Unissez-vous à des pionniers de tous les secteurs à Africa Product Keynote"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0  100   100"
              fill="none"
              className="w-16 h-16 md:w-24 md:h-24"
            >
              <path
                d="M40.6908 24.8188C40.9885 29.3535 39.7523 33.2935 38.3887 36.186L35.3591 42.6125L34.5913 35.5493C34.0019 30.1268 32.3671 27.2106 30.993 25.6638C30.2993 24.8829 29.642 24.4163 29.1545 24.143C28.9094 24.0055 28.705 23.9158 28.558 23.8597C28.5334 23.8503 28.5106 23.8419 28.4894 23.8344C29.4529 25.3525 29.6295 27.1539 29.4375 28.8794C29.2362 30.6896 28.6089 32.6304 27.7662 34.5469C26.0782 38.3856 23.3646 42.4853 20.667 45.8823M40.6908 24.8188L17.1373 47.3909M40.6908 24.8188C40.2485 18.0162 36.5736 11.744 30.1733 6.12412C30.9697 6.38723 33.1494 7.15364 36.0563 8.56236C39.758 10.3563 44.576 13.1619 49.1794 17.237C58.3293 25.3367 66.6767 38.4639 63.6776 58.9668L62.7507 65.3033L67.119 60.6205C69.914 57.6243 72.6943 52.1547 72.0981 42.733C72.7636 44.0098 75.2068 49.0535 76.0717 55.8246C77.0707 63.6458 75.9652 73.6985 67.6092 83.0371C61.1749 90.2187 52.282 94.3139 43.2335 94.3139C40.8454 94.3139 38.4494 94.0086 36.1188 93.4305L36.1172 93.4301C29.7149 91.8475 24.239 88.368 19.7896 83.0188M40.6908 24.8188L18.2335 84.2755M20.667 45.8823C20.6663 45.8831 20.6656 45.8839 20.665 45.8847L19.0989 44.6409L20.6686 45.8802C20.6681 45.8809 20.6675 45.8816 20.667 45.8823ZM20.667 45.8823C20.1078 46.5906 19.4351 47.4784 18.8431 48.4351M18.8431 48.4351C18.8447 48.4325 18.8462 48.4299 18.8478 48.4274L17.1373 47.3909M18.8431 48.4351C18.8416 48.4375 18.84 48.44 18.8385 48.4425L17.1373 47.3909M18.8431 48.4351C13.1315 57.8655 13.3704 66.4584 15.0256 72.7368C16.6485 78.893 19.6412 82.8257 19.7896 83.0188M17.1373 47.3909C5.04115 67.3524 18.0796 84.0832 18.2335 84.2755M19.7896 83.0188C19.7838 83.0118 19.7779 83.0047 19.772 82.9977L18.2335 84.2755M19.7896 83.0188C19.7915 83.0213 19.7929 83.0231 19.7939 83.0244C19.7952 83.026 19.7956 83.0266 19.7952 83.0261L18.2335 84.2755"
                stroke="#FF5A5A"
                strokeWidth="4"
              />
            </svg>
          </WhyCard>
          <WhyCard
            delay={400}
            title="Ecouter, vivre et partager des histoires"
            description="Laissez-vous inspirer par les réussites concrètes de Africa Product Keynote."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0  100   100"
              fill="none"
              className="w-16 h-16 md:w-24 md:h-24"
            >
              <path
                d="M50 62.5C56.9036 62.5 62.5 56.9036 62.5 50C62.5 43.0964 56.9036 37.5 50 37.5C43.0964 37.5 37.5 43.0964 37.5 50C37.5 56.9036 43.0964 62.5 50 62.5Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M82.3333 25.6667C86.9357 25.6667 90.6667 21.9357 90.6667 17.3333C90.6667 12.731 86.9357 9 82.3333 9C77.731 9 74 12.731 74 17.3333C74 21.9357 77.731 25.6667 82.3333 25.6667Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M77.0833 85.4167C81.6857 85.4167 85.4167 81.6857 85.4167 77.0833C85.4167 72.481 81.6857 68.75 77.0833 68.75C72.481 68.75 68.75 72.481 68.75 77.0833C68.75 81.6857 72.481 85.4167 77.0833 85.4167Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M24.9173 83.4167C29.5197 83.4167 33.2507 79.6857 33.2507 75.0833C33.2507 70.481 29.5197 66.75 24.9173 66.75C20.3149 66.75 16.584 70.481 16.584 75.0833C16.584 79.6857 20.3149 83.4167 24.9173 83.4167Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M22.9173 31.2497C27.5197 31.2497 31.2507 27.5187 31.2507 22.9163C31.2507 18.314 27.5197 14.583 22.9173 14.583C18.3149 14.583 14.584 18.314 14.584 22.9163C14.584 27.5187 18.3149 31.2497 22.9173 31.2497Z"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M58.834 58.833L71.2507 71.2497"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M28.75 28.75L41.1667 41.1667"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M59 41L77 22"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M30 70L41 59"
                stroke="#FF5A5A"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </WhyCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex items-center w-full   mt-10  md:justify-center"
        >
          <Button className=" ">
            <Link href={"https://friends.figma.com/events/details/figma-lome-togo-presents-africans-product-keynotes/"} target="_blank" passHref>
              S'inscrire maintenant
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Why;
