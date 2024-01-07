import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { AppRoute } from "@/lib/app-route";
import Link from "next/link";

const RegisterCta = () => {
  return (
    <section id="inscription" className="  flex items-center  py-14 md:py-20 lg:py-36 bg-[url(/assets/img/bg.jpg)] bg-cover bg-right text-white ">
      <div  data-aos="fade-up"  data-aos-delay="100" className="media-size">
        <div className="max-w-4xl mx-auto ">
          <div
            data-aos="fade-down"
            className="text-primary uppercase md:text-center font-semibold "
          >
            Êtes-vous pret?
          </div>
          <Heading>
            <h6
           
              className="section-title md:text-center mt-2"
            >
              Obtenez un accès anticipé à Africa{" "}
              <span className="text-primary">product</span> keynote
            </h6>
          </Heading>

          <p
          
            className="md:text-center my-5 md:my-10 max-w-2xl mx-auto "
          >
            Apprendre du produit sur le produit et pour le produit en
            participant à la grande  fête autour du Produit en Afrique.
          </p>
        </div>
        <div className="flex flex-wrap md:items-center w-full gap-5 flex-row  mt-10  md:justify-center">
          <Button className=" ">
            <Link
              href={"https://friends.figma.com/e/mpc4v3/"}
              target="_blank"
              passHref
            >
              Je reserve ma place
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterCta;
