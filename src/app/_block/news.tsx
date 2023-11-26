import { Button } from "@/components/ui/button";
import Link from "next/link";
const News = ( ) => {
    return <section className="  flex items-center min-h-screen ">
        <div className="w-11/12 md:w-9/12 mx-auto ">
           <div className="w-4/6 mx-auto ">
           <span className="text-primary uppercase">Êtes-vous pret?</span>
            <h6 className="section-title md:text-center">Obtenez un accès anticipé à Africa product keynote</h6>
            <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex, harum saepe totam consequuntur cum voluptatibus earum necessitatibus magnam. Quis, omnis illo molestiae veniam vero hic. Numquam assumenda doloremque magni.
            </p>
           </div>
           <div className="flex items-center w-full gap-5   mt-10  justify-center">
                <Button className=" ">
                    <Link href={"#"} passHref>
                     Tous le programme
                    </Link>
                </Button>
                <Button variant={"secondary"} className=" ">
                    <Link href={"#"} passHref>
                   Soummetre un panel
                    </Link>
                </Button>

            </div>
        </div>
    </section>
}

export default News ; 