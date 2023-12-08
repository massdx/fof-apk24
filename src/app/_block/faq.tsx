import Heading from "@/components/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Parser } from "html-to-react";
import React from "react";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      question: "Pourquoi Africa Product Keynote #APK ?",
      answer: "Peut-on parler de produit en Afrique ou d’un produit africain ? Une légère affirmation sans chauvinisme bien-sûr nous permet de part de l’évolution de l’écosystème des solutions numériques de parler avec assurance des produits africains, pour les africains et par les africains avec des empreintes culturelles.<br/> Mais alors comment faire découvrir ces produits imprégnés de l'identité africaine ?<br/> La solution : <span className='font-semibold text-primary '> Africa Product Keynote</span><br/> Les entreprises et/ou les startups africaines jouent un rôle essentiel en offrant des solutions durables axées sur l’inclusion. Par le biais de la technologie, nous devons proposer des produits de qualité et rendre les solutions accessibles à tous et toutes.<br/> En intégrant des expériences locales imaginatives dans leurs produits, les entreprises peuvent aider à moderniser et à renforcer les relations entre les populations, à améliorer leurs styles de vie et à contribuer à la stabilité socio-économique de l’Afrique.",
      linked: false,
    },
    {
      id: 2,
      question: "Qui Organise le #APK2024 ?",
      answer: "Partir de nos cultures pour façonner les expériences et coordonner les attentes. C’est dans cette perspective que <span className='font-semibold'>Friends of Figma Lomé</span> initie Africa Product Keynote en collaboration avec  <span className='font-semibold'>les Friends of Figma Cotonou, Abidjan, Dakar et Douala</span>, qui vise à réunir les professionnels du domaine (marketing, design, produit…) d’Afrique pour échanger sous le thème <span className='font-semibold'>‘’Accessibilité’’</span>. Elle se déroulera une fois par an et aura pour objectif de promouvoir l'innovation en Afrique et de mettre en avant les entrepreneurs qui travaillent dans ce domaine",
      linked: false,
    },
    {
      id: 3,
      question: "Quel est le thème et pourquoi ce thème ?",
      answer:
        "Pour cette première édition, avec le thème :<span className='font-semibold'> Accessibilité </span>, nous voulons signifier l’importance en Afrique de se concentrer sur la création d'opportunités réelles et accessibles pour que chaque africain et africaine puisse être autonome",
   
      linked: false,
    },
    {
      id: 4,
      question:
        "Quels sont les objectifs ?",
      answer:
        "<span className='font-semibold text-lg block '>Objectif général</span> Montrer comment les produits africains ou en Afrique peuvent réduire la tradition de l’exclusion via une vision orientée accessibilité pour toutes les personnes sans discrimination. <br/><br/> <span className='font-semibold text-lg block '>Objectifs spécifiques</span> 1. Améliorer l'accès des populations locales aux produits digitaux africains ; <br/> 2. Améliorer le processus de recherche et développement pour les produits digitaux africains",
      isOpen: false,
      linked: false,
    },
    {
      id: 5,
      question:
        "Qu’est-ce qui sera fait concrètement ?",
      answer:
        "<span className='font-semibold text-lg underline '>Keynote</span>  : Des orateurs invités et des entrepreneurs partageront leurs expériences ainsi que des produits et des designs qui prennent en compte les besoins des populations africaines. <br/><br/> <span className='font-semibold text-lg underline'>Des sections de Workshop Design</span>  : Les participantes auront l’opportunité de découvrir les défis de design et de produit qui affectent les populations d’Afrique et de mettre en œuvre des solutions à l’aide d’outils de design et de création.",
      isOpen: false,
      linked: false,
    },
    {
      id: 6,
      question:
        "Quand et où se tiendra  l’event ?",
      answer:
        "Du <span className='font-semibold text-primary'>19</span> au <span className='font-semibold text-primary'>20 Janvier 2024 </span>  à Lomé",
      isOpen: false,
      linked: false,
    },
    {
      id: 7,
      question: "Qui participe à la conférence ?",
      answer:
        " <span className='font-semibold '>Africa Product Keynote #apk2024</span> suscitera de nouvelles idées et incitera le public à penser différemment, à penser Produit et accessibilité :<br/><br/> - Lead Designers<br/> -CTO<br/> - Lead Product Manager<br/> - Chefs d’entreprises<br/> - Responsables de haut niveau à tous les niveaux de l'administration, qui participent à l'évaluation, à la sélection, à l'acquisition ou à la gestion des technologies, l'évaluation, la sélection, l'acquisition ou la gestion des technologies.<br/> - Des représentants de haut niveau d'organisations TIC de grande, moyenne et petite taille.<br/> - Des innovateurs, des chefs d'entreprise et des entrepreneurs du monde entier.<br/>",
      isOpen: false,
      linked: false,
    },
    {
      id: 8,
      question: "Quels seront les domaines touchés ?",
      answer:
        "En participant à  <span className='font-semibold '>Africa Product Keynote #apk2024</span>, vous offrez un accès gratuit aux mises à jour techniques, aux tendances émergentes et la possibilité d'évaluer des solutions alternatives. Les solutions présentées seront des domaines :<br/><br/> - Banque<br/> - FinTech<br/> - Big Data<br/> - Santé<br/> - Gaming, etc.<br/>",
      isOpen: false,
      linked: false,
    },
    {
      id: 9,
      question: "Qu'est-ce que vous y gagnez ?",
      answer:
        "Les panels et les workshop  <span className='font-semibold '>Africa Product Keynote #apk2024</span> offrent à votre organisation la plateforme idéale pour rencontrer de nouveaux clients, collaborer avec de nouvelles personnes et accéder à l'industrie de la technologie gouvernementale.<br/><br/> En outre, c'est le cadre idéal pour développer la marque de votre entreprise, présenter des biens et des services innovants et renforcer les relations avec les clients actuels. En fonction de votre niveau de soutien et du type de parrainage, vous disposerez des options suivantes :<br/><br/> - Génération de leads.<br/> - Accès direct à un public composé de clients actuels et de prospects.<br/> - Marketing relationnel.<br/> - Démonstration de vos produits.<br/> - Amélioration du profil de l'entreprise.<br/> - Avantages marketing significatifs.<br/> - Augmentation du potentiel commercial.<br/> - Sensibilisation et renforcement de la marque.<br/> - Amélioration des relations avec les partenaires.<br/> - Augmentation de la crédibilité de la marque.<br/> - Retour sur investissement<br/>",
      isOpen: false,
      linked: false,
    },
    {
      id: 10,
      question: "Comment participer à Africa Product Keynote ?",
      answer:
        "C’est un événement hybride. Qui se fera donc en ligne et en présentiel.<br/> Opportunité passionnante à Africa Product Keynote !<br/><br/> Prêt à faire partie d'une expérience transformative ? Voici votre guide pour vous impliquer :<br/><br/> <span className='font-semibold'> SPONSORS et PARTENAIRES </span>: Mettez en valeur votre marque en remplissant ce   <a href='/formulaire-sponsors' target='_blank' className='text-primary font-medium'>formualire</a> : Rejoignez-nous pour façonner l'avenir de l'innovation en Afrique !<br/><br/>   <span className='font-semibold'> SPEAKERS </span>: : Partagez vos idées et votre expertise !<a href='/formulaire-intervenants' target='_blank' className='text-primary font-medium'>Cliquez ici 👇</a>  pour choisir le type de présentation, vous présenter, préciser si vous serez seul ou en duo, et définir votre thème ainsi que les attentes des participants.<br/><br/>  <span className='font-semibold'> PARTICIPANTS </span>:: Impliquez-vous avec nous ! Que ce soit en ligne ou en personne, votre présence compte. <a href=' https://friends.figma.com/e/mpc4v3/' target='_blank' className='text-primary font-medium'>Cliquez ici</a> 👇 pour réserver votre place.",
      isOpen: false,
      linked: true,
      links: [
        {
          title: "lien du séminaire",
          link: "#",
        },
      ],
    },

  ];

  const htmlParser =  Parser();
  
  return (
    <>
      <div id="faq" ata-aos="fade-up"  data-aos-delay="100" className=" w-11/12 lg:w-10/12 mx-auto h-fit  py-20 lg:py-32 flex flex-col justify-center relative">
    
        <h1 className="text-center">
          <Heading>
            <div className="  text-left section-title  mx-auto md:text-center  mb-14">Foire aux Questions</div>
          </Heading>
        </h1>

        <div className=" w-full md:w-5/6 lg:w-3/6 mx-auto  ">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((q, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className="text-xl font-semibold text-left">{q.question}</AccordionTrigger>
                <AccordionContent className="text-lg  leading-relaxed">
                {htmlParser.parse(q.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
