import Heading from "@/components/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      question: "Quel est  le thème retenu pour le TDEV Festival, édition 3 ?",
      answer: "Transformation numérique : alliée du développement durable",
      isOpen: false,
      linked: false,
    },
    {
      id: 2,
      question: "Quand se tiendra-t-il ?",
      answer: "Les 25 et 26 Août 2023, à Energy Generation localisation ",
      linked: true,
      links: [
        {
          title: "https://goo.gl/maps/GKMNterS8hLG7Y8g6",
          link: "https://goo.gl/maps/GKMNterS8hLG7Y8g6",
        },
      ],

      isOpen: false,
    },
    {
      id: 3,
      question: "Quels sont les objectifs ?",
      answer:
        "1. Fournir une compréhension approfondie des tendances actuelles de la transformation numérique et de leur impact environnemental.<br/>2. Proposer des pratiques exemplaires pour intégrer le développement durable dans la transformation numérique.<br/>3. Créer un réseau unique et solide entre les acteurs du numérique.\n4. Renforcer les capacités des jeunes acteurs à travers des panels et des formations de groupe durant les deux jours du festival.<br/>5. Identifier les avantages et les défis de l'utilisation de la transformation numérique pour promouvoir le développement durable.<br/>6. Proposer des recommandations pratiques pour aider les entreprises à intégrer le développement durable dans leur stratégie de transformation numérique.",
      isOpen: false,
      linked: false,
    },
    {
      id: 4,
      question:
        "Quelles sont les activités principales qui meubleront le Tdev Festival 3 ?",
      answer:
        "1. Organisation de panels de discussions et de débats impliquant des experts de l'industrie, des représentants gouvernementaux, des entrepreneurs et des chercheurs.<br/>2. Organisation d'émissions radiophoniques et télévisées spéciales consacrées à la transformation numérique et à son rôle dans le développement durable.<br/>3. Organisation d'un concours de programmation compétitive pour stimuler les participants et identifier les talents dans la résolution de problème et la création d'algorithmes.<br/>4. Organisation de formations pratiques et interactives pour renforcer les compétences des jeunes acteurs dans le domaine du numérique.",
      isOpen: false,
      linked: false,
    },
    {
      id: 5,
      question:
        "Quels sont les sujets abordés lors des panels de discussions et débats ?",
      answer:
        "Il s’agira des tendances actuelles de la transformation numérique et leur impact environnemental, ainsi que les meilleures pratiques pour intégrer le développement durable dans la transformation numérique. Les participants auront l'occasion d'échanger des idées, de partager des expériences et de discuter des défis et des opportunités liés à cette transformation.",
      isOpen: false,
      linked: false,
    },
    {
      id: 6,
      question:
        "Quel est l'objectif des séances d'orientation destinées aux jeunes acteurs ?",
      answer:
        "Présenter les opportunités de carrière dans le secteur, discuter des compétences et des connaissances nécessaires, et fournir des conseils pratiques pour se lancer dans ce domaine. D’autre part, sensibiliser et encourager les jeunes à s'impliquer dans le numérique, en mettant un accent particulier sur l'inclusion des femmes.",
      isOpen: false,
      linked: false,
    },
    {
      id: 7,
      question: "Que savoir du concours ?",
      answer:
        "Il mettra en avant les projets innovants liés à la transformation numérique et au développement durable. Les participants auront l'opportunité de présenter leurs idées, leurs produits ou leurs services devant un panel d'experts, et les meilleurs projets seront récompensés.",
      isOpen: false,
      linked: false,
    },
    {
      id: 8,
      question: "Quels sont les partenaires de TDEV Festival, édition 3 ?",
      answer:
        "Les informations sur les partenaires seront communiquées ultérieurement.",
      isOpen: false,
      linked: false,
    },
    {
      id: 9,
      question: "Comment s'inscrire ?",
      answer:
        "Les détails sur la procédure d'inscription seront publiés sur le site web officiel du festival.",
      isOpen: false,
      linked: false,
    },
    {
      id: 10,
      question: "Comment accéder au site du séminaire ?",
      answer:
        "Vous pouvez accéder au site du séminaire en utilisant le lien suivant :",
      isOpen: false,
      linked: true,
      links: [
        {
          title: "lien du séminaire",
          link: "#",
        },
      ],
    },
    {
      id: 11,
      question:
        "Comment suivre les activités sur les réseaux sociaux de TDEV Festival, édition 3 ?",
      answer:
        "Vous pouvez suivre et rechercher les hashtags #TDEVFestival2023 et #TDEVFest23 sur les réseaux sociaux. Voici les liens vers les réseaux sociaux officiels de TDEV Festival, édition 3 :",
      isOpen: false,
      linked: true,
      links: [
        {
          title: "Telegram",
          link: "https://t.me/tdev228",
        },
        {
          title: "Discord",
          link: "https://discord.gg/Fk5uvKNjeu",
        },
        {
          title: "Twitter",
          link: " https://x.com/tdev228",
        },
        {
          title: "Linkedin",
          link: "https://linkedin.com/company/tdev228/",
        },
      ],
    },
  ];

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
                    <div  dangerouslySetInnerHTML={{__html: q.answer}} ></div>
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
