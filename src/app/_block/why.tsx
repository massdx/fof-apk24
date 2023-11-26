import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhyCard from "@/components/why-card";
import Link from "next/link";

const Why = () => {
    return <section className="  bg-[#FDFBFC]    md:min-h-screen flex items-center">
        <div className="md:w-9/12 w-11/12 mx-auto">
            <Heading>
                <h3  data-aos="fade-up"   className="section-title  mx-auto md:text-center my-14">Pour quoi <span className="text-blue-500">ne pas rater </span> <br /> cet evenement ?</h3>
            </Heading>
            <div className="  mx-auto  gap-10 place-items-center flex  flex-wrap  md:grid md:grid-cols-3 lg:grid-cols-4 ">
                <WhyCard delay={100} title="  Expertise des intervenants" description=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100  100" fill="none" className=" w-16 h-16 md:w-24 md:h-24">
                        <path d="M68.1878 72.0375L69.6664 74.9947C69.868 75.4064 70.4057 75.8012 70.8594 75.8768L73.5394 76.3221C75.2532 76.6078 75.6565 77.8511 74.4215 79.0777L72.338 81.1612C71.9852 81.5141 71.7919 82.1946 71.9011 82.6819L72.4976 85.2611C72.9681 87.3026 71.8843 88.0923 70.0781 87.0253L67.5661 85.5383C67.1124 85.2695 66.3647 85.2695 65.9026 85.5383L63.3907 87.0253C61.5928 88.0923 60.5006 87.2942 60.9711 85.2611L61.5676 82.6819C61.6768 82.1946 61.4836 81.5141 61.1307 81.1612L59.0472 79.0777C57.8206 77.8511 58.2155 76.6078 59.9293 76.3221L62.6093 75.8768C63.0546 75.8012 63.5923 75.4064 63.7939 74.9947L65.2725 72.0375C66.0791 70.4328 67.3897 70.4328 68.1878 72.0375Z" stroke="#FF5A5A" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M50.6668 45.2923C50.2502 45.2506 49.7502 45.2506 49.2918 45.2923C39.3752 44.959 31.5002 36.834 31.5002 26.834C31.4585 16.6257 39.7502 8.33398 49.9585 8.33398C60.1668 8.33398 68.4585 16.6257 68.4585 26.834C68.4585 36.834 60.5418 44.959 50.6668 45.2923Z" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.957 90.8753C42.3737 90.8753 34.832 88.9587 29.082 85.1253C18.9987 78.3753 18.9987 67.3753 29.082 60.667C40.5404 53.0003 59.332 53.0003 70.7904 60.667" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </WhyCard>
                <WhyCard delay={200} title="  Expertise des intervenants" description=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100   100" fill="none" className="w-16 h-16 md:w-24 md:h-24">
                        <path d="M68.1878 72.0375L69.6664 74.9947C69.868 75.4064 70.4057 75.8012 70.8594 75.8768L73.5394 76.3221C75.2532 76.6078 75.6565 77.8511 74.4215 79.0777L72.338 81.1612C71.9852 81.5141 71.7919 82.1946 71.9011 82.6819L72.4976 85.2611C72.9681 87.3026 71.8843 88.0923 70.0781 87.0253L67.5661 85.5383C67.1124 85.2695 66.3647 85.2695 65.9026 85.5383L63.3907 87.0253C61.5928 88.0923 60.5006 87.2942 60.9711 85.2611L61.5676 82.6819C61.6768 82.1946 61.4836 81.5141 61.1307 81.1612L59.0472 79.0777C57.8206 77.8511 58.2155 76.6078 59.9293 76.3221L62.6093 75.8768C63.0546 75.8012 63.5923 75.4064 63.7939 74.9947L65.2725 72.0375C66.0791 70.4328 67.3897 70.4328 68.1878 72.0375Z" stroke="#FF5A5A" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M50.6668 45.2923C50.2502 45.2506 49.7502 45.2506 49.2918 45.2923C39.3752 44.959 31.5002 36.834 31.5002 26.834C31.4585 16.6257 39.7502 8.33398 49.9585 8.33398C60.1668 8.33398 68.4585 16.6257 68.4585 26.834C68.4585 36.834 60.5418 44.959 50.6668 45.2923Z" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.957 90.8753C42.3737 90.8753 34.832 88.9587 29.082 85.1253C18.9987 78.3753 18.9987 67.3753 29.082 60.667C40.5404 53.0003 59.332 53.0003 70.7904 60.667" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </WhyCard>
                <WhyCard delay={300} title="  Expertise des intervenants" description=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100    100" fill="none" className="w-16 h-16 md:w-24 md:h-24">
                        <path d="M68.1878 72.0375L69.6664 74.9947C69.868 75.4064 70.4057 75.8012 70.8594 75.8768L73.5394 76.3221C75.2532 76.6078 75.6565 77.8511 74.4215 79.0777L72.338 81.1612C71.9852 81.5141 71.7919 82.1946 71.9011 82.6819L72.4976 85.2611C72.9681 87.3026 71.8843 88.0923 70.0781 87.0253L67.5661 85.5383C67.1124 85.2695 66.3647 85.2695 65.9026 85.5383L63.3907 87.0253C61.5928 88.0923 60.5006 87.2942 60.9711 85.2611L61.5676 82.6819C61.6768 82.1946 61.4836 81.5141 61.1307 81.1612L59.0472 79.0777C57.8206 77.8511 58.2155 76.6078 59.9293 76.3221L62.6093 75.8768C63.0546 75.8012 63.5923 75.4064 63.7939 74.9947L65.2725 72.0375C66.0791 70.4328 67.3897 70.4328 68.1878 72.0375Z" stroke="#FF5A5A" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M50.6668 45.2923C50.2502 45.2506 49.7502 45.2506 49.2918 45.2923C39.3752 44.959 31.5002 36.834 31.5002 26.834C31.4585 16.6257 39.7502 8.33398 49.9585 8.33398C60.1668 8.33398 68.4585 16.6257 68.4585 26.834C68.4585 36.834 60.5418 44.959 50.6668 45.2923Z" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.957 90.8753C42.3737 90.8753 34.832 88.9587 29.082 85.1253C18.9987 78.3753 18.9987 67.3753 29.082 60.667C40.5404 53.0003 59.332 53.0003 70.7904 60.667" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </WhyCard>
                <WhyCard delay={400} title="  Expertise des intervenants" description=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100   100" fill="none" className="w-16 h-16 md:w-24 md:h-24">
                        <path d="M68.1878 72.0375L69.6664 74.9947C69.868 75.4064 70.4057 75.8012 70.8594 75.8768L73.5394 76.3221C75.2532 76.6078 75.6565 77.8511 74.4215 79.0777L72.338 81.1612C71.9852 81.5141 71.7919 82.1946 71.9011 82.6819L72.4976 85.2611C72.9681 87.3026 71.8843 88.0923 70.0781 87.0253L67.5661 85.5383C67.1124 85.2695 66.3647 85.2695 65.9026 85.5383L63.3907 87.0253C61.5928 88.0923 60.5006 87.2942 60.9711 85.2611L61.5676 82.6819C61.6768 82.1946 61.4836 81.5141 61.1307 81.1612L59.0472 79.0777C57.8206 77.8511 58.2155 76.6078 59.9293 76.3221L62.6093 75.8768C63.0546 75.8012 63.5923 75.4064 63.7939 74.9947L65.2725 72.0375C66.0791 70.4328 67.3897 70.4328 68.1878 72.0375Z" stroke="#FF5A5A" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M50.6668 45.2923C50.2502 45.2506 49.7502 45.2506 49.2918 45.2923C39.3752 44.959 31.5002 36.834 31.5002 26.834C31.4585 16.6257 39.7502 8.33398 49.9585 8.33398C60.1668 8.33398 68.4585 16.6257 68.4585 26.834C68.4585 36.834 60.5418 44.959 50.6668 45.2923Z" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.957 90.8753C42.3737 90.8753 34.832 88.9587 29.082 85.1253C18.9987 78.3753 18.9987 67.3753 29.082 60.667C40.5404 53.0003 59.332 53.0003 70.7904 60.667" stroke="#FF5A5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </WhyCard>

            </div>
            <div  data-aos="fade-up"  data-aos-delay="400" className="flex items-center w-full   mt-10  justify-center">
                <Button className=" ">
                    <Link href={"#"} passHref>
                        s'inscrire maintenant
                    </Link>
                </Button>

            </div>
        </div>
    </section>
}

export default Why;