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
      answer: "L'évolution de l'écosystème numérique permet d'affirmer avec assurance l'existence de produits africains, pour et par les Africains, imprégnés d'empreintes culturelles. <br/><span className=”font-medium”>  #APK2024</span> célèbre ces produits, ancrés dans l'écosystème numérique évolutif. <br/> La solution : <span className='font-medium'> Africa Product Keynote </span>. Les entreprises africaines, moteurs de solutions durables, utilisent la technologie pour proposer des produits de qualité, intégrant des expériences locales. Elles contribuent ainsi à la modernisation, renforcent les liens sociaux, améliorent les modes de vie et soutiennent la stabilité socio-économique de l’Afrique.",
      linked: false,
    },
    {
      id: 2,
      question: "Qui Organise le #APK2024 ?",
      answer: "Partir de nos cultures pour façonner les expériences et coordonner les attentes. C’est dans cette perspective que <span className=’font-medium’>Friends of Figma Lomé</span> initie Africa Product Keynote en collaboration avec  <span className='font-medium'>les Friends of Figma Cotonou, Abidjan, Dakar et Douala</span>, qui vise à réunir les professionnels du domaine (marketing, design, produit…) d’Afrique pour échanger sous le thème <span className='font-medium'>‘’Accessibilité’’</span>. <br/> Elle se déroulera une fois par an et aura pour objectif de promouvoir l'innovation en Afrique et de mettre en avant les entrepreneurs qui travaillent dans ce domaine.",
      linked: false,
    },
    {
      id: 3,
      question: "Quel est le thème et pourquoi ce thème ?",
      answer:
        "Pour cette première édition, avec le thème : <span className='font-medium text-primary'>Accessibilité</span>, nous voulons signifier l’importance en Afrique de se concentrer sur la création d'opportunités réelles et accessibles pour que chaque africain et africaine puisse être autonome.",
   
      linked: false,
    },
    {
      id: 4,
      question:
        "Quels sont les objectifs ?",
      answer:
        "<span className='font-semibold'>Objectif général</span> <br/> Montrer comment les produits africains ou en Afrique peuvent réduire la tradition de l’exclusion via une vision orientée accessibilité pour toutes les personnes sans discrimination.<br/><br/> <span className='font-semibold'>Objectifs spécifiques</span> <br/> Améliorer l'accès des populations locales aux produits digitaux africains ; <br/> Améliorer le processus de recherche et développement pour les produits digitaux africains. <br/>",
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
        "Du <span className='font-semibold '>19</span> au <span className='font-semibold '>20  </span>  Janvier 2024 à Lomé  dans les locaux de l'École Supérieure de Commerce et de l’Économie Numérique.",
      isOpen: false,
      linked: false,
    },
    {
      id: 7,
      question: "Qui participe à la conférence ?",
      answer:
        "Lead Designers, CTO, Lead Product Manager, Chefs d’entreprises, Responsables de haut niveau dans l'administration, impliqués dans l'évaluation, la sélection, l'acquisition ou la gestion des technologies.<br/> Représentants de haut niveau d'organisations TIC de toutes tailles.<br/> Innovateurs, chefs d'entreprise et entrepreneurs du monde entier. <br/>",
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
        "C’est un événement hybride. Qui se fera donc en ligne et en présentiel.<br/> Opportunité passionnante à Africa Product Keynote !<br/><br/> Commme SPONSORS et PARTENAIRES : <a href='/formulaire-sponsors' target='_blank' className='text-primary font-medium'>voici le formulaire</a>  </a><br/> <br/>Pour les SPEAKERS : <a href='/formulaire-intervenants' target='_blank' className='text-primary font-medium'>Cliquez ici </a><br/><br/> Et aux PARTICIPANTS: <a href=' https://friends.figma.com/e/mpc4v3/' target='_blank' className='text-primary font-medium'>Cliquez ici</a>.",
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
