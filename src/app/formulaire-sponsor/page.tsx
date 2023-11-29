import Heading from "@/components/heading";
import Navbar from "@/components/nav-bar";

export default function FormulaireSponsor() {
    return <>
        <Navbar />
        <section className="lg:min-h-screen  md:py-20 ld:py-0 ">
            <div className=" bg-[url(/assets/img/bg2.jpg)] bg-right mb-5 bg-cover bg-no-repeat py-20">
                <Heading>
                    <h1 className="section-title md:text-center"> Sponsorsez  le évenement autour  <br />du <span className="text-primary">produit en Afrique</span></h1>
                </Heading>
                <p className=" md:w-2/6 md:my-8 my-5  mx-auto md:text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat veritatis nobis officia eveniet,</p>
            </div>
            <div className=" w-11/12 md:w-6/12 lg:w-5/12 mx-auto  ">
                <div className="bg-white shadow-lg -translate-y-20 h-screen w-full rounded-lg p-3 ">
                    <Heading>
                        <h2 className="text-lg font-semibold">Formualire ici !</h2>
                    </Heading>
                </div>
            </div>
        </section>

    </>
}