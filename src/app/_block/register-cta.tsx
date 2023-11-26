import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterCta = () => {
    return <section className="  flex items-center  py-14 md:py-14  lg:py-32 bg-[url(/assets/img/bg.jpg)] bg-cover bg-right text-white ">
        <div className="w-11/12 md:w-9/12 mx-auto ">
            <div className=" md:w-4/6 lg:w-4/6 mx-auto ">
                <div data-aos="fade-down" className="text-primary uppercase md:text-center font-semibold ">Êtes-vous pret?</div>
                <Heading>
                    <h6 data-aos="fade-up" className="section-title md:text-center">Obtenez un accès anticipé à Africa <span className="text-primary">product</span> keynote</h6>
                </Heading>

                <p data-aos="fade-up" data-aos-delay="100" className="md:text-center my-10  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex, harum saepe totam consequuntur cum voluptatibus earum necessitatibus magnam. Quis, omnis illo molestiae veniam vero hic. Numquam assumenda doloremque magni.
                </p>
            </div>
            <div className="flex md:items-center w-full gap-5 md:flex-row flex-col  mt-10  justify-center">
                <div data-aos="fade-riht" data-aos-delay="300"> 
                 <Button className=" ">
                    <Link href={"https://friends.figma.com/e/mpc4v3/"} target="_blank" passHref>
                        Je reserve ma place
                    </Link>
                </Button>
                </div>
                <div data-aos="fade-left" data-aos-delay="350"> 
                <Button variant={"secondary"} className=" ">
                    <Link href={"#"} passHref>
                        Je suis speaker
                    </Link>
                </Button></div>
            </div>
        </div>
    </section>
}

export default RegisterCta